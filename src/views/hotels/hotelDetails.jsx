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
import listData from "@/data/listData";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Trash2, LoaderCircle } from "lucide-react";
import Image from "@/components/formImage";
import { MultiSelect } from 'primereact/multiselect';
import { FileUpload } from 'primereact/fileupload';
import Helper from '@/services/helper';

export default function HotelDetails() {

    const { hid } = useParams();

    const fileUploadRef = useRef();

    const [hotel, setHotel] = useState();
    const [hotelDetails, setHotelDetails] = useState({});
    const [amenityOptions, setAmenityOptions] = useState([]);
    const [roomOptions, setRoomOptions] = useState([]);
    const [exploreOptions, setExploreOptions] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        setAmenityOptions(listData.staticData.amenities);
        setRoomOptions(listData.staticData.rooms);
        setExploreOptions(listData.staticData.explore);
        listData.hotels.forEach(hotel => {
            if (hotel.id == hid) {
                console.log(hotel)
                setHotel(hotel)
            }
        });
        setHotelDetails(listData.hotelDetails)
    }, [])

    const handleImagelick = (index) => {
        hotelDetails.images.splice(index, 1)
        setHotelDetails({ ...hotelDetails })
    }

    const handleSubmit = e => {
        e.preventDefault();

        console.log(fileUploadRef.current.getFiles())

        fileUploadRef.current.upload()
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
                            <BreadcrumbPage>Hotel Details</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="w-full mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="flex-auto px-4 lg:px-6 py-6 pt-6">
                            <div className="flex flex-wrap">
                                <div className="w-full px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2" >
                                            Title
                                        </label>
                                        <Input type="text" className="px-3 py-2" id="title"
                                            value={hotel?.name || ''}
                                            onChange={e => setHotel({ ...hotelDetails, name: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2" >
                                            Overview
                                        </label>
                                        <Textarea type="text" className="px-3 py-2" id="title"
                                            value={hotelDetails?.overview}
                                            onChange={e => setHotelDetails({ ...hotelDetails, overview: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2" >
                                            Amenities
                                        </label>
                                        <MultiSelect value={hotelDetails?.amenities} onChange={(e) => setHotelDetails({ ...hotelDetails, amenities: e.value })} options={amenityOptions} optionLabel="name"
                                            placeholder="Select Amenities" pt={{ root: "w-full md:w-full" }} />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2" >
                                            Address
                                        </label>
                                        <Textarea type="text" className="px-3 py-2" id="title"
                                            value={hotelDetails?.address}
                                            onChange={e => setHotelDetails({ ...hotelDetails, address: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2" >
                                            Rooms
                                        </label>
                                        <MultiSelect value={hotelDetails?.rooms} onChange={(e) => setHotelDetails({ ...hotelDetails, rooms: e.value })} options={roomOptions} optionLabel="name"
                                            placeholder="Select Rooms" className="w-full md:w-20rem" />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-blueGray-600 text-lg  font-bold mb-2" >
                                            Attraction
                                        </label>
                                        <MultiSelect value={hotelDetails?.explore} onChange={(e) => setHotelDetails({ ...hotelDetails, explore: e.value })} options={exploreOptions} optionLabel="attractionName"
                                            placeholder="Select Rooms" pt={{ root: "w-full md:w-full" }} />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <label className="block text-blueGray-600 text-lg  font-bold mb-2" >
                                        Images
                                    </label>
                                    <div className="flex gap-2 flex-wrap">
                                        {hotelDetails?.images?.map((image, i) => {
                                            return <div key={image.id}>
                                                <Image src={image} alt="image" onClick={() => handleImagelick(i)} />
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