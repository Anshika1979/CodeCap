import React from "react";
import "./TeamMember.css";

const TeamMember = () => {
  const teamMembers = [
    {
      initials: "BV",
      name: "Baburaj Varma",
      role: "Co-Founder & Managing Partner",
    },
    {
      initials: "TG",
      name: "Tarun Gupta",
      role: "Co-Founder & Partner",
    },
    {
      initials: "AV",
      name: "Atin Verma",
      role: "Consulting Partner · Marketing",
    },
    {
      initials: "NC",
      name: "Naveena Chowdary",
      role: "Consulting Partner · Operations",
    },
    {
      initials: "PP",
      name: "Pankaj Pathak",
      role: "Consulting Partner · R&D",
    },
    {
      initials: "MS",
      name: "Manas Sarkar",
      role: "Consulting Partner · Business Dev",
    },
  ];

  return (
    <section className="team-section">
      <div className="team-container">

        <div className="section-label">
          <span>THE TEAM</span>
          <div className="label-line"></div>
        </div>

        <h1 className="team-heading">
          Not advisors who <span>advise.</span>
          <br />
          Operators who operate.
        </h1>

        <p className="team-description">
          Careers spent building and selling enterprise security at
          Trend Micro, Tenable, and Wipro. We came to venture
          building the hard way — through doing it.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-avatar">
                {member.initials}
              </div>

              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamMember;