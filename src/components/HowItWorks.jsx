import React from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
const steps = [
{
number: "01",
title: "Initial Conversation",
description:
"A 30–45 minute call with a CodeCap partner. We ask about your stage, your market, and what you actually need — not a pitch deck review. We're evaluating fit, not the idea.",
},
{
number: "02",
title: "Fit Assessment",
description:
"We're selective by design. We assess whether CodeCap adds meaningful value and whether the model makes sense for both sides. We'll tell you honestly if it doesn't.",
},
{
number: "03",
title: "Engagement Proposal",
description:
"If there’s fit, a structured proposal — scope, model, terms, and deliverables tied to your milestones. Nothing vague. Nothing left to interpretation.",
},
{
number: "04",
title: "Agreement & Kick-off",
description:
"Signed under Singapore law or DIFC/ADGM. Kick-off within 5 business days. The first deliverable is due within 2 weeks. We start the way we mean to continue.",
},
];

return (
<section className="how-it-works">
<div className="how-container">

    <div className="how-header">
      <span className="how-eyebrow">HOW IT WORKS</span>
      <div className="how-accent-line"></div>

      <h1 className="how-heading">
        From first call to active
        <br />
        <span>engagement.</span>
      </h1>
    </div>

    <div className="how-steps">
      {steps.map((step) => (
        <div className="how-step" key={step.number}>
          <div className="how-number">
            {step.number}
          </div>

          <div className="how-step-content">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

);
}