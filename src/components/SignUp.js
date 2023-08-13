import React, { useContext, useEffect, useState } from 'react'
import SignUpAction from '../actions/SignUp.Action';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import ProfileAction from '../actions/Profile.Action';

const SignUp = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [details, setDetails] = useState([]);
        const navigate = useNavigate();
        const { isLoggedIn, setIsLoggedIn,userProfileDetails,setUserProfileDetails } = useContext(AuthContext);
        const handleSignUp = async () => {
                let payload = {
                        email,
                        password,
                        //     password_confirmation:confirmPassword
                }

                SignUpAction.userSignUp(payload, (err, res) => {
                        if (err) {
                                toast(err);
                        } else {
                                if (res.status == 200) {


                                        console.log(res);
                                        //    setTimeList(res.data);

                                        toast('successful signin');
                                        localStorage.setItem('token', res.userDetails.token);
                                        localStorage.setItem('id',res.userDetails.id);
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
                                        setTimeout(() => { navigate('/profile') }, 1000);
                                }
                                else {
                                        toast(res.msg);
                                }
                        }
                })



                // toast('successful signin');
                // localStorage.setItem('token','w33fw333e');
                // setIsLoggedIn(true);
                // setTimeout(()=>{navigate('/profile')},1000);
        }
        // const handleChangeDetails = (e) => {
        //     setDetails({
        //       ...details,
        //       [e.target.name]: e.target.value,
        //     });
        //   };
        useEffect(() => {
                //    handleSignUp();
                if (localStorage.getItem('token')) {
                        navigate('/');
                }
        }, [])

        return (

                <div className='container'>
                        <ToastContainer />
                        <div className='signup-title'><h1>SignUp Page</h1></div>
                        <div className="signup-container">

                                <div className='signup-form'>

                                        {/* <div className='signup-name'>
            
            <span>Full Name</span>
            <input className='signup-fullname-input' placeholder='firstname' name='fullname' maxLength={20}/>
       
    </div> */}

                                        <div className='signup-email'>

                                                <span>Email</span>
                                                <input className='signup-fullname-input' type='email' placeholder='email' maxLength={20} onChange={(e) => { setEmail(e.target.value) }} />

                                        </div>

                                        <div className='signup-password'>

                                                <span>Password</span>
                                                <input className='signup-fullname-input' type='password' placeholder='password' name='password' maxLength={20} onChange={(e) => { setPassword(e.target.value) }} />

                                        </div>

                                        {/* <div className='signup-password'>
            
            <span>Confirm Password</span>
            <input className='signup-fullname-input' type='password' placeholder='Confirm Password' name='confirmPassword' maxLength={20} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
       
    </div> */}


                                        <div className='signup-submit'>
                                                <button className='signup-submit-button' onClick={handleSignUp}>Sign Up</button>
                                        </div>
                                </div>
                        </div>

                </div>


        )
}

export default SignUp