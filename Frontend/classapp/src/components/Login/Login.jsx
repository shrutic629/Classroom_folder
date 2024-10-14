import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function loginhandler(e) {
    e.preventDefault();
    console.log(email, password);
    const data = { email, password };
    console.log(">>>>>>>>>data>>>>>>>>", data);
    const response = await axios.post(
      "http://localhost:3000/users/login",
      data
    );
    console.log(">>>>>>>>>response>>>>>>>", response.data);
    console.log(">>>>response role>>>>", response.data.existingUser.role);
    if (response.status === 200) {
      alert("login successfully");
    }

    console.log("response token generation ===>", response.data.token);
    localStorage.setItem("classapp_token", response.data.token);
    localStorage.setItem("logged_in_user_name", response.data.existingUser.name);

    // navigate as per role

    if (response.data.existingUser.role === "student") {
      navigate("/addstudent");
    }
    if (response.data.existingUser.role === "teacher") {
      navigate("/addteacher");
    }
    if (response.data.existingUser.role === "admin") {
      navigate("/");
    }
  }

  return (
    <div>
      <form className="logbox" onSubmit={loginhandler}>
        <div className="log">
          <h1>Login</h1>
          <div className="inp3">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button className="btn3">Login</button>
          <h6>Forgot Password?</h6>
          <h6>Don't have an account? Sign up</h6>
        </div>
      </form>
    </div>
  );
};

export default Login;
