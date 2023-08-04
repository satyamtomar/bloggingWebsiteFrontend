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
function App() {
  return (
    <>
    <Router>
   {/* <Header/> */}
   <Navbar/>
             <Routes>
         <Route exact path="/" key="Home"  element={<Home/>} />
        
          
         <Route exact path="/login" key="Login"  element={<Login/>} />
        
          <Route exact path="/blog" key="Blog"  element={<Blog/>} />
        
         <Route exact path="/signup" key="SignUp"  element={<SignUp/>} />
        
         <Route exact path="/profile" key="profile"  element={<Profile/>} />
        
         <Route exact path="/writeblog" key="WriteBlog"  element={<WriteBlog/>} />
          

         {/* <Route exact path='/movieDetails/:id' key="movieDetails" element={<MovieDetails/>}/> */}
          
         </Routes>
         </Router>
         
         </>
  );
}

export default App;
