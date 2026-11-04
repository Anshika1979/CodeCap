import React, { useState } from "react";
import "./Product.css";

const products = [
  {
    id: "01",
    name: "Abhra",
    status: "AVAILABLE NOW",
    menuStatus: "Available Now",
    category: "ENTERPRISE CLOUD SECURITY & SBOM",
    tagline:
      "Enterprise cloud security without your data leaving your premises.",
    description:
      "On-premises cloud security posture management designed for regulated environments, with cloud asset visibility and actionable security insights.",
    features: [
      "Cloud Asset Visibility",
      "On-Premises Deployment",
      "Compliance Monitoring",
    ],
    footer:
      "Designed for organizations that require security, visibility, and control over sensitive cloud infrastructure.",
  },
  {
    id: "02",
    name: "Agentic ILCM",
    status: "IN DEVELOPMENT",
    menuStatus: "In Development",
    category: "AI-POWERED SECURITY LIFECYCLE MANAGEMENT",
    tagline:
      "Intelligent automation for the modern security lifecycle.",
    description:
      "An AI-driven security lifecycle management solution designed to help security teams identify risks, prioritize remediation, and streamline workflows.",
    features: [
      "AI-Assisted Workflows",
      "Risk Prioritization",
      "Automated Remediation",
    ],
    footer:
      "Built to help security teams reduce manual effort and improve operational efficiency.",
  },
  {
    id: "03",
    name: "Threat Intelligence",
    status: "COMING SOON",
    menuStatus: "Coming Soon",
    category: "THREAT DETECTION & INTELLIGENCE",
    tagline:
      "Turn threat signals into actionable security insights.",
    description:
      "Consolidate security signals, understand emerging threats, and help teams make informed security decisions with actionable intelligence.",
    features: [
      "Threat Monitoring",
      "Risk Insights",
      "Security Intelligence",
    ],
    footer:
      "Designed to support proactive threat awareness and faster security investigations.",
  },
  {
    id: "04",
    name: "Zero Trust Access",
    status: "COMING SOON",
    menuStatus: "Coming Soon",
    category: "IDENTITY & ACCESS SECURITY",
    tagline:
      "Secure every connection with identity-first access.",
    description:
      "Verify identities, enforce access policies, and limit unnecessary access to sensitive enterprise resources through a zero-trust approach.",
    features: [
      "Identity Verification",
      "Access Policies",
      "Least-Privilege Access",
    ],
    footer:
      "Designed to support secure enterprise access and resource protection.",
  },
];

const abhraCapabilities = [
  {
    id: "01",
    title: "On-premises deployment",
    description:
      "Deploy on premises with zero cloud data exposure.",
  },
  {
    id: "02",
    title: "Posture visibility",
    description:
      "Improve cloud security posture visibility and compliance readiness.",
  },
  {
    id: "03",
    title: "Cloud asset discovery",
    description:
      "Discover cloud assets and improve visibility across your infrastructure.",
  },
  {
    id: "04",
    title: "Compliance monitoring",
    description:
      "Support security governance and compliance requirements with actionable insights.",
  },
];

const partnerCards = [
  {
    step: "01 / EXPAND",
    title: "Expand your portfolio",
    description:
      "Add differentiated cybersecurity services without building every capability in-house.",
  },
  {
    step: "02 / DELIVER",
    title: "Standardise delivery",
    description:
      "Use CodeCap platforms and structured service workflows to standardise delivery and reporting.",
  },
  {
    step: "03 / PROVE",
    title: "Show measurable evidence",
    description:
      "Give customers posture scores, validation results, compliance outputs and verified remediation evidence.",
  },
];

