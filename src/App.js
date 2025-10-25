import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/Home';
import Services from './components/pages/Service';
import BlogPage from './components/pages/Blog';
import AboutUs from './components/pages/AboutUs';
import ContactPage from './components/pages/ContactUs';
import SingleBlogPost from './components/pages/SingleBlogPost';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsAndConditions from './components/pages/TermsAndConditions';
// Service pages
import BackgroundCheck from './components/pages/services/Background';
import CovertSurveillance from './components/pages/services/Covert';
import FraudInvestigation from './components/pages/services/Fraud';
import MissingPersons from './components/pages/services/Missing';
import PersonalInvestigation from './components/pages/services/Personal';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs/:slug" element={<SingleBlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          {/* Service pages */}
          <Route path="/service/background" element={<BackgroundCheck />} />
          <Route path="/service/covert" element={<CovertSurveillance />} />
          <Route path="/service/fraud" element={<FraudInvestigation />} />
          <Route path="/service/missing" element={<MissingPersons />} />
          <Route path="/service/personal" element={<PersonalInvestigation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
