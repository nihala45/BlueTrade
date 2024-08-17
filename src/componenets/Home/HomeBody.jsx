import React ,{useNa}from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toysmain from '../../images/toysmain.jpg'; // Adjust path if necessary


function HomeBody() {
  const navigate=useNavigate()
  return (
    <div style={{ 
      backgroundImage: `url(${toysmain})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      height: '100vh', 
      width: '100vw', 
      position: 'relative' 
    }}>
     
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg mb-8">Discover the best toys and games for your children.</p>
          <a href="#" className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 duration-200">Shop Now</a>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
