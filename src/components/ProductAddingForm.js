import React,{useState} from 'react';
import {SDaata} from './SDaata.js'
import {useNavigate} from 'react-router-dom';

const useInput = (initialValue) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
      setValue(event.target.value);
  }

  return {value, onChange};
}

function ProductAddingForm() {

  const navigate = useNavigate()

  const title = useInput('');
  const category = useInput('')
  const manufacturer = useInput('')
  const quantity = useInput('')
  const price = useInput('')
  const imge = useInput('')
  const description = useInput('')

    const handleSubmit = (e) => {
        e.preventDefault();
        var x = SDaata.length
        SDaata.push({
          id: x,
          title: title.value,
          imge: imge.value,
          price: price.value,
          category: category.value
        })
        navigate('/products');
    }
  return (
    <div  >
        <form className='form form-control px-3 py-3 bg-secondary' style={{maxWidth: '500px', marginLeft: '30%', marginTop: '5%'}} onSubmit={handleSubmit}>
        <input required type='text' placeholder='Enter the product name' className='my-3 form-control' value={title.value} onChange={title.onChange} />
        <select className='px-2 py-2 mx-2 my-2' value={category.value} onChange={category.onChange}>
            <option value='apparel' >Apparel</option>
            <option value='electronics'>Electronics</option>
            <option value='personal_care'>Personal Care</option>
            <option value='furniture'>Furniture</option>
        </select>
        <input required type='text' className='form-control my-3' placeholder='Name of the Manufacturer' value={manufacturer.value} onChange={manufacturer.onChange}/>
        <input required type='number' className='form-control my-3' placeholder='Available Items' value={quantity.value} onChange={quantity.onChange} />
        <input required type='number' className='form-control my-3' placeholder='Price' value={price.value} onChange={price.onChange} />
        <input required type='text' className='form-control my-3' placeholder='Image URL' value={imge.value} onChange={imge.onChange}/>
        <input required type='text' className='form-control my-3' placeholder='Product Description' value={description.value} onChange={description.onChange} />
        <button type='submit' value='submit' className='btn btn-primary my-3' >SAVE PRODUCT</button>
    </form>
    </div>
  )
}

export default ProductAddingForm