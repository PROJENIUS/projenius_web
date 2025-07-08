import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-updated">Last updated: June, 2025.</p>

      <section className="privacy-section">
        <p>
          At <strong>ProJenius</strong>, your privacy matters. This Privacy Policy explains how we collect, use, and
          protect your information when you use our website or our services.
        </p>
      </section>

      <section className="privacy-section">
        <h2>1. Information We Collect</h2>
        <ul>
          <li><strong>Personal Details:</strong> Name, email address, phone number (when you contact us).</li>
          <li><strong>Project Information:</strong> Details shared with us for work.</li>
          <li><strong>Usage Data:</strong> Basic analytics (e.g., how you use our website).</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To communicate with you.</li>
          <li>To work on and deliver your projects.</li>
          <li>To improve our website and services.</li>
          <li>To send occasional updates or service-related notices (if you opt-in).</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>3. Data Protection & Storage</h2>
        <p>
          All information is securely stored and used only for the intended purposes.
          We do not share your data with third parties, unless required by law or explicitly permitted by you.
        </p>
      </section>

      <section className="privacy-section">
        <h2>4. Cookies</h2>
        <p>
          Our website may use cookies for analytics and better user experience. You can accept or decline cookies via your browser settings.
        </p>
      </section>

      <section className="privacy-section">
        <h2>5. Third-Party Links</h2>
        <p>
          Our site may include links to third-party sites (e.g., GitHub, hosting platforms). We’re not responsible for their privacy practices — please read their policies separately.
        </p>
      </section>

      <section className="privacy-section">
        <h2>6. Your Rights</h2>
        <ul>
          <li>Know what data we store.</li>
          <li>Request edits or deletion of your personal info.</li>
          <li>Unsubscribe from any communications.</li>
        </ul>
        <p>You can contact us anytime regarding your data rights.</p>
      </section>

      <section className="privacy-section">
        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
        </p>
      </section>

      <section className="privacy-section">
        <h2>8. Contact Us</h2>
        <p>
          For any privacy-related questions or requests, reach us at: <br />
          📧 <a href="mailto:teamprojenius@gmail.com">teamprojenius@gmail.com</a>.<br />
          📞 <a href="tel:+918925450473">+91 89254 50473</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
