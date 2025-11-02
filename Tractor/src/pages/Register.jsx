import React, { useState } from "react";
import "../CSS/register.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios"
import { forwardRef } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });


  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });

  };
  // API URL 
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleRegisterData = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${apiUrl}/auth/register`, register);
      console.log("Server Response:", result.data);
      alert(result.data.message);

      const userId = result.data.user?._id || result.data._id;
      if (!userId) {
        alert("User ID not found in response!");
        return;
      }

      localStorage.setItem("userId", userId);
      console.log("Saved userId:", userId);

      navigate("/login");

      setRegister({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        location: "",
      });
      // navigate("/login");
    }
    catch (error) {
      console.error("Registration Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed!");
    }

  };


  // console.log("User Registered:", register)



  return (
    <div className="body">
      <div className="container">
        <div className="register-box">
          <h2>Register</h2>
          <form method="POST" onSubmit={handleRegisterData}>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="fullName"
                value={register.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={register.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={register.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={register.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">phone</label>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={register.phone}
                onChange={handleChange}
                placeholder="enter phone no"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="location">location</label>
              <input
                type="location"
                id="location"
                name="location"
                value={register.location}
                onChange={handleChange}
                placeholder="enter location"
                required
              />
            </div>
            <button className="login-btn" type="submit">Register</button>
          </form>
          <p className="login-text">
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
