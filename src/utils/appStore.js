import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/UserSlice';

const appStore = configureStore({
    reducer: {
        user: userSlice,
    },
});

export default appStore;