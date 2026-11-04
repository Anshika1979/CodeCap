import React from "react";
import "./ContactCTA.css";

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="contact-cta-content">
        <h1>
          Most companies want more
          <br />
          traffic.
          <br />
          We want the right hundred
          <br />
          people.
        </h1>

        <p>
          If you've read this far, you already know whether you're one of them.
          <br />
          The question is whether you're ready to move.
        </p>

        <a href="#contact" className="contact-cta-button">
          Talk to us <span>→</span>
        </a>
      </div>
    </section>
  );
}