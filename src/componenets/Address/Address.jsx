import React from 'react';
import { useNavigate } from 'react-router-dom';
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

  return (
    <div style={containerStyle}>
      <aside style={sidebarStyle}>
        <h2 style={sidebarTitleStyle}>Address Management</h2>
        <button onClick={handleAddAddress} style={addButtonStyle}>
          Add New Address
        </button>
      </aside>
      <main style={mainContentStyle}>
        <h1 style={headerStyle}>Your Addresses</h1>
        <div style={addressListStyle}>
          {/* Mock data for demonstration purposes */}
          {addressData.map((address) => (
            <div key={address.id} style={addressCardStyle}>
              <div style={addressDetailsStyle}>
                <FaMapMarkedAlt style={iconStyle} />
                <div>
                  <p style={addressTextStyle}>{address.street}</p>
                  <p style={addressTextStyle}>{address.city}, {address.state} {address.zipCode}</p>
                </div>
              </div>
              <div style={actionsStyle}>
                <button
                  onClick={() => handleEditAddress(address.id)}
                  style={actionButtonStyle}
                >
                  <FaEdit style={actionIconStyle} /> Edit
                </button>
                <button
                  onClick={() => handleDeleteAddress(address.id)}
                  style={actionButtonStyle}
                >
                  <FaTrash style={actionIconStyle} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
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
