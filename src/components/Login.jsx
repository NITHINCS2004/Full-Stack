import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "../styles/Login.css";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const userDetails = jwtDecode(credentialResponse.credential);
    console.log(userDetails);
    localStorage.setItem("user", JSON.stringify(userDetails));
    onLogin(userDetails);
    navigate("/home");
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">WELCOME TO YOUTUBE</h1>
      <div className="google-login-box">
        <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("Login Failed")} />
      </div>
      <p className="click-here-text">Click here to login</p>
    </div>
  );
};

export default Login;
