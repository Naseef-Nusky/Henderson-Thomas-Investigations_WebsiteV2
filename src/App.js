import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurServices from './pages/OurServices';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/our-services" element={<OurServices />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/service/:id" element={<ServiceDetail />} />
                </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
