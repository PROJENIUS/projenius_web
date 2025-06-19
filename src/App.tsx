// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';
import Navbar from './components/NavBar.tsx';
import AboutUsSection from "./pages/AboutUsSection.tsx";
import ContactPage from './pages/Contact.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import FloatingChatIcon from './components/FloatingChatIcon.tsx';
import Footer from './components/Footer.tsx';
import ChatBot from './components/ChatBot.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';

// ✅ Font Awesome import
import '@fortawesome/fontawesome-free/css/all.min.css';
import TermsOfService from './pages/TermsOfServices.tsx';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      };
    };

    if (!window.googleTranslateElementInit) {
      addGoogleTranslateScript();
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsSection />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/chatbot" element={<ChatBot onClose={() => {}} />} />
          <Route path="/Terms" element={<TermsOfService />} /> 
          <Route path="/privacy" element={<PrivacyPolicy />} /> 

        </Routes>

        <FloatingChatIcon />
      </div>
    </BrowserRouter>
  );
};

export default App;