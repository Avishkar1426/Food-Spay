import React from 'react'
import { assets } from '../../assets/assets'
import "./Footer.css"


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h2>FOOD SPAY</h2>
               <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti exercitationem cupiditate at aut obcaecati! Similique expedita autem at doloremque, quo corrupti exercitationem dolorum alias quidem? Eveniet, voluptas quibusdam. Similique, ab.</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="error" />
                <img src={assets.twitter_icon} alt="error" />
                <img src={assets.linkedin_icon} alt="error" />
               </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delavary</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@foodspay.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyright"> Copyright 2025 © FoodSpay.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
