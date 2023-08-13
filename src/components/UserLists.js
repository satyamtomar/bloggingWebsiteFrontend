import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ListAction from '../actions/List.Action';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';
import ListEditModal from './ListEditModal';

const UserLists = () => {

  const [lists,setLists]=useState([]);
  const [listName,setListName]=useState('');
  const navigate=useNavigate();
  const [isListModalOpen,setIsListModalOpen]=useState(false);
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
  const getLists=async()=>{

    let payload={token:localStorage.getItem('token')}

    ListAction.viewLists(payload,(err,res)=>{

      if(err)
      {
        toast(err);
      }
      else
      {
        if(res.status==200)
        {
           setLists(res.lists);
        }
        else
        {
          toast(res.msg)
        }
      }
    })
  }

  const createList=async()=>{

    let payload={token:localStorage.getItem('token'),list_name:listName}

    ListAction.createList(payload,(err,res)=>{

      if(err)
      {
        toast(err);
      }
      else
      {
        if(res.status==200)
        {
           toast(res.msg);
         getLists();
        }
        else
        {
          toast(res.msg)
        }
      }
    })
  }
  useEffect(() => {
    
    if(isLoggedIn)
    {
        getLists();
    }
    else
    {
      navigate('/login');
    }
  }, [])
  
  return (
    <>
    <ToastContainer/>
    {
                isListModalOpen&&<ListEditModal 
            isOpen={isListModalOpen}
            closeModal={()=>{setIsListModalOpen(false);}}
            listName={listName}
            setListName={setListName}
            createList={createList}
            />}
    <div className='container'>
    <div><h1>My Lists</h1></div>
    <div className='add-list-button-div'>
        <button className='add-list-button' onClick={()=>{setIsListModalOpen(true)}}>+</button>
    </div>
    <div className='list-container'>
     {
      lists.map((list,index)=>{

        return(
          <>
     <Link to={`/mylist/${list.id}`} className='no-underline-list'>
     <div className='list-item '>
           
           <p className='no-underline-list' style={{textDecoration:'none'}}>{list.name}</p>
           <img src='/assets/img/img2.png' />
       </div>
     </Link>  

          </>
        )
      })
     }  
    

     
    </div>
    </div>
    </>
  )
}

export default UserLists