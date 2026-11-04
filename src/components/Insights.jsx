import React, { useState } from "react";
import "./Insights.css";

export default function Insights() {

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  // ==========================================
  // INSIGHTS CATEGORIES
  // ==========================================

  const categories = [
    "All",
    "AI & Cybersecurity",
    "Venture Building",
    "GTM & Sales",
    "Fundraising",
    "Markets",
    "Deep Tech",
  ];

  // ==========================================
  // INSIGHTS ARTICLES DATA
  // ==========================================

  const insights = [
    {
      id: 1,
      category: "GTM & Sales",
      tag: "GTM · SOUTHEAST ASIA",
      title:
        "Why Most AI Startups in SEA Fail at GTM (And What the Survivors Do Differently)",
      readTime: "8 min",
      date: "March 2025",
      description:
        "Why many AI startups in Southeast Asia struggle with go-to-market execution and what successful founders do differently.",
      content:
        "Building a great AI product is only half the battle. Many startups struggle because they focus on technology before understanding their customers. Successful founders validate demand early, understand enterprise buying behaviour, build trust, and create repeatable sales processes.",
    },

    {
      id: 2,
      category: "Markets",
      tag: "LEGAL · GULF MARKETS",
      title:
        "The DIFC vs ADGM Decision: A Founder's Practical Guide to Gulf Entity Setup",
      readTime: "10 min",
      date: "March 2025",
      description:
        "A practical comparison of two major financial free zones in the UAE for founders planning to establish businesses in the Gulf.",
      content:
        "Choosing between DIFC and ADGM requires understanding your business model, target customers, regulatory requirements, operating costs, and fundraising plans. The right jurisdiction depends on the nature of your business and the markets you intend to serve.",
    },

    {
      id: 3,
      category: "AI & Cybersecurity",
      tag: "CYBERSECURITY · VENTURE BUILD",
      title:
        "Building a Threat Intelligence Product from Zero: What We Learned in 12 Months",
      readTime: "14 min",
      date: "February 2025",
      description:
        "Lessons from taking a cybersecurity product from an initial concept to an enterprise-ready solution.",
      content:
        "Building a threat intelligence product requires more than collecting security data. It involves understanding real security workflows, identifying meaningful threat signals, building reliable infrastructure, and delivering actionable intelligence to security teams.",
    },

    {
      id: 4,
      category: "Venture Building",
      tag: "STARTUPS · VENTURE BUILDING",
      title:
        "From Idea to MVP: How to Build a Startup Without Burning Capital",
      readTime: "9 min",
      date: "January 2025",
      description:
        "A founder-focused approach to validating an idea and building an MVP without unnecessary spending.",
      content:
        "The most effective venture-building process starts with customer discovery, problem validation, and prioritising the smallest useful product. Founders should validate demand before committing significant resources to development.",
    },

    {
      id: 5,
      category: "Fundraising",
      tag: "FUNDRAISING · STARTUP STRATEGY",
      title:
        "What Investors Actually Look for Before Writing the First Cheque",
      readTime: "7 min",
      date: "January 2025",
      description:
        "Understand what early-stage investors evaluate before deciding to invest in a startup.",
      content:
        "Early-stage investors typically look for a strong founding team, a meaningful market opportunity, evidence of customer demand, a clear business model, and the ability to execute. A compelling pitch is important, but evidence matters more.",
    },

    {
      id: 6,
      category: "Deep Tech",
      tag: "DEEP TECH · PRODUCT ENGINEERING",
      title:
        "Why Deep Tech Startups Need More Than Just Great Technology",
      readTime: "11 min",
      date: "December 2024",
      description:
        "Turning complex technology into products that enterprises are willing to adopt and pay for.",
      content:
        "Deep tech companies must bridge the gap between technical innovation and commercial adoption. This requires product-market validation, customer education, clear positioning, and a practical commercialisation strategy.",
    },

    {
      id: 7,
      category: "AI & Cybersecurity",
      tag: "AI · ENTERPRISE SECURITY",
      title:
        "The Future of AI-Driven Cybersecurity for Enterprise Teams",
      readTime: "12 min",
      date: "December 2024",
      description:
        "How artificial intelligence is changing the way modern enterprise security teams identify and respond to threats.",
      content:
        "AI can help security teams process large volumes of information, identify patterns, prioritise risks, and improve response workflows. Successful adoption depends on reliability, explainability, and integration with existing security operations.",
    },

    {
      id: 8,
      category: "GTM & Sales",
      tag: "ENTERPRISE · SALES STRATEGY",
      title:
        "Selling to Enterprise: The First 10 Customers Playbook",
      readTime: "6 min",
      date: "November 2024",
      description:
        "A practical guide to finding, approaching, and converting your first enterprise customers.",
      content:
        "The first enterprise customers are often won through focused prospecting, strong discovery conversations, clear business outcomes, and trust. Founders should understand the buying committee and the customer's procurement process.",
    },
  ];

  // ==========================================
  // FEATURED ARTICLE DATA
  // ==========================================

  const featuredArticle = {
    tag: "CYBERSECURITY · AI",

    title:
      "AI Security in 2026: The Threat Landscape Is Changing Faster Than the Products",

    readTime: "12 min",

    date: "April 2026",

    description:
      "The security landscape around AI is changing faster than most products can adapt. Here's what we're seeing from inside enterprise cybersecurity and early-stage product building.",

    content:
      "Artificial intelligence is changing the cybersecurity landscape. As organisations adopt AI-powered systems, new vulnerabilities and attack surfaces are emerging. Security teams must rethink how they identify threats, manage risks, and protect enterprise infrastructure. At CodeCap, we believe the next generation of security products must combine practical threat intelligence, automation, and enterprise-ready protection.",
  };

  // ==========================================
  // FILTER ARTICLES
  // ==========================================

  const filteredInsights =
    activeCategory === "All"
      ? insights
      : insights.filter(
          (item) => item.category === activeCategory
        );

  // ==========================================
  // OPEN ARTICLE
  // ==========================================

  const openArticle = (article) => {
    setSelectedArticle(article);
  };

  // ==========================================
  // CLOSE ARTICLE
  // ==========================================

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  // ==========================================
  // NEWSLETTER SUBSCRIPTION
  // ==========================================

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setSubscribeMessage("Please enter your email address.");
      return;
    }

    setSubscribeMessage("Thank you for subscribing!");

    setEmail("");
  };

  // ==========================================
  // MAIN PAGE
  // ==========================================

  return (

    <main className="insights-page">

      {/* =================================
          01. INSIGHTS HERO SECTION
      ================================= */}

      <section className="insights-hero">

        <div className="insights-container">

          <div className="insights-badge">
            Insights
          </div>

          <h1 className="insights-heading">

            <span className="insights-white">
              Thinking from
            </span>

            <span className="insights-pink">
              the studio floor.
            </span>

          </h1>

          <p className="insights-description">
            Not keynote wisdom. Not recycled LinkedIn takes.
            What we're seeing from inside early-stage companies
            across Southeast Asia, the Gulf, and South Asia —
            raw, operational, and direct.
          </p>

        </div>

      </section>


      {/* =================================
          02. FEATURED ARTICLE SECTION
      ================================= */}

      <section className="featured-insights">

        <div className="featured-container">

          <div className="featured-label">
            FEATURED
          </div>

          <article className="featured-article">

            <div className="featured-category">
              CYBERSECURITY · AI
            </div>

            <div className="featured-number">
              01
            </div>

            <div className="featured-content">

              <h2 className="featured-title">
                AI Security in 2026:
                <br />
                The Threat Landscape Is Changing
                <br />
                Faster Than the Products
              </h2>

              <p className="featured-description">
                The security landscape around AI is changing
                faster than most products can adapt. Here's
                what we're seeing from inside enterprise
                cybersecurity and early-stage product building.
              </p>

              <div className="featured-meta">

                <span>CodeCap Team</span>

                <span>12 min read</span>

                <span>April 2026</span>

              </div>

            </div>

            <button
              className="featured-button"
              onClick={() => openArticle(featuredArticle)}
            >
              Read article <span>→</span>
            </button>

          </article>

        </div>

      </section>


      {/* =================================
          03. EXPLORE INSIGHTS SECTION
      ================================= */}

      <section className="insights-section">

        <div className="insights-container">

          <div className="explore-heading">

            <span className="explore-eyebrow">
              EXPLORE INSIGHTS
            </span>

          </div>

          {/* CATEGORY FILTERS */}

          <div className="insights-filters">

            {categories.map((category) => (

              <button
                key={category}
                className={`insights-filter ${
                  activeCategory === category
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedArticle(null);
                }}
              >

                {category}

              </button>

            ))}

          </div>


          {/* =================================
              04. ARTICLE DETAIL VIEW
          ================================= */}

          {selectedArticle ? (

            <div className="insight-detail">

              <button
                className="insight-back"
                onClick={closeArticle}
              >
                ← BACK TO INSIGHTS
              </button>

              <span className="insight-detail-tag">
                {selectedArticle.tag}
              </span>

              <h1>
                {selectedArticle.title}
              </h1>

              <div className="insight-detail-meta">

                CodeCap Team
                &nbsp; · &nbsp;

                {selectedArticle.readTime}
                &nbsp; · &nbsp;

                {selectedArticle.date}

              </div>

              <p className="insight-detail-description">
                {selectedArticle.description}
              </p>

              <div className="insight-detail-content">
                {selectedArticle.content}
              </div>

              <button
                className="insight-back bottom-back"
                onClick={closeArticle}
              >
                ← EXPLORE MORE INSIGHTS
              </button>

            </div>

          ) : (

            /* =================================
                05. INSIGHTS ARTICLE CARDS
            ================================= */

            <div className="insights-grid">

              {filteredInsights.map((item) => (

                <article
                  className="insight-card"
                  key={item.id}
                  onClick={() => openArticle(item)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Read article: ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openArticle(item);
                    }
                  }}
                >

                  <div className="insight-card-top">

                    <span className="insight-card-tag">
                      {item.tag}
                    </span>

                    <h2>
                      {item.title}
                    </h2>

                  </div>

                  <div className="insight-card-footer">

                    <span>
                      {item.readTime} · {item.date}
                    </span>

                    <button
                      className="insight-arrow"
                      aria-label={`Read ${item.title}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        openArticle(item);
                      }}
                    >
                      →
                    </button>

                  </div>

                </article>

              ))}

              {filteredInsights.length === 0 && (

                <p className="no-insights">
                  No insights available in this category.
                </p>

              )}

            </div>

          )}

        </div>

      </section>


      {/* ==========================================
          06. NEWSLETTER SUBSCRIPTION SECTION
      ========================================== */}

      <section className="insights-subscribe">

        <div className="subscribe-content">

          {/* EYEBROW */}

          <span className="subscribe-label">
            STAY IN THE LOOP
          </span>

          {/* HEADING */}

          <h2 className="subscribe-heading">
            Get Insights
            <br />
            in your inbox.
          </h2>

          {/* DESCRIPTION */}

          <p className="subscribe-description">
            Practical thinking from the studio on AI,
            cybersecurity, venture building, GTM,
            fundraising and high-growth markets.
          </p>

          {/* SUBSCRIBE FORM */}

          <form
            className="subscribe-form"
            onSubmit={handleSubscribe}
          >

            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Your email address"
            />

            <button type="submit">
              Subscribe
            </button>

          </form>

          {/* SUBSCRIPTION MESSAGE */}

          {subscribeMessage && (

            <p className="subscribe-message">
              {subscribeMessage}
            </p>

          )}

        </div>

      </section>

    </main>

  );

}