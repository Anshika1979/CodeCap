import React from "react";
import "./Markets.css";

export default function Markets() {

  const models = [
    {
      code: "SG",
      country: "Singapore",
      highlight: "Equity-flexible early, fee-led later.",
      description:
        "Our legal and operational home. All equity agreements structured under Singapore law, MAS-compliant from day one. The gateway to Southeast Asia — and increasingly, the world.",
    },
    {
      code: "AE",
      country: "UAE & Saudi Arabia",
      highlight:
        "DIFC or ADGM-seated, or it doesn't count.",
      description:
        "Higher fee tolerance, credential-led. Offshore equity agreements have no enforceability here — so we don't write them. Our partners have built trust in the Gulf over careers, not months.",
    },
    {
      code: "IN",
      country: "India",
      highlight:
        "Revenue share first. Equity is earned, not assumed.",
      description:
        "Indian founders are equity-protective and relationship-first. We lead with revenue share, earn the trust, and build from there. Hyderabad to Mumbai to Bangalore — we know the market.",
    },
  ];

  return (
    <section className="markets-section">
      <div className="markets-header">
        <span className="markets-eyebrow">MARKETS</span>
        <div className="markets-line"></div>

        <h1 className="markets-title">
          Three markets.
          <br />
          One operating <span>playbook.</span>
        </h1>

        <p className="markets-subtitle">
          Each market has its own rules, trust signals, and legal structure.
          We've learned them the hard way so you don't have to.
        </p>
      </div>

        <div className="models-grid">
        {models.map((model) => (
          <article className="model-card" key={model.code}>
            <div className="model-code">{model.code}</div>

            <h3 className="model-country">
              {model.country}
            </h3>

            <p className="model-highlight">
              {model.highlight}
            </p>

            <p className="model-description">
              {model.description}
            </p>
          </article>
        ))}
      </div>

    </section>
  );
}