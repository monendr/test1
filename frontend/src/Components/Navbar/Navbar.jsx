import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/favicon.png'
import { Link } from "react-router-dom";
const Navbar = () => {

const [menu,setMenu] = useState("home");

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>Sinai Chei</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: "none"}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("about")}}><Link style={{ textDecoration: "none"}} to='/about'>About Us</Link>{menu==="about"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("safety")}}><Link style={{ textDecoration: "none"}} to='/safety'>Safety Tips</Link>{menu==="safety"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("support")}}><Link style={{ textDecoration: "none"}} to='/support'>Support</Link>{menu==="support"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login">
                <button>login</button>
            </div>
        </div>
    )
}

export default Navbar