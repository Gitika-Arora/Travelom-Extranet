import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from '@/graphql/queries';
import { updateUsers } from '@/graphql/mutations';
import { generateClient } from 'aws-amplify/api';
import { jwtDecode } from "jwt-decode";

import secureLocalStorage from "react-secure-storage";
import { confirmSignUp } from "aws-amplify/auth";
import { sendWelcomeEmail } from "@/services/helper";
import { LoaderCircle } from 'lucide-react';

const client = generateClient();

export default function VerifyAccount() {
    const [loading, setLoading] = useState(true);
    const [alreadyConfirm, setAlreadyConfirm] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const data = urlParams.get('data');
        const code = urlParams.get('code');

        if (data && code) {
            const decodedData = decodeURIComponent(data);
            const decodedCode = decodeURIComponent(code);
            confirmSignUpUser(decodedData, decodedCode);
        }
    }, []);

    const confirmSignUpUser = async (username, code) => {
        try {
            const decodedHeader = jwtDecode(username, { header: true });
            let userData = Object.assign(decodedHeader);

            if (userData) {
                const { isSignUpComplete, nextStep } = await confirmSignUp({
                    username: userData?.userName,
                    confirmationCode: code
                });
                await updateUserToDB({ id: userData?.userName, isEmailVerified: true });
                setLoading(false);

                secureLocalStorage.setItem("userId", userData?.userName);
                secureLocalStorage.setItem("userVerify", true);
                secureLocalStorage.setItem("disableWarning", "false");

                try {
                    const bookingHistoryData = await client.graphql({
                        query: getUsers,
                        variables: { id: userData?.userName },
                    });

                    if (bookingHistoryData.data.getUsers !== undefined) {
                        let data = bookingHistoryData.data.getUsers;
                        
                        await sendWelcomeEmail(data);
                    }
                } catch (e) {
                    console.error(e);
                }
            }

        } catch (error) {
            if (error == "NotAuthorizedException: User cannot be confirmed. Current status is CONFIRMED") {
                setLoading(false);
                setAlreadyConfirm(true);
            }
            console.error('Error confirming sign up', error);
        }
    };

    const updateUserToDB = async (updateValue) => {
        try {
        const result = await client.graphql({
            query: updateUsers,
            variables: {
                input: updateValue
            }
        });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            className="bg-black m-auto bg-opacity-40 bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply"
            style={{ backgroundImage: `url("/top-view-weights-floor.png")` }}
        >
            <div className="px-4 py-24 mx-auto h-screen max-w-screen-xl sm:px-6 lg:px-8">
                <div className="mx-auto max-w-sm">
                    <div className="mb-0 mt-4 space-y-4 p-4 bg-white rounded-lg shadow-lg sm:p-6 lg:p-6">
                        <p className="flex items-center justify-center text-center text-xl font-medium">
                            {loading ? <LoaderCircle className="animate-spin" />
                                :
                                <div className="px-0 py-5 text-center">
                                    <h4>
                                        {alreadyConfirm ? "User Already Verified" : "Account Verify Successfully"}
                                    </h4>
                                    <h4>
                                        <Link className="underline" to="/">Click here</Link> to login
                                    </h4>
                                </div>
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
