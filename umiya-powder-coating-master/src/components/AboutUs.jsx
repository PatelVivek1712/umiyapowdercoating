import React from "react";
import NavBar from "./NavBar"; // Import your navbar component
import "./CSS/AboutUs.css"; // Import your CSS file
import factoryLogo from "./images/factory-logo.jpg";

function AboutUs() {
  return (
    <div>
      <NavBar />
      <h1 className="main-heading">About Us</h1>
      <div className="container">
        <div className="factory-info">
          <div className="logo-container">
            <img src={factoryLogo} alt="Factory Logo" className="logo" />
          </div>
          <div className="factory-details">
            <h2>Our Factory</h2>
            <p>Name: XYZ Factory</p>
            <p>Address: 123 Factory Street, City, Country</p>
          </div>
        </div>
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Instagram:<a href="#"> @xyz_factory</a></p>
          <p>Email:<a href="#"> info@xyzfactory.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
