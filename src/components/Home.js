import React, { useEffect, useState } from 'react'
// import BlogTypeCarousel from './BlogTypeCarousel';
import BlogTypesCarousel from './BlogTypeCarousel';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from "react-loader-spinner";
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
   const [mainLoader,setMainLoader]=useState(false);   
  function handleTypeClick(type)
  {
    toast(type.toUpperCase());
    setMainLoader(true);
  }

  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // replace with your API
  const fetchPosts = async () => {
    // const response = await fetch('https://api.example.com/posts?start=' + posts?.length);
    const newPosts = [{title:'this is this',
    desc:'  dsadsfasd  afsdsad dasfs adf afds adfs adsf aaewfdasd asdtae aeaaefww aeaewg asdfsaas asdfasd asdfas asdfas adfase eafdsadsfasd  afsdsad dasfs adf afds adfs adsf aaewfdasd asdtae aeaaefww aeaewg asdfsaas asdfasd asdfas asdfas adfase eafdsadsfasd  afsdsad dasfs adf afds adfs adsf aaewfdasd asdtae aeaaefww aeaewg asdfsaas asdfasd asdfas asdfas adfase eaf',authorName:'Satyam Tomar'},
  ];
  
    if (newPosts?.length > 0) {
     setTimeout(()=>{setPosts((prevPosts) => prevPosts.concat(newPosts));},1500) 
    } else {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchPosts();
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
    types={['tech', 'sports', 'media', 'global', 'trend','study','javascript','reactjs','freetime']} 
    handleTypeClick={handleTypeClick} 

/>
   </div>
   <div className='home-blog-type-selected'>
    TRENDING
   </div>
    <div className='blog-container' >

    <div className='blog-item'>
              
              
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
              </div>

    <div className='blog-item'>
              
              
              <div className='blog-top'>
               <div className='blog-author-name'>   
               <span>Satyam Tomar</span>
               <img src='/assets/img/img3.jpg' className='blog-author-img'/>
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
            <img src='/assets/img/img3.jpg' className='blog-desc-img'/>
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