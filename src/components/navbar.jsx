import React from "react";
import { Link } from 'react-router-dom';
import '../styles/main.scss'

function Navbar() {
    return (
        <div className="navigation">
      <div className="navbar">
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
      </div>
    );
  }
  
  export default Navbar;