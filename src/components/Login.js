import React from 'react'

const Login = () => {
  return (
    <div className='container'>
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
<button className='login-submit-button'>Login</button>
        </div>
    </div>
  </div>

</div>
  )
}

export default Login