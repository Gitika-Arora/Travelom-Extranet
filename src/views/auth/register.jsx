import { useState } from "react";
import { useHistory, NavLink } from 'react-router-dom';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Eye, EyeOff, AtSign } from 'lucide-react';
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { signUp, signIn, signOut } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import { createUsers } from '@/graphql/mutations';
import AuthHeader from "@/components/authHeader";
import { Dropdown } from 'primereact/dropdown';

const countryOptions = [
    { label: "United States", value: "United States" },
    { label: "China", value: "China" },
    { label: "Russia", value: "Russia" },
    { label: "India", value: "India" },
    { label: "Germany", value: "Germany" },
    { label: "United Kingdom", value: "United Kingdom" },
    { label: "France", value: "France" },
    { label: "Japan", value: "Japan" },
    { label: "Brazil", value: "Brazil" },
    { label: "Canada", value: "Canada" },
    { label: "Australia", value: "Australia" },
    { label: "South Korea", value: "South Korea" },
    { label: "Saudi Arabia", value: "Saudi Arabia" },
    { label: "Israel", value: "Israel" },
    { label: "Turkey", value: "Turkey" },
    { label: "Italy", value: "Italy" },
    { label: "Mexico", value: "Mexico" },
    { label: "South Africa", value: "South Africa" },
    { label: "Indonesia", value: "Indonesia" },
    { label: "Argentina", value: "Argentina" },
    { label: "Nigeria", value: "Nigeria" },
    { label: "Egypt", value: "Egypt" },
    { label: "Pakistan", value: "Pakistan" },
    { label: "Ukraine", value: "Ukraine" },
    { label: "Iran", value: "Iran" },
    { label: "Venezuela", value: "Venezuela" },
    { label: "Spain", value: "Spain" },
    { label: "Poland", value: "Poland" },
    { label: "Bangladesh", value: "Bangladesh" },
    { label: "Malaysia", value: "Malaysia" },
    { label: "Colombia", value: "Colombia" },
    { label: "Thailand", value: "Thailand" },
    { label: "Vietnam", value: "Vietnam" },
    { label: "Philippines", value: "Philippines" },
    { label: "Netherlands", value: "Netherlands" },
    { label: "Belgium", value: "Belgium" },
    { label: "Sweden", value: "Sweden" },
    { label: "Singapore", value: "Singapore" },
    { label: "United Arab Emirates", value: "United Arab Emirates" },
    { label: "Iraq", value: "Iraq" },
    { label: "Kazakhstan", value: "Kazakhstan" },
    { label: "Ethiopia", value: "Ethiopia" },
    { label: "Chile", value: "Chile" },
    { label: "Qatar", value: "Qatar" },
    { label: "Norway", value: "Norway" },
    { label: "Myanmar", value: "Myanmar" },
    { label: "Kenya", value: "Kenya" },
    { label: "Algeria", value: "Algeria" },
    { label: "Sudan", value: "Sudan" },
    { label: "Morocco", value: "Morocco" }
];

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
    const [city, setCity] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [country, setCountry] = useState("");

    const [loadingStatus, setLoadingStatus] = useState(false);

    function validateInputs() {
        let message = '';

        if (!hotelName || (hotelName && hotelName.trim() === "")) {
            message += "Please enter hotel name \n"
        }

        if (!hotelCode || (hotelCode && hotelCode.trim() === "")) {
            message += "Please enter hotel code \n"
        }

        if (!firstName || (firstName && firstName.trim() === "")) {
            message += "Please enter first name \n"
        }

        if (!lastName || (lastName && lastName.trim() === "")) {
            message += "Please enter last name \n"
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email || (email && email.trim() === "") || !emailRegex.test(email)) {
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

        if (!address || (address && address.trim() === "")) {
            message += "Please enter address \n";
        }

        if (!city || (city && city.trim() === "")) {
            message += "Please enter city \n";
        }

        if (!country || (country && country.trim() === "")) {
            message += "Please select country \n";
        }

        if (!pinCode || (pinCode && pinCode.trim() === "")) {
            message += "Please enter zipcode \n";
        }

        if (!phone || phone.trim() === "" || (phone && !isValidPhoneNumber(phone))) {
            message += "Please enter phone number\n";
        }

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
                        "isActive": true,
                        "isDeleted": false,
                        //"userType": 2
                    }

                    await client.graphql({
                        query: createUsers,
                        variables: { input: userDetails }
                    });

                    alert("A link to verify your account has been sent to your email address")

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

        <div
            className="bg-black m-auto bg-opacity-40 bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply"
            style={{ backgroundImage: `url("/top-view-weights-floor.png")` }}
        >
            <div className="pt-5">
                <AuthHeader />
            </div>

            <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                <div className="mx-auto max-w-xl">
                    <div className="mb-0 mt-6 space-y-4 p-4 bg-white rounded-lg shadow-lg sm:p-6 lg:p-8">
                        <form onSubmit={handleSignUp} >
                            <p className="pb-8 text-center text-3xl font-medium">Register</p>

                            <div className="flex flex-wrap">
                                <div className="px-4 w-6/12">
                                    <div className="mb-1 relative w-full">
                                        <label className="text-blueGray-600 mb-1 text-md block font-bold">
                                            Hotel Name
                                        </label>
                                        <Input
                                            type="text"
                                            className="px-2 py-1"
                                            value={hotelName}
                                            onChange={e => setHotelName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="px-4 w-6/12">
                                    <div className="mb-1 relative w-full">
                                        <label className="text-blueGray-600 mb-1 text-md block font-bold">
                                            Hotel Code
                                        </label>
                                        <Input
                                            type="text"
                                            className="px-2 py-1"
                                            value={hotelCode}
                                            onChange={e => setHotelCode(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="px-4 w-full lg:w-6/12">
                                    <div className="mb-1 relative w-full">
                                        <label className="text-blueGray-600 mb-1 text-md block font-bold">
                                            First Name
                                        </label>
                                        <Input
                                            type="text"
                                            className="px-2 py-1"
                                            value={firstName}
                                            onChange={e => setFirstName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="px-4 w-full lg:w-6/12">
                                    <div className="mb-1 relative w-full">
                                        <label className="text-blueGray-600 mb-1 text-md block font-bold">
                                            Last Name
                                        </label>
                                        <Input
                                            type="text"
                                            className="px-2 py-1"
                                            value={lastName}
                                            onChange={e => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="px-4 w-full">
                                    <div className="mb-1 relative w-full">
                                        <label className="text-blueGray-600 mb-1 text-md block font-bold">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Input
                                                type="email"
                                                className="px-2 py-1"
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
                                    <div className="mb-1 relative w-full">
                                        <label className="text-blueGray-600 mb-1 text-md block font-bold">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <Input
                                                type={passwordShow ? "text" : "password"}
                                                className="px-2 py-1 pr-[40px]"
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
                                    <div className="mb-1 relative w-full">
                                        <label className="text-blueGray-600 mb-1 text-md block font-bold">
                                            Confirm Password
                                        </label>
                                        <div className="relative">
                                            <Input
                                                type={confirmPasswordShow ? "text" : "password"}
                                                className="px-2 py-1 pr-[40px]"
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
                                <div className="px-4 w-full">
                                    <div className="mb-1 relative w-full">
                                        <label className="text-blueGray-600 mb-1 text-md block font-bold">
                                            Address
                                        </label>
                                        <Input
                                            type="text"
                                            className="px-2 py-1"
                                            value={address}
                                            onChange={e => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="px-4 w-1/2">
                                    <div className="mb-1 relative w-full">
                                        <label className="text-blueGray-600 mb-1 text-md block font-bold">
                                            City
                                        </label>
                                        <Input
                                            type="text"
                                            className="px-2 py-1"
                                            value={city}
                                            onChange={e => setCity(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="px-4 w-1/2">
                                    <div className="mb-1 relative w-full">
                                        <label className="text-blueGray-600 mb-1 text-md block font-bold">
                                            Country
                                        </label>
                                        {/*<Input
                                            type="text"
                                            className="px-2 py-1"
                                            value={country}
                                            onChange={e => setCountry(e.target.value)}
                                        />*/}
                                        <Dropdown value={country} onChange={(e) => setCountry(e.value)} options={countryOptions} virtualScrollerOptions={{ itemSize: 38 }}
                                            placeholder="Select Country" className="w-full" pt={{
                                                root: "border-2 border-slate-200 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base focus:outline-none focus:border-gray-500  w-full ease-linear transition-all duration-150 file:bg-gray-200 file:border-0 file:me-4 file:py-2 file:px-2 dark:file:bg-neutral-700 dark:file:text-neutral-400 hover:border-slate-200",
                                                input: "px-2 py-1",
                                                panel: "max-h-[200px] overflow-auto bg-white text-gray-700 border-0 rounded-md shadow-lg",
                                                item: "flex items-center",
                                                list: "p-0"
                                            }} />
                                    </div>
                                </div>
                                <div className="px-4 w-1/2">
                                    <div className="mb-1 relative w-full">
                                        <label className="text-blueGray-600 mb-1 text-md block font-bold">
                                            Zipcode
                                        </label>
                                        <Input
                                            type="text"
                                            className="px-2 py-1"
                                            value={pinCode}
                                            onChange={e => setPinCode(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="px-4 w-1/2">
                                    <div className="mb-1 relative w-full">
                                        <label className="text-blueGray-600 mb-1 text-md block font-bold">
                                            Phone
                                        </label>
                                        <PhoneInput
                                            international
                                            defaultCountry="IN"
                                            countryCallingCodeEditable={false}
                                            value={phone}
                                            onChange={setPhone}
                                            className="px-2 py-1 rounded border-2 focus:border-gray-500"
                                            numberInputProps={{ className: "focus:outline-none" }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 mt-12 w-full">
                                <Button
                                    disabled={loadingStatus ? true : false}
                                    type="submit"
                                    className="w-full"
                                >
                                    {loadingStatus && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                    Get Started
                                </Button>
                            </div>
                        </form>
                        <div className="flex justify-center">
                            Already have an account? &nbsp;<NavLink to="/login" className="text-primary">
                                Log in
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Register;