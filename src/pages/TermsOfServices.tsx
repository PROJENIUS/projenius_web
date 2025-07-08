import React from 'react';
import './TermsOfService.css';

const TermsOfService: React.FC = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms of Service</h1>
      <p className="terms-updated">Last updated: June, 2025.</p>

      <section className="terms-section">
        <p>
          <strong>Welcome to ProJenius!</strong><br />
          By accessing or using our services, you agree to the following terms. Please read them carefully.
        </p>
      </section>

      <section className="terms-section">
        <h2>1. Scope of Services</h2>
        <p>
          We provide freelance solutions including Machine Learning, Web Development, App development, IoT integration, Graphic designing, Video Editing, and Data Analysis. All services are custom-tailored based on client requirements.
        </p>
      </section>

      <section className="terms-section">
        <h2>2. Client Responsibilities</h2>
        <ul>
          <li>Provide accurate and complete information.</li>
          <li>Respond in a timely manner during project execution.</li>
          <li>Respect agreed deadlines and feedback cycles.</li>
          <li>Discuss and confirm all project-related terms in the first meeting with the ProJenius team.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>3. Advance Payment & Hardware Costs</h2>
        <ul>
          <li>Clients must pay an advance amount of 35% of the total project cost before work begins.</li>
          <li>This advance is non-refundable, even if the project is cancelled midway.</li>
          <li>If the project requires hardware components and ProJenius purchases them, we will provide the original hardware bill, and you will be required to pay the amount mentioned, along with an additional ₹150 to cover petrol expenses.</li>
          <li>The cost of hardware is separate and not included in the main project price.</li>
          <li>Clients must pay the hardware bill amount along with the advance payment.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>4. Client-Provided Hardware (IoT Projects)</h2>
        <p>
          If the client chooses to buy the hardware components themselves, they are required to provide extra motors as backups in case replacements are needed during testing or deployment.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. Payments & Pricing</h2>
        <ul>
          <li>Final payment is expected upon project completion, before the final deliverables are handed over.</li>
          <li>Any major mid-project changes may involve additional charges, which will be discussed and agreed in writing.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>6. Project Timeline</h2>
        <p>All timelines are estimated and may vary based on:</p>
        <ul>
          <li>Client feedback and response time.</li>
          <li>Scope changes during the project.</li>
          <li>Technical complexity.</li>
        </ul>
        <p>We’ll always keep you informed if changes arise.</p>
      </section>

      <section className="terms-section">
        <h2>7. Intellectual Property</h2>
        <ul>
          <li>Unless otherwise agreed:</li>
          <li>Clients own the final deliverables after full payment.</li>
          <li>ProJenius may showcase non-confidential parts of the project in its portfolio, unless requested otherwise.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>8. Confidentiality</h2>
        <p>
          We respect your privacy. We won’t share any project or personal information outside our team. NDAs can be signed upon request.
        </p>
      </section>

      <section className="terms-section">
        <h2>9. Termination of Service</h2>
        <p>Either party may terminate the project with written notice. In such cases:</p>
        <ul>
          <li>Work completed till that point will be charged.</li>
          <li>Any partial deliverables will be shared accordingly.</li>
          <li>Advance and hardware payments are non-refundable.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>10. Limitations</h2>
        <p>We strive for high-quality results, but we are not liable for:</p>
        <ul>
          <li>Failures from third-party services (e.g., hosting, APIs, hardware malfunctions).</li>
          <li>Post-delivery issues unless under a separate support agreement.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>11. Contact</h2>
        <p>
          For questions regarding these terms, reach us at: <br />
          📧 <a href="mailto:teamprojenius@gmail.com">teamprojenius@gmail.com</a>.<br />
          📞 <a href="tel:+918925450473">+91 89254 50473</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
