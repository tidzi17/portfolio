import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import {ImCross} from 'react-icons/im'
 
import '../styles/main.scss'

function Navbar() {
  const navigate = useNavigate();
  const [Mobile, setMobile] = useState(false);



    return (
      <header>
        <div className="navigation">
      <nav className="navbar">
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <li className="nav-item" onClick={() => navigate("/")}>Home</li>
          <li className="nav-item" onClick={() => navigate("/about")}>About</li>
          <li className="nav-item" onClick={() => navigate("/portfolio")}>Portfolio</li>
          <li className="nav-item" onClick={() => navigate("/contact")}>Contact</li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
      </div>
      </header>
    );
  }
  
  export default Navbar;