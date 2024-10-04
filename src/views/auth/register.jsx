import { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Eye, EyeOff, AtSign, PinIcon } from 'lucide-react';
import backgroundImage from "@/assets/images/top-view-weights-floor.avif"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { decryptData, isVallidImageFile, handleImage, getModules } from '../../services/helper';

function Register(props) {
    const { useremail, iid } = useParams();
    const history = useHistory();
    const [passwordShow, setPasswordShow] = useState(false);
    const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState("");
    const [propertyCode, setPropertyCode] = useState("");

    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState();
    const [pinCode, setPinCode] = useState();


    const [loadingStatus, setLoadingStatus] = useState(false);
    const [invitedByUserId, setInvitedByUserId] = useState("");

    const [imageDisplay, setImageDisplay] = useState('');
    const [files, setFiles] = useState({
        image: null,
    })



    function validateInputs() {
        let message = '';

        if (!firstName || (firstName && firstName.trim() === "")) {
            message += "Please enter first name \n"
        }
        if (!lastName || (lastName && lastName.trim() === "")) {
            message += "Please enter last name \n"
        }

        if (!email || (email && email.trim() === "")) {
            message += "Please enter email \n"
        }

        if (!password || (password && password.trim() === "")) {
            message += "Please enter password \n";
        }

        if (!confirmPassword || (confirmPassword && confirmPassword.trim() === "")) {
            message += "Please enter confirm password \n";
        } else if (password.trim() !== confirmPassword.trim()) {
            message += "Password & confirm password do not match \n";
        }

        if (!phone || phone.trim() === "" || phone.length !== 13) {
            message += "Please enter a valid 10-digit phone number\n";
        }

        if (!address1 || (address1 && address1.trim() === "")) {
            message += "Please enter address 1 \n";
        }

        if (!address2 || (address2 && address2.trim() === "")) {
            message += "Please enter address 2 \n";
        }

        if (!city || (city && city.trim() === "")) {
            message += "Please enter city \n";
        }

        if (!pinCode || (pinCode && pinCode.trim() === "")) {
            message += "Please enter pincode \n";
        }


        /*if (files.profilePic === null) {
            if (profilePic === null || profilePic === "") {
                message += "Please add profile image\n";
            }
        }*/

        if (message.trim().length > 0) {
            alert(message)
            return false;
        }
        return true;
    }

    async function handleSignUp(e) {
        e.preventDefault();
        let isValid = validateInputs();

        /* const file_ext = files.profilePic.name.slice(
             ((files.profilePic.name.lastIndexOf('.') - 1) >>> 0) + 2
         );*/

        if (isValid) {
            setLoadingStatus(true)
            history.push("/login");
        }
    }

    return (

        <div className="m-auto bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-xl">
                    <form onSubmit={handleSignUp} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white">
                        <p className="text-center text-lg font-medium">Invite register</p>

                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                        First Name
                                    </label>
                                    <Input
                                        type="text"
                                        className="px-3 py-2"
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                        Last Name
                                    </label>
                                    <Input
                                        name="lastName"
                                        type="text"
                                        className="px-3 py-2"
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <Input
                                            type="email"
                                            className="px-3 py-2"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            autoComplete="email"
                                        />
                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <div
                                                className="size-4 text-gray-400"
                                            >
                                                <AtSign size={18} color="#9ca3af" />
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Input
                                            type={passwordShow ? "text" : "password"}
                                            className="px-3 py-2 pr-[40px]"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            autoComplete="new-password"
                                        />
                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <div
                                                className="size-4 text-gray-400 cursor-pointer"
                                                onClick={() => setPasswordShow(!passwordShow)}
                                            >
                                                {!passwordShow ? <EyeOff size={18} color="#9ca3af" /> : <Eye size={18} color="#9ca3af" />}
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <Input
                                            type={confirmPasswordShow ? "text" : "password"}
                                            className="px-3 py-2 pr-[40px]"
                                            value={confirmPassword}
                                            onChange={e => setConfirmPassword(e.target.value)}
                                            autoComplete="new-password"
                                        />
                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <div
                                                className="size-4 text-gray-400 cursor-pointer"
                                                onClick={() => setConfirmPasswordShow(!confirmPasswordShow)}
                                            >
                                                {!confirmPasswordShow ? <EyeOff size={18} color="#9ca3af" /> : <Eye size={18} color="#9ca3af" />}
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                    Brand Code
                                    </label>
                                    <Input
                                        type="text"
                                        className="px-3 py-2"
                                        value={brandCode}
                                        onChange={e => setBrandCode(e.target.value)}
                                    />
                                </div>
                            </div> */}
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                        Property Code
                                    </label>
                                    <Input
                                        name="lastName"
                                        type="text"
                                        className="px-3 py-2"
                                        value={propertyCode}
                                        onChange={e => setPropertyCode(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                        Phone
                                    </label>
                                    <PhoneInput
                                        international
                                        defaultCountry="IN"
                                        value={phone}
                                        onChange={setPhone}
                                        className="px-3 py-2 border-2 rounded focus:border-gray-500"
                                        numberInputProps={{ className: "focus:outline-none" }}
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                        Address 1
                                    </label>
                                    <Input
                                        name="address1"
                                        type="text"
                                        className="px-3 py-2"
                                        value={address1}
                                        onChange={e => setAddress1(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                        Address 2
                                    </label>
                                    <Input
                                        name="lastName"
                                        type="text"
                                        className="px-3 py-2"
                                        value={address2}
                                        onChange={e => setAddress2(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                        City
                                    </label>
                                    <Input
                                        name="lastName"
                                        type="text"
                                        className="px-3 py-2"
                                        value={city}
                                        onChange={e => setCity(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block text-blueGray-600 text-lg  font-bold mb-2">
                                        Pincode
                                    </label>
                                    <Input
                                        name="lastName"
                                        type="text"
                                        className="px-3 py-2"
                                        value={pinCode}
                                        onChange={e => setPinCode(e.target.value)}
                                    />
                                </div>
                            </div>


                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">

                                    {Boolean(imageDisplay) ?

                                        <div className="mt-4 border-2 w-8/12" >
                                            <img src={imageDisplay} alt="Uploaded file preview" className="max-w-full h-auto p-2" />
                                        </div>
                                        : null
                                    }

                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <Button
                                disabled={loadingStatus ? true : false}
                                variant="black"
                                type="submit"
                                className="w-full"
                            >
                                {loadingStatus && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                Register
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Register;