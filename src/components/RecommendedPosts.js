import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import BlogAction from '../actions/Blog.Action';
import { Link } from 'react-router-dom';

const RecommendedPosts = () => {
    const [mainLoader,setMainLoader]=useState(false);
    const [posts,setPosts]=useState([]);


    const recomPosts=async()=>{
  let payload={
    token:localStorage.getItem('token')
  }
  setMainLoader(true);
   BlogAction.getRecommendations(payload,(err,res)=>
   {
      if(err)
      {
        toast(err);
      }
      else
      {

        if(res.status==200)
        {
         setPosts(res.recommendations);
        }
        else
        {
            toast(res.msg);
        }
      }
      setMainLoader(false);
   })
        
    }

    useEffect(() => {
      recomPosts();
    }, [])
    
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

<div className='home-blog-type-selected'>
Recommended Posts
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

      {/* <InfiniteScroll
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
> */}
{posts?.map((post, index) => 
{
return(

<div className='blog-item'>
      
      
<div className='blog-top'>
 <div className='blog-author-name'>   
 <span>{post?.user_Detils?.username}</span>
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
asdfsak akfnkasn akfnaksdn akfnaksnf akgdsnkgsan agnaksnd aeansaks akfenaksenk akwegnakegnk angeksgndkldndakg akgenakgnkia akgneasknkangk      </div>
 
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

{/* </InfiniteScroll>        */}
</div>

    </div>
</>
  )
}

export default RecommendedPosts