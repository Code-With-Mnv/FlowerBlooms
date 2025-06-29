import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <h1>Get in Touch</h1>
        <p>
          We'd love to hear from you! Send us your thoughts, questions, or
          floral dreams below.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
