import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cute from '../../images/cute.jpg';
import cartImage from '../../images/cartImage.jpg'

function AuthModal({ isOpen, onClose, currentForm, switchForm }) {
  if (!isOpen) return null;
  

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative overflow-hidden">
        {/* Cute Mascot Image */}
        <img
          src="cute"
          alt="Cute Mascot"
          className="absolute top-[-60px] right-[-60px] w-32 h-32 opacity-50"
        />

        {/* Header Image */}
        <img
          src="cute"
          alt="Cute Header"
          className="w-full h-24 object-cover mb-4"
        />

        <h2 className="text-2xl font-bold mb-4 text-purple-600 text-center">
          {currentForm === 'signIn' ? 'Sign In' : 'Register'}
        </h2>

        {currentForm === 'signIn' ? (
          <form>
            <div className="mb-4 flex items-center border-2 border-purple-300 rounded-lg">
              <span className="text-purple-500 px-3">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="mb-4 flex items-center border-2 border-purple-300 rounded-lg">
              <span className="text-purple-500 px-3">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
            >
              Close
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm">
                Don't have an account?{' '}
                <button
                  onClick={() => switchForm('register')}
                  className="text-purple-600 underline"
                >
                  Register
                </button>
              </p>
            </div>
          </form>
        ) : (
          <form>
            <div className="mb-4 flex items-center border-2 border-purple-300 rounded-lg">
              <span className="text-purple-500 px-3">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                id="register-name"
                placeholder="Username"
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="mb-4 flex items-center border-2 border-purple-300 rounded-lg">
              <span className="text-purple-500 px-3">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                id="register-email"
                placeholder="Email"
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="mb-4 flex items-center border-2 border-purple-300 rounded-lg">
              <span className="text-purple-500 px-3">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                id="register-password"
                placeholder="Password"
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="mb-4 flex items-center border-2 border-purple-300 rounded-lg">
              <span className="text-purple-500 px-3">
                <i className="fas fa-phone"></i>
              </span>
              <input
                type="tel"
                id="register-number"
                placeholder="Phone Number"
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="mb-4 flex items-center border-2 border-purple-300 rounded-lg">
              <span className="text-purple-500 px-3">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600"
            >
              Register
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
            >
              Close
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm">
                Already have an account?{' '}
                <button
                  onClick={() => switchForm('signIn')}
                  className="text-purple-600 underline"
                >
                  Sign In
                </button>
              </p>
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

  const navigate = useNavigate();
  const goToShopPage = () =>{
    navigate('/shop')
  }

  const navigat = useNavigate();
  const goToProfile = () =>{
    navigate('/profile')
  }

  return (
    <header className="sticky top-0 bg-orange-500 shadow-lg flex items-center justify-between px-12 py-4 z-10">
      <div className="flex items-center space-x-8 w-1/4">
        <a href="#">
          {/* Logo or SVG here */}
        </a>
      </div>

      <nav className="flex-1 flex justify-center space-x-4 md:space-x-8 lg:space-x-20">
  <a
    href="#"
    className="text-white text-lg hover:text-green-300 transition-colors duration-200"
    onClick={goToShopPage}
  >
    Shop
  </a>
  <a
    href="#"
    className="text-white text-lg hover:text-green-300 transition-colors duration-200"
  >
    Deals & Promotions
  </a>
  <a
    href="#"
    className="text-white text-lg hover:text-green-300 transition-colors duration-200"
  >
    Category
  </a>
  <a
    href="#"
    className="text-white text-lg hover:text-green-300 transition-colors duration-200"
  >
    Age
  </a>
  <a
    href="#"
    className="text-white text-lg hover:text-green-300 transition-colors duration-200"
  >
    Brand
  </a>
  <a
    href="#"
    className="text-white text-lg hover:text-green-300 transition-colors duration-200"
  >
    Characters
  </a>
</nav>


      <div className="flex items-center justify-between space-x-6">
  <div className="flex items-center space-x-6">
    <input
      type="text"
      placeholder="Search"
      className="rounded-full w-72 bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
    />
    <button
      onClick={openAuthModal}
      className="hover:text-green-500 text-white text-lg"
    >
      Sign In / Register
    </button>
  </div>
  <div className="flex items-center space-x-6">
    <a
      href="#"
      className="text-white text-lg hover:text-green-300 transition-colors duration-200"
      onClick={goToProfile}
    >
      Profile
    </a>
    <a
      href="#"
      className="text-white text-lg hover:text-green-300 transition-colors duration-200"
    >
      Wishlist
    </a>
    <a
      href="#"
      src={cartImage}
      
      className="text-white text-lg hover:text-green-300 transition-colors duration-200"
    >
      Cart
    </a>
  </div>
</div>



      {/* Unified Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} currentForm={currentForm} switchForm={switchForm} />
    </header>
  );
}

export default Header;
