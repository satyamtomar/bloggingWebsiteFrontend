import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ProfileAction from '../actions/Profile.Action';
import { ToastContainer, toast } from 'react-toastify';

// Modal.setAppElement('#root') // replace '#root' with the id of your application node

function ListEditModal({ 
    isOpen, closeModal,
     listName,setListName,createList
     }) {
    // const [likedList,setLikedList]=useState([])
    const modalStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#F5F5F5',
          border: '1px solid #BDBDBD',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '70%',
          fontFamily: 'Arial, sans-serif',
          fontSize:'23px'
          ,fontWeight:'700'
          ,boxShadow:'2px 2px gray',
          
    border: '3px #484343 solid'

        },
      };
      
      const inputStyles = {
        width: '50%',
        padding: '10px',
        // marginBottom: '10px',
        borderRadius: '10px',
        border: '1px solid #BDBDBD',
      };
      
      const buttonStyles = {
        padding: '10px 20px',
        backgroundColor: '#3F51B5',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '20px',
      };


     
  return (
    
<Modal 
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="My Modal"
      style={modalStyles}
//  containerclassName='editModalContainer'
    >
        <div className='editModalDivTitle'>
            <span>Create List</span>
        </div>
        <div className='editModalDiv'>
        
        <span>List Name</span>
        <input value={listName} name='name'     style={inputStyles} onChange={(e)=>{setListName(e.target.value)}} />
      </div>
      <button onClick={()=>{closeModal();createList();}} style={buttonStyles}>Create List</button>
    </Modal>
  );
}

export default ListEditModal;
