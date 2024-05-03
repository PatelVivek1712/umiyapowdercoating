import React, { useState, useEffect } from 'react';
import "./CSS/Category.css";
import NavBar from "./NavBar";

function Matt() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetchColors();
  }, []);

  const fetchColors = async () => {
    try {
      const response = await fetch("http://localhost:3000/colors/matt"); // Fetch colors for the 'glossy' category
      if (!response.ok) {
        throw new Error("Failed to fetch colors");
      }
      const data = await response.json();

      // Filter colors for the 'glossy' category
      const glossyColors = data.categories.find(category => category.name === 'matt');
      if (glossyColors) {
        setColors(glossyColors.colors); // Set only the 'glossy' colors
      } else {
        throw new Error("matt colors not found");
      }
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="category-container">
        {colors.map((color, index) => (
          <div key={index} className="color-item">
            <div className="color-box" style={{ backgroundColor: color.hex }} />
            <p className="color-name">{color.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Matt;
