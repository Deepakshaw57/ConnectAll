import React from 'react';

const ProfileSidebar = ({ isOpen, onClose, user, handleLogout }) => {
  return (
    <div className={`profile-sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>Close</button>
      <div className="user-info">
        <img src={user?.dp} alt="Profile" />
        <h3>{user?.name}</h3>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfileSidebar;