import React, { useState } from 'react';
import rabit from '../../images/rabit.jpg'; // Importing the same image for both main and thumbnails

const ProductDetail = () => {
  // Dummy product data
  const product = {
    name: 'Product Name',            // Product Name
    description: 'This is a short product description.', // Product Description
    price: 100,                      // Product Price
    images: [
      rabit, // Image 1 (Thumbnail)
      rabit, // Image 2 (Thumbnail)
      rabit, // Image 3 (Thumbnail)
      rabit  // Image 4 (Thumbnail)
    ],
    mainImage: rabit  // Main image for the product
  };

  // Initial main image set to the mainImage property
  const [selectedImage, setSelectedImage] = useState(product.mainImage);

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row">
      {/* Product Images and Thumbnails */}
      <div className="flex flex-col items-center md:flex-row md:space-x-4">
        {/* Thumbnails */}
        <div className="flex flex-col space-y-4 mr-4">
          {product.images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`Product thumbnail ${idx + 1}`}
              className="w-24 h-24 object-cover cursor-pointer"
              onClick={() => setSelectedImage(image)}  // On thumbnail click, change main image
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="w-full max-w-md bg-gray-200 flex items-center justify-center">
          <img src={selectedImage} alt={product.name} className="w-full h-96 object-cover" />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-1 mt-6 md:mt-0">
        {/* Product Name */}
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

        {/* Product Description */}
        <p className="text-gray-700 mb-4">{product.description}</p>

        {/* Product Price */}
        <p className="text-2xl font-bold text-red-500 mb-6">${product.price}</p>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          {/* Add to Wishlist Button */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add to Wishlist
          </button>

          {/* Add to Cart Button */}
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default ProductDetail;
