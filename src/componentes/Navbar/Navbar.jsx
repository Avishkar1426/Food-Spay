import React, { useContext, useState } from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets"
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
function Navbar({setShowLogin}) {

  const [menu,setMenu] = useState("Home");
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
    <div className='logo'>
       <h1>FOOD SPAY</h1>
       <Link to='/'>
        <img src={assets.logo} alt="error" />
      </Link> 
    </div>
    <div className="search">
      <input type="text" />
      <img src={assets.search_icon} alt="error" className="searchIcon" />
    </div>
      <nav className="links">
        <ul>
          <li ><a href="/" className={menu === "Home" ? "active" : ""} onClick={()=>setMenu("Home")}>Home</a></li>
          <li><a href="#explore-menu" className={menu === "Menu" ? "active" : ""}  onClick={()=>setMenu("Menu")}>Menu</a></li>
          <li><a href="http://localhost:5173/order" className={menu === "Order" ? "active" : ""} onClick={()=>setMenu("Order")}>Order</a></li>
          <li><a href="#footer" className={menu === "Contact-us" ? "active" : ""} onClick={()=>setMenu("Contact-us")}>Contact us</a></li>
        </ul>
      </nav>
      <div className="basket search">
        <button onClick={()=>setShowLogin(true)}>Sigh Up</button>
    <Link to='/Cart'><img src={assets.basket_icon} alt="" /> </Link>
         <div className={getTotalCartAmount()===0?"":"dot"}></div>
      </div>
    </div>
  )
}

export default Navbar
