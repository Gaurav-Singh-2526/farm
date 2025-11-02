// import axios from 'axios'
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import '../CSS/login.css';
// const Login = () => {
//     const navigate = useNavigate();
//     const [Login, setLogin] = useState({
//         email: "",
//         password: ""
//     })
//     const handleChange = (e) => {
//         setLogin(
//             { ...Login, [e.target.name]: e.target.value }
//         )

//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         console.log("login data is :", Login);

//         const result = await axios.post("http://localhost:3004/auth/login", Login)

//         console.log("Server Response:", result.data);

//         const userId = result.data.user?._id || result.data._id; // safe way ✅
//          if (!userId) {
//         alert("User ID not found in response!");
//         return;
//       }
//         localStorage.setItem("userId", userId);
//         console.log(userId);


//         setTimeout(() => {
//             alert("Login successful!", result);
//             navigate("/");
//         }, 100);


//         setLogin({
//             email: "",
//             password: "",

//         });


//     }

//     return (
//         <>
//             <div className="body">
//                 <div className="container">
//                     <div className="register-box">
//                         <h2>Login</h2>
//                         <form method="POST" onSubmit={handleSubmit} action="/Login">

//                             <div className="input-group">
//                                 <label htmlFor="email">Email</label>
//                                 <input type="email" id="email" name="email" value={Login.email} onChange={handleChange} placeholder="Enter your email" />
//                             </div>
//                             <div className="input-group">
//                                 <label htmlFor="password">Password</label>
//                                 <input type="password" id="password" name="password" value={Login.password} onChange={handleChange} placeholder="Enter your password" />
//                             </div>

//                             <button type="submit">Login</button>
//                         </form>
//                         <p className="login-text"> Have not account? <Link to="/Register">Register</Link></p>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Login;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // 👈 import
import "../CSS/login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // 👈 get login function from context

  // API URL 
  const apiUrl = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login data is:", formData);

    try {
      const result = await axios.post(`${apiUrl}/auth/login`, formData);
      const user = result.data.user;

      // ✅ Save to localStorage
      localStorage.setItem("userId", user._id);
      localStorage.setItem("loggedInUser", user.fullName);

      // ✅ Update global context
      login(user.fullName);

      alert("✅ Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      alert("❌ Login failed!");
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="register-box">
          <h2>Login</h2>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button className="login-btn" type="submit">Login</button>
          </form>
          <p className="login-text">
            Don’t have an account? <Link to="/Register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
