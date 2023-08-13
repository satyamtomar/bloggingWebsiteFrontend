import React,{createContext,useEffect,useState} from 'react';

export const AuthContext =createContext();


const AuthContextProvider = (props) => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
  
    const [userProfileDetails,setUserProfileDetails]=useState();
    
  return (
      <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,userProfileDetails,setUserProfileDetails}}>
        {props.children}
      </AuthContext.Provider>
  )
}

export default AuthContextProvider