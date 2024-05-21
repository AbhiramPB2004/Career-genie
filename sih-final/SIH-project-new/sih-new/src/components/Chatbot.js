import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { IoSendSharp } from "react-icons/io5";
import "./chat.css"
const Chatbot = () => {
    const [Message,SetMessage] = useState([]);
    const [Value,setValue] = useState();
    const [output, setOutput] = useState('')
    const [searchbar, setSearchbar] = useState(false)
    
    const sendMessage = async () => {
        console.log(Message)
    }
    const ChatUpdate = () =>{   
        SetMessage([...Message,{message: Value,TypeOfUser: "user"}]);
        const data = {prompt: Value}
        console.log(data)   
        // axios.defaults.withCredentials = true;
        // axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
        // axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:5500';
        // axios.post("http://localhost:5500/chatcompletions",data).then((response) => {
        //     console.log(response);  
        // SetMessage([...Message,{message: Value,TypeOfUser: "user"},{message: response.data,TypeOfUser:"bot"}]);
        // });
    
    
        
    }

    const displaySearch = () => setSearchbar(!searchbar)

    
    // const getMessages = async () => {
    //     console.log("hello")
    //     const options = {
    //         method: "POST",
    //         body: JSON.stringify({
    //             message: "hello, how are you"
    //         }),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }
    //     try{
    //         const response = await fetch('http://localhost:8000/completion', options)
    //         const data = await response.json()
    //         console.log(data)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    return(
        <>
        {/* <div className="new-searchbar">

        </div> */}
        {/* <section className="side-bar">
            <nav className="logo">
                <p>career genie</p>
            </nav>
            <div className="search-side-bar">
                <input type="text" placeholder="search..." onClick={displaySearch}>

                </input>
            </div>
             <button><CiCirclePlus/> New Chat</button>
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
        </section> */}
        
        <section className="main">
            <h1 className="header-genie">Career Genie</h1>

            <ul className="feed">
                {Message.map((message) => { return(
                
                <li><p>{ message.TypeOfUser }</p>

                <p>{message.message}</p>
                
                </li>)})}

          
            </ul>
            
            <div className="bottom-section">
                <div className="input-container">
                <input className="chat-input" value={Value} onChange={(e) =>{setValue(e.target.value)}}/>
                    <div id="submit" onClick={ChatUpdate}><IoSendSharp/></div>
                </div>
                <p className="info">welcome to career Genie, most trusted AI career counsellig App</p>

            </div>
        </section>
        </>
    )
}
export default Chatbot