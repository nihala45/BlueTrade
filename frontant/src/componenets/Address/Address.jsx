import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaMapMarkedAlt, FaEdit, FaTrash } from 'react-icons/fa'; // Font Awesome Icons

function AddressPage() {
  const navigate = useNavigate();

  const handleAddAddress = () => {
    navigate('/add-address');
  };

  const handleEditAddress = (id) => {
    navigate(`/edit-address/${id}`);
  };

  const handleDeleteAddress = (id) => {
    // Handle address deletion logic here
    alert(`Address with ID ${id} will be deleted`);
  };
  const isAddressPage = location.pathname === '/address';


  return (
    <div className="flex h-screen overflow-hidden bg--100 text-gray-800">
      <aside className="sticky top-0 w-64 bg-white-800 text-white p-5 border-r border-gray-300 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-5 text-black">Profile Menu</h2>
        <nav className="w-full">
          <NavItem
            onClick={() => handleNavigation('/profile')}
            icon={<FaUser className="text-black text-xl" />}
            text="Profile Details"
          />
          <NavItem
            onClick={() => handleNavigation('/address')}
            icon={<FaMapMarkedAlt className="text-black text-xl" />}
            text="Address"
          />
          <NavItem
            onClick={() => handleNavigation('/orders')}
            icon={<FaListAlt className="text-black text-xl" />}
            text="Orders"
          />
          <NavItem
            onClick={() => handleNavigation('/change-password')}
            icon={<FaLock className="text-black text-xl" />}
            text="Change Password"
          />
          <NavItem
            onClick={() => handleNavigation('/signout')}
            icon={<FaSignOutAlt className="text-black text-xl" />}
            text="Sign Out"
          />
        </nav>
      </aside>
      <main className="flex-grow p-8 bg-white text-gray-800 overflow-y-auto">
        {isProfilePage ? (
          <ProfileDetails /> // Render profile details directly here
        ) : (
          <Outlet /> // Render child routes for other pages
        )}
      </main>
    </div>
  );
}

// Mock data
const addressData = [
  { id: 1, street: '123 Elm Street', city: 'Springfield', state: 'IL', zipCode: '62701' },
  { id: 2, street: '456 Oak Avenue', city: 'Greenwood', state: 'IN', zipCode: '46142' },
  // Add more addresses as needed
];

const containerStyle = {
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: '#f5f5f5', // Light gray background for the entire page
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

const addButtonStyle = {
  backgroundColor: '#00796b', // Teal background for the button
  color: '#ffffff',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1.1rem',
  transition: 'background-color 0.3s',
};

const addButtonHoverStyle = {
  backgroundColor: '#004d40',
};

const mainContentStyle = {
  flexGrow: 1,
  padding: '30px',
  backgroundColor: '#ffffff', // White background for the main content area
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const headerStyle = {
  fontSize: '2.5rem',
  marginBottom: '20px',
  color: '#333',
};

const addressListStyle = {
  width: '100%',
  maxWidth: '800px',
};

const addressCardStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '15px',
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const addressDetailsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
};

const addressTextStyle = {
  fontSize: '1rem',
  color: '#555',
};

const actionsStyle = {
  display: 'flex',
  gap: '10px',
};

const actionButtonStyle = {
  backgroundColor: '#00796b', // Teal background for action buttons
  color: '#ffffff',
  border: 'none',
  padding: '8px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
};

const actionIconStyle = {
  fontSize: '1rem',
};

const iconStyle = {
  fontSize: '1.5rem',
  color: '#004d40',
};

export default AddressPage;
