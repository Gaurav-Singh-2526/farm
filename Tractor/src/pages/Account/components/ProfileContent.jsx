// components/ProfileContent.js
import React from 'react';
import ProfileOverview from '../components/ProfileOverview';
import EditProfile from '../components/EditProfile';
// import MyOrders from '../components/MyBookings';
import Wishlist from '../components/Wishlist';
// import Notifications from './sections/Notifications';
import Settings from '../components/Settings';
import HelpSupport from '../components/Help';
import './ProfileContent.css';

const ProfileContent = ({ 
  activeSection, 
  userData, 
  orders, 
  wishlist, 
  notifications, 
  onUpdateProfile,
  onRemoveWishlistItem,
  onMarkNotificationRead 
}) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'profile-overview':
        return <ProfileOverview userData={userData}  />;
      
      case 'edit-profile':
        return <EditProfile userData={userData} onUpdateProfile={onUpdateProfile} />;
      
    //   case 'my-orders':
    //     return <MyOrders orders={orders} />;
      
      case 'wishlist':
        return <Wishlist items={wishlist} onRemoveItem={onRemoveWishlistItem} />;
      
      case 'notifications':
        return <Notifications notifications={notifications} onMarkRead={onMarkNotificationRead} />;
      
      case 'settings':
        return <Settings />;
      
      case 'help-support':
        return <HelpSupport />;
      
      default:
        return <ProfileOverview userData={userData} />;
    }
  };

  return (
    <div className="profile-content">
      <div className="content-header">
        {/* <h1>Profile</h1> */}
      </div>
      <div className="content-body">
        {renderSection()}
      </div>
    </div>
  );
};

export default ProfileContent;