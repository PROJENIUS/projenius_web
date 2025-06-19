import React, { useEffect, useState } from 'react';
import { FaGlobeAmericas, FaProjectDiagram, FaUsers, FaStar } from 'react-icons/fa';
import './StatsSection.css';

const useCounter = (target, duration = 2500, startAnimation) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    let totalMilSecDur = duration;
    let incrementTime = 30; // ms
    let step = Math.ceil((end * incrementTime) / totalMilSecDur);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration, startAnimation]);

  return count;
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.stats-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clients = useCounter(100, 2500, isVisible);
  const projects = useCounter(200, 2500, isVisible);
  const freelancers = useCounter(50, 2500, isVisible);
  const rating = useCounter(5, 2500, isVisible);

  return (
    <div className="stats-section">
      <div className="stats-container">
        <div className="stat-box">
          <FaGlobeAmericas className="stat-icon" />
          <h3 className={`stat-count ${isVisible ? 'visible' : ''}`}>{clients}+</h3>
          <p>Clients Served</p>
        </div>
        <div className="stat-box">
          <FaProjectDiagram className="stat-icon" />
          <h3 className={`stat-count ${isVisible ? 'visible' : ''}`}>{projects}+</h3>
          <p>Projects Delivered</p>
        </div>
        <div className="stat-box">
          <FaUsers className="stat-icon" />
          <h3 className={`stat-count ${isVisible ? 'visible' : ''}`}>{freelancers}+</h3>
          <p>Freelancers on Board</p>
        </div>
        <div className="stat-box">
          <FaStar className="stat-icon" />
          <h3 className={`stat-count ${isVisible ? 'visible' : ''}`}>{rating}-Star</h3>
          <p>Average Rating</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
