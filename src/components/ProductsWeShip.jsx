import React from "react";
import "./ProductsWeShip.css";

export default function ProductsWeShip() {
  const certifications = [
    "ISO 27001",
    "SOC 2 Type II",
    "PCI DSS 4.0",
    "CERT-In",
    "MAS TRM",
    "SAMA Saudi",
    "SEBI · RBI",
    "25 frameworks total",
  ];

  return (
    <section className="products-section">
      {/* Header */}
      <div className="products-header">
        <span className="products-eyebrow">
          PRODUCTS WE SHIP
        </span>

        <div className="products-underline"></div>

        <h1>
          Not just studio.
          <br />
          We build and sell our <span>own.</span>
        </h1>

        <p className="products-intro">
          These aren't side projects. They're the same standard
          of product we'd want to use
          <br className="desktop-break" />
          ourselves.
        </p>
      </div>

      {/* Product details */}
      <div className="product-item">
        <div className="product-sidebar">
          <span className="product-status">
            LIVE · FREE TRIAL
          </span>

          <h2>Abhra</h2>
        </div>

        <div className="product-content">
          <h3>
            Sovereign cloud security, built for the enterprise
            that can't send its data anywhere — including to us.
          </h3>

          <p className="universal-description">
            Universal-inventory scanning across AWS, Azure,
            and GCP. 1,894+ native checks. 25 compliance
            frameworks including MAS TRM, NESA UAE, SAMA Saudi,
            SEBI, CERT-In, ISO 27001, SOC 2, and GDPR.
            100% of scan data stays on your machine.
            Desktop-first, air-gappable. Built in India,
            sold worldwide.
          </p>

          <div className="certification-list">
            {certifications.map((item, index) => (
              <span className="certification-badge" key={index}>
                {item}
              </span>
            ))}
          </div>

          <a href="#abhra" className="product-link">
            Download Free<span>→</span>abhra.world
          </a>
        </div>
      </div>

<hr class="solid-line"></hr>
       <section className="ilcm-section">
<div className="ilcm-container">

    {/* Left section */}
    <div className="ilcm-left">
      <span className="ilcm-status">
        IN DEVELOPMENT
      </span>

      <h2 className="ilcm-title">ILCM</h2>
    </div>

    {/* Right section */}
    <div className="ilcm-right">
      <h3 className="ilcm-heading">
        Five AI bots. Zero data lake. A human always has the final word.
      </h3>

      <p className="ilcm-description">
        Autonomous incident lifecycle management — Triage → Investigate
        → Contain → Validate → Post-Incident Review. Orchestrates your
        existing SIEM and EDR via API, with full chain-of-custody audit
        trails and configurable confidence thresholds that keep humans
        in control.
      </p>

      {/* Feature tags */}
      <div className="ilcm-tags">
        <span className="ilcm-tag">
          SOC 2 / NIST audit trail
        </span>

        <span className="ilcm-tag">
          Human-in-the-loop
        </span>

        <span className="ilcm-tag">
          No data lake
        </span>
      </div>

      {/* Button */}
      <button
        className="ilcm-button"
        onClick={() => {
          window.location.href = "mailto:hello@example.com?subject=Request%20Early%20Access";
        }}
      >
        Request early access
      </button>
    </div>

  </div>
</section>
    </section>
  );
}