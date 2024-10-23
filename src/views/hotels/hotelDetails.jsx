import { useEffect, useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import listData from "@/data/listData";
import { InputText as Input } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import Image from "@/components/formImage";
import { MultiSelect } from 'primereact/multiselect';
import { FileUpload } from 'primereact/fileupload';
import helper, { logedInUser } from '@/services/helper';
import { getHotels } from "@/graphql/queries";
import * as mutations from '@/graphql/mutations';
import { uploadData } from 'aws-amplify/storage';
import hotelAmenity from "@/data/hotelAmenity.json";

export default function HotelDetails() {

    const { hid } = useParams();

    const history = useHistory();

    const fileUploadRef = useRef();

    const [hotelDetails, setHotelDetails] = useState({});
    const [amenityOptions, setAmenityOptions] = useState([]);
    const [roomOptions, setRoomOptions] = useState([]);
    const [images, setImages] = useState([]);

    const [hotelName, setHotelName] = useState();
    const [overview, setOverview] = useState();
    const [amenities, setAmenities] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [hotelImages, setHotelImages] = useState([]);

    const [allHotelData, setAllHotelData] = useState([]);

    const [loadingStatus, setLoadingStatus] = useState(false);

    useEffect(() => {
        getHotelData();
    }, [])

    const getHotelData = async () => {

        setAmenityOptions(hotelAmenity);

        setRoomOptions(listData.staticData.rooms);

        setHotelDetails(listData.hotelDetails)

        console.log(hid);
        if (hid) {

            const client = helper.amplifyClient()

            let config;

            if (hid) {
                config = { query: getHotels, variables: { id: hid } }
            } else {
                config = { query: getHotels, variables: { id: "3813561c-187e-4f08-8f80-e43a86adf31c" } }
            }

            const response = await client.graphql(config);

            const hotelData = { ...response.data?.getHotels, hotelDescriptiveContents: JSON.parse(response?.data?.getHotels?.hotelDescriptiveContents) };

            console.log(hotelData);

            setAllHotelData(hotelData);

            setHotelName(hotelData?.hotelName);
            setAddress(hotelData?.address);
            setCity(hotelData?.city);

            const descriptionData = hotelData?.hotelDescriptiveContents?.HotelDescriptiveContent?.HotelInfo?.Descriptions?.Description.filter(data => data?._attributes?.AdditionalDetailCode === '2')

            setOverview(descriptionData[0]?.Text?._text);

            const amenityData = hotelData?.hotelDescriptiveContents?.HotelDescriptiveContent?.HotelInfo?.Services?.Service.filter(data => {
                return data?._attributes?.Code
            }).map(data => (JSON.parse(data?._attributes?.Code)))

            setAmenities(amenityData)

            setHotelImages(hotelData?.hotelDescriptiveContents?.HotelDescriptiveContent?.MultimediaObjects?.MultimediaObject);
        }
    }

    const handleImageDelete = async (imageData, index) => {

        const confirmation = confirm("Do you want to delete this image?")

        console.log(confirmation);

        if (confirmation) {
            const updatedImages = hotelImages.filter((_, i) => index !== i);

            const hotelDescriptiveData = {
                HotelDescriptiveContent: {
                    ...allHotelData?.hotelDescriptiveContents?.HotelDescriptiveContent,
                    MultimediaObjects: {
                        ...allHotelData?.hotelDescriptiveContents?.HotelDescriptiveContent?.MultimediaObjects,
                        MultimediaObject: updatedImages
                    }
                }
            };

            const hotelDetails = {
                id: hid,
                hotelDescriptiveContents: JSON.stringify(hotelDescriptiveData)
            };

            const client = helper.amplifyClient();

            console.log(hotelDescriptiveData, hotelDetails);

            try {
                await client.graphql({
                    query: mutations.updateHotels,
                    variables: { input: hotelDetails },
                });

                setHotelImages(updatedImages);

            } catch (error) {
                console.error("Error updating images:", error);
            }
        }
    }

    function updateAmenitiesData(amenityData, existingData) {
        // Helper function to check if an entry already exists in existingData
        const findInExistingData = (code) => {
            return existingData.find(
                (item) =>
                    item._attributes.Code === String(code) &&
                    !item._attributes.hasOwnProperty('BusinessServiceCode')
            );
        };

        // Filter out entries from existingData that do not match amenityData
        existingData = existingData?.filter(item => {
            if (item._attributes.hasOwnProperty('BusinessServiceCode')) {
                return true; // Keep BusinessServiceCode entries untouched
            }
            const code = parseInt(item._attributes.Code, 10);
            return amenityData.includes(code); // Keep only items in amenityData
        });

        // Add new entries from amenityData if they don't already exist in existingData
        amenityData.forEach((code) => {
            const existingItem = findInExistingData(code);

            if (!existingItem) {
                existingData.push({
                    _attributes: {
                        ProximityCode: "",
                        Included: true,
                        Code: String(code),
                    }
                });
            }
        });

        return existingData;
    }

    const handleAddHotel = async () => {
        const updatedAmenitiesData = amenities.map((code) => ({
            _attributes: {
                ProximityCode: "",
                Included: true,
                Code: String(code),
            }
        })
        );

        const descriptionArray = [{
            "Text": {
                "_text": overview,
                "_attributes": {
                    "Language": "en"
                }
            },
            "_attributes": {
                "AdditionalDetailCode": "2",
                "ContentID": ""
            }
        }]


        const hotelDescriptiveData = {
            HotelDescriptiveContent: {
                HotelInfo: {
                    Descriptions: {
                        Description: descriptionArray
                    },
                    Services: {
                        Service: updatedAmenitiesData
                    }
                }
            }
        };

        /*
        id
        userId
        hotelDescriptiveContents
        brandCode
        hotelCode
        hotelName
        address
        city
        postalCode
        stateCode
        countyCode
        hotelUpdatedInExtranet
        isActive
        isDeleted
        createdAt
        updatedAt
        */

        const hotelDetails = {
            brandCode: "BU",
            hotelCode: "49012",
            postalCode: "46060-4259",
            stateCode: "IN",
            countyCode: "US",
            hotelName: hotelName,
            address: address,
            city: city,
            hotelDescriptiveContents: JSON.stringify(hotelDescriptiveData),
            isActive: true,
            isDeleted: false,
            hotelUpdatedInExtranet: true
        };

        console.log({...hotelDetails, hotelDescriptiveContents: JSON.parse(hotelDetails.hotelDescriptiveContents)});

        const client = helper.amplifyClient();

        try {
            const data = await client.graphql({
                query: mutations.createHotels,
                variables: { input: hotelDetails }, // Ensure the body is a string
            });
            console.log(data);
            alert("Hotel added successfully")
        } catch (error) {
            console.error("Error added hotelData:", {error});
        }
    }

    const handleEditHotel = async () => {
        const existingAmenities = allHotelData?.hotelDescriptiveContents?.HotelDescriptiveContent?.HotelInfo?.Services?.Service

        const updatedAmenitiesData = updateAmenitiesData(amenities, existingAmenities);

        const descriptionArray = allHotelData?.hotelDescriptiveContents?.HotelDescriptiveContent?.HotelInfo?.Descriptions?.Description?.map(data => {
            if (data._attributes
                .AdditionalDetailCode == 2) {
                return {
                    ...data, Text: { ...data.Text, _text: overview }
                }
            } else {
                return data;
            }
        });

        console.log(descriptionArray);


        const hotelDescriptiveData = {
            HotelDescriptiveContent: {
                ...allHotelData?.hotelDescriptiveContents?.HotelDescriptiveContent,
                HotelInfo: {
                    ...allHotelData?.hotelDescriptiveContents?.HotelDescriptiveContent?.HotelInfo,
                    Descriptions: {
                        Description: descriptionArray
                    },
                    Services: {
                        Service: updatedAmenitiesData
                    }
                }
            }
        };

        const hotelDetails = {
            id: hid,
            hotelName: hotelName,
            address: address,
            city: city,
            hotelDescriptiveContents: JSON.stringify(hotelDescriptiveData)
        };

        const client = helper.amplifyClient();

        try {
            await client.graphql({
                query: mutations.updateHotels,
                variables: { input: hotelDetails }, // Ensure the body is a string
            });
            alert("Hotel details updated successfully")
        } catch (error) {
            console.error("Error updating hotelData:", error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(fileUploadRef.current.getFiles())

        setLoadingStatus(true);

        if (hid) {
            handleEditHotel();
        } else {
            handleAddHotel();
        }
        
        /* const file = event.target.files[0];
         uploadData({
             path: file.name,
             data: file
         });*/

        //fileUploadRef.current.upload()

        setLoadingStatus(false);
    }

    const handleCancleClick = () => {
        history.push("/hotels")
    }

    return (
        <div>
            <div>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink to="/hotels">
                                Hotels
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{hid ? "Hotel Details" : "Add Hotel"}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="mt-6 mx-auto w-full">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="flex-auto px-4 lg:px-6 py-6 pt-6">
                            <div className="flex justify-end gap-3">
                                {hid && <Button
                                    type="button"
                                    variant="cancel"
                                    onClick={handleCancleClick}
                                >
                                    Cancel
                                </Button>}
                                <Button
                                    type="submit"
                                    disabled={loadingStatus ? true : false}
                                >
                                    Save
                                    {loadingStatus && <LoaderCircle className="ml-1 h-6 w-6 animate-spin" />}
                                </Button>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2" >
                                            Title
                                        </label>
                                        <Input className="px-3 py-2 w-full" id="title"
                                            value={hotelName || ''}
                                            onChange={e => setHotelName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2" >
                                            Overview
                                        </label>
                                        <InputTextarea className="px-3 py-2 w-full" id="title"
                                            rows={5}
                                            value={overview}
                                            onChange={e => setOverview(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2" >
                                            Hotel Amenities
                                        </label>
                                        <MultiSelect
                                            value={amenities}
                                            optionValue="Code"
                                            optionLabel="HAC"
                                            onChange={(e) => setAmenities(e.value)}
                                            options={amenityOptions}
                                            placeholder="Select Amenities"
                                            pt={{ root: "w-full md:w-full" }}
                                            virtualScrollerOptions={{ itemSize: 40 }}
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                            Address
                                        </label>
                                        <InputTextarea className="px-3 py-2 w-full" id="title"
                                            rows={3}
                                            value={address}
                                            onChange={e => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="relative w-full md:w-6/12 mb-3">
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                            City
                                        </label>
                                        <Input className="px-3 py-2 w-full" id="title"
                                            value={city || ''}
                                            onChange={e => setCity(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="relative w-full md:w-6/12 mb-3">
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                            Rooms
                                        </label>
                                        <MultiSelect value={hotelDetails?.rooms} onChange={(e) => setHotelDetails({ ...hotelDetails, rooms: e.value })} options={roomOptions} optionLabel="name"
                                            placeholder="Select Rooms" pt={{ root: "w-full md:w-full" }} />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <label className="block text-blueGray-600 text-lg  font-bold mb-2" >
                                        Images
                                    </label>
                                    <div className="flex gap-5 flex-wrap">
                                        {hotelImages?.map((imageData, i) => {
                                            return <div key={imageData._attributes.ContentID} className="w-1/6">
                                                <Image
                                                    src={imageData.URL._text}
                                                    alt="hotel image"
                                                    onDelete={() => { handleImageDelete(imageData, i) }}
                                                />
                                            </div>
                                        })}
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="">
                                        <FileUpload
                                            ref={fileUploadRef}
                                            name="demo[]"
                                            multiple
                                            accept="image/*"
                                            //auto
                                            customUpload
                                            uploadHandler={(e) => {
                                                console.log(e)
                                                const newImages = e.files.map(file => (file.objectURL))
                                                console.log(newImages);
                                                e.options.clear();
                                            }}
                                            emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>}
                                            pt={{
                                                root: "my-3",
                                                //file: "w-fit",
                                                badge: { root: "px-2" },
                                                actions: "ml-auto",
                                                uploadButton: { root: "hidden" },
                                                chooseButton: { root: "cursor-pointer" }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end gap-3">
                                {hid && <Button
                                    type="button"
                                    variant="cancel"
                                    onClick={handleCancleClick}
                                >
                                    Cancel
                                </Button>}
                                <Button
                                    type="submit"
                                    disabled={loadingStatus ? true : false}
                                >
                                    Save
                                    {loadingStatus && <LoaderCircle className="ml-1 h-6 w-6 animate-spin" />}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}