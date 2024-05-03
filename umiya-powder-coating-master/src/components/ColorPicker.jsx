import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './CSS/ColorPicker.css';

// Define category images
const categoryImages = {
  glossy: 'https://i.postimg.cc/DZMHwwX3/glossyfinish.jpg',
  semiglossy: 'https://i.postimg.cc/d1QMHf8D/semiglossy.jpg',
  matt: 'https://i.postimg.cc/YS3jVJmW/matt.jpg',
  polyester: 'https://i.postimg.cc/WztntmP5/Polyester.jpg',
};

const categories = ['glossy', 'semiglossy', 'matt', 'polyester']; // Assuming these are your table names

function ColorPicker() {
  const [selectedCategory, setSelectedCategory] = useState(null); // Optional for highlighting selected category

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set selected category (optional)
  };

  return (
    <div className="color-picker">
      <NavBar />
      <h1 className="main-heading">Select Color Category</h1>
      <div className="category-container">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/${category}`} // Link to specific category route
            className={`category-link ${selectedCategory === category ? 'active' : ''}`} // Optional styling for selected category
            onClick={() => handleCategoryClick(category)} // Optional for handling category click
          >
            <div className="category-card">
              <img src={categoryImages[category]} alt={category} className="category-image" />
              <h2>{category}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
