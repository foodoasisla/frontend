/* Libraries */
import React, {PropTypes} from "react";

/* Styles */
import "./../../styles/common/header.scss";

const Header = () => {
  return(
    <header className="header">
      <div className ="primary-nav">
        <nav role="navigation" className="slideout-menu">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href="/#" className="nav-item"><li>Home</li></a>
              <a href="/locations" className="nav-item"><li>Map</li></a>
              <hr/>
              <a href="/organizations" className="nav-item small"><li>Organizations</li></a>
              <a href="/resources" className="nav-item small"><li>Resources</li></a>
              <a href="/about" className="nav-item small"><li>About</li></a>
              <a href="/team" className="nav-item small"><li>Team</li></a>
              <a href="/news" className="nav-item small"><li>News</li></a>
              <a href="/faqs" className="nav-item small"><li>FAQs</li></a>
            </ul>
          </div>
        </nav>
        <h2>
          <a href="/">
            <img src="./../../static/images/fola.png" alt="Food Oasis Los Angeles" id="headerIcon"/>
          </a>
        </h2>
        <p className="tagline">Healthy Food for All Angelenos</p>
      </div>
    </header>
  );
};

export default Header;