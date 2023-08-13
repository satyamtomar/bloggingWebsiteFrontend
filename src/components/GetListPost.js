import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import ListAction from '../actions/List.Action';

const GetListPost = () => {
    const [mainLoader,setMainLoader]=useState(false);
    const [posts,setPosts]=useState([]);
   const {id}=useParams();

    const getListPosts=()=>{
        setMainLoader(true);
 let payload={
    token:localStorage.getItem('token'),list_id:id
 };
        ListAction.getAList(payload,(err,res)=>{

            if(err)
            {
                toast(err);
            }
            else
            {
                if(res.status==200)
                {
                  setPosts(res.list.posts);
                }
                else{
                    toast(res.msg);
                }
            }
            setMainLoader(false);
        })
    }

    useEffect(()=>{
        getListPosts();
    },[])


    const handleRemove=async(postID)=>{
        let payload={
            token:localStorage.getItem('token'),post_id:postID,list_id:id
         };
                ListAction.deleteFromList(payload,(err,res)=>{
        
                    if(err)
                    {
                        toast(err);
                    }
                    else
                    {
                        if(res.status==200)
                        {
                        //   setPosts(res.list.posts);
                        toast(res.msg);
                        setTimeout(()=>{getListPosts()},500)
                        }
                        else{
                            toast(res.msg);
                        }
                    }
                    setMainLoader(false);
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

<div className='home-blog-type-selected'>
List Posts
</div>
<div className='blog-container' >
{posts?.length>0? posts?.map((post, index) => 
{
return(

<div className='blog-item'>
      
      
<div className='blog-top'>
 {/* <div className='blog-author-name'>   
 <span>{post?.postDetails?.t}</span>
 <img src='/assets/img/img1.png' className='blog-author-img'/>
 </div>
 <div  className='blog-creation-day'>
  <span>2 days ago</span>
 </div> */}
</div>
<div className='blog-description'>
  <div className='blog-desc-text-div'>
      <div className='blog-desc-title'>{post?.postDetails?.title}</div>
      <div className='blog-desc-text'>
     {post?.postDetails?.content}
     sdakask akfaklf  akfaskn kakfnawklenfi akeaiefnkan akefawkneklanwek akfnakgneklan akfnawkengka akenaken akfnaklnakln
asdfsak akfnkasn akfnaksdn akfnaksnf akgdsnkgsan agnaksnd aeansaks akfenaksenk akwegnakegnk angeksgndkldndakg akgenakgnkia akgneasknkangk      </div>
 
  </div>

<div className='blog-desc-img-div'>
<img src='/assets/img/img1.png' className='blog-desc-img'/>
</div>
</div>
<div className='blog-myposts-footer'>
 
 <div className='blog-type-read'>
   <span className='blog-type'>{post?.postDetails?.topics[0]?.name}</span>
 
 <span>2min read</span>   
  </div>

  <div className='blog-special-insights'>

  <span>{post?.likes_count} Likes </span>
  <span>{post?.comments_count} Comments </span>
  {/* <span>20000 Views </span> */}
  {/* <button className='blog-edit-btn'>Edit</button>    */}
  <Link to={`/blog/${post?.id}`} ><button className='blog-edit-btn'>View</button></Link>
  <button className='blog-edit-btn' onClick={()=>handleRemove(post.postDetails.id)} >Remove</button>
  </div>
</div>
</div>

)
}
):
<h1>List is empty</h1>
}

{/* </InfiniteScroll>        */}
</div>

    </div>
</>
  )
}

export default GetListPost