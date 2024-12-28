import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import FrontendMain from '../frontend/layout/FrontendMain';
import FrontendIndex from '../frontend/FrontendIndex';
import Signup from '../backend/login/Signup';
import Login from '../backend/login/Login';



const FrontendRoute = () => {

    const browserRouter = createBrowserRouter([
        {
            path: '/',
            element: <FrontendMain element={<FrontendIndex />} />,
            id: 'index'
        },
        {
            path: '/login',
            element: <Login />,
            id: 'login'
        },
        {
            path: '/signup',
            element:  <Signup />,
            id: 'signup'
        }
    ]);

    return browserRouter;
}

export default FrontendRoute;
