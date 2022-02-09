import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/Signup';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/signUp" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
}