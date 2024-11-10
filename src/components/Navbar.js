import React from "react";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__s1">
        <h1 className="Navbar__s1__title">Udemy</h1>
      </div>
      <div className="Navbar__s2">
        <i className="fa-solid fa-magnifying-glass" style={{ color: "#050505" }}></i>
        <input type="text" placeholder="Search for Anything You want here Arts, Business ...." />
      </div>
      <div className="Navbar__s3">
        <p>Courses</p>
        <p>My Learning</p>
        <div className="mylearning">
          <p> My Learning </p>
          <div className="mylearning__popups">
            <p>You didn't purchase Anything yet</p>
          </div>
        </div>
        <i className="fa-solid fa-cart-shopping" style={{ color: "#0e0f11" }}></i>
        <i className="fa-solid fa-bell" style={{ color: "#0c0d0d" }}></i>
        <i className="fa-solid fa-user" style={{ color: "#0f0f10" }}></i>
      </div>
      <div className="Navbar__s4"> 
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
