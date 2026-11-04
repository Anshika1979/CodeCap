import React from "react";
import "./Podcast.css";

export default function Podcast() {

  // =====================================
  // FOUR WAYS TO GET INSIDE THE ROOM
  // =====================================

  const accessModels = [
    {
      number: "01",
      title: "Founder Stories",
      description:
        "Direct conversations with founders building ambitious companies from zero."
    },
    {
      number: "02",
      title: "Market Intel",
      description:
        "What is actually happening across Southeast Asia, the Gulf and South Asia."
    },
    {
      number: "03",
      title: "The Operator's Playbook",
      description:
        "Practical lessons from people responsible for building, selling and operating."
    },
    {
      number: "04",
      title: "VC Perspectives",
      description:
        "Conversations around capital, investment decisions and what investors are looking for."
    }
  ];

  // =====================================
  // RECENT PODCAST EPISODES
  // =====================================

  const episodes = [
    {
      number: "EP 06",
      isNew: true,
      title:
        "Building for the Gulf: What Founders Need to Know Before Entering the Market",
      description:
        "A practical conversation about market entry, relationships, sales and building trust in the Gulf.",
      duration: "42 min",
      date: "May 2025"
    },
    {
      number: "EP 04",
      isNew: false,
      title:
        "From Product to Pipeline: The Reality of Enterprise GTM",
      description:
        "Why great products do not automatically create enterprise pipeline — and what operators can do about it.",
      duration: "38 min",
      date: "April 2025"
    },
    {
      number: "EP 03",
      isNew: false,
      title:
        "Building Products That Solve Real Problems",
      description:
        "A conversation about product thinking, customer discovery and building solutions that matter.",
      duration: "35 min",
      date: "March 2025"
    },
    {
      number: "EP 02",
      isNew: false,
      title:
        "The Founder Journey: From Idea to Execution",
      description:
        "What it really takes to turn an early-stage idea into a scalable business.",
      duration: "40 min",
      date: "February 2025"
    },
    {
      number: "EP 01",
      isNew: false,
      title:
        "Inside the Room: Why We Build",
      description:
        "Introducing The Build Brief and exploring the realities of building companies in emerging markets.",
      duration: "32 min",
      date: "January 2025"
    }
  ];

  // =====================================
  // VOICES FROM THE ECOSYSTEM
  // =====================================

  const ecosystemCategories = [
    { number: "01", title: "VC Partners" },
    { number: "02", title: "CISOs" },
    { number: "03", title: "Founders" },
    { number: "04", title: "GTM Operators" },
    { number: "05", title: "AI Engineers" },
    { number: "06", title: "Regulatory Experts" },
    { number: "07", title: "Legal & Structuring" },
    { number: "08", title: "CodeCap Team" }
  ];

  return (
    <main className="podcast-page">

      {/* =====================================
          PODCAST HERO SECTION
      ===================================== */}

      <section className="podcast-hero">

        <div className="podcast-glow"></div>

        <div className="podcast-container">

          <div className="podcast-brand">
            BY CODECAP VENTURES
          </div>

          <h1 className="podcast-title">
            The
            <br />
            Build Brief.
          </h1>

          <div className="podcast-description">

            <p>
              A no-fluff podcast for founders and operators
              building in Southeast Asia, the Gulf, and South Asia.
            </p>

            <p>
              Every episode is a direct conversation with people
              who are in the room — building companies, closing
              deals, raising capital, and navigating the chaos
              of early-stage in high-growth markets.
            </p>

          </div>

          {/* PODCAST LISTEN SECTION */}

          <div className="podcast-listen-section">

            <div className="podcast-listen">
              LISTEN WHEREVER YOU GET YOUR PODCASTS
            </div>

            <div className="podcast-platforms">

              <a
                href="https://open.spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="podcast-platform-btn"
              >
                Spotify
              </a>

              <a
                href="https://podcasts.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="podcast-platform-btn"
              >
                Apple Podcasts
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="podcast-platform-btn"
              >
                YouTube
              </a>

              <a
                href="https://pocketcasts.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="podcast-platform-btn"
              >
                Pocket Casts
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          FOUR WAYS TO GET INSIDE THE ROOM
      ===================================== */}

      <section className="podcast-access-section">

        <div className="podcast-access-container">

          <div className="podcast-access-header">

            <span className="podcast-access-label">
              GET CONNECTED
            </span>

            <h2>
              <span>Four ways to</span>

              <span className="podcast-heading-muted">
                get inside the room.
              </span>
            </h2>

          </div>

          <div className="podcast-access-grid">

            {accessModels.map((model) => (

              <div
                className="podcast-access-card"
                key={model.number}
              >

                <div className="podcast-card-top">

                  <span className="podcast-card-number">
                    {model.number}
                  </span>

                </div>

                <div className="podcast-card-content">

                  <h3>{model.title}</h3>

                  <p>{model.description}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          RECENT CONVERSATIONS SECTION
      ===================================== */}

      <section className="recent-episodes">

        <div className="episodes-container">

          <div className="episodes-heading">

            <span className="episodes-eyebrow">
              EPISODES
            </span>

            <h2>
              <span className="episodes-heading-white">
                Recent
              </span>

              <span>conversations.</span>
            </h2>

          </div>

          <div className="episodes-list">

            {episodes.map((episode) => (

              <div
                className="episode-card"
                key={episode.number}
              >

                <div className="episode-number">

                  <span>{episode.number}</span>

                  {episode.isNew && (
                    <span className="episode-new">
                      NEW
                    </span>
                  )}

                </div>

                <div className="episode-content">

                  <h3>{episode.title}</h3>

                  <p>{episode.description}</p>

                </div>

                <div className="episode-details">

                  <span className="episode-duration">
                    {episode.duration}
                  </span>

                  <span className="episode-date">
                    {episode.date}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          VOICES FROM THE ECOSYSTEM
      ===================================== */}

      <section className="ecosystem-section">

        <div className="ecosystem-container">

          <div className="ecosystem-label">
            GUEST WALL
          </div>

          <h2 className="ecosystem-heading">
            Voices from
            <span>the ecosystem.</span>
          </h2>

          <div className="ecosystem-grid">

            {ecosystemCategories.map((category) => (

              <div
                className="ecosystem-card"
                key={category.number}
              >

                <div className="ecosystem-card-title">

                  <span className="ecosystem-number">
                    {category.number}
                  </span>

                  {category.title}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          SUBSCRIBE SECTION
          NEVER MISS AN EPISODE
      ===================================== */}

      <section className="subscribe-section">

        <div className="subscribe-glow"></div>

        <div className="subscribe-container">

          <span className="subscribe-label">
            SUBSCRIBE
          </span>

          <h2 className="subscribe-title">
            Never Miss
            <br />
            an Episode.
          </h2>

          <p className="subscribe-description">
            Follow The Build Brief wherever you listen to podcasts.
            New conversations with founders, operators,
            investors and technology leaders.
          </p>

          <div className="subscribe-platforms">

            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="subscribe-platform-btn"
            >
              Spotify
            </a>

            <a
              href="https://podcasts.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="subscribe-platform-btn"
            >
              Apple Podcasts
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="subscribe-platform-btn"
            >
              YouTube
            </a>

            <a
              href="#"
              className="subscribe-platform-btn"
            >
              RSS Feed
            </a>

          </div>

        </div>

      </section>


      {/* =====================================
          WANT TO BE A GUEST SECTION
      ===================================== */}

      <section className="guest-section">

        <div className="guest-container">

          <h2 className="guest-title">
            Want to be a guest?
          </h2>

          <p className="guest-description">
            Building, operating or investing in the markets we cover?
            Pitch a guest.
          </p>

          <a
            href="/contact"
            className="guest-pitch-btn"
          >
            Pitch a guest →
          </a>

        </div>

      </section>

    </main>
  );
}