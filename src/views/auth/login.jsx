import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Eye, EyeOff, AtSign } from 'lucide-react';
import secureLocalStorage from "react-secure-storage";
import AuthHeader from "@/components/authHeader";
import { signIn, getCurrentUser } from 'aws-amplify/auth';
import { getUsers } from '@/graphql/queries';
import helper from "@/services/helper";

function Login() {
    const history = useHistory();
    const [isPasswordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadingStatus, setLoadingStatus] = useState(false);

    useEffect(() => {
        helper.Logout();
    }, [])

    async function handleLogin(e) {
        e.preventDefault();
        setLoadingStatus(true);
        let isValid = validateInputs();
        if (isValid) {
            try {
                await signIn({ username: email.trim().toLowerCase(), password })
                const logedInUser = await getCurrentUser();
                const client = helper.amplifyClient();
                const response = await client.graphql({ query: getUsers, variables: { id: logedInUser.userId } });
                const userData = response.data.getUsers;

                let message = ""
                if (!userData.isEmailVerified) {
                    message += "Please verify your email \n"
                }

                if (!userData.isAccountActivated) {
                    message += "Account activation pending. Please contact your admin \n"
                }

                if (message.length) {
                    helper.Logout();
                    alert(message);
                } else {
                    secureLocalStorage.setItem('login', 'true');
                    secureLocalStorage.setItem('userData', JSON.stringify(userData));
                    console.log('Login successful, redirecting...'); // Debugging log
                    history.push('/dashboard'); // Redirection happens here
                }
            } catch (err) {
                helper.Logout();
                console.log({ err });

                if (err.name === "UserNotFoundException") {
                    alert("Invalid email address or password. Please try again.")

                } else if (err.name === "NotAuthorizedException") {
                    if (err.message === "Incorrect username or password.") {
                        alert("Invalid email address or password. Please try again.")
                    }

                } else {
                    alert("Something went wrong. Please try again later")
                }
            }

        } else {
            console.log('Invalid input'); // Debugging log
        }
        setLoadingStatus(false);
    }

    function validateInputs() {
        let messages = '';

        if (email.trim() === "") {
            messages += "Please enter email address\n";
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            messages += 'Please enter valid email address\n';
        }

        if (password.trim() === "") {
            messages += "Please enter password\n";
        }

        if (messages.trim().length > 0) {
            alert(messages);
            return false;
        }
        return true;
    }

    return (
        <div
            className="bg-black m-auto h-screen bg-opacity-40 bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply"
            style={{ backgroundImage: `url("/top-view-weights-floor.png")` }}
        >

            <div className="pt-5">
                <AuthHeader />
            </div>

            <div className="px-4 pt-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                <div className="mx-auto max-w-sm">
                    <div className="mb-0 mt-4 space-y-4 p-4 bg-white rounded-lg shadow-lg sm:p-6 lg:p-6">
                        <form onSubmit={handleLogin}>
                            <p className="pb-8 text-center text-3xl font-medium">Login</p>
                            <div>
                                <label htmlFor="email" className="text-blueGray-600 mb-2 text-md block font-bold">Email Address</label>
                                <div className="relative">
                                    <Input
                                        type="email"
                                        className="px-3 py-2"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        disabled={loadingStatus ? true : false}
                                    />
                                    <span className="inset-y-0 end-0 px-4 absolute grid place-content-center">
                                        <div className="size-4 text-gray-400">
                                            <AtSign size={18} color="#9ca3af" />
                                        </div>
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="text-blueGray-600 mb-2 text-md block font-bold">Password</label>
                                <div className="relative">
                                    <Input
                                        type={isPasswordShown ? "text" : "password"}
                                        className="px-3 py-2"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        autoComplete="on"
                                        disabled={loadingStatus ? true : false}
                                    />
                                    <span className="inset-y-0 end-0 px-4 absolute grid place-content-center">
                                        <div
                                            className="size-4 text-gray-400 cursor-pointer"
                                            onClick={() => setPasswordShown(!isPasswordShown)}
                                        >
                                            {!isPasswordShown ? <EyeOff size={18} color="#9ca3af" /> : <Eye size={18} color="#9ca3af" />}
                                        </div>
                                    </span>
                                </div>
                            </div>

                            <Button
                                disabled={loadingStatus ? true : false}
                                type="submit"
                                className="mt-10 w-full"
                            >
                                {loadingStatus && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                Login
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;