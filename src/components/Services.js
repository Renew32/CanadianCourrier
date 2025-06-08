import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

import letterImg from "../assets/enveloppe.png";
import parcelImg from "../assets/parcel.png";

export default function Services() {
  const services = [
    { label: "Lettermail", img: letterImg, to: "/info" },
    { label: "Parcel",    img: parcelImg,  to: "/info" },
  ];

  return (
    <section className="services section" id="services">
      <div className="services-container">
        {services.map(({ label, img, to }) => (
          <Link key={label} to={to} className="service-link">
            <div className="service">
              <img src={img} alt={label} className="service-img" />
              <div className="service-label">{label}</div>
            </div>
          </Link>
        ))}
      </div>
       <div class="text" id="journey">
Let you package start it's journey! Click here to continue.  </div>
    </section>
  );
}
