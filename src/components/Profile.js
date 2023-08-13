import React, { useContext, useEffect, useState } from 'react';
import EditModal from './EditModal';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import ProfileAction from '../actions/Profile.Action';
import BlogAction from '../actions/Blog.Action';
import { Link } from 'react-router-dom';
// import './Profile.css';

const Profile = () => {
    const navigate=useNavigate();

    const {isLoggedIn,setIsLoggedIn,userProfileDetails,setUserProfileDetails}=useContext(AuthContext);
     const [firstPost,setFirstPost]=useState([]);
    useEffect(()=>{
     if(isLoggedIn)
     {
        let payload={
            token:localStorage.getItem('token'),
            post_id:1
        }
           BlogAction.myBlogs(payload,(err,res)=>{
               
            if(err)
            {
                toast(err);

            }
            else
            {
                if(res.status==200)
                {
                    setFirstPost(res.posts);
                }
                else
                {
                    toast(res.msg);
                }
            }
           })
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
    const [profileDetails,setProfileDetails]=useState({name:userProfileDetails?.name,username:userProfileDetails?.username,about:userProfileDetails?.about})
    const handleEdit=()=>
    {
   setIsEditModalOpen(!isEditModalOpen);

    }

    function handleClickPost()
    {
        navigate('/mypost');
    }
    const handleDelete=async()=>{
 let payload={
    token:localStorage.getItem('token'),post_id:firstPost[0].id
 }
        BlogAction.deletePost(payload,(err,res)=>{

            if(err)
            {
                toast(err);
            }
            else
            {
                if(res.status==200)
                {
               toast(res.msg);
                }
                else
                {
toast(res.msg);
                }
            }
        })
    }
    return (
        <div className='container'>
            <ToastContainer/>
            {
                isEditModalOpen&&<EditModal 
            isOpen={isEditModalOpen}
            closeModal={()=>{setIsEditModalOpen(false);}}
            details={profileDetails}
            setDetails={setProfileDetails}
           
            />}
    <div className="profile-container">
            <div className="profile-header">
                <img src={`${userProfileDetails?.profile_pic_url==null?user.profilePicture:userProfileDetails?.profile_pic_url}`} alt={user.name} className="profile-pic" />
                <h2 className="profile-name">{userProfileDetails?.username}</h2>
                <p className="profile-bio">{userProfileDetails?.about}</p>
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
            <h3>My First Post:</h3>
            {

firstPost?
<div className='blog-item'>
              
              
<div className='blog-top'>
 <div className='blog-author-name'>   
 <span>{userProfileDetails?.name}</span>
 <img src='/assets/img/img1.png' className='blog-author-img'/>
 </div>
 <div  className='blog-creation-day'>
  <span>2 days ago</span>
 </div>
</div>
<div className='blog-description'>
  <div className='blog-desc-text-div'>
      <div className='blog-desc-title'>{firstPost[0]?.title}</div>
      <div className='blog-desc-text'>
     {firstPost[0]?.content} sdakdsk akfnaksdfn anakifnk akfnkdnk aknfgakfenk akfnmaewknk afaewinfgk akfegnkanfk akenkgnk
      </div>
 
  </div>

<div className='blog-desc-img-div'>
<img src='/assets/img/img1.png' className='blog-desc-img'/>
</div>
</div>
<div className='blog-myposts-footer'>
 
 <div className='blog-type-read'>
   <span className='blog-type'>{firstPost[0]?.topics[0].name}</span>
 
 <span>2min read</span>   
  </div>

  <div className='blog-special-insights'>

  <span>{firstPost[0]?.likes_count} Likes </span>
  <span>{firstPost[0]?.comments_count} Comments </span>
  {/* <span>20000 Views </span> */}
  <Link to={`/blog/${firstPost[0]?.id}`} ><button className='blog-edit-btn'>View</button></Link>
  <Link to={`/editpost/${firstPost[0]?.id}`} ><button className='blog-edit-btn'>Edit</button></Link>
<button className='blog-edit-btn' onClick={handleDelete}>Delete</button>
  
  </div>
</div>
</div>:<></>
            }
      
   
      
</div>
            <div className="profile-submit-button">
                <button type="submit" onClick={()=>{handleClickPost()}}>Open all of my post</button>
                <button type="submit" onClick={handleEdit}>Edit Profile</button>
            </div>
            <div className="profile-submit-button">
          <Link to={`/viewmylists`}><button type="submit" >Your Lists</button></Link>
            <Link to={'/drafts'}><button type="submit" >Your Drafts</button></Link>
           
               
                           </div>
                           <div className="profile-submit-button">
              <Link to='/savelaters'>  <button type="submit" >Save Laters</button></Link>
                <button type="submit" onClick={()=>{localStorage.clear();setIsLoggedIn(false);toast('logging out');setTimeout(()=>{navigate('/signup');},1000)}}>Logout</button>
             
            </div>               
        </div>
        </div>
    
    );
};

export default Profile;
