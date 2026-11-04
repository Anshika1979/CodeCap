import React, { useState } from "react";
import "./ServiceOfferings.css";

export default function ServiceOfferings() {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Venture Building & Co-Founding",
      subtitle:
        "We're not your advisor; we're your co-founder, with equity on the line.",
      description:
        "At the pre-idea stage, we function as operational co-founders — shaping the problem space, validating the market thesis, building the foundational product. Not a workshop. A real company, built from the inside.",
      points: [
        "Problem space definition & market validation",
        "Co-founder-level commitment with milestone-vested equity",
        "Technical architecture & product roadmap ownership",
        "First-hire strategy and cap table structuring",
        "Investor narrative development from day one",
      ],
    },
    {
      title: "Product Development & Tech Execution",
      subtitle:
        "Code that survives enterprise procurement, not a demo that survives a pitch.",
      description:
        "From MVP to production-grade engineering — AI-native products, cybersecurity platforms, B2B SaaS. Built alongside your team with the same ownership mindset we bring to our own products.",
      points: [
        "AI-native architecture (LLMs, vector DBs, agents",
        "Cybersecurity platform development — SIEM, EDR, GRC integrations",
        "Multi-tenant, compliance-ready B2B SaaS infrastructure",
        "DevSecOps pipelines and cloud deployment",
        "Technical due diligence prep for fundraising rounds",
      ],
    },
    {
      title: "Go-to-Market Strategy & Sales",
      subtitle:
        "We don't teach you to sell. We close the deals ourselves.",
      description:
        "Pitch deck construction to warm VC introductions across SEA, Gulf, and South Asia — structured under MAS and UAE regulatory frameworks. No finder’s fees outside compliant structures.",
      points: [
        "Pitch deck design and narrative engineering",
        "Financial model review and investor-readiness audit",
        "Introductions to vetted VC partners in SEA, Gulf & India",
        "Term sheet guidance and due diligence prep",
      ],
    },
    {
      title: "Fundraising Support & VC Introductions",
      subtitle:
        "Introductions, strategy, and preparation for your next funding round.",
      description:
        "For AI security, threat intelligence, or regulated deep tech startups — we implement, validate, and help you sell to security buyers who’ve seen everything.",
      points: [
        "CISO-level positioning for security buyers",
        "Threat intelligence platform design and validation",
        "Zero-trust architecture review",
        "SOC 2 / ISO 27001 / NIST readiness support",
      ],
    },
    {
      title: "Cyber & Deep Tech Advisory",
      subtitle:
        "Expert guidance for ambitious and complex technology.",
      description:
        "We provide technical strategy, architecture guidance, and cybersecurity insights to help companies build secure, scalable, and resilient products.",
      points: [
        "Cybersecurity strategy and risk assessment",
        "Technical architecture reviews",
        "Security-first product development",
        "Deep-tech feasibility and technical validation",
        "Enterprise security and compliance guidance",
      ],
    },
    {
      title: "Regional Market Entry",
      subtitle:
        "Singapore, UAE, India — each with its own rules. We’ve already learned them.",
      description:
        "Three markets, very different rules. We’ve already made the expensive mistakes so you don’t have to.",
      points: [
        "Singapore: entity setup, MOM passes, MAS navigation, government grants",
        "UAE: DIFC/ADGM entity structuring, local partner identification",
        "India: regulatory compliance, local BD, revenue share frameworks",
      ],
    },
  ];

  const toggleService = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="service-section" id="studio-services">
      <div className="service-container">
        {/* Section heading */}
        <div className="studio-services">
          <span className="eyebrow">STUDIO SERVICES</span>

          <div className="line"></div>

          <h1>
            Six ways we engage.
            <br />
            One <span>standard of delivery.</span>
          </h1>

          <p className="introduction">
            Open any service for the full picture. The short version:
            every line item ends in something delivered, not a
            recommendation.
          </p>
        </div>

        {/* Services accordion */}
        <div className="services-list">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const descriptionId = `service-description-${index}`;

            return (
              <div className="service-item" key={service.title}>
                <button
                  type="button"
                  className="service-header"
                  onClick={() => toggleService(index)}
                  aria-expanded={isOpen}
                  aria-controls={descriptionId}
                >
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="service-text">
                    <h3>{service.title}</h3>

                    <p className="service-subtitle">
                      {service.subtitle}
                    </p>
                  </div>

                  <span
                    className="service-icon"
                    aria-hidden="true"
                  >
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {/* Dropdown description and bullet list */}
                {isOpen && (
                  <div
                    className="service-description"
                    id={descriptionId}
                  >
                    <p>{service.description}</p>

                    <ul className="service-points">
                      {service.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}