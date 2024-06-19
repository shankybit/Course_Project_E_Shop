import React from 'react';
import Navigation from './Navigation';
import { SDaata } from './SDaata';
import {useSelector, useDispatch} from 'react-redux';
import {deleting} from './AddToCartSlice';
import { increasingquantity, decreasingquantity } from './AddToCartSlice';
import {useNavigate} from 'react-router-dom';



function Carts() {


    const navigate = useNavigate();

    const cartArray = useSelector((state) => state.cart.cartArray);
    const dispatch = useDispatch();
   
    const totalCartValue = useSelector((state) => state.cart.totalCartValue);

    const addQuantityByOne = (itemId) => {
        const indexValue = cartArray.findIndex((product) => product.id === itemId);
        dispatch(increasingquantity(indexValue));
        
      }
    
    const decreaseQuantityByOne = (itemId) => {
        const indexValue = cartArray.findIndex((product) => product.id === itemId);
        dispatch(decreasingquantity (indexValue));

    }

    const clickHandle = () => {
        navigate('/address')
    }

    
    const deleteItems = (itemId) => {

        // const updatedItems = (itemId) => {
        //     CartProductData.filter((item) => {
        //         return item.id !== itemId
        //     })
        // }
        // setItems(updatedItems);

        var object = SDaata.find((object) => object.id === itemId)
        if(SDaata.includes(object) && object['quantity'] > 0){
            object['quantity'] = object['quantity'] + 1;
        }else{
            SDaata.push(object);
        }

        const indexValue = cartArray.findIndex((product) => product.id === itemId)
       
        dispatch(deleting(indexValue))
        
    }

   return (
    <div>
        <Navigation></Navigation>
    <div className='flex flex-column justify-content-center align-items-center' style={{marginLeft: '40%',  }}>
        {cartArray.map((item ) => (
      <div className='card card-horizontal px-2 py-2 mx-2 my-2 card-vertical-sm' style={{maxWidth: '300px'}} key={item.id}>
        <img src={item.imge} alt='Img of airpod' className='card-img' />
        <div className='card-body'>
          <h5>{item.title}</h5>
          <div className='flex flex-row'><h6>Rs.{item.buyquantity > 1 ? item.singleproductvalue : item.price}</h6><button className='btn btn-warning' onClick={() => deleteItems(item.id)}>Remove From Cart</button></div>
          <p >{item.category}</p>
          <p>{item.buyquantity}<button className='btn btn-secondary' onClick={() => addQuantityByOne(item.id)}><h4 className='text-white'>+</h4></button><button className='btn btn-secondary' onClick={() => decreaseQuantityByOne(item.id)}><h4 className='text-white'>-</h4></button></p>
         
        </div>
      </div>
      ))
      }
      <h3>{totalCartValue}</h3>
      <button className='btn btn-success' onClick={clickHandle}>Proceed to Checkout</button>
    </div>
    </div>
  )
}

export default Carts