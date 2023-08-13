import React, { useContext, useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';
import BlogAction from '../actions/Blog.Action';

const Blog = () => {
    const {id}=useParams();
    const [mainLoader,setMainLoader]=useState(false);
    const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
    const [blog,setBlog]=useState();
    const navigate=useNavigate();
    const helperPay=async()=>{
        let payload={token:localStorage.getItem('token'),post_id:id}
        BlogAction.getAPost(payload,(err,res)=>{
         if(err)
         {
             toast(err);
             setMainLoader(false)
         }
         else{
             if(res.status==200)
             {
                setBlog(res.post);
                toast(res.msg);
                setMainLoader(false);
             }
             else{
                 toast(res.msg);
                 
         setTimeout(()=>{setMainLoader(false);navigate('/subscription')},1000);
             }
         }
        })
    }
    useEffect(()=>{
        if(isLoggedIn)
        {
            setMainLoader(true)
         
            
        // helperPay();
        helperPay();
        }
        else
        {
            navigate('/');
        }
    },[])
  return (
    <div className='container'>
            {mainLoader ? (
          <div className="custm-loader">
            <TailSpin color="#000" height={200} width={200}  />
          </div>
         ) : null}
        <ToastContainer
        theme='dark'/>
        <div className='blog-page-container'>

            <div className='blog-page-title'>
                <h1>
                {/* Statistically, You Will Marry the Wrong Person. Here’s Why. */}
               {blog?.title}
                </h1>
            </div>
            <div className='blog-page-image-title'>
                <img src='/assets/img/img1.png' className='blog-page-image'/>
            </div>
            <div className='blog-page-related-details'>

                <div className='blog-page-author-related'>

                    <div className='blog-page-author-img-div'>
                         
                         <img className='blog-page-author-img' src='/assets/img/img1.png'/>
                    </div>
                    <div className='blog-page-author-info-div'>
                        <div className='blog-page-author-info'>
                            <span>{blog?.userDetils?.name} Author</span>
                            <span className='blog-page-author-follow'> Follow</span>
                            </div>
                        <div className='blog-page-author-other-info'>
                            <span>9 min read</span>
                            <span>July 14</span>
                        </div>
                    </div>
                </div>
                <div className='blog-page-post-related'>
                    <span> {blog?.likes_count} likes</span>
                    <span> {blog?.comments_count} comments</span>
                </div>
            </div>
            <div className='blog-page-desc'>

                <p className='blog-page-desc-para'>
                {blog?.content}

                {/* <br/>
                Once upon a time, I met the person I’d been asking the universe for. We even met in the exact way I would have wanted to.

 I was on a solo rock-climbing road trip and through a series of fateful and unlikely events, we happened to be the only two people staying on a remote farm.

The first evening we met, we had a deep conversation late into the night. From that moment on, we were joined at the hip. We had a roaring adventure — climbing, making love, and road-tripping our way through the country. We poured our souls out and helped each other through tough times. By the end of that road trip, I had committed to moving to his state.

It seemed like the perfect fairy tale. And yet, it wasn’t.

There wasn’t a single moment where I was emotionally secure but there were many moments where I felt deeply lonely.

It was confusing. Wasn’t this exactly what I wanted?
              
                </p>

                <p className='blog-page-desc-para'>
                Once upon a time, I met the person I’d been asking the universe for. We even met in the exact way I would have wanted to.

 I was on a solo rock-climbing road trip and through a series of fateful and unlikely events, we happened to be the only two people staying on a remote farm.

The first evening we met, we had a deep conversation late into the night. From that moment on, we were joined at the hip. We had a roaring adventure — climbing, making love, and road-tripping our way through the country. We poured our souls out and helped each other through tough times. By the end of that road trip, I had committed to moving to his state.

It seemed like the perfect fairy tale. And yet, it wasn’t.

There wasn’t a single moment where I was emotionally secure but there were many moments where I felt deeply lonely.

It was confusing. Wasn’t this exactly what I wanted? */}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Blog;