import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home-page';
import About from './pages/about-page';
import Portfolio from './pages/portfolio-page';
import Contact from './pages/contact-page';
import './App.scss';

function App() {
  return (
    <Router>
    <div className="wrapper">
      <div className="nav">
    <Navbar/>
    </div>
    <div className="content">
    <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
    </div>
  </Router>
  );
}

export default App;
