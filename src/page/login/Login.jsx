import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="loginTitle">Login</div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          className="loginInput"
          type="email"
          placeholder="Enter your email....."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password"
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
