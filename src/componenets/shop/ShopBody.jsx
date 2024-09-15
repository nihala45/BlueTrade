import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Font Awesome Icons for heart
import toysmain from '../../images/toysmain.jpg'; // Example toy image
import tent from '../../images/tentpic.jpg'; // Example tent image

function ShopBody() {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  function goTocart(){
    navigate('/Cart')
  }

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Toy Car',
      image: toysmain,
      category: 'Cars',
      price: 20,
    },
    {
      id: 2,
      name: 'Tent',
      image: tent,
      category: 'Outdoor',
      price: 50,
    },
  ];

  // Function to toggle wishlist
  const toggleWishlist = (product) => {
    if (!wishlist.includes(product.id)) {
      setWishlist([...wishlist, product.id]);
    } else {
      setWishlist(wishlist.filter((id) => id !== product.id));
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem', color: '#333' }}>Shop</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '250px', position: 'relative' }} onClick={goTocart}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
            <h2 style={{ fontSize: '1.5rem', marginTop: '10px', color: '#333' }}>{product.name}</h2>
            <p style={{ color: '#777' }}>Category: {product.category}</p>
            <p style={{ fontSize: '1.25rem', color: '#2c3e50' }}>${product.price}</p>

            {/* Heart Wishlist Button */}
            <button
              onClick={() => toggleWishlist(product)}
              style={{
                background: 'none',
                border: 'none',
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              {wishlist.includes(product.id) ? (
                <FaHeart size={24} color="red" />
              ) : (
                <FaRegHeart size={24} color="gray" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopBody;
