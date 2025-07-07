import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand */}
        <div className="footer-section title-footer">
          <h1>Projenius</h1>
          <p>Connecting talent with projects, smarter</p>
          <div id="translate-container" className="footer-translate">
            <div id="google_translate_element"></div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section">
        <h3 className="footer-title">Quick Links</h3>
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-section">
          <h3 className="footer-title2">Contact Us</h3>
          <div className="footer-contact">
            <FaEnvelope className="footer-icon" />
             <a href="mailto:teamprojenius@gmail.com">teamprojenius@gmail.com</a>
          </div>
          <div className="footer-contact">
            <FaPhoneAlt className="footer-icon" />
            <a href="tel:+918925450473">+91 89254 50473</a>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
                <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
          </div>
          
        </div>

        {/* Column 4: Map */}
        <div className="footer-section map-section">
          <h3 className="footer-title1">Our Location</h3>
          <iframe
            src="https://www.google.com/maps?q=Plot+no+3,+Velmurugan+Nagar,+Erikarai+street,+Madurai+16&output=embed"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 ProJenius. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

git add src/components/Footer.tsx src/components/Footer.css

