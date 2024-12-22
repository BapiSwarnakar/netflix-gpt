import React from 'react'
import FrontendRoute from './FrontendRoute';
import BackendRoute from './BackendRoute';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const SetRoute = () => {

    const frontendRoutes = FrontendRoute();
    const backendRoutes = BackendRoute();
    const combinedRoutes = createBrowserRouter([ ...frontendRoutes.routes, ...backendRoutes.routes]);
    
    return (
        <div>
            <RouterProvider router={combinedRoutes} />
        </div>
    )
}

export default SetRoute;
