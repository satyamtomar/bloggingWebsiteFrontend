import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import {toast,ToastContainer} from 'react-toastify'
import { AuthContext } from '../context/AuthContext';
import LoginAction from '../actions/Login.Action';
import ProfileAction from '../actions/Profile.Action';
const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
  const [details,setDetails]=useState([]);
  const {isLoggedIn,setIsLoggedIn,userProfileDetails,setUserProfileDetails}=useContext(AuthContext);
 
  const navigate=useNavigate();
 
  const handleLogin=async()=>{
         let payload={
             email,
             password,
            //  password_confirmation:confirmPassword
          }
 
          LoginAction.userLogin(payload,(err,res)=>{
             if(err){
          toast(err);
             }else{

              if(res.status==200)
              {
                console.log(res);
             //    setTimeList(res.data);
 
             toast('successful login');
             
             localStorage.setItem('token',res.userDetails.token);
             localStorage.setItem('id',res.userDetails.id);
             setUserProfileDetails(res.userDetails);
             setIsLoggedIn(true);
             let pay={token:localStorage.getItem('token'),user_id:localStorage.getItem('id')}
             ProfileAction.getUserDetails(pay,(err,res)=>{
                     if(err)
                     {
                     toast(err);
                     }
                     else
                     {
                             if(res.status==200)
                                        setUserProfileDetails(res.profile) 

                                        else
                                        toast(res.message);
                     }
             })
           
  setTimeout(()=>{navigate('/profile')},1000);
              }
              else{
                toast(res.msg);
              }
             }
          })
 
 
 
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
            <input className='signup-fullname-input' type='email' placeholder='email' maxLength={20} onChange={(e)=>{setEmail(e.target.value);}}/>
       
    </div>

    <div className='login-password'>
            
            <span>Password</span>
            <input className='login-fullname-input' type='password' placeholder='password' name='password' maxLength={20} onChange={(e)=>{setPassword(e.target.value);}}/>
       
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