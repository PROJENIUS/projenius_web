import React, { FC, useRef, useEffect, useState } from 'react';
import './ServicesPage.css';
import Showcase from './Showcase.tsx';
import Navbar from '../components/NavBar.tsx';
import Footer from '../components/Footer.tsx';
import { useNavigate } from 'react-router-dom';
import Spline from "@splinetool/react-spline";

const ServicesPage: FC = () => {
  const navigate = useNavigate();

  const secondRowRef = useRef<HTMLDivElement | null>(null);
  const [secondRowVisible, setSecondRowVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSecondRowVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (secondRowRef.current) {
      observer.observe(secondRowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="services-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-container">
      <div className="spline-background1">
        <Spline scene="https://prod.spline.design/v1ylYC4mZrjZ86U2/scene.splinecode" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Your <span style={{ color: "#00fff2" }}>Project</span>. Our <span style={{ color: "#00fff2" }}>Expertise</span> <br ></br><span style={{ color: "#00fff2" }}>Endless</span> Possibilities</h1>
      </div>
    </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Diverse Range of Services</h2>

        {/* First Row */}
        <div className="services-grid">
          <div className="service-card">
            <span className="icon1">💻</span>
            <h3>Web Development</h3>
            <p>Crafting responsive, high-performance websites and web applications tailored to your business needs.</p>
            
          </div>
          <div className="service-card">
            <span className="icon1">🎨</span>
            <h3>Graphic Design</h3>
            <p>Creating stunning visuals that tell your brand's story, including logos, branding, and marketing assets.</p>
            
          </div>
          <div className="service-card">
            <span className="icon1">🎬</span>
            <h3>Video Editing</h3>
            <p>Creating visually stunning and impactful videos tailored
    for social media, promotions, and storytelling.</p>
          </div>

        </div>

        {/* Second Row with fade-in effect */}
        <div
          ref={secondRowRef}
          className={`services-grid second-row ${secondRowVisible ? 'fade-in' : 'hidden'}`}
        >
          <div className="service-card">
            <span className="icon1">📱</span>
            <h3>App Development</h3>
            <p>Building intuitive and powerful mobile applications for iOS and Android to boost user engagement.</p>
            
          </div>
          <div className="service-card">
            <span className="icon1">📡</span>
            <h3>IoT Solutions</h3>
            <p>Building smart, connected systems that automate operations and deliver real-time data insights.
            </p>
          </div>
          <div className="service-card">
            <span className="icon1">🧠</span>
            <h3>Machine Learning</h3>
            <p>
              Developing intelligent systems that analyze data patterns to drive smarter, automated decisions.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
  <h2>Why Choose ProJenius for Your Service Needs?</h2>
  <div className="benefits-grid">
    <div className="benefit-card">
      <div className="icon-text">
        <i className="fa-solid fa-shield-halved icon1"></i>
        <div>
          <h3>Quality Assurance</h3>
          <p>Access a vetted network of top-tier freelancers, ensuring high-quality deliverables every time.</p>
        </div>
      </div>
    </div>
    <div className="benefit-card">
      <div className="icon-text">
        <i className="fa-solid fa-users icon1"></i>
        <div>
          <h3>Diverse Talent Pool</h3>
          <p>Find specialists for every niche, from coding to creative, marketing to management.</p>
        </div>
      </div>
    </div>
    <div className="benefit-card">
      <div className="icon-text">
        <i className="fa-solid fa-comments icon1"></i>
        <div>
          <h3>Seamless Collaboration</h3>
          <p>Utilize integrated tools for effortless communication, project management, and file sharing.</p>
        </div>
      </div>
    </div>
    <div className="benefit-card">
      <div className="icon-text">
        <i className="fa-solid fa-sack-dollar icon1"></i>
        <div>
          <h3>Cost-Effectiveness</h3>
          <p>Get professional results without the overheads of traditional hiring.</p>
        </div>
      </div>
    </div>
    <div className="benefit-card">
      <div className="icon-text">
        <i className="fa-solid fa-arrows-up-down-left-right icon1"></i>
        <div>
          <h3>Scalability & Flexibility</h3>
          <p>Easily scale your team up or down to match project demands, on your terms.</p>
        </div>
      </div>
    </div>
    <div className="benefit-card">
      <div className="icon-text">
        <i className="fa-solid fa-headset icon1"></i>
        <div>
          <h3>Dedicated Support</h3>
          <p>Our friendly support team is here to assist you every step of the way.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works: Getting Your Project Done</h2>
        <div className="steps">
          <div className="step">
            <i className="fa-solid fa-clipboard-list"></i>
            <h3>1. Post Your Project</h3>
            <p>Clearly define your project scope, budget, and timeline in minutes.</p>
          </div>
          <div className="step">
            <i className="fa-solid fa-hand-holding-dollar"></i>
            <h3>2. Receive Bids</h3>
            <p>Compare skills, timelines, and reviews in one place.
Pick the right match with confidence.</p>
          </div>
          <div className="step">
            <i className="fa-solid fa-people-arrows"></i>
            <h3>3. Collaborate & Review</h3>
            <p>Provide feedback to guide your freelancer.
Work stays on track with transparent communication.
</p>
          </div>
          <div className="step">
            <i className="fa-solid fa-circle-check"></i>
            <h3>4. Approve & Pay</h3>
            <p>Release payment securely once you're fully satisfied with the outcome.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Find the Perfect Service for Your Project?</h2>
        <button onClick={handleContactClick}>Contact Us for Custom Solutions</button>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;