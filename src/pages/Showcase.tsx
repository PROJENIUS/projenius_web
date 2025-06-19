// Adjust the filename to Showcase.tsx
import React, { useRef } from "react";
import "./Showcase.css"; // assuming the styles are here
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Type and Component from earlier response
type Project = {
  title: string;
  category: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Intelligent Commodity System",
    category: "Software & Hardware",
    description:
      "An IoT-based web app for automated ration distribution with smart weighing, billing, and inventory tracking. Prevents fraud and offers real-time monitoring. Rating: ⭐⭐⭐⭐☆ (4/5)",
  },
  {
    title: "Smart Hospital Access System",
    category: "Software",
    description:
      "Enhances hospital accessibility using IoT for smart parking and pothole detection. Aims for smoother emergency navigation and access control. Rating: ⭐⭐⭐⭐⭐ (5/5)",
  },
  {
    title: "AI-Powered Water Health Monitoring",
    category: "Software",
    description:
      "Real-time water quality monitoring with AI analysis and sensor integration. Includes chatbot support and live dashboard for insights. Rating: ⭐⭐⭐⭐☆ (4/5)",
  },
  {
    title: "Road Hazard Detection and Notification",
    category: "Software",
    description:
      "Detects road accidents using AI and IoT, sending instant GPS alerts. Supports emergency response with wearables and a web dashboard. Rating: ⭐⭐⭐⭐⭐ (5/5)",
  },
  {
    title: "Smart Waste Management System",
    category: "Software",
    description:
      "Uses sensors to detect and segregate wet and dry waste in tunnels. Sends live data to a dashboard for timely waste collection. Rating: ⭐⭐⭐⭐☆ (4/5)",
  },
  {
    title: "Autonomous Follower Robot Van",
    category: "Hardware",
    description:
      "Obstacle-avoiding robot van that follows users for military logistics. Ensures hands-free load transport in rugged terrains using sensors. Rating: ⭐⭐⭐⭐⭐ (5/5)",
  },
];


const Showcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth / 3 + 48;
    container.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    }
    if (container.scrollLeft <= 0 && direction === "left") {
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="projects-section-wrapper">
      <h2 className="section-title3"><span style={{ color: "#00fff2" }}> Projects </span> Delivered Through ProJenius</h2>
      <div className="arrow-button left" onClick={() => scroll("left")}><FaChevronLeft /></div>
      <div className="arrow-button right" onClick={() => scroll("right")}><FaChevronRight /></div>
      <div className="project-scroll-container" ref={containerRef}>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-card-inner">
              <div className="project-card-front">
                <div className="project-banner banner-blue"><span style={{ color: "#00fff2" }}> Project </span> Showcase {index + 1}</div>
              </div>
              <div className="project-card-back">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="category">Category: {project.category}</p>
                  <p>{project.description}</p>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
