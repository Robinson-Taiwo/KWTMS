import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './registrationReducer';

// defining my store and reducer
const store = configureStore({
    reducer: {
        registration: registrationReducer
    }
});

export default store;
