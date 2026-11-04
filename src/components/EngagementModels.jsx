import React from 'react';
import './EngagementModels.css';

export default function EngagementModels() {
  const models = [
    {
      stage: 'PRE-IDEA · PRE-SEED',
      title: 'Cash-Light Build',
      description:
        'All the equity commitment, none of the cash burn.',
      featured: false,
    },
    {
      stage: 'PRE-SEED · MVP',
      title: 'Funded Founder GTM',
      description:
        "You raised the round. We make sure it wasn't a mistake.",
      featured: true,
    },
    {
      stage: 'PRE-IDEA · FULL BUILD',
      title: 'Venture Co-Founder',
      description:
        'Our deepest commitment — 12 to 24 months, full build, board seat included.',
      featured: false,
    },
    {
      stage: 'SERIES A · SELECTIVE',
      title: 'Capability Gap',
      description:
        "For the gap you can't hire your way out of. Partner approval required.",
      featured: false,
    },
  ];

  return (
    <section className="engagement-section">

      <div className="engagement-eyebrow">
        <span>ENGAGEMENT MODELS</span>
        <div className="engagement-line"></div>
      </div>

      <h1 className="engagement-title">
        Four models.
        <br />
        Pick the one that matches your{' '}
        <span>stage.</span>
      </h1>

      <div className="engagement-grid">
        {models.map((model, index) => (
          <div
            className={`engagement-card ${
              model.featured ? 'featured-card' : ''
            }`}
            key={index}
          >
            {model.featured && (
              <div className="common-badge">
                MOST COMMON
              </div>
            )}

            <p className="model-stage">
              {model.stage}
            </p>

            <h2>{model.title}</h2>

            <p className="model-description">
              {model.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}