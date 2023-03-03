import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rider: true
};

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRider: (state) => {
            state.rider = false;
        }
    }
});

export const { setRider } = registrationSlice.actions;
export default registrationSlice.reducer;