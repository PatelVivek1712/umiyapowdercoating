import React from "react";
import NavBar from "./NavBar"; // Import your navbar component
import "./CSS/UserProfile.css"; // Import your CSS file
import userAvatar from "./images/user-avatar.png";

function UserProfile() {
  return (
    <div>
      <NavBar />
      <h1 className="main-heading">User Profile</h1>
      <div className="container">
        <div className="user-info">
          <img src={userAvatar} alt="User Avatar" />
          <div className="user-details">
            <h2>User Name</h2>
            <p>Email: user@example.com</p>
            <p>Mobile Number: 123-456-7890</p>
            <p>Address: 123 Street, City, Country</p>
          </div>
        </div>
        <div className="payment">
        <div className="payment-details">
          <h2>Payment Information</h2>
          <p>Total Payment Done: $1000</p>
          <p>Payment Remaining: $500</p>
        </div>
        <div className="order-details">
          <h2>Order Details</h2>
          <ul>
            <li>Order 1: Product A - $200</li>
            <li>Order 2: Product B - $300</li>
            <li>Order 3: Product C - $500</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
