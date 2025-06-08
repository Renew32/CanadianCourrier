// src/components/Navbar.js
import React from "react";
import "./Navbar.css";
// import your real logo here, or leave as text placeholder:
// import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Left: logo */}
        <div className="nav-logo">
          {/* <img src={logo} alt="Canada Courrier logo" /> */}
            
        </div>

        {/* Center: site title */}
        <div className="nav-title">CanadaCourrier</div>

        {/* Right: nav links */}
        <div className="nav-links">
          <a href="#about">About Us</a>
          <a href="#howitworks">Ship</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
);
}
