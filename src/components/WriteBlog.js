import React, { useState } from 'react'

const WriteBlog = () => {
    const [file,setFile]=useState();
    function handleChange(e) 
    {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
 
    return (
        <>
            <div className='container'>

                <div className='write-blog-container'>
                    <div >
                        <input className='write-blog-input-title' placeholder='Title' />
                    </div>
                    <div>
                        <textarea className='write-blog-input-desc' type='textArea' placeholder='Write your story' />
                    </div>
                    <div className='write-blog-footer'>
 
             <div className='write-blog-input-image'>
             <input type="file" onChange={handleChange} />
            <img src={file} className='' />
            </div>
            <div className='write-blog-submit-div'>
            <button className='write-blog-submit'>Submit</button>

            </div>
            
             </div>
            
        
    
                    </div>
                </div>


        </>
    )
}

export default WriteBlog