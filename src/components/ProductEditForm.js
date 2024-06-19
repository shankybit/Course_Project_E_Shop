import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import {SDaata} from './SDaata';
import {useNavigate} from 'react-router-dom';

const useInput = (initialValue) => {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return {value, onChange};
}


function ProductEditForm() {

    const navigate = useNavigate()

    // const [price, setPrice] =useState('');
    const { state } = useLocation();


    
    const handleSubmit = (e) => {
        e.preventDefault();
        let priceproduct = document.getElementById('priceproduct').value;
        let quantityproduct = document.getElementById('quantityproduct').value;
        const indexValue = state.id - 1;
        SDaata[indexValue] = {
            id: indexValue+1,
            title: state.title,
            imge: state.imge,
            price: priceproduct,
            category: state.category,
            quantity: quantityproduct
        }

        navigate('/products')
    }

    // const id = useInput(state.id)
    // const title = useInput(state.title)
    // const imge = useInput(state.imge)
    const price = useInput(state.price)
    // const category = useInput(state.category)
    const quantity = useInput(state.quantity)

    return (
        <div  >
            <form className='form form-control px-3 py-3 bg-secondary' style={{maxWidth: '500px', marginLeft: '30%', marginTop: '5%'}} onSubmit={handleSubmit}>
            <input required type='text' placeholder='Enter the product name' className='my-3 form-control' value={state.title} />
            <select className='px-2 py-2 mx-2 my-2' value={state.category} >
                <option value='apparel' >Apparel</option>
                <option value='electronics'>Electronics</option>
                <option value='personal_care'>Personal Care</option>
                <option value='furniture'>Furniture</option>
            </select>
            <input required type='text' className='form-control my-3' placeholder='Name of the Manufacturer' />
            <input required type='number' className='form-control my-3' placeholder='Available Items' value={quantity.value} onChange={quantity.onChange} id='quantityproduct'/>
            <input required type='number' className='form-control my-3' placeholder='Price' value={price.value} onChange={price.onChange} id='priceproduct'/>
            <input required type='text' className='form-control my-3' placeholder='Image URL' value={state.imge} />
            <input required type='text' className='form-control my-3' placeholder='Product Description'  />
            <button type='submit' value='submit' className='btn btn-primary my-3' >SAVE PRODUCT</button>
        </form>
        </div>
      )
}

export default ProductEditForm