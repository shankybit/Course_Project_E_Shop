import React, {useState} from 'react';
import { FaShoppingCart, FaSearch} from "react-icons/fa";
import {  Link } from "react-router-dom";
import LogOut from './LogOut.js';
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {loggingout} from './LoginSlice';
import {adminloggingout} from './AdminLoginSlice';







function Navigation({dispone, disptwo, countprop}) {

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
  const isAdminLoggedIn = useSelector((state) => state.adminlogin.isAdminLoggedIn)
  const dispatch = useDispatch()

  const [letter, setLetter] = useState('');
  const navigate = useNavigate();

  

  const changeHandle = (e) => {
    setLetter(e.target.value);
  }

  const productAddition = () => {

    navigate("/productform");
  }

  const logoutHandle = () => {
    dispatch(loggingout());
    dispatch(adminloggingout());
  }

  return (
    <div>
       <div className='header container-fluid bg-primary px-2 py-2' style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}} >
          <Link to='/products' className='text-white' style={{display: 'flex',justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center', width: '10vw', marginRight: '20px', }}>
          <p className='text-white' style={{marginBottom: '-0px'}}>upGrad E-shop</p>
          </Link>
          
          <div>
          <FaSearch style={{color: "white", marginRight: '-22px', marginTop: '-3px'}} />
              <input type='text' placeholder='Search' className='border rounded text-center' style={{backgroundColor: "white", opacity: '0.3', minWidth: '280px'}} onChange={changeHandle} value={letter}/>
          </div>
          <Link to='/carts'  className='text-white'><FaShoppingCart style={{color: "white"}} />{countprop}</Link>
          <div >
              <button style={{display: dispone || isLoggedIn ? 'contents' : 'none'}} className='btn btn-primary text-white'>Home</button>
              <button style={{display: disptwo || isAdminLoggedIn ? 'contents' : 'none'}} className='btn btn-primary text-white' onClick={productAddition}><div  className='text-white'>Add Product</div></button>
          </div>
          <div style={{ display: !((dispone || isLoggedIn) || (disptwo || isAdminLoggedIn)) ? 'contents' : 'none', width: '15vw', alignItems: 'center'}}>
            <button className='btn btn-primary'><Link to='/' className='text-white' >Login</Link></button>
            <button className='btn btn-primary'><Link to='signup' className='text-white' >Sign Up</Link></button>
          </div>
          <div style={{ display: ((dispone || isLoggedIn) || (disptwo || isAdminLoggedIn)) ? 'contents' : 'none'}}>
            <Link to='/products' className='text-white' ><LogOut onClick={logoutHandle}></LogOut></Link>
          </div>
      </div>
    </div>
  )
}

export default Navigation