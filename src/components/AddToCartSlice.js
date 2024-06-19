import {createSlice }from '@reduxjs/toolkit';


const initialState = {
    cartValue: 0,
    cartArray: [],
    totalCartValue: 0,
    
}

const addToCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        adding: (state, action) => {
            state.cartValue += 1
            state.cartArray.push(action.payload);
            action.payload.singleproductvalue = action.payload.price
            state.totalCartValue += action.payload.price;

            action.payload.quantity--;
            
        },
        deleting: (state, action) => {
            state.cartValue -= 1
            // const indexValue = state.cartArray.findIndex((product) => product.id === action.payload.id);
            state.totalCartValue -= state.cartArray[action.payload].singleproductvalue;
            state.cartArray[action.payload].quantity += state.cartArray[action.payload].buyquantity;
            state.cartArray.splice(action.payload, 1);
            
        },
        increasingquantity: (state, action) => {
            if(state.cartArray[action.payload].quantity >= 1){
                state.cartArray[action.payload].buyquantity++;
                state.cartArray[action.payload].quantity--;
                state.cartArray[action.payload].singleproductvalue += state.cartArray[action.payload].price;
                state.totalCartValue += state.cartArray[action.payload].price;
            }else{
                alert("Maximum bought per order");
            }
        },
        decreasingquantity: (state, action) => {
            if(state.cartArray[action.payload].buyquantity > 1){
                state.cartArray[action.payload].buyquantity--;
                state.cartArray[action.payload].quantity++;
                state.cartArray[action.payload].singleproductvalue -= state.cartArray[action.payload].price;
                state.totalCartValue -= state.cartArray[action.payload].price
            }else if(state.cartArray[action.payload].buyquantity === 1){
                state.cartValue -= 1;
                state.cartArray[action.payload].quantity++;
                state.totalCartValue -= state.cartArray[action.payload].price;
                state.cartArray.splice(action.payload, 1);
                
            }
        },
        empty: (state) => {
            state.cartValue = 0;
            state.totalCartValue = 0;
            while(state.cartArray.length > 0){
                state.cartArray.pop();
            };
            
        }

    }
});

export default addToCartSlice.reducer
export const {adding, deleting, increasingquantity, decreasingquantity, empty} = addToCartSlice.actions

