import React, { useState } from "react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Venture Building & Co-founding",
      subtitle: "Build from the beginning.",
      description:
        "At the pre-idea stage, we function as operational co-founders — shaping the problem space, validating the market thesis, and structuring the foundational product. We don't consult on this. We build it with you, equity-first, milestone-vested, with full accountability for outcomes.",
      points: [
        "Problem framing & market validation",
        "Founding team structuring",
        "Entity setup & legal scaffolding",
        "Product roadmap & prioritisation",
        "Investor readiness from day one",
      ],
    },
    {
      title: "Product Development & Tech Execution",
      subtitle: "Build products that work in the real world.",
      description:
        "From MVP architecture to production-grade engineering, our technical team builds alongside yours. We specialise in AI-native products, cybersecurity platforms, and B2B SaaS infrastructure across cloud-native stacks. We've built before — and we know what matters at each stage.",
      points: [
        "AI/ML product architecture",
        "Cybersecurity platform development",
        "B2B SaaS infrastructure",
        "Cloud-native stacks (AWS, GCP, Azure)",
        "API integrations & data pipelines",
      ],
    },
    {
      title: "Go-to-Market Strategy & Sales",
      subtitle: "Turn your product into a growing business.",
      description:
        "We don't hand over a deck and walk away. CodeCap owns the GTM motion — identifying enterprise buyers, building sales decks that convert, running proposals end-to-end, and closing first deals in-market across Singapore, UAE, and India. Our commercial upside is tied directly to deals closed.",
      points: [
        "ICP definition & market segmentation",
        "Enterprise pipeline development",
        "Proposal & RFP management",
        "Channel & partner development",
        "Deal closing & negotiation support",
      ],
    },
    {
      title: "Fundraising Support & VC Introductions",
      subtitle: "Get ready for your next funding milestone.",
      description:
        "From pitch deck construction to warm VC introductions across SEA, Gulf, and South Asian networks, CodeCap supports your capital raise — structured compliantly under MAS and UAE regulatory frameworks. We don't take fundraising-only mandates — capital support is always bundled with active service delivery.",
      points: [
        "Pitch deck development & review",
        "Financial model structuring",
        "VC introductions (SEA, Gulf, India)",
        "Due diligence preparation",
        "MAS & UAE-compliant success structures",
      ],
    },
    {
      title: "AI, Cybersecurity & Cloud",
      subtitle: "Build secure, intelligent technology.",
      description:
        "For startups operating in AI security, threat intelligence, zero-trust architecture, or regulated deep tech, CodeCap provides hands-on subject matter expertise that goes beyond advisory — we implement and validate. Our team has delivered in enterprise security environments across financial services, government, and critical infrastructure.",
      points: [
        "AI threat modelling & red-teaming",
        "Threat intelligence platform review",
        "Zero-trust architecture design",
        "Security product GTM",
        "Regulated industry compliance advisory",
      ],
    },
    {
      title: "Strategic Technology & Advisory",
      subtitle: "Make technology work for your business.",
      description:
        "Structured market entry programs for Singapore, UAE/KSA, and India — including entity setup guidance, regulatory strategy, partner channel development, and on-the-ground BD relationships from day one. We've navigated each of these markets ourselves, and we know what foreign founders get wrong.",
      points: [
        "Entity structure & setup guidance",
        "Regulatory & licensing navigation",
        "Local BD network activation",
        "Government & enterprise introductions",
        "Hiring & team localisation",
      ],
    },
  ];

  const engagementModels = [
    {
      id: "01",
      title: "Cash-Light Build",
      description:
        "For founders with strong vision but limited capital. CodeCap takes an equity-first position with milestone vesting, covering full execution across product and GTM. Revenue share activates once the business generates revenue.",
    },
    {
      id: "02",
      title: "Funded Founder GTM",
      description:
        "For founders who have raised initial capital and need execution firepower. A retainer covers CodeCap's cost base while equity and revenue share provide long-term upside alignment. Our most common engagement structure.",
    },
    {
      id: "03",
      title: "Venture Co-Founder",
      description:
        "For first-time founders building from zero. CodeCap becomes an operational co-founder — taking significant equity across three vesting tranches, running product, GTM, and operations, with a board observer seat included.",
    },
    {
      id: "04",
      title: "Capability Gap",
      description:
        "For Series A companies with a specific, unfillable gap — typically in cyber/deep tech, Gulf GTM, or SEA market entry. Fees-dominant structure, minimal equity, defined scope with a built-in exit clause. Requires partner-level approval before pitching.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <>
      {/* =========================
          SERVICES HERO SECTION
      ========================= */}

      <section className="services-hero" id="services">
        <div className="services-content">
          <div className="services-label">
            CODECAP SERVICES
          </div>

          <h1 className="services-heading">
            <span className="heading-white">
              Everything a
              founder
              needs.
              <br />
              Nothing they don't.
            </span>
          </h1>

          <p className="services-description">
            Our engagement model is calibrated to startup stage —
            highest support at the earliest stages, structured to
            de-risk on both sides as you grow. We are operators,
            not advisors.
          </p>
        </div>
      </section>

      {/* =========================
          WHAT WE DO - SIX SERVICES
      ========================= */}

      <section className="capabilities-section" id="what-we-do">
        <div className="capabilities-container">
          <div className="capabilities-heading">
            <p className="capabilities-label">
              What We Do
            </p>

            <h2>
              Six core services.
              <br />
              Delivered with ownership.
            </h2>
          </div>

          <div className="capabilities-layout">
            {/* LEFT: SERVICE OPTIONS */}

            <div className="capabilities-list">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  type="button"
                  className={`capability-option ${
                    activeIndex === index ? "selected" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={activeIndex === index}
                >
                  <span className="capability-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="capability-title">
                    {service.title}
                  </span>
                </button>
              ))}
            </div>

            {/* RIGHT: SERVICE DETAILS */}

            <div
              className="capability-detail"
              key={activeIndex}
            >
              <p className="detail-label">
                SERVICE / {String(activeIndex + 1).padStart(2, "0")}
              </p>

              <h3>{activeService.title}</h3>

              <h4>{activeService.subtitle}</h4>

              <p className="detail-description">
                {activeService.description}
              </p>

              <ul className="detail-points">
                {activeService.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <button
                type="button"
                className="service-cta"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's work together <span>↗️</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ENGAGEMENT MODELS SECTION
      ========================= */}

      <section
        className="engagement-section"
        id="engagement-models"
      >
        <div className="engagement-container">
          <p className="engagement-label">
            ENGAGEMENT MODELS
          </p>

          <h2 className="engagement-heading">
            <span className="heading-dark">
              Four ways
              <br />
              to work with us.
            </span>
          </h2>

          <div className="engagement-grid">
            {engagementModels.map((model) => (
              <article
                className="engagement-card"
                key={model.id}
              >
                <span className="engagement-number">
                  {model.id}
                </span>

                <div className="engagement-card-content">
                  <h3>{model.title}</h3>
                  <p>{model.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          MILESTONE VESTING SECTION
          BELOW ENGAGEMENT MODELS
      ========================= */}

      <section
        className="milestone-section"
        id="milestone-vesting"
      >
        <div className="milestone-container">

          {/* LEFT CONTENT */}

          <div className="milestone-content">
            <p className="milestone-label">
             EQUITY FRAMEWORK
            </p>

            <h2 className="milestone-heading">
              Milestone vesting.
              <br />
              Aligned incentives.
            </h2>

            <p className="milestone-description">
              All equity deals follow a standard 3-tranche milestone vesting structure. This protects founders from passive equity holders and ensures CodeCap remains accountable for delivery at every stage.
            </p>

            <p className="milestone-note">
              12-month clawback on unvested tranches.
              Singapore/DIFC-seated legal structuring.
            </p>
          </div>

          {/* RIGHT PROGRESS BARS */}

          <div className="milestone-progress">
            <div className="milestone-row">
              <span className="milestone-name">
               Strategy & Setup
              </span>

              <div
                className="milestone-track"
                role="progressbar"
                aria-label="Strategy"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="milestone-fill"
                  style={{ width: "30%" }}
                />
              </div>

              <span className="milestone-percentage">
                30%
              </span>
            </div>

            <div className="milestone-row">
              <span className="milestone-name">
                Product or First Revenue
              </span>

              <div
                className="milestone-track"
                role="progressbar"
                aria-label="Product"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="milestone-fill"
                  style={{ width: "40%" }}
                />
              </div>

              <span className="milestone-percentage">
                40%
              </span>
            </div>

            <div className="milestone-row">
              <span className="milestone-name">
                Traction or Funding
              </span>

              <div
                className="milestone-track"
                role="progressbar"
                aria-label="Traction"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="milestone-fill"
                  style={{ width: "30%" }}
                />
              </div>

              <span className="milestone-percentage">
                30%
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="start-something" id="contact">
        <div className="start-something-content">
          <p className="start-something-eyebrow">
            LET'S WORK
          </p>

          <h2 className="start-something-heading">
            Not sure which
            <br />
            model fits?
          </h2>

          <p className="start-something-description">
            Tell us where you are, what you're building and where you need help. We'll tell you which model makes sense.
          </p>

          <a
            href="mailto:hello@codecap.io"
            className="start-something-button"
          >
            Talk to CodeCap <span>→</span>
          </a>
        </div>
      </section>
    </>
  );
}