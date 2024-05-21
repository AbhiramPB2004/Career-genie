import React from "react"
import { useState } from "react"
import { Axios } from "axios";
const LoginSignUp = () =>{
const [Page,SetPage] = useState(true);
const[Password,SetPassword] = useState("Asdqw");
const[email,SetEmail] = useState("Asdqw");
const[Username,SetUsername] = useState("asdqwe");
const[University,SetUniversity] = useState("dqawe");
const[Age,SetAge] = useState();
const[Password2,SetPassword2] = useState("ASd");
const[Email2,SetEmail2] = useState("ASdq");
const[Username2,SetUsername2] = useState("Asdqw");
const[University2,SetUniversity2] = useState("Asdqe");
const[Age2,SetAge2] = useState();

const changeScreenPage =()=>{
    Page?SetPage(false):SetPage(true);
    console.log(Page);
}

const testPost = async(e) =>{
    e.preventDefault(); 
    console.log("test");
}

    return (
        <>
        <div className={Page?"container right-panel-active":"container"} id="container">
        <div className="form-container sign-up-container right-panel-active " >
        <form  onSubmit={testPost} >
        <h1>Create Account</h1>
        <input type="text" placeholder="Username" onChange={(e) => {SetUsername(e.target.value)}} />
        <input type="text" placeholder="University" onChange={(e) => {SetUniversity(e.target.value)}}/>
        <input type="email" placeholder="email" onChange={(e) => {SetEmail(e.target.value)}}/>
        <input type="number" placeholder="age" onChange={(e) => {SetAge(e.target.value)}}/>
        <input type="password" placeholder="Password" name="pswd1" onChange={(e) => {SetPassword(e.target.value)}}/>
        <input type="password" placeholder="confirm passord" name="pswd2" onChange={(e) => {SetPassword(e.target.value)}}/>
        <button type="submit">Sign Up</button>
        </form>
    </div>
    <div className="form-container sign-in-container">
        <form action="#">
        <h1>Sign in</h1>
        <div className="social-container">
        <a href="#" class="social"><i className="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i className="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" onChange={(e) => {SetEmail(e.target.value)}}/>
        <input type="password" placeholder="Password" onChange={(e) => {SetPassword(e.target.value)}}/>
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
    </form>
    </div>
    <div className="overlay-container">
    <div className="overlay">
        <div className="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button className="ghost" id="signIn" onClick={changeScreenPage}>Sign In</button>
        </div>
        <div className="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button className="ghost" id="signUp" onClick={changeScreenPage}>Sign Up</button>
        </div>
    </div>
    </div>
</div>

</>

    )
}

export default LoginSignUp