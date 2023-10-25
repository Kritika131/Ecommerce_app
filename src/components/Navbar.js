import React, { useContext, useState } from 'react'
import "../styles/navbar.css"
import cart_icon from "../Assets/images/cart_icon.png"
import { Link, useNavigate } from 'react-router-dom'
import { productContext } from '../context/ProductContext'


const Navbar = () => {
  const [active,setActive] = useState("home");
  const Navigate = useNavigate();
  const {getTotalitems,logout} = useContext(productContext);
  
  return (
    <div className="navbar">
        <p className="nav_logo">ECOMMERCE</p>
        <ul className="nav_menu">
        <li onClick={()=>{setActive("home")}}><Link to="/">Home</Link>
        {active==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setActive("mens")}}><Link to="/men">Men</Link>{active==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setActive("womens")}}><Link to="/women">Women</Link>{active==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setActive("kids")}}><Link to="/kids">Kids</Link>{active==="kids"?<hr/>:<></>}</li>
           
        </ul>
        <div className="nav_login">
            
           
           <button onClick={()=>Navigate('/login')}>
              Login
            </button>
            <button onClick={logout()}>
              Logout
            </button>        
           
            <Link to="/cart">
            <img src={cart_icon} alt="" />
            </Link>
            <div className="nav_cart_count">{getTotalitems()}</div>
        
        </div>
    </div>
  )
}

export default Navbar