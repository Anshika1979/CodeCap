import React from "react";
import "./Team.css";

export default function Team() {

  // =====================================
  // TEAM MEMBERS DATA
  // =====================================

  const teamMembers = [
    {
      id: "01",
      initials: "BV",
      name: "Baburaj Varma",
      role: "Co-Founder & Managing Partner",
      category:
        "Singapore . Cybersecurity . Enterprise GTM . AMEA",
      description:
        "25+ year enterprise cybersecurity veteran. Trend Micro VP Technical Leader AMEA. At CodeCap, he leads the firm, partnership strategy, enterprise relationships and product commercialization.",
    },
    {
      id: "02",
      initials: "TG",
      name: "Tarun Gupta",
      role: "Co-Founder & Partner",
      category:
        "India/SEA . Security Operations . Managed Security . Deep Tech",
      description:
        "Trend Micro Director Security Operations as a Service AMEA. At CodeCap, he leads technical engagements across the cybersecurity portfolio.",
    },
    {
      id: "03",
      initials: "AV",
      name: "Atin Verma",
      role: "Consulting Partner",
      category: "Marketing & Brand",
      description:
        "Senior marketing and GTM professional with experience including Tenable India/South Asia.",
    },
    {
      id: "04",
      initials: "NC",
      name: "Naveena Chowdary Koyyalamudi",
      role: "Consulting Partner",
      category: "Operations",
      description:
        "University of Colorado Denver background with experience across Plantillegence and Optum Global Solutions International B.V.",
    },
  ];

  // =====================================
  // OPERATING PRINCIPLES DATA
  // =====================================

  const principles = [
    {
      number: "01",
      title: "Execution over advice",
      description:
        "We get involved in the work, not just the strategy.",
    },
    {
      number: "02",
      title: "Practitioners who sell",
      description:
        "Our experience comes from operating inside real markets.",
    },
    {
      number: "03",
      title: "Compliant by design",
      description:
        "Strong execution needs the right governance and structure.",
    },
    {
      number: "04",
      title: "Selective, not scalable",
      description:
        "We choose the companies and founders we work with carefully.",
    },
  ];

  return (
    <main className="team-page">

      {/* =====================================
          SECTION 1 - TEAM HERO
      ===================================== */}

      <section className="team-hero-section">

        <div className="team-hero-container">

          <div className="team-hero-badge">
            THE PEOPLE BEHIND CODECAP
          </div>

          <h1 className="team-hero-title">

            <span className="team-hero-white">
              Operators.
            </span>

            <span className="team-hero-gradient">
              Practitioners.
            </span>

            <span className="team-hero-white">
              Builders.
            </span>

          </h1>

          <p className="team-hero-description">
            CodeCap is built by people who have spent years
            inside cybersecurity, enterprise technology,
            marketing, operations and high-growth markets.
          </p>

        </div>

      </section>


      {/* =====================================
          SECTION 2 - TEAM MEMBERS
      ===================================== */}

      <section className="team-members-section">

        <div className="team-members-header">

          <div className="team-members-eyebrow">
            OUR TEAM
          </div>

          <h2 className="team-members-title">
            <span>
              Experience that
              <br />
              gets involved.
            </span>
          </h2>

        </div>

        <div className="team-members-grid">

          {teamMembers.map((member) => (

            <article
              className="team-members-card"
              key={member.id}
            >

              <div className="team-members-number">
                TEAM / {member.id}
              </div>

              <div className="team-members-avatar">
                <span>{member.initials}</span>
              </div>

              <div className="team-members-info">

                <h3>{member.name}</h3>

                <p className="team-members-role">
                  {member.role}
                </p>

                <p className="team-members-category">
                  {member.category}
                </p>

                <p className="team-members-description">
                  {member.description}
                </p>

              </div>

              <div className="team-members-footer">

                <span className="team-footer-span">
                  LinkedIn
                </span>

                <span className="team-members-arrow">
                  ↗️
                </span>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================
          SECTION 3 - OPERATING PRINCIPLES
      ===================================== */}

      <section className="operating-principles-section">

        <div className="operating-principles-heading">

          <span className="operating-principles-eyebrow">
            HOW WE WORK
          </span>

          <h2>
            Our operating
            <br />
            <span>principles.</span>
          </h2>

        </div>

        <div className="operating-principles-grid">

          {principles.map((item) => (

            <article
              className="operating-principles-card"
              key={item.number}
            >

              <span className="operating-principles-number">
                {item.number}
              </span>

              <div className="operating-principles-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================
          SECTION 4 - FOUNDER STATEMENT
      ===================================== */}

      <section className="founder-statement-section">

        <div className="founder-statement-container">

          <div className="founder-statement-quote">
            “
          </div>

          <h2 className="founder-statement-title">
            We don't just advise
            <br />
            founders.
          </h2>

          <p className="founder-statement-description">
            We embed with them — bringing the experience,
            relationships and execution required to turn
            ambitious ideas into operating businesses.
          </p>

        </div>

      </section>


      {/* =====================================
          SECTION 5 - WORK WITH US CTA
          NEW SECTION FROM YOUR SCREENSHOT
      ===================================== */}

      <section className="work-with-us-section">

        <div className="work-with-us-container">

          {/* EYEBROW */}

          <span className="work-with-us-eyebrow">
            WORK WITH US
          </span>


          {/* MAIN HEADING */}

          <h2 className="work-with-us-title">
            Let's build
            <br />
            something real.
          </h2>


          {/* DESCRIPTION */}

          <p className="work-with-us-description">
            Building an early-stage company in AI,
            cybersecurity or enterprise SaaS? Let's talk.
          </p>


          {/* CTA BUTTON */}

          <a
            href="/contact"
            className="work-with-us-button"
          >
            <span>Start a Conversation</span>
            <span className="work-with-us-button-arrow">
              →
            </span>
          </a>

        </div>

      </section>

    </main>
  );
}