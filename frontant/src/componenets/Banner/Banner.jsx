// src/componenets/Banner/Banner.js
import React from 'react';

const Banner = () => {
  // Sample images, replace with your actual image URLs
  const images = [
    'https://via.placeholder.com/400x200/FFA500/FFFFFF?text=Image+1',
    'https://via.placeholder.com/400x200/FFA500/FFFFFF?text=Image+2',
    'https://via.placeholder.com/400x200/FFA500/FFFFFF?text=Image+3',
    'https://via.placeholder.com/400x200/FFA500/FFFFFF?text=Image+4',
  ];

  return (
    <div className="banner">
      <div style={{ backgroundColor: '#FFA500', padding: '20px', textAlign: 'center' }}>
        <h2 style={{ color: '#FFFFFF' }}>Welcome to Our Store!</h2>
        <button style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#FF4500', color: '#FFFFFF', border: 'none', borderRadius: '5px' }}>
          Skip
        </button>
      </div>

      {/* Image Section */}
      <div className="image-container" style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Banner ${index + 1}`} style={{ width: '20%', borderRadius: '8px' }} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
