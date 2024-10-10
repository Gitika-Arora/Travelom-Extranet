import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { NavLink } from 'react-router-dom';
import { BreadCrumb as BreadCrumbPrime } from 'primereact/breadcrumb';

import listData from "@/data/listData";
import { InputText as Input } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import Image from "@/components/formImage";
import { MultiSelect } from 'primereact/multiselect';
import { FileUpload } from 'primereact/fileupload';
import Helper from '@/services/helper';
import { getHotels, listHotels } from "@/graphql/queries";
import { generateClient } from 'aws-amplify/data';
import { uploadData } from 'aws-amplify/storage';
import { Trash2 } from "lucide-react";
import { Button as PrimeButton } from 'primereact/button';
import hotelAmenity from "@/data/hotelAmenity.json";

export default function HotelDetails() {

    const { hid } = useParams();

    const fileUploadRef = useRef();

    const [hotel, setHotel] = useState();
    const [hotelDetails, setHotelDetails] = useState({});
    const [amenityOptions, setAmenityOptions] = useState([]);
    const [roomOptions, setRoomOptions] = useState([]);
    const [exploreOptions, setExploreOptions] = useState([]);
    const [images, setImages] = useState([]);

    const [hotelName, setHotelName] = useState();
    const [overview, setOverview] = useState();
    const [amenities, setAmenities] = useState();
    const [address, setAddress] = useState();
    const [rooms, setRooms] = useState();
    const [attraction, setAttraction] = useState();
    const [city, setCity] = useState();
    const [hotelImages, setHotelImages] = useState([]);


    useEffect(() => {
        getHotelData();
    }, [])

    const getHotelData = async () => {
        console.log(hotelAmenity);
        setAmenityOptions(hotelAmenity);
        setRoomOptions(listData.staticData.rooms);
        setExploreOptions(listData.staticData.explore);
        listData.hotels.forEach(hotel => {
            if (hotel.id == hid) {
                console.log(hotel)
                setHotel(hotel)
            }
        });
        setHotelDetails(listData.hotelDetails)

        const client = generateClient();

        const response = await client.graphql({ query: getHotels, variables: { id: hid } });

        // const hotelData = response.data.getHotels

        console.log(response.data.getHotels);

        const hotelData = { ...response.data.getHotels, hotelDescriptiveContents: JSON.parse(response.data.getHotels.hotelDescriptiveContents) };

        console.log({ hotelData });

        setHotelName(hotelData?.hotelName);
        setAddress(hotelData?.address);
        setCity(hotelData?.city);

        const descriptionData = hotelData?.hotelDescriptiveContents?.HotelDescriptiveContent?.HotelInfo?.Descriptions?.Description.filter(data => data?._attributes?.AdditionalDetailCode === '2')
        setOverview(descriptionData[0]?.Text?._text);

        const amenityData = hotelData?.hotelDescriptiveContents?.HotelDescriptiveContent?.HotelInfo?.Services?.Service.filter(data => {
            console.log(data);
            return data?._attributes?.Included === "true" && data?._attributes?.Code
        }).map(data => (JSON.parse(data?._attributes?.Code)))

        console.log({ amenityData, hotelAmenity });
        setAmenities(amenityData)

        setHotelImages(hotelData?.hotelDescriptiveContents?.HotelDescriptiveContent?.MultimediaObjects?.MultimediaObject);
        setAttraction(hotelData.hotelDescriptiveContents.hotelDescriptiveContent[0].areaInfo.attractions.attraction);
        console.log({ hotelData });

        console.log({ hotelImages: hotelData.hotelDescriptiveContents.hotelDescriptiveContent[0].multimediaObjects.multimediaObject });
    }

    const handleImageClick = (index) => {
        const updatedImages = hotelImages.filter((_, i) => index !== i);
        setHotelImages(updatedImages)
    }

    const handleSubmit = e => {
        e.preventDefault();

        console.log(fileUploadRef.current.getFiles())


        /*const file = event.target.files[0];
        uploadData({
            path: file.name,
            data: file
        });*/

        //fileUploadRef.current.upload()
    }

    const items = [
        { label: 'Components' },
        {
            label: 'Hotels',
            template: () => <NavLink to="/hotels" className="transition-colors hover:text-foreground">Hotels</NavLink>
        },
        { label: 'Hotel Details' },
    ];
    const home = { icon: 'pi pi-home', url: 'https://primereact.org' };

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
                            <BreadcrumbPage>Hotel Details</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                {/*<BreadCrumbPrime model={items} pt={{
                    root: "bg-transparent border-none p-0"
                }} />*/}
            </div>
            <div className="mt-6 mx-auto w-full">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="flex-auto px-4 lg:px-6 py-6 pt-6">
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
                                            onChange={(e) => setAmenities(e.value)}
                                            options={amenityOptions}
                                            optionLabel="HAC"
                                            placeholder="Select Amenities"
                                            pt={{ root: "w-full md:w-full" }}
                                            virtualScrollerOptions={{ itemSize: 40 }}
                                        />
                                    </div>
                                </div>
                                {/*<div className="w-full px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2" >
                                            Room Amenities
                                        </label>
                                        <MultiSelect value={hotelDetails?.explore} onChange={(e) => setHotelDetails({ ...hotelDetails, explore: e.value })} options={exploreOptions} optionLabel="attractionName"
                                            placeholder="Select Rooms" pt={{ root: "w-full md:w-full" }} />
                                    </div>
                                </div>*/}
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
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2" >
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
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2" >
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
                                                    alt="image"
                                                    onClick={() => handleImageClick(imageData)}
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
                                                setHotelDetails({ ...hotelDetails, images: [...hotelDetails.images, ...newImages] })
                                            }}
                                            onRemove={(e) => {
                                                images.files = images.files.filter(file => file.id === e.id)
                                                console.log(images, e)
                                                setImages(images)
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
                                <Button
                                    type="button"
                                    variant="cancel"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                >
                                    Save
                                    {/* {loadingStatus && <LoaderCircle className="ml-1 h-6 w-6 animate-spin" />} */}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}