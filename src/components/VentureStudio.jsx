import React from "react";
import "./VentureStudio.css";

export default function VentureStudio() {
  // Six Core Founder Services
  const founderOffers = [
    {
      id: "01",
      label: "PRE-IDEA FOUNDERS",
      heading: "Venture Building & Co-founding",
      text: "At pre-idea, we function as operational co-founders — shaping the problem space, validating the market thesis, and building the foundational product. Equity-first, milestone-vested, full accountability.",
    },
    {
      id: "02",
      label: "PRE-SEED TO SEED",
      heading: "Product Development & Tech Execution",
      text: "From MVP architecture to production-grade engineering. We specialise in AI-native products, cybersecurity platforms, and B2B SaaS infrastructure across cloud-native stacks.",
    },
    {
      id: "03",
      label: "MVP TO SEED STAGE",
      heading: "Go-to-Market Strategy & Sales",
      text: "CodeCap owns the GTM motion — identifying enterprise buyers, running proposals end-to-end, and closing first deals in-market across Singapore, UAE, and India.",
    },
    {
      id: "04",
      label: "PRE-SEED TO SERIES A",
      heading: "Fundraising Support & VC Introductions",
      text: "From pitch deck construction to warm VC introductions across SEA, Gulf, and South Asian networks — structured compliantly under MAS and UAE regulatory frameworks.",
    },
    {
      id: "05",
      label: "CYBER AND DEEP TECH STARTUPS",
      heading: "Cybersecurity & Deep Tech",
      text: "For startups in AI security, threat intelligence, zero-trust, or regulated deep tech — hands-on subject matter expertise. We implement and validate, not just advise.",
    },
    {
      id: "06",
      label: "SG · UAE · INDIA",
      heading: "Regional Market Entry",
      text: "Structured programs for Singapore, UAE/KSA, and India — entity setup, regulatory strategy, partner channel development, and on-the-ground business development from day one.",
    },
  ];

  // Four Engagement Models
  const engagementModels = [
    {
      number: "01",
      title: "Cash-Light Build",
      description:
        "Lower upfront cash commitment with a greater focus on milestone-based equity.",
    },
    {
      number: "02",
      title: "Funded Founder GTM",
      description:
        "For founders with an existing product who need experienced GTM and sales execution.",
    },
    {
      number: "03",
      title: "Venture Co-Founder",
      description:
        "We join from the earliest stage and operate as a true venture partner.",
    },
    {
      number: "04",
      title: "Capability Gap",
      description:
        "Targeted operating support where a startup needs a specific capability to move forward.",
    },
  ];

  // Our Markets
  const markets = [
    {
      number: "SEA / 01",
      title: "Singapore",
      region: "Southeast Asia",
      description:
        "Our Southeast Asian hub for venture building, AI-native products, cybersecurity, and enterprise technology partnerships.",
    },
    {
      number: "GCC / 02",
      title: "UAE & Saudi Arabia",
      region: "Gulf Markets",
      description:
        "Supporting regional expansion through go-to-market execution, strategic partnerships, and technology development.",
    },
    {
      number: "SOUTH ASIA / 03",
      title: "India",
      region: "South Asia",
      description:
        "Engineering talent, product execution, and scalable technology development for ambitious founders and businesses.",
    },
  ];

  return (
    <main className="venture-studio-page">
      {/* 1. VENTURE STUDIO HERO */}
      <section className="studio-section" id="venture-studio">
        <div className="studio-content">
          <div className="studio-label">
            CODECAP VENTURE STUDIO
          </div>

          <h1 className="studio-heading">
            <span>Building founders.</span>
            <span>Building companies.</span>
          </h1>

          <p className="studio-description">
            CodeCap's venture studio embeds with founders from
            pre-idea through Series A — providing technical
            execution, GTM firepower, and operational depth to
            turn ideas into investable companies. We are
            operators, not advisors.
          </p>
        </div>
      </section>

      {/* 2. SIX CORE FOUNDER SERVICES */}
      <section
        className="founder-offers"
        id="founder-services"
      >
        <div className="founder-offers-inner">
          <div className="founder-intro">
            <span className="founder-intro-label">
              How We Engage
            </span>

            <h2 className="founder-main-heading">
              Six core services.
              <br />
              <span>Delivered with ownership.</span>
            </h2>
          </div>

          <div className="founder-offers-list">
            {founderOffers.map((offer) => (
              <article
                className="founder-offer-card"
                key={offer.id}
              >
                <div className="founder-offer-meta">
                  <span className="founder-offer-id">
                    {offer.id}
                  </span>

                  <span className="founder-offer-label">
                    {offer.label}
                  </span>
                </div>

                <div className="founder-offer-details">
                  <h3>{offer.heading}</h3>
                  <p>{offer.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENGAGEMENT MODELS */}
      <section
        className="engagement-models-section"
        id="engagement-models"
      >
        <div className="engagement-models-container">
          <p className="engagement-models-label">
            ENGAGEMENT MODELS
          </p>

          <h2 className="engagement-models-heading">
            <span>Flexible structure.</span>
            <br />
            <span className="engagement-models-heading-muted">
              Real accountability.
            </span>
          </h2>

          <div className="engagement-models-grid">
            {engagementModels.map((model) => (
              <article
                className="engagement-models-card"
                key={model.number}
              >
                <span className="engagement-models-number">
                  {model.number}
                </span>

                <h3 className="engagement-models-card-title">
                  {model.title}
                </h3>

                <p className="engagement-models-description">
                  {model.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR MARKETS */}
      <section
        className="venture-markets-section"
        id="markets"
      >
        <div className="venture-markets-container">
          <p className="venture-markets-label">
            OUR MARKETS
          </p>

          <h2 className="venture-markets-heading">
            <span>Singapore.</span>
            <span>UAE &amp; Saudi Arabia.</span>
            <span className="venture-markets-muted">
              India.
            </span>
          </h2>

          <div className="venture-markets-grid">
            {markets.map((market) => (
              <article
                className="venture-markets-card"
                key={market.number}
              >
                <span className="venture-markets-number">
                  {market.number}
                </span>

                <div className="venture-markets-card-content">
                  <h3>{market.title}</h3>

                  <p className="venture-markets-region">
                    {market.region}
                  </p>

                  <p className="venture-markets-description">
                    {market.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. START SOMETHING — CONTACT SECTION */}
      <section className="start-something" id="contact">
        <div className="start-something-content">
          <p className="start-something-eyebrow">
            START SOMETHING
          </p>

          <h2 className="start-something-heading">
            Got conviction?
            <br />
            Let's build.
          </h2>

          <p className="start-something-description">
            Tell us where you are and what you're building. We'll tell you if we're the right partner — and if not, we'll point you in the right direction.
          </p>

          <a
            href="mailto:hello@codecap.io"
            className="start-something-button"
          >
            Talk to CodeCap <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}