import React from 'react';
import './Testimonials.css';

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 'U1',
      name: 'Marcus',
      rating: 4,
      text: 'A truly smart and efficient system! The hardware worked flawlessly, and the software dashboard gave us complete control and live insights. Huge thanks to the team for building such a reliable solution — its made ration handling faster, fairer, and stress-free!',
    },
    {
      id: 'U2',
      name: 'Charulekha',
      rating: 5,
      text: 'From setup to real-time usage, everything worked better than we expected. The hardware sensors detected potholes accurately, and the smart parking updates through the web platform were incredibly helpful during rush hours. Really appreciate the effort your team put into blending both hardware and software so seamlessly.',
    },
    {
      id: 'U3',
      name: 'Aswatha',
      rating: 4,
      text: 'A highly intuitive and insightful platform! The real-time monitoring is accurate, and the AI analysis adds real value by explaining potential health risks. The chatbot is a great touch for quick guidance. Just wish the UI was a bit more polished — otherwise, its an excellent tool for anyone concerned about water safety.',
    },
    {
      id: 'U4',
      name: 'Gladiya',
      rating: 5,
      text: 'Incredible service by the team! The road hazard detection system works exactly as promised — real-time alerts, accurate GPS tracking, and seamless integration with wearables. The mobile app and dashboard are smooth, making it easy to stay informed. Truly impressed by the dedication and innovation behind this.',
    },
    {
      id: 'U5',
      name: 'Rehana',
      rating: 4,
      text: 'Really impressed with how smoothly this system works! It’s amazing to see waste being separated automatically with such accuracy. The real-time data on the dashboard is super helpful for quick action. Hats off to the team for providing with the expected outcome!',
    },
    {
      id: 'U6',
      name: 'Dhivena',
      rating: 5,
      text: 'Absolutely blown away by the performance! The robot van followed me smoothly without a single collision. It handled the load perfectly and made transport so much easier. Thankyou Projenius for building such a reliable and smart solution as expected!',
    },
  ];

  // Duplicate the testimonials to make seamless infinite loop
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What They Say About Us</h2>
      <div className="testimonial-loop-wrapper">
        <div className="testimonial-loop-track">
          {loopedTestimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">{'⭐'.repeat(t.rating)}</div>
              <div className="testimonial-name">{t.name}</div>
              <p className="testimonial-text">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;