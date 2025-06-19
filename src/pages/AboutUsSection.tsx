import React from 'react';
import './AboutUsSection.css';
import Navbar from '../components/NavBar.tsx';
import CoreValuesSection from './CoreValuesSection.tsx';
import TeamSection from './TeamSection.tsx';
import StatsSection from './StatsSection.tsx';
import Testimonials from './Testimonials.tsx';
import Footer from '../components/Footer.tsx';
import HeroSection from './HeroSection.tsx';
import Spline from "@splinetool/react-spline";
import robotImg from "../img/robot.png";

const AboutUsSection = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <section className="about-us-container">
      <div className="about-us-top">
        <div className="about-us-left">
          <h1>
            We’re <br />
            the Team Behind <br />
            Your Next Big Idea.
          </h1>
        </div>
        <div className="about-us-right">
          <p>
            At Projenius, we’re a team of passionate creators and problem-solvers committed to bringing your ideas to life. From student projects to startup solutions, we combine design, development, and strategy to deliver impactful results. Our approach is collaborative and personalized — we listen, understand your goals, and build with purpose. Whether it’s an app, website, or innovative concept, we focus on quality, creativity, and user experience. We don’t just complete projects; we help shape ideas into success stories. With Projenius, your next big idea has the right team behind it — ready to create something amazing, together.
          </p>
        </div>
      </div>

      <div className="about-us-video">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Replace this with your video link
          title="Team Introduction Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
    <CoreValuesSection />
    <TeamSection />
    <StatsSection />
    <Testimonials />
    <Footer />
    </>
  );
};

export default AboutUsSection;
