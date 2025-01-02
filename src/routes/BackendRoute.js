import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import BackendMain from '../backend/layout/BackendMain';
import Dashboard from '../backend/dashboard/Dashboard';
import AddUser from '../backend/dashboard/user/AddUser';
import ViewUser from '../backend/dashboard/user/ViewUser';



const BackendRoute = () => {

    const browserRouter = createBrowserRouter([
        {
            path: '/dashboard',
            element: <BackendMain element={<Dashboard/>} />,
            id: 'dashboard'
        },
        {
            path: '/user/add',
            element: <BackendMain element={<AddUser/>} />,
            id: 'add-user'
        },
        {
            path: '/user/view',
            element: <BackendMain element={<ViewUser/>} />,
            id: 'view-user'
        }
    ]);

    return browserRouter;
}

export default BackendRoute;
