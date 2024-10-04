import React from "react";
import { Route, Redirect } from 'react-router-dom';
import routes from './routes';
import LandingLayout from "../components/landingLayout";
import Helper from '../services/helper';
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
                                <RouteVal {...props} />
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