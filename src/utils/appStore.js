import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../utils/slice/userSlice';
import movieSlice from '../utils/slice/movieSlice';

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies : movieSlice,
    },
});

export default appStore;