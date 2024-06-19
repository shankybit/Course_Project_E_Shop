import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Login} from './components/Login.js';
import {SignUp} from './components/SignUp.js';
import Products from './components/Products.js';
import ProductAddingForm  from "./components/ProductAddingForm.js";
import Carts from './components/Carts.js';
import {Provider} from 'react-redux';
import store from './components/Store.js'
import ProductEditForm from "./components/ProductEditForm.js";
import AdressComponent from './components/AdressComponent.js';
import OrderConfirmed from "./components/OrderConfirmed.js";



function App() {

  useEffect(() => {

  })

  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path='/products' element={<Products />} />
        </Routes>
        <Routes>
          <Route path='/carts' element={<Carts />} />
        </Routes>
        <Routes>
          <Route path='/productform' element={<ProductAddingForm />} />
        </Routes>
        <Routes>
          <Route path='/productedit' element={<ProductEditForm />} />
        </Routes>
        <Routes>
          <Route path='/address' element={<AdressComponent />}/>
        </Routes>
        <Routes>
          <Route path="/orderconfirmed" element={<OrderConfirmed />} />
        </Routes>
        </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
