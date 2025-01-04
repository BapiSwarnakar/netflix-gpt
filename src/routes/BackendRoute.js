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
            path: '/admin/login',
            element: <Login/>,
            id: 'admin-login'
        },
        {
            path: '/admin/dashboard',
            element: <BackendMain element={<Dashboard/>} />,
            id: 'admin-dashboard'
        },
        {
            path: '/admin/user/add',
            element: <BackendMain element={<AddUser/>} />,
            id: 'add-user'
        },
        {
            path: '/admin/user/view',
            element: <BackendMain element={<ViewUser/>} />,
            id: 'view-user'
        }
    ]);

    return browserRouter;
}

export default BackendRoute;
