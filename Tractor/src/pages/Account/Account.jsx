
// components/ProfileDashboard.js
import React, { useState } from 'react';
import Sidebar from '../Account/components/Sidebar';
import ProfileContent from '../Account/components/ProfileContent';
import '../Account/Account.css';
// import './ProfileDashboard.css'; 

const ProfileDashboard = () => {
  const [activeSection, setActiveSection] = useState('profile-overview');
  const [userData, setUserData] = useState({
    name: 'Yashraj Singh',
    email: 'yashraj123@gmail.com',
    location: 'Lucknow, India',
    phone: '+91 9876543210',
    profileImage: null
  });

  // const [orders, setOrders] = useState([
  //   { id: 1, date: '2024-01-15', items: 'Tractor', total: 5000, status: 'Delivered' },
  //   { id: 2, date: '2024-01-10', items: 'Harvester', total: 8000, status: 'Processing' }
  // ]);

  const [wishlist, setWishlist] = useState([
    { id: 1, name: 'Rotavator', price: 3000, image: '/images/rotavator.jpg' },
    { id: 2, name: 'Seed Drill', price: 4500, image: '/images/seed-drill.jpg' }
  ]);

  // const [notifications, setNotifications] = useState([
  //   { id: 1, message: 'Your order #1234 has been shipped', read: false },
  //   { id: 2, message: 'New tractor available for rent in your area', read: true }
  // ]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleUpdateProfile = (updatedData) => {
    setUserData(updatedData);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      alert('Logging out...');
      // Here you would typically clear auth tokens and redirect
    }
  };

  return (
    <div className="profile-dashboard">
      {/* Header */}


      <div className="dashboard-container">
        <Sidebar 
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          onLogout={handleLogout}
        />
        
        <ProfileContent
          activeSection={activeSection}
          userData={userData}
          // orders={orders}
          wishlist={wishlist}
          // notifications={notifications}
          onUpdateProfile={handleUpdateProfile}
          onRemoveWishlistItem={(id) => setWishlist(wishlist.filter(item => item.id !== id))}
          onMarkNotificationRead={(id) => setNotifications(notifications.map(notif => 
            notif.id === id ? {...notif, read: true} : notif
          ))}
        />
      </div>
    </div>
  );
};

export default ProfileDashboard;