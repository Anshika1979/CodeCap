import React from 'react';
import './Navbar.css';

const Navbar = ({ onNavigate }) => {
  const handleClick = (event, page) => {
    event.preventDefault();
    onNavigate(page);
  };

  return (
    <header className="navbar-container">
      <div className="navbar">

        {/* Logo opens the complete homepage */}
        <a
          href="/"
          className="logo"
          onClick={(e) => handleClick(e, 'home')}
        >
          Code<span className="logo-accent">Cap</span>
        </a>

        <nav className="nav-links">
          <a
            href="/venture-studio"
            onClick={(e) => handleClick(e, 'venture-studio')}
          >
            Venture Studio
          </a>

          <a
            href="/services"
            onClick={(e) => handleClick(e, 'services')}
          >
            Services
          </a>

          <a
            href="/products"
            onClick={(e) => handleClick(e, 'products')}
          >
            Products
          </a>

          <a
            href="/portfolio"
            onClick={(e) => handleClick(e, 'portfolio')}
          >
            Portfolio
          </a>

          <a
            href="/team"
            onClick={(e) => handleClick(e, 'team')}
          >
            Team
          </a>

          <a
            href="/insights"
            onClick={(e) => handleClick(e, 'insights')}
          >
            Insights
          </a>

          <a
            href="/podcast"
            onClick={(e) => handleClick(e, 'podcast')}
          >
            Podcast
          </a>
        </nav>

        <a
          href="/contact"
          className="btn"
          onClick={(e) => handleClick(e, 'contact')}
        >
          Talk to us
        </a>

      </div>
    </header>
  );
};

export default Navbar;