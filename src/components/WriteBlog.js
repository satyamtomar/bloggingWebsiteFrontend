import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import BlogAction from '../actions/Blog.Action';
import { ToastContainer, toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';

const WriteBlog = () => {
    const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const [file,setFile]=useState();
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const [topic,setTopic]=useState('technology');
    const [mainLoader,setMainLoader]=useState(false);
    function handleChange(e) 
    {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
   useEffect(()=>{
  if(!isLoggedIn)
  {
        navigate('/login')
  }
   },[])

   const handleSubmit=async()=>{
    let payload={
        title,content,topics:[topic],
        token:localStorage.getItem('token'),
        publish_status:true
    }
    setMainLoader(true);
    BlogAction.createBlog(payload,(err,res)=>{

        if(err)
        {
            toast(err);
        }
        else
        {
            if(res.status==200)
            {
              toast(res.msg);
              setTitle('');
              setContent('');
              setTopic('technology');
            }
            else
            {
                toast(res.msg);
            }
        }
        setMainLoader(false)
    })
   }
    return (
        <>
        {mainLoader ? (
          <div className="custm-loader">
            <TailSpin color="#000" height={200} width={200}  />
          </div>
         ) : null}
        <ToastContainer/>
            <div className='container'>

                <div className='write-blog-container'>
                    <div >
                        <input className='write-blog-input-title' placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                    </div>
                    <div>
                        <textarea className='write-blog-input-desc' type='textArea' value={content} placeholder='Write your story' onChange={(e)=>{setContent(e.target.value)}} />
                    </div>
                    <div className='write-blog-footer'>
 
             {/* <div className='write-blog-input-image'>
             <input type="file" onChange={handleChange} />
            <img src={file} className='' />
            </div> */}
            <div className='write-blog-select-topic'>
            <select id="priorityList" value={topic} onChange={(e)=>{setTopic(e.target.value)}}>
            <option value="technology" >Technology</option>
                <option value="sports">Sports</option>
                <option value="cricket">Cricket</option>
                <option value="study">Study</option>
                <option value="news">News</option>
                <option value="boxing">Boxing</option>
                <option value="entertainment">Entertainment</option>
                <option value="politics">Politics</option>
              
              </select>
            </div>
            <div className='write-blog-submit-div'>
            <button className='write-blog-submit' onClick={handleSubmit}>Submit</button>

            </div>
            
             </div>
            
        
    
                    </div>
                </div>


        </>
    )
}

export default WriteBlog