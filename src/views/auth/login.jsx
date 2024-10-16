import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Eye, EyeOff, AtSign } from 'lucide-react';
import secureLocalStorage from "react-secure-storage";
import AuthHeader from "@/components/authHeader";

function Login() {
    const history = useHistory();
    const [isPasswordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadingStatus, setLoadingStatus] = useState(false);

    function handleLogin(e) {
        e.preventDefault();
        let isValid = validateInputs();
        if (isValid) {
            secureLocalStorage.setItem('login', 'true');
            console.log('Login successful, redirecting...'); // Debugging log
            setLoadingStatus(true);
            history.push('/dashboard'); // Redirection happens here
        } else {
            console.log('Validation failed'); // Debugging log
        }
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
            className="bg-black m-auto bg-opacity-75 bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply"
            style={{ backgroundImage: `url("/top-view-weights-floor.png")` }}
        >

            <div className="pt-5">
                <AuthHeader />
            </div>

            <div className="px-4 py-24 mx-auto h-screen max-w-screen-xl sm:px-6 lg:px-8">
                <div className="mx-auto max-w-sm">
                    <div className="mb-0 mt-4 space-y-4 p-4 bg-white rounded-lg shadow-lg sm:p-6 lg:p-6">
                    <form onSubmit={handleLogin}>
                        <p className="pb-3 text-center text-3xl font-medium">Login</p>
                        <div>
                            <label htmlFor="email" className="text-blueGray-600 mb-2 block text-lg font-bold">Email Address</label>
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
                            <label htmlFor="password" className="text-blueGray-600 mb-2 block text-lg font-bold">Password</label>
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
