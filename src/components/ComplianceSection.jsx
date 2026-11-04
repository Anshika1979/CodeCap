import React, { useState } from "react";
import "./ComplianceSection.css";

export default function ComplianceSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="compliance-section">

      <button
        type="button"
        className="compliance-heading"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>
          Compliance &amp; legal structure — for the founders
          who actually read the fine print
        </span>

        <span className="arrow">
        →
        </span>
      </button>

      {/* Descriptions appear below the heading */}
      {isOpen && (
        <div className="compliance-dropdown">
          <div className="compliance-row">

            <div className="compliance-item">
              <h3>Singapore</h3>
              <p>
                MAS-compliant fee structures. All equity agreements
                under Singapore law. Success fees on capital raises
                require proper licensing and legal sign-off before
                execution.
              </p>
            </div>

            <div className="compliance-item">
              <h3>UAE / KSA</h3>
              <p>
                DIFC or ADGM-seated equity agreements only. No
                offshore equity in Gulf markets — not enforceable,
                and we don't write it. Fees are safer at early stages
                here.
              </p>
            </div>

            <div className="compliance-item">
              <h3>India</h3>
              <p>
                Revenue share as the primary upside mechanism.
                Equity requires full contractual documentation.
                We lead with trust before we ask for equity.
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}