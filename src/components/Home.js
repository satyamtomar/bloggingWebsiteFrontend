import React from 'react'
// import BlogTypeCarousel from './BlogTypeCarousel';
import BlogTypesCarousel from './BlogTypeCarousel';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
      
  function handleTypeClick(type)
  {
    toast(type,'clicked');
  }
        
    return (

        <>
        <ToastContainer
        theme='dark'/>
            <div className='container'>
   <div className='home-blog-types'>
   <BlogTypesCarousel 
    types={['tech', 'sports', 'media', 'global', 'trend','study','javascript','reactjs','freetime']} 
    handleTypeClick={handleTypeClick} 

/>
   </div>
   <div className='home-blog-type-selected'>
    Trending
   </div>
    <div className='blog-container' >

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
              <div className='blog-footer'>
               
               <div className='blog-type'>
                 Poetry
               </div>
                <div className='blog-readtime'>
                  2min read
                </div>
              </div>
              </div>

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
              <div className='blog-footer'>
               
               <div className='blog-type'>
                 Poetry
               </div>
                <div className='blog-readtime'>
                  2min read
                </div>
              </div>
              </div>


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
              <div className='blog-footer'>
               
               <div className='blog-type'>
                 Poetry
               </div>
                <div className='blog-readtime'>
                  2min read
                </div>
              </div>
              </div>


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
              <div className='blog-footer'>
               
               <div className='blog-type'>
                 Poetry
               </div>
                <div className='blog-readtime'>
                  2min read
                </div>
              </div>
              </div>
    
          
    </div>
    
            </div>
        </>
    )
}

export default Home