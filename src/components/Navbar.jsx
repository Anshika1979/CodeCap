import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';

const Navbar = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1200px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  const handleClick = (event, page) => {
    event.preventDefault();
    setMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="navbar-container" onKeyDown={(event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <div className="navbar">

        {/* Logo opens the complete homepage */}
        <a
          href="/"
          className="logo"
          onClick={(e) => handleClick(e, 'home')}
        >
          Code<span className="logo-accent">Cap</span>
        </a>

        <button
          ref={menuButton}
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true">{menuOpen ? '\u2715' : '\u2630'}</span>
          <span>Menu</span>
        </button>

        <nav id="primary-navigation" aria-label="Main navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
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
