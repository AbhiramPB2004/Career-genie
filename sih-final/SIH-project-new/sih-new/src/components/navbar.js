import React from "react";
import { Link } from "react-router-dom";
import profile from "../images/Profile.svg";

export  const  Navbar = () => {
    return(
        <div className="header-nav">
        <nav className="navigationBar">
            <div>
            <Link to="/" className="heading" id="home-element">Home</Link>
            </div>
            <div>
            <Link to="/Login" className="heading">Login </Link>
            </div>
           <div className="alignImg"><Link to="/account"><img src={profile} alt="Profile" className="profileImage"/> </Link></div>
        </nav>
        </div>
    )
}