import React, {useState} from 'react';
import {SDaata} from './SDaata.js';
import Navigation from './Navigation.js';
import {FaEdit, FaTrash} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {adding} from './AddToCartSlice.js';



function Products({productDisplay, productEditable}) {

  const navigate = useNavigate()
  const [items, setItems] = useState(SDaata);
  const [selectedItems, setSelectedItems] = useState('default');

  const cartValue = useSelector((state) => state.cart.cartValue);
  
  const dispatch = useDispatch();

  const filterItem = (categoryItem) => {
    const updatedItems = SDaata.filter((item) => {
      return item.category === categoryItem;
    })

    setItems(updatedItems);
  }

  const editHandle = (itemId) => {
    var object = SDaata.find((object) => object.id === itemId);
    
    navigate('/productedit', {
      state:{
        id: object['id'],
        title: object['title'],
        imge: object['imge'],
        price: object['price'],
        category: object['category'],
        quantity: object['quantity']
      }
    })
  }

  const changeHandleOption = (e) => {
    setSelectedItems(e.target.value)
    let changess = document.getElementById('changess').value;
    let sortedProducts = SDaata.sort(
      (p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
    if(changess === 'lowtohigh'){
      setItems(sortedProducts.reverse());
    }else if(changess === 'hightolow'){
      setItems(sortedProducts);
    }else if(changess === 'default'){
      setItems(SDaata);
    }
      
  }

  const clickHandle = (itemId) => {
    var object = SDaata.find((object) => object.id === itemId)
    
    if(SDaata.includes(object) && object['quantity'] > 0){
      object['quantity'] = object['quantity'] - 1;
      
      
      dispatch(adding({
        id: object['id'],
        title: object['title'],
        imge: object['imge'],
        price: object['price'],
        category: object['category'],
        quantity: object['quantity'],
        buyquantity: object['buyquantity'],
        singleproductvalue: object['singleproductvalue']
        
    }));
    }
}

const deleteHandle = (itemId) => {

  const updatedItems = items.filter((item) => {
    return item.id !== itemId
  });
  alert("Confirm the item to be deleted");
  setItems(updatedItems);

}


    return (
    <div>
      <div style={{display : !productDisplay ? 'contents' : 'none'}}>
        <Navigation countprop={cartValue}></Navigation>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        <select style={{maxWidth: '450px', borderRadius: '8px', height: '50px', width: '200px', textAlign: 'center'}} className='my-2' onChange={changeHandleOption} id='changess' value={selectedItems}>
          <option value={'default'}>Default</option>
          <option value={'hightolow'}>High To Low</option>
          <option value={'lowtohigh'}>Low To High</option>
        </select>
      <div className='flex flex-wrap my-2 justify-content-center'>
        <button onClick={() => setItems(SDaata)} className='bg-white px-3 py-3' style={{border: '1px gray solid', borderRadius: '8px 0px 0px 8px'}}>All</button><button onClick={() => filterItem('apparel')} className='bg-white px-3 py-3' style={{border: '1px gray solid'}}>Apparel</button><button onClick={() => filterItem('electronics')} className='bg-white px-3 py-3' style={{border: '1px gray solid'}}>Electronics</button><button onClick={() => filterItem('personal_care')} className='bg-white px-3 py-3' style={{border: '1px gray solid', borderRadius: '0px 8px 8px 0px'}}>Personal Care</button>
      </div>
      </div>
      <div className='mx-2 my-2' style={{display: 'flex', flexWrap: 'wrap', }}>
      {items.map((item ) => (
      <div className='card px-2 py-2 mx-2 my-2' style={{width: '15%'}} key={item.id}>
        <img src={item.imge} alt='Img of airpod' className='card-img' />
        <div className='card-body'>
          <h5>{item.title}</h5>
          <div className='flex flex-row'><h6>Rs.{item.price}</h6><button className='btn btn-warning' onClick={() => clickHandle(item.id)}>Add To Cart</button></div>
          <p>{item.category}</p>
          <p className='flex justify-content-between' style={{display: productEditable ? 'contents' : 'none'}}><FaEdit onClick={() => editHandle(item.id)}></FaEdit><FaTrash onClick={() => deleteHandle(item.id)}></FaTrash></p>
        </div>
        <div style={{display: 'none'}}>
        </div>
      </div>
      ))
      }
   </div> 
    </div>
  )
}

export default Products