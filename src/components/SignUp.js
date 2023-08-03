import React from 'react'

const SignUp = () => {
  return (
<div className='container'>
    <div className='signup-title'><h1>SignUp Page</h1></div>
<div className="signup-container">

    <div className='signup-form'>

    <div className='signup-name'>
            
            <span>Full Name</span>
            <input className='signup-fullname-input' placeholder='firstname' name='fullname' maxLength={20}/>
       
    </div>

    <div className='signup-email'>
            
            <span>Email</span>
            <input className='signup-fullname-input' type='email' placeholder='email' maxLength={20}/>
       
    </div>

    <div className='signup-password'>
            
            <span>Password</span>
            <input className='signup-fullname-input' type='password' placeholder='password' name='password' maxLength={20}/>
       
    </div>

    <div className='signup-password'>
            
            <span>Confirm Password</span>
            <input className='signup-fullname-input' type='password' placeholder='Confirm Password' name='confirmPassword' maxLength={20}/>
       
    </div>
  

        <div className='signup-submit'>
<button className='signup-submit-button'>Sign Up</button>
        </div>
    </div>
  </div>

</div>
    

  )
}

export default SignUp