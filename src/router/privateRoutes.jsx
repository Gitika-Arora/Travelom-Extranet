import React from "react";
import { Route, Redirect } from 'react-router-dom';
import routes from './routes';
import LandingLayout from "../components/landingLayout";
import Helper, { logedInUser } from '../services/helper';
const PrivateRoutes = () => {
    const publicRoutes = routes.filter((routes) => !routes.isPublic);

    return publicRoutes.map((route, index) => {
        const RouteVal = route.component;
        return (
            <Route
                key={index}
                path={route.path}
                exact
                render={(props) => (
                    Helper.isAuthenticated()
                        ? (
                            <LandingLayout>
                                {
                                    (logedInUser().userType != 1 && route.isAdmin) || (logedInUser().userType != 2 && route.isHotelOwner) ?
                                        <Redirect to="/dashboard" /> :
                                        <RouteVal {...props} />
                                }
                            </LandingLayout>
                        )
                        : <Redirect to="/" />
                )}
            >
            </Route>
        )
    })
}

export default PrivateRoutes;