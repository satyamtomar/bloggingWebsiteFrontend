import React, { useContext, useEffect, useState } from 'react';
import EditModal from './EditModal';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
// import './Profile.css';

const Profile = () => {
    const navigate=useNavigate();

    const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);

    useEffect(()=>{
     if(isLoggedIn)
     {

     } 
     else{
        navigate('/login');
     } 
    },1000);
    const user = {
        name: 'John Doe',
        bio: 'A passionate blogger and a enthusiastic sports follower',
        profilePicture: '/assets/img/img1.png',  // URL to profile picture
    };
   
    const posts = [
        { title: 'My first blog post', date: '2023-07-30' },
        // Other posts...
    ];
    const [isEditModalOpen,setIsEditModalOpen]=useState(false);
    const [profileDetails,setProfileDetails]=useState({fullName:'Satyam Tomar',email:"saitamaitachi123@gmail.com",password:'12345',dob:'10th Aug, 2001'})
    const handleEdit=()=>
    {
   setIsEditModalOpen(!isEditModalOpen);

    }

    function handleClickPost()
    {
        navigate('/mypost');
    }
    return (
        <div className='container'>
            {
                isEditModalOpen&&<EditModal 
            isOpen={isEditModalOpen}
            closeModal={()=>{setIsEditModalOpen(false);}}
            details={profileDetails}
            setDetails={setProfileDetails}
           
            />}
    <div className="profile-container">
            <div className="profile-header">
                <img src={user.profilePicture} alt={user.name} className="profile-pic" />
                <h2 className="profile-name">{user.name}</h2>
                <p className="profile-bio">{user.bio}</p>
            </div>
            {/* <div className="profile-posts">
                <h3>My Blog Posts:</h3>
                {posts.map((post, index) => (
                    <div key={index} className="post">
                        <h4>{post.title}</h4>
                        <p>{post.date}</p>
                    </div>
                ))}
            </div> */}
            <div className='blog-container'>
            <h3>My Blog Posts:</h3>
            <div className='blog-item'>
              
              
              <div className='blog-top'>
               <div className='blog-author-name'>   
               <span>Satyam Tomar</span>
               <img src='/assets/img/img1.png' className='blog-author-img'/>
               </div>
               <div  className='blog-creation-day'>
                <span>2 days ago</span>
               </div>
              </div>
              <div className='blog-description'>
                <div className='blog-desc-text-div'>
                    <div className='blog-desc-title'>Title is this</div>
                    <div className='blog-desc-text'>
                    dsadsfasd  afsdsad dasfs adf afds adfs adsf aaewfdasd asdtae aeaaefww aeaewg asdfsaas asdfasd asdfas asdfas adfase eaf
              dsadsfasd  afsdsad dasfs adf afds adfs adsf aaewfdasd asdtae aeaaefww aeaewg asdfsaas asdfasd asdfas asdfas adfase eaf
              dsadsfasd  afsdsad dasfs adf afds adfs adsf aaewfdasd asdtae aeaaefww aeaewg asdfsaas asdfasd asdfas asdfas adfase eaf
                    </div>
               
                </div>
             
          <div className='blog-desc-img-div'>
            <img src='/assets/img/img1.png' className='blog-desc-img'/>
          </div>
              </div>
              <div className='blog-myposts-footer'>
               
               <div className='blog-type-read'>
                 <span className='blog-type'>Poetry</span>
               
               <span>2min read</span>   
                </div>

                <div className='blog-special-insights'>

                <span>1000 Likes </span>
                <span>100 Comments </span>
                <span>20000 Views </span>
                    <button className='blog-edit-btn'>Edit</button>
                </div>
              </div>
              </div>
      
   
      
</div>
            <div className="profile-submit-button">
                <button type="submit" onClick={()=>{handleClickPost()}}>Open all of my post</button>
                <button type="submit" onClick={handleEdit}>Edit Profile</button>
            </div>
        </div>
        </div>
    
    );
};

export default Profile;
