import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../backend/login/Login';



const BackendRoute = () => {

    const browserRouter = createBrowserRouter([
        {
            path: '/admin',
            element: <Login />,
            id: 'admin-login'
        }
    ]);

    return browserRouter;
}

export default BackendRoute;
