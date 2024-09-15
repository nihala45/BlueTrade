import React, { useState } from 'react';

// AuthModal Component
function AuthModal({ isOpen, onClose, currentForm, switchForm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">{currentForm === 'signIn' ? 'Sign In' : 'Register'}</h2>
        
        {currentForm === 'signIn' ? (
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email:</label>
              <input type="email" id="email" placeholder="Email" className="border rounded-lg w-full px-4 py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-2">Password:</label>
              <input type="password" id="password" placeholder="Password" className="border rounded-lg w-full px-4 py-2" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Sign In</button>
            <button type="button" onClick={onClose} className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-lg">Close</button>
            <div className="mt-4">
              <p className="text-sm">Don't have an account? <button onClick={() => switchForm('register')} className="text-blue-500">Register</button></p>
            </div>
          </form>
        ) : (
          <form>
            <div className="mb-4">
              <label htmlFor="register-email" className="block text-sm font-medium mb-2">Email:</label>
              <input type="email" id="register-email" placeholder="Email" className="border rounded-lg w-full px-4 py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="register-password" className="block text-sm font-medium mb-2">Password:</label>
              <input type="password" id="register-password" placeholder="Password" className="border rounded-lg w-full px-4 py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="confirm-password" className="block text-sm font-medium mb-2">Confirm Password:</label>
              <input type="password" id="confirm-password" placeholder="Confirm Password" className="border rounded-lg w-full px-4 py-2" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Register</button>
            <button type="button" onClick={onClose} className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-lg">Close</button>
            <div className="mt-4">
              <p className="text-sm">Already have an account? <button onClick={() => switchForm('signIn')} className="text-blue-500">Sign In</button></p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState('signIn'); // 'signIn' or 'register'

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const switchForm = (form) => setCurrentForm(form);

  return (
    <header className="sticky top-0 bg-gradient-to-r from-red-500 to-red-700 shadow-lg flex items-center justify-between px-12 py-4 z-10">
      <div className="flex items-center space-x-8 w-1/4">
        <a href="#">
          {/* Logo or SVG here */}
        </a>
      </div>

      <nav className="flex-1 flex justify-center space-x-8">
        <a href="#" className="text-white text-lg hover:text-green-300 transition-colors duration-200">Shop</a>
        <a href="#" className="text-white text-lg hover:text-green-300 transition-colors duration-200">Deals & Promotions</a>
        <a href="#" className="text-white text-lg hover:text-green-300 transition-colors duration-200">Category</a>
        <a href="#" className="text-white text-lg hover:text-green-300 transition-colors duration-200">Age</a>
        <a href="#" className="text-white text-lg hover:text-green-300 transition-colors duration-200">Brand</a>
        <a href="#" className="text-white text-lg hover:text-green-300 transition-colors duration-200">Characters</a>
      </nav>

      <div className="flex items-center space-x-6">
        <input type="text" placeholder="Search" className="rounded-full w-72 bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
        <button onClick={openAuthModal} className="hover:text-green-500 text-white text-lg">Sign In / Register</button>
      </div>

      {/* Unified Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} currentForm={currentForm} switchForm={switchForm} />
    </header>
  );
}

export default Header;
