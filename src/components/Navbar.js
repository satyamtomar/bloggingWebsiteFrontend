// React Component
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <div className='nav-left'>
            <div className="nav-logo">
           <Link to='/'><img src='/assets/img/img1.png' className='nav-logo-img'/></Link>     
                </div>
            <div className='nav-search'>
                {/* <input className='search-bar' placeholder='Search'/> */}
                <SearchBar/>
            </div>
            </div>
            
            <div className="nav-right">
                {/* <Link to="/">Home</Link> */}
                <div className='nav-write-blog'>
                    
            <Link to='/writeblog' className='nav-link' >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg> 
 </Link>
 <Link to='/writeblog' className='nav-link'>
          
 <span>Write</span>
                </Link>        
                
                    </div>
          
                {/* <Link to="/contact">Contact</Link> */}
                <Link to='/signup'><button className='nav-signup-btn'>Sign Up</button></Link>
              <Link to='/login'>  <button className='nav-login-btn'>Login</button></Link>
              <Link to="/profile" className='nav-about-link' ><span className='nav-profile-btn'>Me</span></Link>
            </div>


            
        </nav>

<nav className="navbar-mobile">
<div className='nav-left'>
<div className="nav-logo">
<Link to='/'><img src='/assets/img/img1.png' className='nav-logo-img'/></Link>     
    </div>
<div className='nav-search'>
    {/* <input className='search-bar' placeholder='Search'/> */}
    <SearchBar/>
</div>
</div>

<div className="nav-right">
    {/* <Link to="/">Home</Link> */}
    <div className='nav-write-blog'>
        
<Link to='/writeblog' className='nav-link' >
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg> 
</Link>
    <Link to='/login'>  <button className='nav-login-btn'>Login</button></Link> 
  
        </div>

    {/* <Link to="/contact">Contact</Link> */}
    <Link to='/signup'><button className='nav-signup-btn'>SignUp</button></Link>
  <Link to="/profile" className='nav-about-link' ><span className='nav-profile-btn'>Me</span></Link>
  
</div>



</nav>
        </>
      
    )
}

export default Navbar;
