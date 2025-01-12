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
            path: '/netflix-gpt/',
            element: <FrontendLogin />,
            id: 'index'
        },
        {
            path: '/netflix-gpt/signup',
            element:  <FrontendSignup />,
            id: 'signup'
        },
        {
            path: '/netflix-gpt/browse',
            element:  <FrontendMain element={<Browse/>} />,
            id: 'browse'
        },
        {
            path: '/netflix-gpt/search/:movieId?',
            element:  <FrontendMain element={<SearchMovie/>} />,
            id: 'search'
        }
    ]);

    return browserRouter;
}

export default FrontendRoute;
