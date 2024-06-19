import {createSlice }from '@reduxjs/toolkit';

const initialState = {
    isAdminLoggedIn: false
}
const adminLoginSlice = createSlice({
    name: 'adminlogin',
    initialState,
    reducers: {
        adminloggingin: (state) => {
            state.isAdminLoggedIn = true
        },
        adminloggingout: (state) => {
            state.isAdminLoggedIn = false
        }
    }
});

export default adminLoginSlice.reducer
export const {adminloggingin, adminloggingout} = adminLoginSlice.actions