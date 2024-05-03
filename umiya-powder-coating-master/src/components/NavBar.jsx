import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./CSS/NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <nav>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <div className={`menu-line ${menuOpen ? "open" : ""}`} />
          <div className={`menu-line ${menuOpen ? "open" : ""}`} />
          <div className={`menu-line ${menuOpen ? "open" : ""}`} />
          <div className={`menu-line ${menuOpen ? "open" : ""}`} />
        </div>
        <ul className={`navbar ${menuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <Link to="/homepage" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AboutUs" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/UserProfile" className="nav-link">
              User Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
