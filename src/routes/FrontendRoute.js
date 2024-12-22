import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import FrontendSignup from '../frontend/login/FrontendSignup';
import FrontendLogin from '../frontend/login/FrontendLogin';
import FrontendMain from '../frontend/layout/FrontendMain';
import FrontendIndex from '../frontend/FrontendIndex';



const FrontendRoute = () => {

    const browserRouter = createBrowserRouter([
            {
                path: '/',
                element: <FrontendMain element={<FrontendIndex />} />,
                id: 'index'
            },
            {
                path: '/login',
                element: <FrontendLogin />,
                id: 'login'
            },
            {
                path: '/signup',
                element:  <FrontendSignup />,
                id: 'signup'
            }
        ]);

    return browserRouter;
}

export default FrontendRoute;
