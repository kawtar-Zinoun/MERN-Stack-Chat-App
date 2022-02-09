import React, { useState } from "react";
import "../../Css/Login_signup/index.css";
import {Link} from "react-router-dom";
import AuthService from "../../Services/auth.service";

var validator = require("email-validator");


export default function SignUp() {
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [username, setusername] = useState(null);
  const [usernameError, setusernameError] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [resMessage, setResMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  
  function handleEmail(e) {
    const email = e.target.value;

    if(email.length > 0) {

      if (validator.validate(e.target.value)) {
        setEmail(e.target.value); setEmailError(null);
      }
      else setEmailError("Please enter a valid email");

    }
    else setEmailError("Please enter an email");
    
  }
   
  function handleUsername(e) {
    const username = e.target.value;
    
    if(username.length > 0) {
      setusername(username);
      setusernameError(null);
    }
    else {
      setusername(null);
      setusernameError("Please enter an username")
    }
  }

  function handlePassword(e) {
    const password = e.target.value;
    
    if(password.length > 0) {
      setPassword(password);
      setPasswordError(null);
    }
    else {
      setPassword(null);
      setPasswordError("Please enter a password")
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setResMessage(null);
    setLoading(true);

    if (emailError == null && usernameError == null && passwordError == null) {
      AuthService.register(username,email,password).then( () =>
      {
        console.log("registred");

      },
      error => {
        const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        setResMessage(resMessage);
        setLoading(false);
      })
    }
    else 
    setLoading(false);
  }

  return (
    <div className="container">
      <div className="titleContainer">
        <span>Welcome to ChatNow!</span>
        <span class="line"></span>
        <p>Chat with your friends, family, and colleagues, all in one place.</p>
      </div>
      <div className="card" style={{height:'87vh'}}>
        <span className="title">Let's sign you up!</span>

        <form onSubmit={handleSubmit}>
          <input type="text" name="email" placeholder="Enter your email" className="input" onChange={handleEmail} />
          { emailError && <span className="error"> { emailError } </span> }
          <input type="text" name="username" placeholder="Enter your username" className="input" onChange={handleUsername} />
          { usernameError && <span className="error"> { usernameError } </span> }
          <input type="text" name="password"  placeholder="Enter your password" className="input" onChange={handlePassword} />
          { passwordError && <span className="error"> { passwordError } </span> }
          <input type="submit" value="Sign up" className="submitButton"/>
          { resMessage && <span className="error"> { resMessage } </span> }
        </form>
        <span class="line2"></span>
        <p>Already have an account?  <Link to="/"  style={{ textDecoration: 'none' }}> <span>Sign in here</span> </Link> </p>
      </div>

    </div>
  );
}