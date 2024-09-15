import React from 'react';
import { useNavigate } from 'react-router-dom';
import toysmain from '../../images/toysmain.jpg';
import tent from '../../images/tentpic.jpg';

function HomeBody() {
  const navigate = useNavigate();

  const ageCategories = [
    { id: 1, ageRange: '0-2 Years', description: 'Toys for infants and toddlers', imgUrl: toysmain },
    { id: 2, ageRange: '3-5 Years', description: 'Toys for preschoolers', imgUrl: toysmain },
    { id: 3, ageRange: '6-8 Years', description: 'Toys for early elementary', imgUrl: toysmain },
    { id: 4, ageRange: '9-12 Years', description: 'Toys for tweens', imgUrl: toysmain },
    { id: 5, ageRange: '13+ Years', description: 'Toys for teens', imgUrl: toysmain },
  ];

  const productCategories = [
    { id: 1, categoryName: 'Outdoor Toys', description: 'Toys for outdoor fun', imgUrl: toysmain },
    { id: 2, categoryName: 'Learning Toys', description: 'Educational and learning toys', imgUrl: toysmain },
    { id: 3, categoryName: 'Action Figures', description: 'Action figures for adventure', imgUrl: toysmain },
    { id: 4, categoryName: 'Puzzles', description: 'Puzzles for brain development', imgUrl: toysmain },
    { id: 5, categoryName: 'Board Games', description: 'Fun for the whole family', imgUrl: toysmain },
  ];

  const handleCategoryClick = (id) => {
    navigate(`/category/${id}`);
  };

  return (
    <div className="bg-gray-100 py-10">
      {/* Section 1: Shop by Age */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Shop by Age</h1>
      <div className="relative overflow-hidden mb-10">
        <div className="flex space-x-6 overflow-x-auto px-6 py-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {ageCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white w-64 flex-shrink-0 rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => handleCategoryClick(category.id)}
            >
              <img
                src={category.imgUrl}
                alt={category.ageRange}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{category.ageRange}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Shop by Category */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Shop by Category</h2>
      <div className="relative overflow-hidden">
        <div className="flex space-x-6 overflow-x-auto px-6 py-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white w-64 flex-shrink-0 rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => handleCategoryClick(category.id)}
            >
              <img
                src={category.imgUrl}
                alt={category.categoryName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{category.categoryName}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Section: Outdoor Games */}
      <div className="mt-10 text-center px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Outdoor Games</h1>
  <img
    src={tent}
    alt="Outdoor Tent"
    className="w-500 object-cover rounded-lg shadow-lg mt-4 mb-4"
  />
      </div>

      
    </div>
  );
}

export default HomeBody;
