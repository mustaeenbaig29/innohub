import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../styles/styles.css"

const Header = ({ headerActive }) => {
  const [navbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  const closeNavbar = () => {
    setNavbarActive(false);
  };

  
  return (
    <header className={headerActive ? 'header active' : 'header'}>
      <div class="container">

<a href="#" class="logo">InnoHub</a>

<nav className={`navbar container ${navbarActive ? 'active' : ''}`} data-navbar>
  <ul class="navbar-list">

    <li>
      <a href="#home" class="navbar-link" data-nav-link  onClick={closeNavbar}>Home</a>
    </li>

    <li>
      <a href="#service" class="navbar-link" data-nav-link  onClick={closeNavbar}>Services</a>
    </li>

    <li>
      <a href="#project" class="navbar-link" data-nav-link  onClick={closeNavbar}>Project</a>
    </li>

    <li>
      <a href="#about" class="navbar-link" data-nav-link  onClick={closeNavbar}>About Us</a>
    </li>

    <li>
      <a href="#blog" class="navbar-link" data-nav-link  onClick={closeNavbar}>Blog</a>
    </li>

    <li>
      <a href="#contact" class="navbar-link" data-nav-link  onClick={closeNavbar}>Contact Us</a>
    </li>

    <li>
      <a href="#" class="btn btn-primary">Get Started</a>
    </li>

  </ul>
</nav>

<button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler onClick={toggleNavbar}>
          <FaBars className="open" />
          <FaTimes className="close" />
        </button>

</div>
    </header>
  );
};

export default Header;
