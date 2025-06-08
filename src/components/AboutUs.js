// src/components/AboutUs.js
import React from "react";
import "./AboutUs.css";
import ImageAboutUs from "../assets/CanadianCourrierLogo.png";

export default function AboutUs() {
  return (
    <section className="about section" id="about">
      <div className="about-content">
        <img
          src={ImageAboutUs}
          alt="Canadian Courrier logo"
          className="about-placeholder"
        />

        {/* right: heading and text */}
        <div className="about-text-block">
          <h2 className="about-heading">About Us</h2>
          <p className="about-text">
            Canada Courrier is your online-first shipping solution. We make it
            quick and easy to purchase shipping labels from home, pack your
            items (letter or parcel), and drop them off at any Canada Courrier
            location. No more standing in line—just follow our simple three
            steps!
          </p>
        </div>
      </div>
    </section>
  );
}
