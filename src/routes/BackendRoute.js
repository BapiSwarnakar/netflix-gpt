import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../backend/login/Login';
import BackendMain from '../backend/layout/BackendMain';
import Dashboard from '../backend/dashboard/Dashboard';



const BackendRoute = () => {

    const browserRouter = createBrowserRouter([
        {
            path: '/admin',
            element: <Login />,
            id: 'admin-login'
        },
        {
            path: '/dashboard',
            element: <BackendMain element={<Dashboard/>} />,
            id: 'dashboard'
        }
    ]);

    return browserRouter;
}

export default BackendRoute;
