import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await axios.post(
    //   "https://62e229233891dd9ba8e11ef2.mockapi.io/auth",
    //   {
    //     username,
    //     email,
    //     password,
    //   }
    // );

    // localStorage.setItem("user", JSON.stringify(res.data));
    // res.data && window.location.replace("/login");
  };
  return (
    <div className="register">
      <div className="registerTitle">Register</div>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username....."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your email....."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
