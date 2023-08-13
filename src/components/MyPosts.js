import React, { useEffect, useState } from 'react'
// import BlogTypeCarousel from './BlogTypeCarousel';
import BlogTypesCarousel from './BlogTypeCarousel';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from "react-loader-spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import BlogAction from '../actions/Blog.Action';
import { Link } from 'react-router-dom';
import DraftsAction from '../actions/Drafts.Action';

const MyPosts = () => {
   const [mainLoader,setMainLoader]=useState(false);   
  function handleTypeClick(type)
  {
    toast(type,'clicked');
    setMainLoader(true);
  }
        
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [newPosts,setNewPosts]=useState([]);
  // replace with your API
  const fetchPosts = async () => {
    // const response = await fetch('https://api.example.com/posts?start=' + posts?.length);
    let payload={token:localStorage.getItem('token')}
    // setMainLoader(true)
    BlogAction.myBlogs(payload,(err,res)=>{


      if(err)
      {
        toast(err);
      }
      else
      {
         if(res.status==200)
         {
          setNewPosts(res.posts)
           toast(res.msg);

           if (res?.posts?.length > 0) {
            setTimeout(()=>{setPosts((prevPosts) => prevPosts.concat(res.posts));},1500) 
           } else {
             setHasMore(false);
           }
         }
         else{
          toast(res.msg);
         }
         
      }
       setMainLoader(false);
    })
  
    
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const handleDelete=async(post_id)=>{
    let payload={
       token:localStorage.getItem('token'),post_id:post_id
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
                  setTimeout(()=>{window.location.reload()},500)
                   }
                   else
                   {
   toast(res.msg);
                   }
               }
           })
       }
    

       const handleAddToDraft=async(postID)=>{
        
        let payload={
          token:localStorage.getItem('token'),post_id:postID
        }
        DraftsAction.addToDraft(payload,(err,res)=>{
 
          if(err)
          {
            toast(err);
          }
          else
          {
            if(res.status==200)
            {
               
                  toast(res.msg);
                  fetchPosts();

            }
            else
            {
              toast(res.msg);
            }
          }

        })
       }
    return (

        <>
            {mainLoader ? (
          <div className="custm-loader">
            <TailSpin color="#000" height={200} width={200}  />
          </div>
         ) : null}
        <ToastContainer
        theme='dark'/>
            <div className='container'>
   {/* <div className='home-blog-types'>
   <BlogTypesCarousel 
    types={['tech', 'sports', 'media', 'global', 'trend','study','javascript','reactjs','freetime']} 
    handleTypeClick={handleTypeClick} 

/>
   </div> */}
   <div className='home-blog-type-selected'>
    My Posts
   </div>
    <div className='blog-container' >

  

    {/* <div className='blog-item'>
              
              
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
              </div> */}

    
              <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={ 
          <TailSpin color="#000" height={60} width={60}  />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
{posts.map((post)=>{
    return(
<div className='blog-item'>
              
              
              <div className='blog-top'>
               <div className='blog-author-name'>   
               <span>{post?.user_Detils.username}</span>
               <img src='/assets/img/img1.png' className='blog-author-img'/>
               </div>
               <div  className='blog-creation-day'>
                <span>2 days ago</span>
               </div>
              </div>
              <div className='blog-description'>
                <div className='blog-desc-text-div'>
                    <div className='blog-desc-title'>{post?.title}</div>
                    <div className='blog-desc-text'>
                   {post?.content}
                   sdakask akfaklf  akfaskn kakfnawklenfi akeaiefnkan akefawkneklanwek akfnakgneklan akfnawkengka akenaken akfnaklnakln
                    </div>
               
                </div>
             
          <div className='blog-desc-img-div'>
            <img src='/assets/img/img1.png' className='blog-desc-img'/>
          </div>
              </div>
              <div className='blog-myposts-footer'>
               
               <div className='blog-type-read'>
                 <span className='blog-type'>{post?.topics[0].name}</span>
               
               <span>2min read</span>   
                </div>

                <div className='blog-special-insights'>

                <span>{post.likes_count} Likes </span>
                <span>{post.comments_count} Comments </span>
                {/* <span>20000 Views </span> */}
               {/* <Link to={`/editpost/${post.id}`} ><button className='blog-edit-btn' >Edit</button></Link>    */}
               <Link to={`/blog/${post?.id}`} ><button className='blog-edit-btn'>View</button></Link>
  <Link to={`/editpost/${post?.id}`} ><button className='blog-edit-btn'>Edit</button></Link>
<button className='blog-edit-btn' onClick={()=>handleDelete(post?.id)}>Delete</button>
   
                </div>
                <div className='blog-special-insights'>
                  
<button className='blog-edit-btn' onClick={()=>handleAddToDraft(post?.id)}>Add to Drafts</button>
                </div>
              </div>
              </div>

    )
})}
    
        </InfiniteScroll>
    </div>
    
            </div>
        </>
    )
}

export default MyPosts