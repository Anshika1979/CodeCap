import React, { useState } from "react";
import "./Portfolio.css";

export default function Portfolio() {

  // ==========================================
  // PROJECT DATA
  // ==========================================

  const projects = [
    {
      name: "InfinityOmnia",
      number: "01",
      category: "Enterprise Operations · AI Platform · Pre-seed · MVP",
      builder: "Built by Wisebound",

      tags: [
        "Enterprise Operations",
        "AI Platform",
        "Pre-seed",
        "MVP"
      ],

      title: "One Platform. Infinite Possibilities.",

      description:
        "A unified operations platform bringing service desk, incident management, IoT and digital twin, executive reporting, command & control, mobile workforce, audit and compliance, and edge computing into one platform.",

      engagement:
        "CODECAP ENGAGEMENT: GTM · SALES · MARKET ENTRY — SEA & GULF",

      stats: [
        { value: "300+", label: "ORGANISATIONS" },
        { value: "150K+", label: "USERS" },
        { value: "9", label: "MODULES" },
        { value: "99.9%", label: "UPTIME" }
      ],

      features: [
        "InfinityCore",
        "InfinityAware",
        "InfinityAIQ",
        "InfinityCXO",
        "InfinityCMD",
        "InfinityStay",
        "InfinityOps",
        "InfinityAssure",
        "InfinityEdge"
      ],

      markets: ["Singapore", "UAE", "KSA", "India"],

      industries: [
        "Hospitality",
        "Healthcare",
        "Manufacturing",
        "Government",
        "Facilities",
        "Retail"
      ],

      buyers: [
        "COOs",
        "VP Operations",
        "IT Directors",
        "CISOs",
        "CXOs"
      ]
    },

    {
      name: "Veptr",
      number: "02",
      category: "GRC · AI-Powered Compliance · Pre-seed · MVP",
      builder: "Built by Wisebound",

      tags: [
        "GRC",
        "AI Compliance",
        "Pre-seed",
        "MVP"
      ],

      title: "Compliance. Simplified with AI.",

      description:
        "An AI-powered Governance, Risk & Compliance platform with an integrated LLM assistant for audits, controls and evidence.",

      engagement:
        "CODECAP ENGAGEMENT: GTM · SALES · MARKET ENTRY — SEA & GULF",

      stats: [
        { value: "AI", label: "ASSISTANT" },
        { value: "GRC", label: "PLATFORM" },
        { value: "ISO", label: "READY" },
        { value: "GLOBAL", label: "MARKET" }
      ],

      features: [
        "AI chatbot",
        "Policy summarisation",
        "Automated workflow",
        "Risk management",
        "Compliance tracking",
        "Vendor management",
        "Custom framework builder"
      ],

      markets: [
        "UAE / Dubai HQ",
        "Singapore",
        "Global"
      ],

      industries: [
        "FinTech",
        "Financial Services",
        "HealthCare",
        "SaaS Enterprise",
        "Government"
      ],

      buyers: [
        "GRC Teams",
        "CISOs",
        "Compliance Leads",
        "Risk Managers",
        "Auditors"
      ]
    },

    {
      name: "Abhra",
      number: "03",
      category: "Technology · Innovation · Startup",
      builder: "Built by CodeCap",

      tags: [
        "Technology",
        "Innovation",
        "Startup"
      ],

      title: "Building What's Next.",

      description:
        "CodeCap distributes and commercialises Abhra across Southeast Asia, the Gulf and South Asian markets.",

      engagement:
        "CODECAP ENGAGEMENT: GTM · SALES · MARKET ENTRY — SEA & GULF",

      stats: [
        { value: "1,894+", label: "CHECKS" },
        { value: "25", label: "FRAMEWORKS" },
        { value: "3", label: "CLOUD" },
        { value: "Live", label: "PRODUCT" }
      ],

      features: [
        "AWS security checks",
        "Azure security checks",
        "GCP security checks",
        "25 compliance frameworks",
        "Desktop-first deployment",
        "Air-gappable architecture"
      ],

      markets: [
        "Singapore",
        "UAE",
        "KSA",
        "India"
      ],

      industries: [
        "Enterprise",
        "Regulated Economy",
        "Cybersecurity"
      ],

      buyers: [
        "Security Teams",
        "CISOs",
        "IT Leaders",
        "CXOs",
        "Compliance Teams"
      ]
    }
  ];


  // ==========================================
  // PORTFOLIO FOCUS DATA
  // ==========================================

  const portfolioAreas = [
    {
      id: "01",
      category: "AI",
      icon: "◇",
      title: "AI Platforms",
      description:
        "Products applying AI to meaningful enterprise and operational problems."
    },

    {
      id: "02",
      category: "CYBER",
      icon: "◇",
      title: "Cybersecurity",
      description:
        "Security products built for increasingly complex enterprise environments."
    },

    {
      id: "03",
      category: "ENTERPRISE",
      icon: "◆",
      title: "Enterprise SaaS",
      description:
        "Software solving operational problems for organisations at scale."
    }
  ];


  // ==========================================
  // ACTIVE PROJECT STATE
  // ==========================================

  const [activeProject, setActiveProject] = useState(0);

  const active = projects[activeProject];


  // ==========================================
  // REUSABLE INFORMATION CARD
  // ==========================================

  const renderInfoCard = (title, items) => (
    <div className="project-info-card">

      <h4>{title}</h4>

      <div className="project-info-tags">

        {items.map((item, index) => (
          <span key={index}>
            {item}
          </span>
        ))}

      </div>

    </div>
  );


  // ==========================================
  // MAIN RETURN
  // ==========================================

  return (

    <main className="portfolio-main">


      {/* ======================================
          SECTION 01 - PORTFOLIO INTRO
      ====================================== */}

      <section className="portfolio-page" id="portfolio">

        <div className="portfolio-glow portfolio-glow-left"></div>

        <div className="portfolio-glow portfolio-glow-right"></div>

        <div className="portfolio-content">

          <div className="portfolio-badge">
            CODECAP PORTFOLIO
          </div>

          <h1 className="portfolio-startups-heading">
            Startups we're
            <br />
            building
            with.
          </h1>

          <p className="portfolio-description">
            Beyond CodeCap's own products, we actively embed with early-stage
            startups as a venture studio partner — providing GTM execution,
            product advisory, sales, and regional market entry across Southeast
            Asia, the Gulf, and South Asia.
          </p>

        </div>

      </section>


      {/* ======================================
          SECTION 02 - ACTIVE PORTFOLIO
      ====================================== */}

      <section className="active-portfolio" id="companies">

        <div className="active-portfolio-glow"></div>

        <div className="active-portfolio-container">

          <div className="active-section-label">
            ACTIVE PORTFOLIO
          </div>

          <h2 className="active-section-heading">
            Companies we
            <br />
            work inside.
          </h2>


          {/* PROJECT LAYOUT */}

          <div className="active-project-layout">


            {/* LEFT SIDE - PROJECT LIST */}

            <div className="active-project-list">

              {projects.map((project, index) => (

                <div
                  key={project.number}
                  className={`active-project-item ${
                    activeProject === index ? "selected" : ""
                  }`}
                  onClick={() => setActiveProject(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {

                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveProject(index);
                    }

                  }}
                  aria-pressed={activeProject === index}
                >

                  <div className="active-project-number">
                    PROJECT / {project.number}
                  </div>

                  <h3>{project.name}</h3>

                  <p>{project.category}</p>

                </div>

              ))}

            </div>


            {/* RIGHT SIDE - PROJECT DETAILS */}

            <div
              className="active-project-details"
              key={active.name}
            >

              <div className="active-project-top">

                <h2>{active.name}</h2>

                <span className="active-status">
                  ACTIVE
                </span>

              </div>


              {/* BUILDER */}

              <div className="active-project-builder">
                {active.builder}
              </div>


              {/* PROJECT TAGS */}

              <div className="active-project-tags">

                {active.tags.map((tag, index) => (

                  <span
                    className="active-project-tag"
                    key={index}
                  >
                    {tag}
                  </span>

                ))}

              </div>


              {/* PROJECT TITLE */}

              <h3 className="active-project-title">
                {active.title}
              </h3>


              {/* PROJECT DESCRIPTION */}

              <p className="active-project-description">
                {active.description}
              </p>


              {/* ADDITIONAL DETAILS */}

              <div className="project-extra-details">

                <div className="project-engagement-badge">
                  {active.engagement}
                </div>


                {/* STATISTICS */}

                <div className="project-stats-grid">

                  {active.stats.map((stat, index) => (

                    <div
                      className="project-stat-card"
                      key={index}
                    >

                      <h3>{stat.value}</h3>

                      <p>{stat.label}</p>

                    </div>

                  ))}

                </div>


                {/* INFORMATION PANELS */}

                <div className="project-information-grid">

                  {renderInfoCard(
                    "PRODUCT / FEATURES",
                    active.features
                  )}

                  {renderInfoCard(
                    "MARKETS",
                    active.markets
                  )}

                  {renderInfoCard(
                    "INDUSTRIES",
                    active.industries
                  )}

                  {renderInfoCard(
                    "BUYERS",
                    active.buyers
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================
          SECTION 03 - PORTFOLIO FOCUS
      ====================================== */}

      <section className="portfolio-focus" id="portfolio-focus">

        <div className="portfolio-focus-container">

          <div className="portfolio-focus-heading">

            <span className="portfolio-focus-label">
              PORTFOLIO FOCUS
            </span>

            <h2>
              We look for
              <br />
              real problems.
            </h2>

          </div>


          {/* PORTFOLIO FOCUS CARDS */}

          <div className="portfolio-focus-grid">

            {portfolioAreas.map((item) => (

              <div
                className="portfolio-focus-card"
                key={item.id}
              >

                <span className="portfolio-focus-number">
                  {item.id} / {item.category}
                </span>

                <div className="portfolio-focus-icon">

                  <span>
                    {item.icon}
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ======================================
          SECTION 04 - PORTFOLIO CTA
          JOIN THE PORTFOLIO
      ====================================== */}

      <section className="portfolio-cta" id="join-portfolio">

        <div className="portfolio-cta-content">

          {/* EYEBROW */}

          <span className="portfolio-cta-label">
            JOIN THE PORTFOLIO
          </span>


          {/* MAIN HEADING */}

          <h2 className="portfolio-cta-heading">
            Building something
            <br />
            in AI or cybersecurity?
          </h2>


          {/* DESCRIPTION */}

          <p className="portfolio-cta-description">
            We work with early-stage founders across Southeast Asia,
            the Gulf and India building AI, cybersecurity and
            enterprise SaaS.
          </p>


          {/* CTA BUTTON */}

          <a
            href="/venture-studio"
            className="portfolio-cta-button"
          >

            <span>
              Explore the Studio
            </span>

            <span className="portfolio-cta-arrow">
              →
            </span>

          </a>

        </div>

      </section>


    </main>

  );

}