export default function Product() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedProduct = products[selectedIndex];

  // AudSpect overview features
  const audspectFeatures = [
    "Dynamic threat intelligence and zero-day emulation",
    "Playbook-driven simulations mapped to MITRE ATT&CK",
    "Unified posture score and executive-ready reporting",
  ];

  // AudSpect validation information
  const validationItems = [
    { name: "Endpoints", status: "Validated" },
    { name: "Network", status: "Paths mapped" },
    { name: "Cloud", status: "Simulated" },
  ];

  return (
    <main className="product-page">

      {/* =========================================
          1. HERO SECTION
      ========================================= */}

      <section className="hero">
        <div className="hero-content">

          <div className="brand-badge">
            CODECAP PRODUCT
          </div>

          <h1 className="hero-title">
            We don't just advise.
            <br />
            We ship.
          </h1>

          <p className="hero-description">
            CodeCap builds partner-ready cybersecurity offerings
            for regulated enterprises and managed partners,
            spanning sovereign cloud security, compliance,
            and managed security services.
          </p>

        </div>
      </section>


      {/* =========================================
          2. PRODUCT PORTFOLIO
      ========================================= */}

      <section
        className="product-portfolio"
        id="product-portfolio"
      >
        <div className="portfolio-container">

          <div className="portfolio-heading-group">

            <p className="portfolio-eyebrow">
              PRODUCT PORTFOLIO
            </p>

            <h2 className="portfolio-heading">
              Four product offerings
              <span>
                built for enterprise security.
              </span>
            </h2>

          </div>

          <div className="portfolio-layout">

            {/* Product Navigation */}

            <nav
              className="product-list"
              aria-label="Product offerings"
            >
              {products.map((product, index) => (
                <button
                  key={product.id}
                  type="button"
                  className={`product-option ${
                    selectedIndex === index ? "active" : ""
                  }`}
                  onClick={() => setSelectedIndex(index)}
                  aria-pressed={selectedIndex === index}
                >
                  <span className="product-number">
                    PRODUCT / {product.id}
                  </span>

                  <span className="product-name">
                    {product.name}
                  </span>

                  <span className="product-menu-status">
                    {product.menuStatus}
                  </span>
                </button>
              ))}
            </nav>


            {/* Selected Product Details */}

            <article
              className="product-detail"
              key={selectedProduct.id}
              aria-live="polite"
            >

              <div className="product-detail-top">

                <p className="product-category">
                  {selectedProduct.category}
                </p>

                <span className="product-status-badge">
                  {selectedProduct.status}
                </span>

              </div>

              <h3 className="product-detail-title">
                {selectedProduct.name}
              </h3>

              <p className="product-tagline">
                {selectedProduct.tagline}
              </p>

              <p className="product-description">
                {selectedProduct.description}
              </p>

              <h4 className="product-features-heading">
                KEY CAPABILITIES
              </h4>

              <div className="product-features">

                {selectedProduct.features.map((feature) => (
                  <span
                    className="product-feature"
                    key={feature}
                  >
                    {feature}
                  </span>
                ))}

              </div>

              <div className="product-detail-footer">
                {selectedProduct.footer}
              </div>

            </article>

          </div>
        </div>
      </section>


      {/* =========================================
          3. ABHRA PRODUCT SECTION
      ========================================= */}

      <section
        className="abhra-section"
        id="abhra"
      >

        <div className="abhra-heading">

          <p className="abhra-eyebrow">
            CLOUD SECURITY · CSBOM
          </p>

          <h2 className="abhra-title">

            <span className="abhra-title-name">
              Abhra —
            </span>

            <span className="abhra-title-description">
              enterprise cloud security without your
              <br className="abhra-desktop-break" />
              {" "}data leaving your premises.
            </span>

          </h2>

        </div>


        <div className="abhra-product-grid">

          <article className="abhra-info-card">

            <span className="abhra-status">
              AVAILABLE NOW
            </span>

            <h3 className="abhra-product-name">
              Abhra
            </h3>

            <p className="abhra-product-subtitle">
              Your cloud. Your data. Your control.
            </p>

            <p className="abhra-product-description">
              On-premises CSPM designed for regulated environments,
              with cloud asset visibility and Cloud Bill of Materials
              (CsBOM) readiness. Abhra is positioned around data
              sovereignty and compliance readiness.
            </p>

            <div className="abhra-features">

              <div className="abhra-feature">

                <span className="abhra-feature-number">
                  01
                </span>

                <div>
                  <h4>Cloud Asset Visibility</h4>

                  <p>
                    Improve visibility into your cloud
                    infrastructure and assets.
                  </p>
                </div>

              </div>

              <div className="abhra-feature">

                <span className="abhra-feature-number">
                  02
                </span>

                <div>
                  <h4>On-Premises Deployment</h4>

                  <p>
                    Keep sensitive cloud security data within
                    your own environment.
                  </p>
                </div>

              </div>

              <div className="abhra-feature">

                <span className="abhra-feature-number">
                  03
                </span>

                <div>
                  <h4>Compliance Monitoring</h4>

                  <p>
                    Support security posture monitoring and
                    compliance visibility.
                  </p>
                </div>

              </div>

            </div>

            <a
              className="abhra-cta"
              href="#product-portfolio"
            >
              Explore our products
              <span aria-hidden="true">↗️</span>
            </a>

          </article>


          {/* Abhra Security Visual */}

          <div
            className="abhra-visual-card"
            aria-label="Abhra cloud security visual"
          >

            <div className="abhra-visual-top">

              <span className="abhra-visual-tag">
                ON-PREM
              </span>

              <span className="abhra-visual-tag abhra-csbom-tag">
                CsBOM
              </span>

            </div>

            <div className="abhra-orbit-scene">

              <div className="abhra-orbit abhra-orbit-one" />
              <div className="abhra-orbit abhra-orbit-two" />
              <div className="abhra-orbit abhra-orbit-three" />
              <div className="abhra-core-glow" />

              <div className="abhra-core">
                <span className="abhra-core-symbol">
                  A
                </span>
              </div>

              <span className="abhra-node abhra-node-one" />
              <span className="abhra-node abhra-node-two" />
              <span className="abhra-node abhra-node-three" />

            </div>

            <div className="abhra-visual-bottom">

              <div>

                <span className="abhra-bottom-label">
                  PRODUCT
                </span>

                <p>
                  Abhra Cloud Security
                </p>

              </div>

              <span className="abhra-secure-indicator">
                <span />
                DATA STAYS LOCAL
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          4. ABHRA CAPABILITIES
      ========================================= */}

      <section
        className="abhra-capabilities"
        id="abhra-capabilities"
      >

        <div className="abhra-capabilities-container">

          <p className="abhra-capabilities-label">
            ABHRA CAPABILITIES
          </p>

          <h2 className="abhra-capabilities-heading">

            <span>
              Keep cloud security
            </span>

            <span className="abhra-heading-muted">
              close to the data.
            </span>

          </h2>

          <div className="abhra-capabilities-grid">

            {abhraCapabilities.map((capability) => (

              <article
                className="abhra-capability-card"
                key={capability.id}
              >

                <span className="abhra-capability-number">
                  {capability.id}
                </span>

                <h3>
                  {capability.title}
                </h3>

                <p>
                  {capability.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          5. AUDSPEC CONTINUOUS VALIDATION
      ========================================= */}

      <section
        className="audspec-section"
        id="audspec"
      >

        <div className="audspec-container">

          <p className="audspec-eyebrow">
            BAS · CONTINUOUS VALIDATION
          </p>

          <h2 className="audspec-heading">

            <span>
              Audspect —
            </span>

            {" "}validate whether your security controls

            <br className="audspec-heading-break" />

            actually work.

          </h2>

          <div className="audspec-grid">

            <article className="audspec-card audspec-card-main">

              <div className="card-tag">
                BREACH & ATTACK SIMULATION
              </div>

              <div className="card-content">

                <h3>
                  Audspect
                </h3>

                <p className="sad">
                  Continuously validate your security controls
                  against real-world attack techniques.
                </p>

                <p className="happy">
                  A BAS platform that combines threat emulation,
                  security-control validation, posture scoring and
                  remediation guidance across modern enterprise
                  environments.
                </p>

                <div className="card-line" />

                <div className="card-footer">

                  <span>
                    CONTINUOUS VALIDATION
                  </span>

                  <span className="arrow">
                    ↗️
                  </span>

                </div>

              </div>

            </article>


            <article className="audspec-card audspec-card-score">

              <div className="score-content">

                <div className="score-label">
                  UNIFIED POSTURE SCORE
                </div>

                <div className="score-number">
                  92<span>%</span>
                </div>

                <p className="score-text">
                  See how your security controls perform
                  across your attack surface.
                </p>

                <div className="score-bars">

                  <div className="score-bar">

                    <div className="bar-heading">
                      <span>PREVENT</span>
                      <span>95%</span>
                    </div>

                    <div className="bar-track">
                      <div className="bar-fill fill-one" />
                    </div>

                  </div>

                  <div className="score-bar">

                    <div className="bar-heading">
                      <span>DETECT</span>
                      <span>88%</span>
                    </div>

                    <div className="bar-track">
                      <div className="bar-fill fill-two" />
                    </div>

                  </div>

                  <div className="score-bar">

                    <div className="bar-heading">
                      <span>RESPOND</span>
                      <span>92%</span>
                    </div>

                    <div className="bar-track">
                      <div className="bar-fill fill-three" />
                    </div>

                  </div>

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =========================================
          6. MANAGED PARTNERS
      ========================================= */}

      <section
        className="partners-section"
        id="managed-partners"
      >
        <div className="partners-container">

          <span className="partners-subtitle">
            FOR MANAGED PARTNERS
          </span>

          <h2 className="partners-title">
            Built to expand, <br />
            deliver and prove outcomes.
          </h2>

          <div className="partners-grid">

            {partnerCards.map((card, index) => (
              <div
                key={index}
                className="partner-card"
              >
                <span className="card-step">
                  {card.step}
                </span>

                <h3 className="card-title">
                  {card.title}
                </h3>

                <p className="card-description">
                  {card.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================
          7. GET STARTED
      ========================================= */}

      <section
        className="get-started-section"
        id="get-started"
      >
        <div className="get-started-content">

          <p className="get-started-label">
            GET STARTED
          </p>

          <h2 className="get-started-title">
            Ready to offer
            <br />
            measurable security
            <br />
            outcomes?
          </h2>

          <p className="get-started-description">
            Explore Abhra, Agentic ILCM, Audspect, delivery workflows
            and expert guidance.
          </p>

          <a
            href="#contact"
            className="get-started-button"
          >
            <span>
              Contact Product Team
            </span>

            <span
              className="get-started-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </a>

        </div>
      </section>

    </main>
  );
}