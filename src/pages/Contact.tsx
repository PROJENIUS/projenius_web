import React, { useRef, useState } from "react";
import "./contact.css";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/NavBar.tsx";
import robotImg from "../img/robot.png";
import Spline from "@splinetool/react-spline";
import * as emailjs from "emailjs-com";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const faqs = [
  {
    question: "How do I post a project?",
    answer: "Sign up, go to your dashboard, and click on 'Post a Project.'"
  },
  {
    question: "How do I become a freelancer?",
    answer: "Create an account and complete your freelancer profile to get started."
  },
  {
    question: "Is there a fee for using ProJenius?",
    answer: "There are no fees for posting projects; freelancers pay a small commission on earnings."
  },
  {
    question: "How are disputes handled?",
    answer: "We have a dedicated resolution team to mediate disputes and ensure fairness."
  },
  {
    question: "Can I track project progress?",
    answer: "Yes, use the built-in dashboard to monitor milestones and communications."
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "Open a resolution request, and our team will assist you with the next steps."
  },
  {
    question: "How do I reset my password?",
    answer: "Click 'Forgot Password' on the login page and follow the instructions."
  },
  {
    question: "Can I delete my account?",
    answer: "Yes, go to Account Settings and select 'Delete My Account.'"
  },
  {
    question: "How do I edit my profile?",
    answer: "Go to your dashboard, click on 'Account Settings', and update your details."
  },
  {
    question: "Can I work on multiple projects at once?",
    answer: "Yes, freelancers can take on multiple projects simultaneously based on their availability."
  }
];

export default function ContactPage() {
  const [showFAQs, setShowFAQs] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQs = () => setShowFAQs(prev => !prev);
  const toggleAnswer = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const formRef = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2h7iers",     // Replace with your actual service ID
      "template_8as1pq2",    // Replace with your template ID
      formRef.current!,
      "--8wWEAHJihOuV3Na"      // Replace with your public key
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
      }
    );

    e.target.reset(); // Optional: clear form
  };

  
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <section className="hero-container">
      <div className="spline-background1">
        <Spline scene="https://prod.spline.design/v1ylYC4mZrjZ86U2/scene.splinecode" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Get In Touch With <span style={{ color: "#00fff2" }}>Projenius</span></h1>
        <p className="hero-subtitle">
          Have a question, feedback, or need support? We're here to help you <span style={{ color: "#00fff2" }}>succeed</span>.
        </p>
      </div>
    </section>

        <section className="contact-main">
          <div className="contact-left">
  <img src={robotImg} alt="Projenius Robot" />
  <div className="contact-info">
    <h2>Reach Out Directly</h2>
   

    <a href="mailto:teamprojenius@gmail.com" className="emailg">📧 teamprojenius@gmail.com</a>
    <a href="tel:+918925450473" className="phone">📞 +91 89254 50473</a>
    {/* <p>
      🕒 Operating Hours:<br />
      Monday - Friday, 9 AM - 5 PM IST
    </p> */}
  </div>
</div>

          <div className="contact-right">
            <h2>Send Us a Message</h2>
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="form-row">
                <input
                  type="text"
                  name="user_name"   // ✅ Matches EmailJS template
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  name="user_email"  // ✅ Matches EmailJS template
                  placeholder="Email Address"
                  required
                />
              </div>
              <select name="title" required>
                <option value="">Select a Topic</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
              </select>
              <textarea
                name="message"     // ✅ Matches EmailJS template
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
              <p className="response-time">
                We aim to respond to all inquiries within 24-48 business hours.
              </p>
            </form>
          </div>
        </section>

        <section className="faq-section">
  <h2>Looking for Answers?</h2>
  <p>
    Before sending a message, please check our comprehensive FAQ section
    or Help Center. You might find the solution to your query instantly!
  </p>
  <button className="faq-button" onClick={toggleFAQs}>
    {showFAQs ? "Hide FAQs" : "Visit Our FAQ"}
  </button>

  {showFAQs && (
    <div className="faq-flex-wrapper">
      <div className="faq-flex">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAnswer(index)}
          >
            <strong>Q: {item.question}</strong>
            <p className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
              A: {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  )}
</section>




        <section className="social-section">
          <h2>Connect With Us on Social Media</h2>
          <p>
            Follow us for updates, tips, industry insights, and community
            discussions.
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer">
                <FaInstagram /> </a>
            <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer">
                <FaYoutube /></a>
            <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /></a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
