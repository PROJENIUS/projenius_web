import React, { useEffect } from 'react';
import { FaLightbulb, FaHandshake, FaRocket, FaRobot } from 'react-icons/fa';
import AOS from 'aos';               // Import AOS JS
import 'aos/dist/aos.css';          // Import AOS CSS
import './CoreValuesSection.css';

const coreValues = [
  {
    icon2: <FaLightbulb />,
    title: 'Innovation',
    description:
      'At Projenius, innovation drives everything we do. We constantly explore new ideas, embrace change, and push creative boundaries to build smarter solutions. By evolving with technology and user needs, we turn imagination into impact—delivering fresh, effective results that shape the future of freelancing and project development.',
  },
  {
    icon2: <FaHandshake />,
    title: 'Trust & Transparency',
    description:
      'We believe that strong relationships are built on trust and transparency. At Projenius, we prioritize honesty, open communication, and reliability in every interaction. By staying true to our values, we create a collaborative environment where clients feel confident, informed, and supported every step of the way.',
  },
  {
    icon2: <FaRocket />,
    title: 'Speed & Agility',
    description:
      'In a fast-paced digital world, speed and agility are key. We respond quickly, adapt seamlessly, and deliver results efficiently—without compromising quality. At Projenius, we embrace change and move with purpose, ensuring every project stays on track and ahead of expectations, no matter the challenge.',
  },
];

const CoreValuesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,  // animation duration in ms (0.5 to 0.7s as you wanted)
      once: true,     // animation triggers only once per element
    });
  }, []);

  return (
    <section className="core-values-section">
      <h2 className="core-values-title">Our Core Values</h2>
      <div className="core-values-grid">
        {coreValues.map((value, index) => (
          <div
            className="core-value-card"
            key={index}
            data-aos="fade-up"            // <-- AOS animation attribute here
          >
            <div className="icon2">{value.icon2}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;
