import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import {toast,ToastContainer} from 'react-toastify'
import { AuthContext } from '../context/AuthContext';
const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
  const [details,setDetails]=useState([]);
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);

  const navigate=useNavigate();
 
  const handleLogin=async()=>{
         let payload={
             email,
             password,
             password_confirmation:confirmPassword
          }
 
 //          SignUpAction.userSignUp(payload,(err,res)=>{
 //             if(err){
 //          toast('error occured');
 //             }else{
 //                console.log(res);
 //             //    setTimeList(res.data);
 
 //             toast('successful signin');
 //             localStorage.setItem('token','w33fw333e');
 //  setTimeout(()=>{navigate('/profile')},1000);
 //             }
 //          })
 
 
 
 toast('successful signin');
 localStorage.setItem('token','w33fw333e');
 setIsLoggedIn(true);
 setTimeout(()=>{navigate('/profile')},1000);
     }
     // const handleChangeDetails = (e) => {
     //     setDetails({
     //       ...details,
     //       [e.target.name]: e.target.value,
     //     });
     //   };
     useEffect(() => {
     //    handleSignUp();
     if(localStorage.getItem('token'))
     {
        
        navigate('/');
        
     }
     }, [])
   
  return (
    <div className='container'>
        <ToastContainer theme='dark'/>
<div className="login-container">
<div className='login-title'><h1>Login Page</h1></div>
    <div className='login-form'>

  
    <div className='login-email'>
            
            <span>Email</span>
            <input className='signup-fullname-input' type='email' placeholder='email' maxLength={20}/>
       
    </div>

    <div className='login-password'>
            
            <span>Password</span>
            <input className='login-fullname-input' type='password' placeholder='password' name='password' maxLength={20}/>
       
    </div>

  

        <div className='login-submit'>
<button className='login-submit-button' onClick={handleLogin}>Login</button>
        </div>
    </div>
  </div>

</div>
  )
}

export default Login