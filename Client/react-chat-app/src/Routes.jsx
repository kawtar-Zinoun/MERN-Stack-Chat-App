import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Login';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}