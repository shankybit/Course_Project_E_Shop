import React, {useState} from 'react';
import Navigation from './Navigation.js';
import Data from './Data.js';
import Products from './Products.js';
import {useSelector, useDispatch} from 'react-redux';
import {loggingin} from './LoginSlice';
import {adminloggingin} from './AdminLoginSlice';


const useInput = (initialValue) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
      setValue(event.target.value);
  }

  return {value, onChange};
}


export function Login() {


  const email = useInput('');
  const password = useInput('');

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
  const isAdminLoggedIn = useSelector((state) => state.adminlogin.isAdminLoggedIn)
  const dispatch = useDispatch()

  const [activeone, setActiveone] = useState(false);
  const [activetwo, setActivetwo] = useState(false);
  // var dataaddress;

  const handleSubmit = (e) => {
    e.preventDefault();

    let ema = document.getElementById('ema').value;
    let pswd = document.getElementById('pswd').value;

    var object = Data.find((object) => object.email === ema)
      if(Data.includes(object) && object['email'] === 'admin@gmail.com' && object['password'] === 'admin123'){
          setActiveone(true);
          setActivetwo(true);
          dispatch(loggingin());
          dispatch(adminloggingin());

      }else if(Data.includes(object) && object['password'] === pswd){
          setActiveone(true);
          dispatch(loggingin());
      }
      //  dataaddress = {address: {house: object.address.house, street: object.address.street, city: object.address.city}};
       
    }

  return (
    <div>
        <div>
          <Navigation dispone={isLoggedIn} disptwo={isAdminLoggedIn}></Navigation>
        </div>
      <div style={{ 
     display: !(activeone || isLoggedIn || isAdminLoggedIn)? 'contents' : 'none'}} >
        <form className='form form-control bg-secondary px-2 py-2' onSubmit={handleSubmit} style={{maxWidth: '500px',marginTop: '5%', 
    marginLeft: '30%'}} >
        <input type='email' placeholder='Enter your email' id='ema' className='form-control my-3' value={email.value} onChange={email.onChange} />
        <input type='password' placeholder='Enter your password' id='pswd' className='form-control my-3' value={password.value} onChange={password.onChange} />
        <button type='submit' value='submit' className='btn btn-primary my-3'>SUBMIT</button>
        </form>
      </div>
      <div style={{display : activeone || activetwo ? 'contents' : 'none'}}>
      <Products productDisplay={isLoggedIn || isAdminLoggedIn} productEditable={isAdminLoggedIn}></Products>
      </div>
    </div>
  )
}
