// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ProfilePage = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const id = localStorage.getItem("userId"); // login ke time store kiya tha
//     if (!id) return;

//     axios
//       .post("http://localhost:3004/auth/getUserDetails", { id })
//       .then((res) => {
//         setUser(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching user:", err);
//       });
//   }, []);

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div className="profile-container">
//       <h2>Welcome, {user.fullName}</h2>
//       <p><b>Email:</b> {user.email}</p>
//       <p><b>Phone:</b> {user.phone}</p>
//       <p><b>Address:</b> {user.address}</p>
//     </div>
//   );
// };

// export default ProfilePage;

// components/sections/ProfileOverview.js
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";

const ProfileOverview = ({ userData }) => {

  const [user, setUser] = useState(null);

  // API URL 
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const id = localStorage.getItem("userId"); // login ke time store kiya tha
    if (!id) return;

    axios.post(`${apiUrl}/auth/getUserDetails`, { id })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="section profile-overview">
      <h2>Profile Overview</h2>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {userData.profileImage ? (
              <img src={userData.profileImage} alt="Profile" />
            ) : (
              <div className="avatar-placeholder">
                {user.fullName.charAt(0)}
              </div>
            )}
          </div>
          <div className="profile-info">
            <h2>{user.fullName}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Location:</strong> {user.location}</p>
            {userData.phone && <p><strong>Phone:</strong> {user.phone}</p>}
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <h3>5</h3>
            <p>Orders</p>
          </div>
          <div className="stat-item">
            <h3>12</h3>
            <p>Wishlist Items</p>
          </div>
          <div className="stat-item">
            <h3>2</h3>
            <p>Notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;