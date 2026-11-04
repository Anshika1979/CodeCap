import React from 'react';
import './Landing.css';

export default function Home() {
  return (
    <main className="landing-page">

      {/* HERO SECTION */}
      <section className="hero-container">
        <div className="hero-content">

          <div className="tagline">
            <span className="tagline-line"></span>
            <span>
              VENTURE STUDIO · AI · CYBERSECURITY · SINGAPORE · GULF · INDIA
            </span>
          </div>

          <div className="heading-group">
            <h1>
              We build <span className="highlight-maroon">companies.</span>
            </h1>
            <h1>
              We ship <span className="highlight-blue">products.</span>
            </h1>
            <h1>We don't do hand-holding.</h1>
          </div>

          <p className="desc">
            CodeCap is an AI-native venture studio and product company operating
            across Singapore, the Gulf, and South Asia. Our partners have spent
            decades building and selling enterprise security — at Trend Micro,
            Tenable, and Wipro. We became studio partners because we were
            operators first. And we still are.
          </p>

          <p className="subheading">
            Every engagement ends in something shipped. Not a slide. Not a
            strategy document. Something real.
          </p>

          <div className="cta-group">
            <button className="btn-primary" type="button">
              Talk to us <span className="arrow">&rarr;</span>
            </button>

            <button className="btn-secondary" type="button">
              See what we've built
            </button>
          </div>

          <p className="description">
            We take on a deliberately small number of engagements each quarter
            — a couple of venture builds, a few growth partnerships, a handful
            of advisory relationships. If that sounds limiting, it's supposed
            to.
          </p>

        </div>

        {/* FULL-WIDTH CARD GRID */}
        <div className="card-grid">
          <article className="image-card">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt="Team collaborating on a venture"
              className="card-image"
            />
            <div className="card-overlay">
              <span className="card-title">VENTURE STUDIO</span>
            </div>
          </article>

          <article className="image-card">
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80"
              alt="Technology and product planning"
              className="card-image"
            />
            <div className="card-overlay">
              <span className="card-title">AI &amp; CYBERSECURITY</span>
            </div>
          </article>

          <article className="image-card">
            <img
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
              alt="Architecture representing global markets"
              className="card-image"
            />
            <div className="card-overlay">
              <span className="card-title">SEA · GULF · INDIA</span>
            </div>
          </article>
        </div>
      </section>

      {/* FULL-WIDTH DARK TEXT SECTION */}
      <section className="text-container">
        <div className="text-container-inner">

          <div className="text-box">
            <h2>
              We don't pitch ourselves.
              <br />
              We <span className="pink">ship proof.</span>
            </h2>
          </div>

          <div className="divider"></div>

          <div className="text-box">
            <h2>
              Conviction is the deposit.
              <br />
              <span className="blue">Execution is the rest.</span>
            </h2>
          </div>

          <div className="divider"></div>

          <div className="text-box">
            <h2>
              Most studios collect logos.
              <br />
              We collect <span className="pink">outcomes.</span>
            </h2>
          </div>

          <div className="divider"></div>

          <div className="text-box">
            <h2>
              We are not for everyone.
              <br />
              We were never trying to be.
            </h2>
          </div>

          <div className="divider"></div>

          <div className="head">
            <p>
              The right hundred founders already know who they are.
              <br />
              If that's you — keep reading.
            </p>
          </div>

        </div>
      </section>

      {/* FULL-WIDTH WHAT WE DO SECTION */}
      <section className="what-we-do">

        <div className="what-we-do-inner">

          <div className="section-heading">
            <span className="eyebrow">WHAT WE DO</span>
            <div className="section-line"></div>

            <h2>
              Two engines.
              <br />
              One <span>standard.</span>
            </h2>

            <p className="intro">
              Every engagement — whether it's a startup we're building or a
              product we sell — is held to the same bar: did we ship something,
              or did we just talk about it?
            </p>
          </div>

          <div className="engine-grid">

            <article className="venture-card">
              <div className="card-top">
                <span className="tag venture-tag">VENTURE STUDIO</span>
                <span className="card-icon" aria-hidden="true">▥</span>
              </div>

              <h3>We embed. We don't observe.</h3>

              <p>
                We work alongside founders from pre-idea through Series A —
                equity-first when all you have is conviction, retainer-based
                once you have revenue. Either way, we're inside your company
                with accountability on the line, not outside giving notes at
                a comfortable distance.
              </p>
            </article>

            <article className="product-card">
              <div className="card-top">
                <span className="tag product-tag">PRODUCTS</span>
                <span className="card-icon" aria-hidden="true">♢</span>
              </div>

              <h3>We also build our own.</h3>

              <p>
                Sovereign cloud security. Autonomous incident response. Tools
                we'd use ourselves — sold to enterprises across SEA, the Gulf,
                and South Asia who can't afford to be wrong about security,
                and can't afford to send their data to a vendor's cloud to
                find out.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-content">

            <p className="testimonial-quote">
              "The best studio partners I've worked with didn't tell me what
              to do. They just showed up and did it. That's the standard we
              hold ourselves to."
            </p>

            <p className="testimonial-author">
              — Baburaj Varma, Co-Founder &amp; Managing Partner, CodeCap ·
              Former VP Technical AMEA, Trend Micro
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}