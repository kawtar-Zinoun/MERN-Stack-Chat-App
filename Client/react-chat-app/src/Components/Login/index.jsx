import React, { useState } from "react";
import {Link} from "react-router-dom";

import "../../Css/Login_signup/index.css";
import "../../Css/Login_signup/login.css";
import AuthService from "../../Services/auth.service";

var validator = require("email-validator");


export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [message, setMessage] = useState(null);
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

  function handlePassword(e) {
    if(e.target.value.length>0) {
      setPassword(e.target.value);
      setPasswordError(null);
    }
    else setPasswordError("Please enter a password");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(null);
    setLoading(true);
    
    if(emailError == null && passwordError == null) 
    {
      AuthService.login(email, password).then(
        () => {
          // this.props.history.push("/profile");
          // window.location.reload();
          console.log("connected")
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          
          setMessage(resMessage);
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
        <span className="line"></span>
        <p>Chat with your friends, family, and colleagues, all in one place.</p>
      </div>
      <div className="card">
        <span className="title">Let's log you in</span>

        <form onSubmit={handleSubmit}>
          <input type="text" name="email" placeholder="Enter your email" className="input" onChange={handleEmail} />
          { emailError && <span className="error"> { emailError } </span> }
          <input type="password" name="email"  placeholder="Enter your password" className="input" onChange={handlePassword} />
          { passwordError && <span className="error"> { passwordError } </span> }
          <input type="submit" value="Login" className="submitButton"/>
          { message && <span className="error"> { message } </span> }
        </form>
        <span className="line2"></span>
        <p>Don't have an account? <Link to="/SignUp"  style={{ textDecoration: 'none' }}> <span>Sign up here</span> </Link> </p>
      </div>

    </div>
  );
}