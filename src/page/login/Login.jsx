import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let account = localStorage.getItem("account");
    console.log(account);
    const data = JSON.parse(account);

    if (account == null) {
      alert("Vui lòng nhập đầy đủ thông tin đăng nhập !");
    } else if (email === data.email && password === data.password) {
      alert("Login Success");
      window.location.href = "/";
    } else {
      alert("Login false");
    }
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
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
