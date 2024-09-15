// Layout.jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaMapMarkedAlt, FaUser, FaListAlt, FaSignOutAlt, FaLock } from 'react-icons/fa'; // Font Awesome Icons

const Layout = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div style={containerStyle}>
      <aside style={sidebarStyle}>
        <h2 style={sidebarTitleStyle}>Profile Menu</h2>
        <nav style={navStyle}>
          <NavItem
            onClick={() => handleNavigation('/shop')}
            icon={<FaUser style={iconStyle} />}
            text="Shop"
          />
          <NavItem
            onClick={() => handleNavigation('/profile')}
            icon={<FaUser style={iconStyle} />}
            text="Profile Details"
          />
          <NavItem
            onClick={() => handleNavigation('/address')}
            icon={<FaMapMarkedAlt style={iconStyle} />}
            text="Address"
          />
          <NavItem
            onClick={() => handleNavigation('/orders')}
            icon={<FaListAlt style={iconStyle} />}
            text="Orders"
          />
          <NavItem
            onClick={() => handleNavigation('/change-password')}
            icon={<FaLock style={iconStyle} />}
            text="Change Password"
          />
          <NavItem
            onClick={() => handleNavigation('/signout')}
            icon={<FaSignOutAlt style={iconStyle} />}
            text="Sign Out"
          />
        </nav>
      </aside>
      <main style={mainContentStyle}>
        <Outlet /> {/* This will render the child routes */}
      </main>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
};

const sidebarStyle = {
  width: '260px',
  backgroundColor: '#004d40', // Dark teal background for the sidebar
  color: '#ffffff',
  padding: '20px',
  borderRight: '2px solid #00332d',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const sidebarTitleStyle = {
  fontSize: '1.8rem',
  marginBottom: '20px',
  fontWeight: 'bold',
  color: '#ffffff',
};

const navStyle = {
  width: '100%',
};

const navItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  marginBottom: '15px',
  cursor: 'pointer',
  padding: '12px 18px',
  borderRadius: '12px',
  transition: 'background-color 0.3s, transform 0.3s',
  backgroundColor: '#00332d', // Darker teal background for nav items
  color: '#ffffff',
};

const navItemHoverStyle = {
  backgroundColor: '#00281f',
};

const mainContentStyle = {
  flexGrow: 1,
  padding: '30px',
  backgroundColor: '#ffffff', // White background for the main content area
  overflowY: 'auto',
};

const iconStyle = {
  fontSize: '1.5rem',
  color: '#ffffff',
};

const NavItem = ({ onClick, icon, text }) => (
  <div
    onClick={onClick}
    style={navItemStyle}
    className="nav-item"
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#00281f'}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#00332d'}
  >
    {icon}
    <span style={{ fontSize: '1.2rem', color: '#ffffff' }}>{text}</span>
  </div>
);

export default Layout;
