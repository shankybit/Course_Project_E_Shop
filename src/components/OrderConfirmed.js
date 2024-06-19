import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {empty} from './AddToCartSlice.js';
import Navigation from './Navigation.js';

function OrderConfirmed() {

    // const cartValue = useSelector((state) => state.cart.cartValue);
    // const cartArray = useSelector((state) => state.cart.cartArray);
    // const totalCartValue = useSelector((state) => state.cart.totalCartArray);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const orderConfirm = () => {
        alert("Your order is successfully placed");
        navigate('/products')

        dispatch(empty());
    }

    const { state } = useLocation();
  return (
    <div>
        <Navigation></Navigation>
    
    <div className='container py-3' style={{border: '2px solid gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
        <p>{state.house}</p>
        <p>{state.street}</p>
        <p>{state.city}</p>
        <button className='btn btn-success' onClick={orderConfirm}>Order Confirmed</button>
    </div>
    </div>
  )
}

export default OrderConfirmed