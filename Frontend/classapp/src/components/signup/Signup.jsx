import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  async function submithandler(e) {
    console.log("inside submithandler");
    e.preventDefault();
    const data = { name, email, password, role, phone };
    console.log(">>>>>>>>>>>>data>>>>>>>>", data);
    const response = await axios.post(
      "http://localhost:3000/users/signup",
      data
    );
    console.log(">>>>>>>>>response>>>>>>>>>>", response);
    if (response.status === 200) {
      alert("data saved successfully");
    } else if (response.status === 400) {
      alert("all fields are required");
    } else if (response.status === 500) {
      alert("internal server error");
    }
    navigate("/login");
    console.log(name, email, password, phone);
  }

  return (
    <div>
      <div className="signbox">
        <form className="sign" onSubmit={submithandler}>
          <h1>Sign Up</h1>
          <div className="inp">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
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
            <input
              type="number"
              placeholder="Enter Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            <label>
              <input
                type="radio"
                value="student"
                checked={role === "student"}
                onChange={(e) => setRole(e.target.value)}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                value="teacher"
                checked={role === "teacher"}
                onChange={(e) => setRole(e.target.value)}
              />
              Teacher
            </label>
            <label>
              <input
                type="radio"
                value="admin"
                checked={role === "admin"}
                onChange={(e) => setRole(e.target.value)}
              />
              Admin
            </label>
          </div>
          <button className="btn">Sign Up</button>
          <h5>Already have an account? Log in</h5>
          <button type="submit" className="btn1">
            Sign Up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
