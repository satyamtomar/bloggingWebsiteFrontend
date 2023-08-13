import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ProfileAction from '../actions/Profile.Action';
import { ToastContainer, toast } from 'react-toastify';

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
      

    const handleProfileEdit=async()=>{
  
      let payload={
        username:details.username,
        name:details.name,
        about:details.about,
        token:localStorage.getItem('token')

      }
         ProfileAction.editUserDetails(payload,(err,res)=>{

          if(err)
          {
            toast(err);
          }
          else
          {
            if(res.status==200)
            {
              toast('successfully edited')
                 setTimeout(()=>{window.location.reload();},500)
                 
            }
            else

            {
              toast(res.msg);
            }
          }
         })
    }
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
        <input value={details?.name} name='name'     style={inputStyles} onChange={handleChangeDetails} />
      </div>
      {/* <div className='editModalDiv'>

        <span>Email</span>
        <input value={details?.email} name='email'  style={inputStyles} onChange={handleChangeDetails}  />
      </div> */}
      <div className='editModalDiv'>
        <span>Username</span>
        <input value={details?.username} name='username'   style={inputStyles} onChange={handleChangeDetails} />
      </div>
      <div className='editModalDiv'>
        <span>Bio</span>
        <input value={details?.about} name='about'  type='text-area'   style={inputStyles}  onChange={handleChangeDetails} />
      </div>
      {/* <div className='editModalDiv'>
        <span>Profile Pic</span>
        <input value={details?.profile_pic} name='profile_pic'  type='file'   style={inputStyles}  onChange={handleChangeDetails} />
      </div> */}
      <button onClick={()=>{closeModal();handleProfileEdit();}} style={buttonStyles}>Edit Profile</button>
    </Modal>
  );
}

export default EditModal;
