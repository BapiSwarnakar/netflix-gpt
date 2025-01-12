import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import FrontendLogin from '../frontend/login/FrontendLogin';
import FrontendSignup from '../frontend/login/FrontendSignup';
import FrontendMain from '../frontend/layout/FrontendMain';
import Browse from '../frontend/dashboard/Browse';
import SearchMovie from '../frontend/dashboard/SearchMovie';



const FrontendRoute = () => {

    const browserRouter = createBrowserRouter([
        {
            path: '/',
            element: <FrontendLogin />,
            id: 'index'
        },
        {
            path: '/signup',
            element:  <FrontendSignup />,
            id: 'signup'
        },
        {
            path: '/browse',
            element:  <FrontendMain element={<Browse/>} />,
            id: 'browse'
        },
        {
            path: '/search/:movieId?',
            element:  <FrontendMain element={<SearchMovie/>} />,
            id: 'search'
        }
    ]);

    return browserRouter;
}

export default FrontendRoute;
