import React from "react";
import "./WhyCodeCap.css";

export default function WhyCodeCap() {
const reasons = [
{
title: "Execution over advice.",
description:
"Every engagement involves active delivery — code shipped, deals closed, decks built. Our upside is tied to your outcomes, not our hours billed.",
},
{
title: "Depth over breadth.",
description:
"Max two venture builds and three growth engagements at a time. We say no more than we say yes — on purpose. The founders we take on deserve the full team.",
},
{
title: "Compliant by design.",
description:
"MAS. DIFC. ADGM. CERT-In. Every deal structure is legally reviewed before execution. We'd rather lose a deal than cut a corner.",
},
{
title: "AI & cybersecurity depth.",
description:
"Hands-on delivery in AI engineering, threat intelligence, and zero-trust architecture. Practitioners who can also sell — the rarest combination in this market.",
},
];

return (
<section className="why-codecap">
<div className="why-codecap-container">

    <div className="why-codecap-header">
      <span className="why-eyebrow">WHY CODECAP</span>
      <div className="why-small-line"></div>

      <h1 className="why-heading">
        Operators, not <span>observers.</span>
      </h1>

      <p className="why-intro">
        The uncomfortable truth about most advisory relationships:
        the person giving the advice has nothing at stake if it's wrong.
        We've tried to make that impossible.
      </p>
    </div>

    <div className="why-reasons">
      {reasons.map((reason, index) => (
        <div className="why-reason" key={index}>
          <div className="why-reason-content">
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

);
}