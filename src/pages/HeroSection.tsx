import React from "react";
import "./HeroSection.css";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="spline-background1">
        <Spline scene="https://prod.spline.design/v1ylYC4mZrjZ86U2/scene.splinecode" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Who We Are at <span style={{ color: "#00fff2" }}>Projenius</span></h1>
        <p className="hero-subtitle">
          Driven by <span style={{ color: "#00fff2" }}>creativity</span>, guided by purpose — discover the story behind our passion for innovative project <span style={{ color: "#00fff2" }}>solutions</span>.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
