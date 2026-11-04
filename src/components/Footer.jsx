import React from "react";
import "./Footer.css";

export default function Footer({ onNavigate }) {

  const handleNavigation = (event, pageName) => {
    event.preventDefault();
    onNavigate(pageName);
  };

  return (
    <footer className="site-footer">

      {/* CodeCap Logo: Opens the complete homepage */}
      <a
        href="/"
        className="footer-logo"
        onClick={(e) => handleNavigation(e, "home")}
      >
        Code<span>Cap</span>
      </a>

      {/* Footer Navigation Links */}
      <nav className="footer-nav">

        <a
          href="/venture-studio"
          onClick={(e) => handleNavigation(e, "venture-studio")}
        >
          Venture Studio
        </a>

        <a
          href="/services"
          onClick={(e) => handleNavigation(e, "services")}
        >
          Services
        </a>

        <a
          href="/products"
          onClick={(e) => handleNavigation(e, "products")}
        >
          Products
        </a>

        <a
          href="/portfolio"
          onClick={(e) => handleNavigation(e, "portfolio")}
        >
          Portfolio
        </a>

        <a
          href="/team"
          onClick={(e) => handleNavigation(e, "team")}
        >
          Team
        </a>

        <a
          href="/insights"
          onClick={(e) => handleNavigation(e, "insights")}
        >
          Insights
        </a>

        <a
          href="/podcast"
          onClick={(e) => handleNavigation(e, "podcast")}
        >
          Podcast
        </a>

      </nav>

      {/* Footer Information */}
      <div className="footer-info">

        <span>
          © {new Date().getFullYear()} CodeCap Ventures
        </span>

        <span className="footer-dot">·</span>
        <span>Singapore</span>

        <span className="footer-dot">·</span>
        <span>UAE</span>

        <span className="footer-dot">·</span>
        <span>India</span>

        <span className="footer-dot">·</span>

        <a href="mailto:hello@codecap.ai">
          hello@codecap.ai
        </a>

      </div>

    </footer>
  );
}