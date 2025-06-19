import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import Showcase from "./Showcase.tsx";
import Spline from "@splinetool/react-spline";
import "./Home.css";
import robotImg from "../img/robot.png";
import {
  FaFileAlt,
  FaUserTie,
  FaHandshake,
  FaMoneyBillWave,
  FaLaptopCode,
  FaMobileAlt,
  FaMicrochip,
  FaPaintBrush,
  FaBrain,
  FaVideo,
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasMounted = useRef(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const topCategoriesRef = useRef(null);

  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [visibleCategoryCards, setVisibleCategoryCards] = useState<number[]>([]);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const flipCard = (id: number) => {
    const card = document.getElementById(`card-${id}`);
    card?.classList.toggle("flipped");
  };

  useEffect(() => {
    if (hasMounted.current) {
      if (location.hash === "#how-it-works") {
        const el = document.getElementById("how-it-works");
        el?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      hasMounted.current = true;
    }

    const cards = sectionRef.current?.querySelectorAll(".step-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Array.from(cards).indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cards?.forEach((card) => observer.observe(card));

    // Top Categories Observer
    const categoryCards = topCategoriesRef.current?.querySelectorAll(".animated-card");
    const categoryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Array.from(categoryCards).indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleCategoryCards((prev) => [...new Set([...prev, index])]);
            categoryObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    categoryCards?.forEach((card) => categoryObserver.observe(card));

    return () => {
      observer.disconnect();
      categoryObserver.disconnect();
    };
  }, [location]);

  return (
    <>
      <Navbar />

      {/* Background Spline Element */}
      <div className="spline-background">
        <Spline scene="https://prod.spline.design/v1ylYC4mZrjZ86U2/scene.splinecode" />
      </div>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "3rem 5%",
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
          background: "none",
        }}
      >
        {/* Left Text Content */}
        <div className="hero-left" style={{ flex: 1, color: "#fff", marginBottom: "85px" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            Find the Right <br />
            <span style={{ color: "#00fff2" }}>Talent.</span> <br />
            Deliver the Right <br />
            <span style={{ color: "#00fff2" }}>Project.</span>
          </h1>

          <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
            Connecting <span style={{ color: "#00fff2" }}>Top</span>  talent with visionary clients to bring
            <span style={{ color: "#00fff2" }}> ideas</span> to life.
          </p>
          <div className="hero-buttons" style={{ display: "flex", gap: "1rem" }}>
  <a
    href="https://wa.me/918925450473?text=Hey%20Projenius%20Team%2C%20I%20need%20support%20on%20developing%20my%20project%21"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="btn-primary">
      Get Started
    </button>
  </a>
</div>

        </div>

        {/* Right 3D Spline Embed */}
        <div
          className="hero-right"
          style={{
            flex: 1.2,
            display: "flex",
            justifyContent: "center",
            marginLeft: "200px",
            maxWidth: "100%",
            height: "650px",
          }}
        >
          <Spline scene="https://prod.spline.design/8cfHYMehJZDmx22w/scene.splinecode" />
        </div>
      </div>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works" ref={sectionRef}>
        <div className="how-it-works-wrapper">
          <h2 className="section-title1">
            How <span style={{ color: "#00fff2" }}>Projenius</span> Works
          </h2>
          <img src={robotImg} className="running-robot" alt="Running Robot" />
          <div className="steps-grid">
            {[
              {
                icon: <FaFileAlt size={34} color="#00fff2" />,
                title: "1. Post a Project",
                desc: "Clearly describe what you need done, your budget, and timeline.",
              },
              {
                icon: <FaUserTie size={34} color="#00fff2" />,
                title: "2. Hire the Best",
                desc: "Compare skills, timelines, and reviews in one place. Pick the right match with confidence.",
              },
              {
                icon: <FaHandshake size={34} color="#00fff2" />,
                title: "3. Work Together",
                desc: "Provide feedback to guide your freelancer. Work stays on track with transparent communication.",
              },
              {
                icon: <FaMoneyBillWave size={34} color="#00fff2" />,
                title: "4. Pay Securely",
                desc: "Release payment only when you are 100% satisfied with the work.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`step-card delay-${i + 1} ${visibleCards.includes(i) ? "animate" : ""}`}
              >
                <div className="icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories Section */}
    <section className="top-categories" ref={topCategoriesRef}>
      <h2 className="section-title2">
        Browse <span style={{ color: "#00fff2" }}>Top</span> Categories
      </h2>
      <div className="categories-flex-wrapper">
        {[
          { icon: <FaLaptopCode size={34} className="icon-modern" />, title: "Web Development" },
          { icon: <FaMobileAlt size={34} className="icon-modern" />, title: "App Development" },
          { icon: <FaMicrochip size={34} className="icon-modern" />, title: "IoT Projects" },
          { icon: <FaPaintBrush size={34} className="icon-modern" />, title: "Graphic Designing" },
          { icon: <FaBrain size={34} className="icon-modern" />, title: "ML Projects" },
          { icon: <FaVideo size={34} className="icon-modern" />, title: "Video Editing" },
        ].map((item, i) => (
          <div
            key={i}
            className={`category-card animated-card ${
              visibleCategoryCards.includes(i) ? "slide-up" : ""
            }`}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </div>
        ))}
        </div>
    </section>
      <Showcase />
      <Footer />
    </>
  );
};

export default Home;
