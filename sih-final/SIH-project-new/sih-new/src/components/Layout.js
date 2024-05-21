import axios from "axios";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { CiCirclePlus } from "react-icons/ci";
import { IoSendSharp } from "react-icons/io5";
import "./chat.css"

const Layout = () => {
    const [message, setMessage] = useState('')
    const [output, setOutput] = useState('')
    const [searchbar, setSearchbar] = useState(false)
    const backend = "http://localhost:9000/completion"

    const displaySearch = () => setSearchbar(!searchbar)
    return(
    <>
    <div className="ab-side-bar">
    <section className="side-bar">
        <nav className="logo">
            <p>career genie</p>
        </nav>
        <div className="search-side-bar">
            <input type="text" placeholder="search..." onClick={displaySearch}/>
        </div>
            {/* <button><CiCirclePlus/> New Chat</button> */}
        <ul className="history">
            <li className="nav-text"> 
                <Link to="/">
                    <span>Home</span>
                </Link>
            </li>
            <li className="nav-text"> 
                <Link to="/discover">
                    <span>Discover</span>
                </Link>
            </li>
            <li className="nav-text"> 
                <Link to="/library">
                    <span>Library</span>
                </Link>
            </li>
        </ul>
        <nav className="account">
            <p>account</p>
        </nav>
    </section>
    </div>
    <Outlet/>
    
    </>
    )
}

export default Layout