import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaMapMarkedAlt, FaListAlt, FaSignOutAlt, FaLock } from 'react-icons/fa'; // Font Awesome Icons

function ProfilePage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem', color: '#333' }}>Profile</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            width: '100%',
            maxWidth: '600px',
          }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>My Account</h2>
          <div style={{ marginBottom: '20px' }}>
            <button
              onClick={() => handleNavigation('/shop')}
              style={buttonStyle}
            >
              <FaUser style={iconStyle} />
              <span>Shop</span>
            </button>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <button
              onClick={() => handleNavigation('/profile')}
              style={buttonStyle}
            >
              <FaUser style={iconStyle} />
              <span>Profile Details</span>
            </button>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <button
              onClick={() => handleNavigation('/address')}
              style={buttonStyle}
            >
              <FaMapMarkedAlt style={iconStyle} />
              <span>Address</span>
            </button>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <button
              onClick={() => handleNavigation('/orders')}
              style={buttonStyle}
            >
              <FaListAlt style={iconStyle} />
              <span>Orders</span>
            </button>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <button
              onClick={() => handleNavigation('/change-password')}
              style={buttonStyle}
            >
              <FaLock style={iconStyle} />
              <span>Change Password</span>
            </button>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <button
              onClick={() => handleNavigation('/signout')}
              style={buttonStyle}
            >
              <FaSignOutAlt style={iconStyle} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: 'white',
  border: '1px solid #ddd',
  padding: '10px 20px',
  borderRadius: '5px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'background-color 0.3s, box-shadow 0.3s',
};

const iconStyle = {
  fontSize: '1.5rem',
  color: '#333',
};

export default ProfilePage;
