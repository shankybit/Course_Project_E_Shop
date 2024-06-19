import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Navigation from './Navigation';

const useInput = (initialValue) => {
    const [value, setValue] = useState('');
  
    const onChange = (event) => {
        setValue(event.target.value);
    }
  
    return {value, onChange};
  }

function AdressComponent() {

    const navigate = useNavigate();

    const houseno = useInput('');
    const street = useInput('');
    const city = useInput('');

    const totalCartValue = useSelector((state) => state.cart.totalCartValue);

    const handleClick = () => {
        let houseadd = document.getElementById('houseadd').value.trim();
        let streetadd = document.getElementById('streetadd').value.trim();
        let cityadd = document.getElementById('cityadd').value.trim();

        if(houseadd === '' && streetadd === '' && cityadd === ''){
            navigate('/orderconfirmed', {state: {house: 'B-310', street: 'malabar hills', city: 'mumbai'}});
        }else{
            navigate('/orderconfirmed', {state: {house: houseadd, street: streetadd, city: cityadd}});
        }
        
    }

  return (
    <div>
        <Navigation></Navigation>
    
    <div style={{display: 'flex', flexDirection: 'column', border: '2px solid gray', marginTop: '10%'}} className='container py-2 px-2' >
        <select id='addressselect' className='my-2'>
            <option value='addrress'>House: B-101, Street: Pitampura, City: Delhi</option>
        </select>
        <input type='text' value={houseno.value} onChange={houseno.onChange} id='houseadd' placeholder='Enter the House No' className='my-2'/>
        <input type='text' value={street.value} onChange={street.onChange} id='streetadd' placeholder='Enter the Street Number' className='my-2' />
        <input type='text' value={city.value} onChange={city.onChange} id='cityadd' placeholder='Enter the city' className='my-2' />
        <h3>{totalCartValue}</h3>
        <button className='btn btn-success my-2' onClick={handleClick}>Place Order</button>
    </div>
    </div>
  )
}

export default AdressComponent