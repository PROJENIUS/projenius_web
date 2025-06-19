import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-logo">ProJenius</h2>
          <p className="footer-tagline">Connecting talent with projects, smarter.</p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Terms of Service</a></li>
            <li><a href="/">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <div className="footer-contact">
            <FaEnvelope className="footer-icon" />
            <span>support@projenius.com</span>
          </div>
          <div className="footer-contact">
            <FaPhoneAlt className="footer-icon" />
            <span>+1 (123) 456-7890</span>
          </div>
          <div className="footer-social">
            <a href="/"><FaFacebookF /></a>
            <a href="/"><FaTwitter /></a>
            <a href="/"><FaLinkedinIn /></a>
            <a href="/"><FaInstagram /></a>
          </div>
          <div id="translate-container" className="footer-translate">
    <div id="google_translate_element"></div>
  </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© 2025 ProJenius. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
