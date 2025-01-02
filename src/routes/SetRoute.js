import React, {useEffect}  from 'react'
import FrontendRoute from './FrontendRoute';
import BackendRoute from './BackendRoute';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/slice/UserSlice';

const SetRoute = () => {

    const dispatch = useDispatch();

    const frontendRoutes = FrontendRoute();
    const backendRoutes = BackendRoute();
    const combinedRoutes = createBrowserRouter([ ...frontendRoutes.routes, ...backendRoutes.routes]);
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                dispatch(addUser({ displayName, email, uid, photoURL }));
            } else {
                dispatch(removeUser());
            }
          });
    }, [dispatch]);

    return (
        <div>
            <RouterProvider router={combinedRoutes} />
        </div>
    )
}

export default SetRoute;
