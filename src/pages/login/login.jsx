import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { database } from "../../firebase";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(database, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Name: " + user.email);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>{" "}
    </div>
  );
};

export default Login;
