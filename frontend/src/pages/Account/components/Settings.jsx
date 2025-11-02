// import React, { useState } from "react";
// import axios from "axios";

// const Settings = () => {
//   const [password, setPassword] = useState("");

//   const handlePasswordChange = async () => {
//     try {
//       await axios.put("http://localhost:3004/api/user/update-password", {
//         password,
//       });
//       alert("Password updated successfully!");
//       setPassword("");
//     } catch (error) {
//       alert("Error updating password.");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//     <div className="settings-container">
//       <h3>Account Settings</h3>

//       <div className="settings-section">
//         <label>New Password</label>
//         <input
//           type="password"
//           placeholder="Enter new password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handlePasswordChange}>Update Password</button>
//       </div>

//       <div className="settings-section">
//         <button className="logout-btn" onClick={handleLogout}>
//           🚪 Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Settings;


import React from "react";

const Settings = ({ darkMode, setDarkMode }) => {
  return (
    <section className="section active">
      <h2>Settings</h2>
      <div className="setting-item">
        <span>Dark Mode</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </section>
  );
};

export default Settings;
