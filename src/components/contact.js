import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form">
          <input
            type="text"
            className="contact-input"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="contact-input"
            placeholder="Your Email"
            required
          />
          <textarea
            className="contact-textarea"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
                  <div class="footer" id="ft2">
    ©2025 - CanadianCourrier By Antoine Missoup Konga & Jorge Guetchom
  </div>
    </section>
  );
}
