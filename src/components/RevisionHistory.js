import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import ListAction from '../actions/List.Action';
import SaveLaterAction from '../actions/SaveLater.Action';
import RevisionHistoryAction from '../actions/RevisionHistory.Action';

const RevisionHistory = () => {
    const [mainLoader,setMainLoader]=useState(false);
    const [posts,setPosts]=useState([]);
   const {id}=useParams();


const getRevisionHistory=()=>{
    setMainLoader(true);
let payload={
token:localStorage.getItem('token'),
post_id:id
};
    RevisionHistoryAction.getRevisionHistory(payload,(err,res)=>{

        if(err)
        {
            toast(err);
        }
        else
        {
            if(res.status==200)
            {
              setPosts(res.versions);
            }
            else{
                toast(res.msg);
            }
        }
        setMainLoader(false);
    })
}

useEffect(()=>{
    getRevisionHistory();
},[])



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
Revision History
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
      <div className='blog-desc-title'>{post?.title}</div>
      <div className='blog-desc-text'>
     {/* {post?.post_details?.content} */}
     sdakask akfaklf  akfaskn kakfnawklenfi akeaiefnkan akefawkneklanwek akfnakgneklan akfnawkengka akenaken akfnaklnakln
asdfsak akfnkasn akfnaksdn akfnaksnf akgdsnkgsan agnaksnd aeansaks akfenaksenk akwegnakegnk angeksgndkldndakg akgenakgnkia akgneasknkangk      </div>
 
  </div>

<div className='blog-desc-img-div'>
<img src='/assets/img/img1.png' className='blog-desc-img'/>
</div>
</div>
<div className='blog-myposts-footer'>
 
 <div className='blog-type-read'>
   {/* <span className='blog-type'>{post?.post_details?.topics[0]?.name}</span> */}
 
 <span>version {post?.version}</span>   
  </div>

  <div className='blog-special-insights'>

  {/* <span>{post?.post_details?.likes_count} Likes </span>
  <span>{post?.post_details?.comments_count} Comments </span> */}
  {/* <span>20000 Views </span> */}
  {/* <button className='blog-edit-btn'>Edit</button>    */}
  <Link to={`/postVersion/${id}/${post?.version}`} ><button className='blog-edit-btn'>View the History</button></Link>
  {/* <button className='blog-edit-btn' onClick={()=>handleRemove(post.id)} >Remove</button> */}
  </div>
</div>
</div>

)
}
):
<h1>No Revision History </h1>
}

{/* </InfiniteScroll>        */}
</div>

    </div>
</>
  )
}

export default RevisionHistory;