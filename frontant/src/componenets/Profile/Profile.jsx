// Layout.jsx
import React,{useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaMapMarkedAlt, FaUser, FaListAlt, FaSignOutAlt, FaLock } from 'react-icons/fa'; // Font Awesome Icons

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation(); // To determine the current path

  const [page , setPage ] = useState("profile")


  const handleNavigation = (path) => {
    navigate(path);
  };



  return (
    <div className="flex h-screen overflow-hidden bg--100 text-gray-800">
      <aside className="sticky top-0 w-64 bg-white-800 text-white p-5 border-r border-gray-300 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-5 text-black">Profile Menu</h2>
        <nav className="w-full">
          <NavItem
            onClick={() => setPage('details')}
            icon={<FaUser className="text-black text-xl" />}
            text="Profile Details"
          />
          <NavItem
            onClick={() => setPage('address')}
            icon={<FaMapMarkedAlt className="text-black text-xl" />}
            text="Address"
          />
          <NavItem
            onClick={() => setPage('orders')}
            icon={<FaListAlt className="text-black text-xl" />}
            text="Orders"
          />
          <NavItem
            onClick={() => setPage('changepass')}
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
      { page === 'details' && (
  <div className="profile-details p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">Profile Details</h1>
    
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">Name:</label>
      <p className="text-gray-600">John Doe</p>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">Email:</label>
      <p className="text-gray-600">johndoe@example.com</p>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">Phone:</label>
      <p className="text-gray-600">+123 456 7890</p>
    </div>

   

    
  </div>
)}

{ page === 'orders' && (
  <div className="orders-details p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">Order History</h1>

    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4 border">Order ID</th>
          <th className="py-2 px-4 border">Date</th>
          <th className="py-2 px-4 border">Item</th>
          <th className="py-2 px-4 border">Price</th>
          <th className="py-2 px-4 border">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border">#12345</td>
          <td className="py-2 px-4 border">2024-09-10</td>
          <td className="py-2 px-4 border">Product A</td>
          <td className="py-2 px-4 border">$25.00</td>
          <td className="py-2 px-4 border">Delivered</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border">#12346</td>
          <td className="py-2 px-4 border">2024-09-15</td>
          <td className="py-2 px-4 border">Product B</td>
          <td className="py-2 px-4 border">$15.00</td>
          <td className="py-2 px-4 border">In Transit</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border">#12347</td>
          <td className="py-2 px-4 border">2024-09-20</td>
          <td className="py-2 px-4 border">Product C</td>
          <td className="py-2 px-4 border">$30.00</td>
          <td className="py-2 px-4 border">Cancelled</td>
        </tr>
      </tbody>
    </table>
  </div>
)}

    { page === 'address' && (
  <div className="address-details p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">Address Details</h1>

    <div className="mb-4">
      <h2 className="text-2xl font-semibold">Current Address:</h2>
      <p className="text-gray-700">John Doe</p>
      <p className="text-gray-700">123 Main St</p>
      <p className="text-gray-700">Anytown, CA 12345</p>
      <p className="text-gray-700">USA</p>
      <button 
        onClick={() => setPage('editAddress')} 
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Edit Address
      </button>
    </div>

    <div className="mb-4">
      <h2 className="text-2xl font-semibold">Add New Address:</h2>
      <button 
        onClick={() => setPage('addAddress')} 
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Address
      </button>
    </div>
  </div>
)}

{/* New Address Form Component (Placeholder) */}
{page === 'addAddress' && (
  <div className="add-address-form p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">Add New Address</h1>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Name:</label>
        <input type="text" className="p-2 border border-gray-300 rounded w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Street Address:</label>
        <input type="text" className="p-2 border border-gray-300 rounded w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">City:</label>
        <input type="text" className="p-2 border border-gray-300 rounded w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">State:</label>
        <input type="text" className="p-2 border border-gray-300 rounded w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">ZIP Code:</label>
        <input type="text" className="p-2 border border-gray-300 rounded w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Country:</label>
        <input type="text" className="p-2 border border-gray-300 rounded w-full" />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Save Address
      </button>
    </form>
  </div>
)}

{/* Edit Address Form Component (Placeholder) */}
{page === 'editAddress' && (
  <div className="edit-address-form p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">Edit Address</h1>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Name:</label>
        <input type="text" className="p-2 border border-gray-300 rounded w-full" defaultValue="John Doe" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Street Address:</label>
        <input type="text" className="p-2 border border-gray-300 rounded w-full" defaultValue="123 Main St" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">City:</label>
        <input type="text" className="p-2 border border-gray-300 rounded w-full" defaultValue="Anytown" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">State:</label>
        <input type="text" className="p-2 border border-gray-300 rounded w-full" defaultValue="CA" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">ZIP Code:</label>
        <input type="text" className="p-2 border border-gray-300 rounded w-full" defaultValue="12345" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Country:</label>
        <input type="text" className="p-2 border border-gray-300 rounded w-full" defaultValue="USA" />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Save Changes
      </button>
    </form>
  </div>
)}

{ page === 'changepass' && (
  <div className="change-password-form p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">Change Password</h1>
    <form >
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Current Password:</label>
        <input 
          type="password" 
          className="p-2 border border-gray-300 rounded w-full" 
          required 
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">New Password:</label>
        <input 
          type="password" 
          className="p-2 border border-gray-300 rounded w-full" 
          required 
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Confirm New Password:</label>
        <input 
          type="password" 
          className="p-2 border border-gray-300 rounded w-full" 
          required 
        />
      </div>

      <button 
        type="submit" 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Change Password
      </button>
    </form>
  </div>
)}

        {/* {isProfilePage && <ProfileDetails />}
        {isAddressPage && <AddressDetails />}
        {isOrdersPage && <OrdersPage />} */}
      </main>
    </div>
  );
};

const NavItem = ({ onClick, icon, text }) => (
  <div
    onClick={onClick}
    className="flex items-center gap-4 mb-4 cursor-pointer p-3 rounded-lg bg-gray-300 hover:bg-gray-600 transition-colors"
  >
    {icon}
    <span className="text-lg text-black">{text}</span>
  </div>
);

// ProfileDetails component to render profile information
const ProfileDetails = () => (
  <div className="profile-details p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">Profile Details</h1>
    <div className="profile-info">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Name:</label>
        <p className="text-gray-600">John Doe</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <p className="text-gray-600">johndoe@example.com</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Phone:</label>
        <p className="text-gray-600">+123 456 7890</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Address:</label>
        <p className="text-gray-600">123 Main St, Anytown, USA</p>
      </div>
    </div>
    


  </div>
);

// AddressDetails component to render address information
const AddressDetails = () => (
  <div className="address-details p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">Address Details</h1>
    <div className="address-info">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Address:</label>
        <p className="text-gray-600">123 Main St, Anytown, USA</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">City:</label>
        <p className="text-gray-600">Anytown</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">State:</label>
        <p className="text-gray-600">California</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">ZIP Code:</label>
        <p className="text-gray-600">12345</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Country:</label>
        <p className="text-gray-600">USA</p>
      </div>
    </div>
  </div>
);

// OrdersPage component placeholder (You should implement this component)
const OrdersPage = () => (
  <div className="orders-page p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">Orders Page</h1>
    {/* Add your order details here */}
    <p className="text-gray-600">Order details will be displayed here.</p>
  </div>
);

export default Layout;
