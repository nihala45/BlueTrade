import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cute from '../../images/cute.jpg';
import cartImage from '../../images/cartImage.jpg';
import arrow from '../../images/arrow.jpg';
import axios from 'axios';

function AuthModal({ isOpen, onClose, currentForm, switchForm }) {
  if (!isOpen) return null;

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [phone,setPhone] = useState()
  const [confirmPassword,setConfirmPassword] = useState('')

  const [nameError,setNameError] = useState('')
  const [passwordError,setPasswordError] = useState('')
  const [confirmPasswordError,setConfirmPasswordError] = useState('')

  const [emailError,setEmailError] = useState('')
  const [phoneError,setPhoneError] = useState('')







  const handleSignup = async (e) => {
    e.preventDefault();
  
    // Reset error states
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setPhoneError('');
    let result = true
    // Validation checks
    if (name.trim() === '') {
      setNameError('Please enter your name.');
      result=false
    }
  
    // Email validation (basic check)
    if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address.');
      result=false

    }
  
    // Password validation (minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character)
    if (password.trim() === '' || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
      setPasswordError('Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters.');
      result=false
      
    }
  
    // Phone number validation (assuming US format: (123) 456-7890 or 123-456-7890 or 1234567890)
    if (phone.trim() === '' || !/^(\(\d{3}\)\s?|\d{3}-)\d{3}-\d{4}$|^\d{10}$/.test(phone)) {
      setPhoneError('Please enter a valid phone number.');
      result=false
      
    }
    if(result===true){
    // Data to send in the API request
    const data = {
      name,
      email,
      phone,
      password,
    };
  
    try {
      // Send POST request to the API
      const response = await axios.post('http://127.0.0.1:8000/userside/userSignup/', data);
  
      // Handle successful signup
      console.log('Signup successful:', response.data);
  
      // Redirect or update the UI as needed
      // For example:
      // history.push('/login');
    } catch (error) {
      // Handle errors from the API
      if (error.response) {
        // Server-side errors
        console.log('Error response:', error.response.data);
  
        // Example error response handling
        const { errors } = error.response.data;
        if (errors) {
          setNameError(errors.name || '');
          setEmailError(errors.email || '');
          setPasswordError(errors.password || '');
          setPhoneError(errors.phone || '');
        }
      } else {
        // Client-side or network errors
        console.error('Error:', error.message);
      }
    }
    }
  };

  

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative overflow-hidden">
        <img
          src={cute}
          alt="Cute Mascot"
          className="absolute top-[-60px] right-[-60px] w-32 h-32 opacity-50"
        />
        <img
          src={cute}
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
          <form onSubmit={handleSignup}>
          <div className="mb-4 flex flex-col">
            <div className="flex items-center border-2 border-purple-300 rounded-lg">
              <span className="text-purple-500 px-3">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                id="register-name"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            {nameError && (
              <p className="text-red-500 text-sm mt-1 px-3">
                {nameError}
              </p>
            )}
          </div>
        
          <div className="mb-4 flex flex-col">
            <div className="flex items-center border-2 border-purple-300 rounded-lg">
              <span className="text-purple-500 px-3">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                id="register-email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            {emailError && (
              <p className="text-red-500 text-sm mt-1 px-3">
                {emailError}
              </p>
            )}
          </div>
          <div className="mb-4 flex flex-col">
            <div className="flex items-center border-2 border-purple-300 rounded-lg">
              <span className="text-purple-500 px-3">
                <i className="fas fa-phone"></i>
              </span>
              <input
                type="tel"
                id="register-number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            {phoneError && (
              <p className="text-red-500 text-sm mt-1 px-3">
                {phoneError}
              </p>
            )}
          </div>
          <div className="mb-4 flex flex-col">
            <div className="flex items-center border-2 border-purple-300 rounded-lg">
              <span className="text-purple-500 px-3">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                id="register-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1 px-3">
                {passwordError}
              </p>
            )}
          </div>
        
          
        
          <div className="mb-4 flex flex-col">
            <div className="flex items-center border-2 border-purple-300 rounded-lg">
              <span className="text-purple-500 px-3">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            {confirmPasswordError && (
              <p className="text-red-500 text-sm mt-1 px-3">
                {confirmPasswordError}
              </p>
            )}
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
  const [currentForm, setCurrentForm] = useState('signIn');

  const  openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const switchForm = (form) => setCurrentForm(form);

  const navigate = useNavigate();
  const goToShopPage = () => navigate('/shop');
  const goToProfile = () => navigate('/profile');

  return (
    <header className="sticky top-0 bg-orange-500 shadow-lg flex items-center justify-between px-12 py-4 z-10">
      <div className="flex items-center space-x-8 w-1/4">
        <a href="#"> {/* Logo or SVG here */} </a>
      </div>

      <nav className="flex-1 flex justify-center space-x-4 md:space-x-8 lg:space-x-20">
        <a
          href="#"
          className="text-white text-lg hover:text-green-300 transition-colors duration-200 flex items-center"
          onClick={goToShopPage}
        >
          Shop
          <img src={arrow} alt="Arrow Icon" className="ml-2 w-4 h-4" />
        </a>
        <a
          href="#"
          className="text-white text-lg hover:text-green-300 transition-colors duration-200 flex items-center"
        >
          New Arrival
          <img src={arrow} alt="Arrow Icon" className="ml-2 w-4 h-4" />
        </a>
        <a
          href="#"
          className="text-white text-lg hover:text-green-300 transition-colors duration-200 flex items-center"
        >
          Category
          <img src={arrow} alt="Arrow Icon" className="ml-2 w-4 h-4" />
        </a>
        <a
          href="#"
          className="text-white text-lg hover:text-green-300 transition-colors duration-200 flex items-center"
        >
          Age
          <img src={arrow} alt="Arrow Icon" className="ml-2 w-4 h-4" />
        </a>
        {/* <a
          href="#"
          className="text-white text-lg hover:text-green-300 transition-colors duration-200 flex items-center"
        >
          Brand
          <img src={arrow} alt="Arrow Icon" className="ml-2 w-4 h-4" />
        </a> */}
        {/* <a
          href="#"
          className="text-white text-lg hover:text-green-300 transition-colors duration-200 flex items-center"
        >
          Characters
          <img src={arrow} alt="Arrow Icon" className="ml-2 w-4 h-4" />
        </a> */}

<input
      type="search"
      className="w-1/4 h-10 p-4 mt-2 rounded-full border-2 border-white-300 focus:border-blue-500 focus:outline-none text-lg"
      placeholder="Search..."
    />
      </nav>

      <div className="flex items-center justify-between space-x-6">
        <div className="flex items-center relative">
          <button onClick={goToProfile} className="bg-orange-500 text-white p-2 rounded-full shadow-md">
            <i className="fas fa-user text-xl"></i>
          </button>
        </div>

        <button className="bg-orange-500 text-white p-2 rounded-full shadow-md">
          <img src={cartImage} alt="Cart" className="w-5 h-5" />
        </button>

        <button
  className="relative bg-orange-500 text-white px-6 py-3 rounded-full overflow-hidden shadow-lg group transition-all duration-300"
  onClick={openAuthModal}
>
  <span className="absolute inset-0 bg-orange-700 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
  <span className="relative z-10 flex items-center space-x-2">
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M12 5l7 7-7 7"
      />
    </svg>
    <span>Sign In</span>
  </span>

</button>
<button
                onClick={goToProfile}
                className="text-purple-600 underline"
              >
                profile
              </button>


      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        currentForm={currentForm}
        switchForm={switchForm}
      />
    </header>
  );
}

export default Header;
