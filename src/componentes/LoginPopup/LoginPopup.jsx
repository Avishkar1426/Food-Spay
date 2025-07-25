import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {
    const [currentState,setCurrentState] = useState('Sign Up');
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
         <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="error" />
         </div>
         <div className="login-popup-input">
            {currentState === "Login" ? <></> : <input type="text" placeholder='Your name' required/>}
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='Password' required/>
         </div>
         <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
         <div className="login-popup-condition">
            <input type="checkbox" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
         </div>
         {currentState==="Login"
          ? <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p> :
         <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p> 
         }
      </form>
    </div>
  )
}

export default LoginPopup
