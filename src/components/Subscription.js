import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
// import './Subscription.css';

const Subscription = () => {
    const navigate=useNavigate();
    const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
   
    const subscriptions = [
        {id: 1, type: "Free", posts: "1 post/day", price: "$0"},
        {id: 2, type: "Standard", posts: "3 posts/day", price: "$3"},
        {id: 3, type: "Premium", posts: "10 posts/day", price: "$10"},
    ]
   const handleClick=()=>
   {
navigate('/stripecheckout')
   }
//    useEffect(()=>{
//     if(isLoggedIn)
//     {

//     }
//     else{
//         navigate('/login');
//     }
//    },[])
    return (
        <div className='container'>
   <div className="subscription-page">
            <h1>Choose your Subscription</h1>
            <div className="subscription-cards">
                {subscriptions.map(subscription => (
                    <div className="subscription-card" key={subscription.id}>
                        <h2>{subscription.type}</h2>
                        <p>{subscription.posts}</p>
                        <h3>{subscription.price}</h3>
                        <button onClick={()=>{handleClick()}}>Select</button>
                    </div>
                ))}
            </div>
        </div>
        </div>
     
    );
}

export default Subscription;
