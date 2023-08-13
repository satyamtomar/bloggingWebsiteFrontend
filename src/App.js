import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/css/main.css';
import Login from './components/Login';
import Blog from './components/Blog';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import WriteBlog from './components/WriteBlog';
import Profile from './components/Profile';
import MyPosts from './components/MyPosts';
import Subscription from './components/Subscription';
import StripeCheckout from './components/StripeCheckout';
import EditPost from './components/EditPost';
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import ProfileAction from './actions/Profile.Action';
import { toast } from 'react-toastify';
function App() {
  const {isLoggedIn,setIsLoggedIn,userProfileDetails,setUserProfileDetails}=useContext(AuthContext);
  useEffect(()=>{

    if(localStorage.getItem('token'))
    {
        setIsLoggedIn(true);
let payload={
  token:localStorage.getItem('token'),
  user_id:localStorage.getItem('id')
}
        ProfileAction.getUserDetails(payload,(err,res)=>{

          if(err)
          {
          toast(err);
          }
          else
          {
           if(res.status==200)
           {
            setUserProfileDetails(res.profile);  
           }
           else
           {
            toast(res.msg);
           }
          }
        })
    }
    else{
        setIsLoggedIn(false);
    }
},[])
  return (
    <>
    <Router>
   {/* <Header/> */}
   <Navbar/>
             <Routes>
             <Route exact path="/" key="Home"  element={<Home/>} />
             <Route exact path="/mypost" key="MyPost"  element={<MyPosts/>} />
        
          
         <Route exact path="/login" key="Login"  element={<Login/>} />
        
          <Route exact path="/blog" key="Blog"  element={<Blog/>} />
        
         <Route exact path="/signup" key="SignUp"  element={<SignUp/>} />
        
         <Route exact path="/profile" key="profile"  element={<Profile/>} />
        
         <Route exact path="/writeblog" key="WriteBlog"  element={<WriteBlog/>} />
         <Route exact path="/subscription" key="Subscription"  element={<Subscription/>} />
         <Route exact path="/stripecheckout" key="Stripe"  element={<StripeCheckout/>} />
         <Route exact path="/editpost" key="EditPost"  element={<EditPost/>} />
          

         {/* <Route exact path='/movieDetails/:id' key="movieDetails" element={<MovieDetails/>}/> */}
          
         </Routes>
         </Router>
         
         </>
  );
}

export default App;
