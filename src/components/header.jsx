﻿import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import helper from "@/services/helper";
import { useHistory } from 'react-router-dom';
import { logedInUser } from '@/services/helper';

function Header({ toggle, sidebarState }) {

    let history = useHistory();
    const [userName, setUserName] = useState("");
    const logout = () => {
        helper.Logout();
        window.location = '/login';
    };
    useEffect(() => {
        setUserName(logedInUser().firstName);
    }, []);

    return (
        <>
            <nav className="top-0 bg-primary border-gray-700 fixed z-50 w-full border-b">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button onClick={() => { toggle(!sidebarState) }} type="button" className="inline-flex items-center p-2 text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a className="ms-2 flex md:me-24">
                                <span className="text-white self-center whitespace-nowrap text-xl font-semibold sm:text-2xl">Travelom &#8209; Extranet</span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="ms-3 flex items-center">
                                <div className="pr-5 text-white hidden md:block" >
                                    Welcome {userName}
                                </div>
                                <div className="pr-3">
                                    <Button type="button" onClick={logout} >
                                        Logout
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
