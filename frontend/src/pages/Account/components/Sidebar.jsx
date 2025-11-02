// import React from "react";

// const Sidebar = ({
//   activeSection,
//   setActiveSection,
//   sidebarOpen,
//   setSidebarOpen,
//   handleLogout,
// }) => {
//   const menuItems = [
//     { id: "profile", icon: "fa-user", label: "Profile Overview" },
//     { id: "editProfile", icon: "fa-pen-to-square", label: "Edit Profile" },
//     { id: "orders", icon: "fa-box", label: "Orders" },
//     { id: "wishlist", icon: "fa-heart", label: "Wishlist" },
//     { id: "notifications", icon: "fa-bell", label: "Notifications" },
//     { id: "settings", icon: "fa-gear", label: "Settings" },
//     { id: "support", icon: "fa-circle-question", label: "Support" },
//   ];

//   return (
//     <>
//       <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>
//         <ul className="sidebar-menu">
//             <h2 className="sidebar-title">FarmEase</h2>
//           {menuItems.map((item) => (
//               <li key={item.id}>
//               <button
//                 className={`side-btn ${activeSection === item.id ? "active" : ""}`}
//                 onClick={() => {
//                   setActiveSection(item.id);
//                   setSidebarOpen(false);
//                 }}
//               >
//                 <i className={`fa-solid ${item.icon}`}></i> {item.label}
//               </button>
//             </li>
//           ))}
//         <button className="logout-btn" onClick={handleLogout}>
//           <i className="fa-solid fa-right-from-bracket"></i> Logout
//         </button>
//         </ul>
//       </aside>

//       <div
//         className={`overlay ${sidebarOpen ? "active" : ""}`}
//         onClick={() => setSidebarOpen(false)}
//       ></div>
//     </>
//   );
// };

// export default Sidebar;
// components/Sidebar.js
import React from 'react';
import './Sidebar2.css';

const Sidebar = ({ activeSection, onSectionChange, onLogout }) => {
  const menuItems = [
    { key: 'profile-overview', label: 'Profile Overview', icon: '👤' },
    { key: 'edit-profile', label: 'Edit Profile', icon: '✏️' },
    // { key: 'my-orders', label: 'My Orders', icon: '📦' },
    { key: 'wishlist', label: 'Wishlist', icon: '❤️' },
    // { key: 'notifications', label: 'Notifications', icon: '🔔' },
    { key: 'settings', label: 'Settings', icon: '⚙️' },
    { key: 'help-support', label: 'Help & Support', icon: '❓' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>FarmEase</h2>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.key}
            className={`sidebar-item ${activeSection === item.key ? 'active' : ''}`}
            onClick={() => onSectionChange(item.key)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
        
        <button
          className="sidebar-item logout-btn"
          onClick={onLogout}
        >
          <span className="sidebar-icon">🚪</span>
          <span className="sidebar-label">Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;