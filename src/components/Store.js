import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './LoginSlice.js'
import adminLoginReducer from './AdminLoginSlice.js'
import addToCartReducer from './AddToCartSlice.js'



const store = configureStore({
    reducer: {
        login: loginReducer,
        adminlogin: adminLoginReducer,
        cart: addToCartReducer
    },
})

export default store