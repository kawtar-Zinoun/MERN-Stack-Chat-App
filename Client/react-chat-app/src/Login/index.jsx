import React, { useState } from "react";
import "../Css/index.css";
import "../Css/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleEmail() {
    var r = 1;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="titleContainer">
        <span>Welcome to ChatNow!</span>
        <span class="line"></span>
        <p>Chat with your friends, family, and colleagues, all in one place.</p>
      </div>
      <div className="login">
        <span className="title">Let's log you in</span>

        <form onSubmit={handleSubmit}>
          <input type="text" name="email" placeholder="Enter your email" className="input" onChange={handleEmail()} />
          <input type="text" name="email"  placeholder="Enter your password" className="input" value={email} onChange={handleEmail()} />
          <input type="submit" value="Login" className="submitButton"/>
        </form>
        <span class="line2"></span>
        <p>Don't have an account? <span>Sign up here</span></p>
      </div>

    </div>
  );
}