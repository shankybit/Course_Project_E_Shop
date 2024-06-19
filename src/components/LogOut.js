import React from 'react';
import {loggingout} from './LoginSlice.js';
import {adminloggingout} from './AdminLoginSlice';
import {useDispatch} from 'react-redux'

function LogOut() {

  const dispatch = useDispatch()
  const logOutHandle = () => {
    dispatch(loggingout())
    dispatch(adminloggingout())
  }

  return (
    <button className='btn btn-danger' onClick={logOutHandle}>LOGOUT</button>
  )
}

export default LogOut