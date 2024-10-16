import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import secureLocalStorage from "react-secure-storage";
import { useHistory, NavLink } from 'react-router-dom';
import { logedInUser } from '@/services/helper';
import Logo from '/favicon.png';
import { LogIn, NotebookText } from 'lucide-react';

export default function AuthHeader({ toggle, sidebarState }) {
    let history = useHistory();
    const logout = () => {
        secureLocalStorage.clear();
        window.location = '/login';
    };
    useEffect(() => {
    }, []);

    return (
        <>
            <nav className="z-50 w-full">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-around">
                        <div className="w-40 flex items-center justify-start rtl:justify-end">
                            <img src={Logo} />
                        </div>
                        <div className="text-white flex items-center">
                            <div className="ms-3 flex items-center">
                                {window.location.href.includes("/register") ?
                                    <NavLink to="/login" className="gap-2 flex flex-nowrap">
                                        <LogIn />
                                        Login
                                    </NavLink> :
                                    <NavLink to="/register" className="gap-2 flex flex-nowrap">
                                        <NotebookText />
                                        Register
                                    </NavLink>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
