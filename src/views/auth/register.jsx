import { useState } from "react";
import { useHistory } from 'react-router-dom';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Eye, EyeOff, AtSign } from 'lucide-react';
import backgroundImage from "@/../public/top-view-weights-floor.avif"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { signUp, signIn, signOut } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import { createUsers } from '@/graphql/mutations';

function Register() {
    const history = useHistory();
    const [passwordShow, setPasswordShow] = useState(false);
    const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

    const [hotelName, setHotelName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState("");
    const [hotelCode, setHotelCode] = useState("");

    const [address, setAddress] = useState("");
    //const [addressLine2, setAddressLine2] = useState("");
    const [city, setCity] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [country, setCountry] = useState("");


    const [loadingStatus, setLoadingStatus] = useState(false);

    /*const [imageDisplay, setImageDisplay] = useState('');
    const [files, setFiles] = useState({
        image: null,
    })*/



    function validateInputs() {
        let message = '';

        if (!hotelName || (hotelName && hotelName.trim() === "")) {
            message += "Please enter hotel name \n"
        }
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

        if (!address || (address && address.trim() === "")) {
            message += "Please enter address \n";
        }

        /*if (!addressLine2 || (addressLine2 && addressLine2.trim() === "")) {
            message += "Please enter address line 2 \n";
        }*/

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
        let isUserAlreadyExists = false;
        /* const file_ext = files.profilePic.name.slice(
             ((files.profilePic.name.lastIndexOf('.') - 1) >>> 0) + 2
         );*/

        if (isValid) {
            setLoadingStatus(true)

            await signIn({ username: email.trim().toLowerCase(), password })
                .then((user) => {
                    signOut();
                    isUserAlreadyExists = true;
                })
                .catch(async (err) => {
                    console.log({ err });
                    if (err.name === "UserNotFoundException") {
                        isUserAlreadyExists = false;
                    } else if (err.name === "NotAuthorizedException") {
                        if (err.message === "Incorrect username or password.") isUserAlreadyExists = true;
                    }
                });

            let username = email.trim().split("@")[0] + Math.floor(1000000000 + Math.random() * 9000000000);

            if (isUserAlreadyExists) {
                alert('An account has already been setup with this email. Login instead.')
            } else {

                try {

                    const user = await signUp({
                        username: email.trim().toLowerCase(),
                        password,
                        options: {
                            userAttributes: {
                                preferred_username: username,
                                'custom:userType': "2"
                            },
                        },

                    });

                    console.log(user)

                    const client = generateClient();

                    const userDetails = {
                        "id": user.userId,
                        "userName": `${firstName} ${lastName}`,
                        "fullName": `${firstName} ${lastName}`,
                        "firstName": firstName,
                        "lastName": lastName,
                        "email": email.trim().toLowerCase(),
                        "phoneNumber": phone,
                        "city": city,
                        "zipCode": pinCode,
                        "country": country,
                        "address": address,
                        //"addressLine2": addressLine2,
                        "isActive": true,
                        "isDeleted": false,
                        //"userType": 2
                    }

                    const newUserData = await client.graphql({
                        query: createUsers,
                        variables: { input: userDetails }
                    });

                    //history.push("/login");

                    console.log({ user, newUserData, userDetails });
                } catch (err) {
                    console.log('error signing up:', { err });
                    if (err.name === "UsernameExistsException") {
                        alert('This email is already registered. Try logging in with it')
                    } else if (err.name === "InvalidPasswordException" || err.name === "InvalidParameterException") {
                        alert('Password must be at least 8 characters')
                    } else {
                        alert('Something went wrong. Please try again later')
                    }
                }

            }

            setLoadingStatus(false);

        }
    }

    return (

        <div className="m-auto bg-cover bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                <div className="mx-auto max-w-xl">
                    <form onSubmit={handleSignUp} className="mb-0 mt-6 space-y-4 p-4 bg-white rounded-lg shadow-lg sm:p-6 lg:p-8">
                        <p className="text-center text-lg font-medium">Invite register</p>

                        <div className="flex flex-wrap">
                            <div className="px-4 w-full">
                                <div className="mb-3 relative w-full">
                                    <label className="text-blueGray-600 mb-2 block text-lg font-bold">
                                        Hotel Name
                                    </label>
                                    <Input
                                        type="text"
                                        className="px-3 py-2"
                                        value={hotelName}
                                        onChange={e => setHotelName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="px-4 w-full lg:w-6/12">
                                <div className="mb-3 relative w-full">
                                    <label className="text-blueGray-600 mb-2 block text-lg font-bold">
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
                            <div className="px-4 w-full lg:w-6/12">
                                <div className="mb-3 relative w-full">
                                    <label className="text-blueGray-600 mb-2 block text-lg font-bold">
                                        Last Name
                                    </label>
                                    <Input
                                        type="text"
                                        className="px-3 py-2"
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="px-4 w-full">
                                <div className="mb-3 relative w-full">
                                    <label className="text-blueGray-600 mb-2 block text-lg font-bold">
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
                                        <span className="inset-y-0 end-0 px-4 absolute grid place-content-center">
                                            <div
                                                className="size-4 text-gray-400"
                                            >
                                                <AtSign size={18} color="#9ca3af" />
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 w-full lg:w-6/12">
                                <div className="mb-3 relative w-full">
                                    <label className="text-blueGray-600 mb-2 block text-lg font-bold">
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
                                        <span className="inset-y-0 end-0 px-4 absolute grid place-content-center">
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
                            <div className="px-4 w-full lg:w-6/12">
                                <div className="mb-3 relative w-full">
                                    <label className="text-blueGray-600 mb-2 block text-lg font-bold">
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
                                        <span className="inset-y-0 end-0 px-4 absolute grid place-content-center">
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
                            {/* <div className="px-4 w-full lg:w-6/12">
                                <div className="mb-3 relative w-full">
                                    <label className="text-blueGray-600 mb-2 block text-lg font-bold">
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
                            <div className="px-4 w-full">
                                <div className="mb-3 relative w-full">
                                    <label className="text-blueGray-600 mb-2 block text-lg font-bold">
                                        Hotel Code
                                    </label>
                                    <Input
                                        type="text"
                                        className="px-3 py-2"
                                        value={hotelCode}
                                        onChange={e => setHotelCode(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="px-4 w-full">
                                <div className="mb-3 relative w-full">
                                    <label className="text-blueGray-600 mb-2 block text-lg font-bold">
                                        Address
                                    </label>
                                    <Input
                                        type="text"
                                        className="px-3 py-2"
                                        value={address}
                                        onChange={e => setAddress(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/*<div className="px-4 w-full">
                                <div className="mb-3 relative w-full">
                                    <label className="text-blueGray-600 mb-2 block text-lg font-bold">
                                        Address Line 2
                                    </label>
                                    <Input
                                        type="text"
                                        className="px-3 py-2"
                                        value={addressLine2}
                                        onChange={e => setAddressLine2(e.target.value)}
                                    />
                                </div>
                            </div>*/}
                            <div className="px-4 w-full">
                                <div className="mb-3 relative w-full">
                                    <label className="text-blueGray-600 mb-2 block text-lg font-bold">
                                        City
                                    </label>
                                    <Input
                                        type="text"
                                        className="px-3 py-2"
                                        value={city}
                                        onChange={e => setCity(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="px-4 w-full">
                                <div className="mb-3 relative w-full">
                                    <label className="text-blueGray-600 mb-2 block text-lg font-bold">
                                        Pincode
                                    </label>
                                    <Input
                                        type="text"
                                        className="px-3 py-2"
                                        value={pinCode}
                                        onChange={e => setPinCode(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="px-4 w-full">
                                <div className="mb-3 relative w-full">
                                    <label className="text-blueGray-600 mb-2 block text-lg font-bold">
                                        Country
                                    </label>
                                    <Input
                                        type="text"
                                        className="px-3 py-2"
                                        value={country}
                                        onChange={e => setCountry(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="px-4 w-full">
                                <div className="mb-3 relative w-full">
                                    <label className="text-blueGray-600 mb-2 block text-lg font-bold">
                                        Phone
                                    </label>
                                    <PhoneInput
                                        international
                                        defaultCountry="IN"
                                        value={phone}
                                        onChange={setPhone}
                                        className="px-3 py-2 rounded border-2 focus:border-gray-500"
                                        numberInputProps={{ className: "focus:outline-none" }}
                                    />
                                </div>
                            </div>


                            {/*<div className="px-4 w-full lg:w-6/12">
                                <div className="mb-3 relative w-full">

                                    {Boolean(imageDisplay) ?

                                        <div className="mt-4 w-8/12 border-2" >
                                            <img src={imageDisplay} alt="Uploaded file preview" className="p-2 h-auto max-w-full" />
                                        </div>
                                        : null
                                    }

                                </div>
                            </div>*/}
                        </div>

                        <div className="px-4 w-full">
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