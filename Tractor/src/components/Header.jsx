// import React, { useEffect, useState } from 'react';
// import "../CSS/header2.css";
// import { NavLink, useNavigate } from 'react-router-dom';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai";
// import { ToastContainer } from 'react-toastify';

// const Header = () => {
//   const navigate = useNavigate();
//   const [showMenu, setShowMenu] = useState(false);
//   const [loggedInUser, setLoggedInUser] = useState("");

//   const handleLogin = () => {
//     navigate("/login");
//     setShowMenu(false);
//   };

//   const handleNavClick = () => {
//     setShowMenu(false);
//   };
//   // const [products, setProducts] = useState([]);
//   // const navigate = useNavigate();
//   useEffect(() => {
//     setLoggedInUser(localStorage.getItem("loggedInUser"));
//   }, []);
//   const handleLogout = (e) => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("loggedInUser");
//     handleSuccess("User Loggedout");
//     setTimeout(() => {
//       navigate("/login");
//     }, 1000);
//   };

//   return (
//     <header className="main-header">
//       {/* Logo */}
//       <div className="logo" onClick={() => navigate("/")}>
//         <img src="/images/logo.png" alt="logo" />
//       </div>

//       {/* Hamburger button (only when menu is closed) */}
//       {!showMenu && (
//         <button className="menu-btn" onClick={() => setShowMenu(true)}>
//           <GiHamburgerMenu />
//         </button>
//       )}

//       {/* Mobile Menu */}
//       <nav className={`menu-mobile ${showMenu ? "open" : ""}`}>
//         {/* Close button inside menu */}
//         <button className="close-btn" onClick={() => setShowMenu(false)}>
//           <AiOutlineClose />
//         </button>

//         <NavLink to="/" className="nav-links" onClick={handleNavClick}>Home</NavLink>
//         <NavLink to="/about" className="nav-links" onClick={handleNavClick}>About</NavLink>
//         <NavLink to="/onrent" className="nav-links" onClick={handleNavClick}>On Rent</NavLink>
//         <NavLink to="/account" className="nav-links" onClick={handleNavClick}>Account</NavLink>
//         <NavLink to="/viewtool" className="nav-links" onClick={handleNavClick}>View Tools</NavLink>
//         <NavLink to="/contact" className="nav-links" onClick={handleNavClick}>Contact Us</NavLink>

//         <div className="content-2">
//           <button onClick={handleLogin}>Login / SignUp</button>
//         </div>
//       </nav>
//        <div>

//         <h1>{loggedInUser}</h1>
//         <button onClick={handleLogout}>Logout</button>
//         <ToastContainer />
//       </div>
//       {/* Optional overlay (click to close) */}
//       {showMenu && <div className="menu-overlay" onClick={() => setShowMenu(false)}></div>}
//     </header>
//   );
// };

// export default Header;




import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import "../CSS/header2.css";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // ✅ Get user + logout from context
  const { loggedInUser, logout } = useAuth();

  const handleLogin = () => {
    navigate("/login");
    setShowMenu(false);
  };

  const handleLogout = () => {
    logout(); // clears state + storage
    toast.success("Logged out successfully!");
    setShowMenu(false);
    navigate("/");
  };
console.log("Header render => loggedInUser:", loggedInUser);

  return (
    <header className="main-header">
      <div className="logo" onClick={() => navigate("/")}>
        <img src="/images/logo.png" alt="logo" />
      </div>

      {!showMenu && (
        <button className="menu-btn" onClick={() => setShowMenu(true)}>
          <GiHamburgerMenu />
        </button>
      )}

      <nav className={`menu-mobile ${showMenu ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setShowMenu(false)}>
          <AiOutlineClose />
        </button>

        <NavLink to="/" className="nav-links" onClick={() => setShowMenu(false)}>
          Home
        </NavLink>
        <NavLink to="/about" className="nav-links" onClick={() => setShowMenu(false)}>
          About
        </NavLink>
        <NavLink to="/onrent" className="nav-links" onClick={() => setShowMenu(false)}>
          On Rent
        </NavLink>
        <NavLink to="/account" className="nav-links" onClick={() => setShowMenu(false)}>
          Account
        </NavLink>
        <NavLink to="/viewtool" className="nav-links" onClick={() => setShowMenu(false)}>
          View Tools
        </NavLink>
        <NavLink to="/contact" className="nav-links" onClick={() => setShowMenu(false)}>
          Contact Us
        </NavLink>

        <div className="content-2">
          {loggedInUser ? (
            <>
              {/* <h3 className="username">Welcome, {loggedInUser}</h3> */}
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <button onClick={handleLogin}>Login / SignUp</button>
          )}
        </div>
      </nav>

      {showMenu && <div className="menu-overlay" onClick={() => setShowMenu(false)}></div>}
    </header>
  );
};

export default Header;
