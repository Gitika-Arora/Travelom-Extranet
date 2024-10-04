import React, { useState } from "react";
import Header from "./header";
import { withRouter } from "react-router-dom";
import Sidebar from "./sidebar";
import routes from "../router/routes";
import secureLocalStorage from "react-secure-storage";

function LandingLayout(props) {
    const [sidebar, setSidebar] = useState(window.innerWidth > 640 ? false : true);

    const handleSidebarToggle = (toggle) => {
        setSidebar(toggle);
    }
    const { children, ...rest } = props;

    const filterRoutes = routes.filter((route) => {
        return (!route.isPublic && route.isInSidebar);
    });

    return (
        <>
            <div >
                <Header toggle={handleSidebarToggle} sidebarState={sidebar} />
            </div>
            <div >
                <Sidebar {...rest} routes={filterRoutes} sidebarToggle={handleSidebarToggle} sidebarState={sidebar} />
                <div className="p-4 bg-gray-200 h-full min-h-screen sm:ml-64">
                    <div className="p-4 mt-14">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default withRouter(LandingLayout);