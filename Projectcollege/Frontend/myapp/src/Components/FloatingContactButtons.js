import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const FloatingContactButtons = () => {
  return (
    <div className="floating-contact-container">
      <a
        href="https://wa.me/+918317680122"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
      >
        <FaWhatsapp size={24} color="#fff" />
      </a>

      <a href="tel:+8317680122" className="floating-btn phone-btn">
        <FaPhoneAlt size={24} color="#fff" />
      </a>
    </div>
  );
};

export default FloatingContactButtons;