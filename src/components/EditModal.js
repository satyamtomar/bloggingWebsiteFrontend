import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

// Modal.setAppElement('#root') // replace '#root' with the id of your application node

function EditModal({ 
    isOpen, closeModal,
     details,setDetails
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

      const handleChangeDetails = (e) => {
        setDetails({
          ...details,
          [e.target.name]: e.target.value,
        });
      };
    //   useEffect(() => {
       
    //   }, [newList])
      
  return (
    
<Modal 
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="My Modal"
      style={modalStyles}
//  containerclassName='editModalContainer'
    >
        <div className='editModalDivTitle'>
            <span>Edit {details?.Type}</span>
        </div>
        <div className='editModalDiv'>
        
        <span>Full Name</span>
        <input value={details?.fullName} name='fullname'     style={inputStyles} onChange={handleChangeDetails} />
      </div>
      <div className='editModalDiv'>

        <span>Email</span>
        <input value={details?.email} name='email'  style={inputStyles} onChange={handleChangeDetails}  />
      </div>
      <div className='editModalDiv'>
        <span>Password</span>
        <input value={details?.Type} name='password' type='password'   style={inputStyles} onChange={handleChangeDetails} />
      </div>
      <div className='editModalDiv'>
        <span>Date of Birth</span>
        <input value={details?.dob} name='dob'  type='datatime-local'   style={inputStyles}  onChange={handleChangeDetails} />
      </div>
     
      <button onClick={()=>{closeModal();}} style={buttonStyles}>Edit Profile</button>
    </Modal>
  );
}

export default EditModal;
