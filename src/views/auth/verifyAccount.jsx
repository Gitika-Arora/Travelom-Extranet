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
import { Card } from 'primereact/card';
/*import {
    Card,
    CardContent,
} from "@/components/ui/card"*/

const client = generateClient();

export default function VerifyAccount() {
    const [decodedData, setDecodedData] = useState("");
    const [decodedCode, setDecodedCode] = useState("");
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
            setDecodedData(decodedData);
            setDecodedCode(decodedCode);
        }
    }, []);

    const confirmSignUpUser = async (username, code) => {
        try {
            debugger;
            const decodedHeader = jwtDecode(username, { header: true });
            const userId = JSON.stringify(decodedHeader);
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

                    console.log(bookingHistoryData)
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
        const result = await client.graphql({
            query: updateUsers,
            variables: {
                input: updateValue
            }
        });

        console.log(result);
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="">
                <Card className="m-2 p-3 flex justify-center">
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
                </Card>
            </div>
        </div>
    )
}
