import React, {useState} from 'react';
import Data from './Data.js';
import {Login }from './Login.js';
import Navigation from './Navigation.js'

const useInput = (initialValue) => {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return {value, onChange};
}



export function SignUp() {

    

    const firstname = useInput('');
    const lastname = useInput('');
    const emails = useInput('');
    const passwordone = useInput('');
    const passwordtwo = useInput('');


  const [text, setText] = useState('')
  const [textis, setTextis] = useState('')
  const [texto, setTexto] = useState('')
  const [isactive, setIsactive] = useState(false)
  const [isactiveo, setIsactiveo] = useState(false)
  
  const changeHandle = () => {
     var pswd = document.getElementById('pswd').value
     
     var flag = 1
     
      if(!(/^(?=.*[0-9])/).test(pswd)){
          setText("enter atleast a digit")
          setIsactive(false)
          flag = 0;
      }else if(!(/^(?=.*[!@#$%^&*])/).test(pswd)){
      
          setText("enter atleast one special character")
          setIsactive(false)
          flag = 0;
      }else if(!(/^(?=.*[a-z])/).test(pswd)){
          
          setText("should contain at least one lower case")
          setIsactive(false)
          flag = 0;
      }else if(!(/^(?=.*[A-Z])/).test(pswd)){
          
          setText("should contain at least one upper case")
          setIsactive(false)
          flag = 0;
      }else if(pswd.length < 8){
          
          setText("should be more than 8 characters")
          setIsactive(false)
          flag = 0;
      }else{
          setText("strong password")
          setIsactive(true)
          flag = 1;
      }
      if(flag){
          return true;
      }else{
          return false;  
      }

  }
  
  const changeHandleo = () => {
     var pswdo = document.getElementById('pswdo').value
     
     var flag = 1
     
      if(!(/^(?=.*[0-9])/).test(pswdo)){
          setTexto("enter atleast a digit")
          setIsactiveo(false)
          flag = 0;
      }else if(!(/^(?=.*[!@#$%^&*])/).test(pswdo)){
      
          setTexto("enter atleast one special character")
          setIsactiveo(false)
          flag = 0;
      }else if(!(/^(?=.*[a-z])/).test(pswdo)){
          
          setTexto("should contain at least one lower case")
          setIsactiveo(false)
          flag = 0;
      }else if(!(/^(?=.*[A-Z])/).test(pswdo)){
          
          setTexto("should contain at least one upper case")
          setIsactiveo(false)
          flag = 0;
      }else if(pswdo.length < 8){
          
          setTexto("should be more than 8 characters")
          setIsactiveo(false)
          flag = 0;
      }else{
          setTexto("strong password")
          setIsactiveo(true)
          flag = 1;
      }
      if(flag){
          return true;
      }else{
          return false;  
      }

  }

  const [activetwo, setActivetwo] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    var pswd = document.getElementById('pswd').value;
    var pswdo = document.getElementById('pswdo').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let ema = document.getElementById('ema').value;
    if(pswd!==pswdo){
       
        setTextis("password not matched")
    }else{
        Data.push(
            {
            firstname: fname,
            lastname: lname,
            email: ema,
            password: pswd
            }
        );
        setActivetwo(true)

    }

  }
  return (
    <div>
        <div style={{display: !activetwo ? 'contents' : 'none'}}>
        <Navigation></Navigation>
        </div>
      <div style={{ display: !activetwo ? 'contents' : 'none'}}>
      <form className='px-2 py-2 form form-control py-2 px-2 bg-secondary' onSubmit={handleSubmit}  style={{maxWidth: '500px',marginTop: '5%', 
    marginLeft: '30%'}}>
      <input required type='text' placeholder='Enter your First Name' id='fname' className='form-control my-3' value={firstname.value} onChange={firstname.onChange} />
      <input required type='text' placeholder='Enter your Last Name' id='lname' className='form-control my-3' value={lastname.value} onChange={lastname.onChange} />
      <input required type='email' placeholder='Enter your email' id='ema' className='form-control my-3' value={emails.value} onChange={emails.onChange} />
      <input required type='password' placeholder='Enter your password' id='pswd' className='form-control my-3' onKeyUp={changeHandle} value={passwordone.value} onChange={passwordone.onChange}  />
      <p style={{color:isactive ? 'green' : 'red'}}>{text}</p>
      <input required type='password' placeholder='Confirm your password' id='pswdo' className='form-control my-3' onKeyUp={changeHandleo} value={passwordtwo.value} onChange={passwordtwo.onChange} />
      <p style={{color:isactiveo ? 'green' : 'red'}}>{texto}</p>
      <button className='btn btn-primary my-3' type='submit' value='submit' >SUBMIT</button>
      <p>{textis}</p>
      </form>
      </div>
      <div style={{display: activetwo ? 'contents' : 'none'}}>
        <Login></Login>
      </div>
    </div>
    
  )
}
