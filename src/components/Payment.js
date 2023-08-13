// OrderForm.js
import React, { useContext, useState } from 'react';
import useRazorpay from "react-razorpay";
import { AuthContext } from '../context/AuthContext';

const OrderForm = () => {
    const [Razorpay] = useRazorpay();
  const [amount, setAmount] = useState(1); // Amount to be paid


  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
   
    const subscriptions = [
        {id: 1, type: "Basic", posts: "10 post/day",freq:10, price: 10},
        {id: 2, type: "Standard", posts: "30 posts/day",freq:30 ,price: 30},
        {id: 3, type: "Premium", posts: "10 posts/day",freq:100, price: 100},
    ]
  const handlePayment = async (price) => {
    //Considering 1Rs = 1Post
    // Create an order on your backend and get the Order ID
    const body = {
        amount: price*100,
        token: localStorage.getItem('token') 
       };
    const orderId = await fetch(`http://localhost:3000/create-order`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
        return res.json()
    }).then((res) => {
        if(res.status !== 200){
            console.log(res)
            //handle
        }else{
            return res.orderId
        }
    });

    // Initiate Razorpay payment
    const options = {
      key: 'rzp_test_7IZgK3XELZCVEm',
      amount: amount * 100, // Amount in paisa
      currency: 'INR',
      order_id: orderId,
      name: 'Your Company',
      description: 'Order payment',
      handler: async (response) => {
        response.token = localStorage.getItem('token');//Add token from localstorage to authtenticate user
        const serverResponse = await fetch(`http://localhost:3000/confirm-order`, {
            method: 'POST',
            body: JSON.stringify(response),
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((res) => {
              return res.json()
          })
          console.log(serverResponse)
      },
    };
    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <div className='container'>
      {/* <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      /> */}
      <div className="subscription-page">
            <h1>Choose your Subscription</h1>
            <div className="subscription-cards">
                {subscriptions.map(subscription => (
                    <div className="subscription-card" key={subscription.id}>
                        <h2>{subscription.type}</h2>
                        <p>{subscription.posts}</p>
                        <h3>{subscription.price} Rs</h3>
                        {/* <button onClick={()=>{handleClick()}}>Select</button> */}
                        <button onClick={()=>handlePayment(subscription.price)}>Pay Now</button>
                    </div>
                ))}
            </div>
        </div>
        
    
    </div>
  );
};

export default OrderForm;
