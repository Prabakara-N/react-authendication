import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "./styles/normalize.css";
import Home from "./Routes/Home";
import SignUp from "./Routes/SignUp";
import Login from "./Routes/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup/" element={<SignUp />} />
        <Route path="login/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
