import React, { useContext, useEffect, useState } from 'react'
// import BlogTypeCarousel from './BlogTypeCarousel';
import BlogTypesCarousel from './BlogTypeCarousel';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from "react-loader-spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import BlogAction from '../actions/Blog.Action';

const Home = () => {
   const [mainLoader,setMainLoader]=useState(false);   
   const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
   const navigate=useNavigate();
  const handleTypeClick=async(type)=>
  {
    
  }

  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [newPosts,setNewPosts]=useState([]);
  // replace with your API
  const fetchPosts = async () => {
    // const response = await fetch('https://api.example.com/posts?start=' + posts?.length);
  //   const newPosts = [{title:'this is this',
  //   desc:'  dsadsfasd  afsdsad dasfs adf afds adfs adsf aaewfdasd asdtae aeaaefww aeaewg asdfsaas asdfasd asdfas asdfas adfase eafdsadsfasd  afsdsad dasfs adf afds adfs adsf aaewfdasd asdtae aeaaefww aeaewg asdfsaas asdfasd asdfas asdfas adfase eafdsadsfasd  afsdsad dasfs adf afds adfs adsf aaewfdasd asdtae aeaaefww aeaewg asdfsaas asdfasd asdfas asdfas adfase eaf',authorName:'Satyam Tomar'},
  // ];
  let payload={
    token:localStorage.getItem('token')
  }
     BlogAction.viewBlogs(payload,(err,res)=>{

      if(err)
      {
toast(err);   
      }
      else
      {

        if(res.status==200)
        {
         setNewPosts(res.posts);
         if (res?.posts?.length > 0) {
          setTimeout(()=>{setPosts((prevPosts) => prevPosts.concat(res?.posts));},1000) 
         } else {
           setHasMore(false);
         }
        }
        else
        {
          toast(res.msg);
        }
      }
     })
    
  };

  useEffect(() => {
    if(isLoggedIn)
    fetchPosts();
    else
    {
      navigate('/signup')
    }
  }, []);
        
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
   <div className='home-blog-types'>
   <BlogTypesCarousel 
    // types={['tech', 'sports', 'media', 'global', 'trend','study','javascript','reactjs','freetime']} 
    types={['recommended','top post','recommended','top post','recommended','top post']}
    handleTypeClick={handleTypeClick} 

/>
   </div>
   <div className='home-blog-type-selected'>
    TRENDING
   </div>
    <div className='blog-container' >

    {/* <div className='blog-item'>
              
              
              <div className='blog-top'>
               <div className='blog-author-name'>   
               <span>Satyam Tomar</span>
               <img src='/assets/img/img2.png' className='blog-author-img'/>
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
            <img src='/assets/img/img2.png' className='blog-desc-img'/>
          </div>
              </div>
              <div className='blog-footer'>
               
               <div className='blog-type'>
                 Poetry
               </div>
                <div className='blog-readtime'>
                  2min read
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
{posts.map((post, index) => 
    {
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
          {/* <button className='blog-edit-btn'>Edit</button>    */}
          <Link to={`/blog/${post?.id}`} ><button className='blog-edit-btn'>View</button></Link>
          </div>
        </div>
        </div>

      )
    }
    )}
        
        </InfiniteScroll>       
    </div>
    
            </div>
        </>
    )
}

export default Home