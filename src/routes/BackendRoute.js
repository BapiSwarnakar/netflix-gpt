import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import BackendMain from '../backend/layout/BackendMain';
import Dashboard from '../backend/dashboard/Dashboard';
import AddUser from '../backend/dashboard/user/AddUser';
import ViewUser from '../backend/dashboard/user/ViewUser';
import Login from '../backend/login/Login';



const BackendRoute = () => {

    const browserRouter = createBrowserRouter([
        {
            path: '/netflix-gpt/admin/login',
            element: <Login/>,
            id: 'admin-login'
        },
        {
            path: '/netflix-gpt/admin/dashboard',
            element: <BackendMain element={<Dashboard/>} />,
            id: 'admin-dashboard'
        },
        {
            path: '/netflix-gpt/admin/user/add',
            element: <BackendMain element={<AddUser/>} />,
            id: 'add-user'
        },
        {
            path: '/netflix-gpt/admin/user/view',
            element: <BackendMain element={<ViewUser/>} />,
            id: 'view-user'
        }
    ]);

    return browserRouter;
}

export default BackendRoute;
