import {createSlice }from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false
}
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loggingin: (state) => {
            state.isLoggedIn = true
        },
        loggingout: (state) => {
            state.isLoggedIn = false
        }
         
    }
});

export default loginSlice.reducer
export const {loggingin, loggingout} = loginSlice.actions