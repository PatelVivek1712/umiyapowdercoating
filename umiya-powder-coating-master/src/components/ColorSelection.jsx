import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function ColorSelection() {
  const { categoryName } = useParams();
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [squareFeet, setSquareFeet] = useState(0);

  useEffect(() => {
    fetchColorsForCategory();
  }, [categoryName]);

  const fetchColorsForCategory = async () => {
    try {
      const response = await fetch(`http://localhost:3000/colors/${categoryName}`);
      if (!response.ok) {
        throw new Error("Failed to fetch color data");
      }
      const data = await response.json();
      setColors(data.colors);
    } catch (error) {
      console.error("Error fetching color data:", error);
    }
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSquareFeetChange = (event) => {
    setSquareFeet(event.target.value);
  };

  const handleGenerateInvoice = () => {
    if (!selectedColor) {
      alert("Please select a color.");
      return;
    }
    if (squareFeet <= 0) {
      alert("Please enter a valid square footage.");
      return;
    }
    const invoiceData = {
      color: selectedColor,
      squareFeet: squareFeet,
      // Add any additional data needed for the invoice
    };
    // Print the IDs of selected color and square feet to console
    console.log("Selected Color ID:", selectedColor.id);
    console.log("Square Feet:", squareFeet);
    // Redirect to invoice page
    window.location.href = "/invoice"; // Replace '/invoice' with the actual path to your invoice page
  };

  return (
    <div className="color-selection">
      <NavBar />
      <h1>Select Color for {categoryName}</h1>
      <div className="color-options">
        {colors.map((color, index) => (
          <div key={index} id={`color-${color.id}`} className={`color-option ${selectedColor === color ? 'selected' : ''}`} onClick={() => handleColorSelect(color)}>
            <div className="color-circle" style={{ backgroundColor: color.hex }}></div>
            <p>{color.name}</p>
          </div>
        ))}
      </div>
      <div className="square-feet-input">
        <label htmlFor="squareFeet">Square Feet:</label>
        <input type="number" id="squareFeet" value={squareFeet} onChange={handleSquareFeetChange} />
      </div>
      <button onClick={handleGenerateInvoice}>Generate Invoice</button>
    </div>
  );
}

export default ColorSelection;
