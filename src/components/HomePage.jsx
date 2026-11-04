import React from 'react';

import Landing from './Landing';
import ServiceOfferings from './ServiceOfferings';
import EngagementModels from './EngagementModels';
import Markets from './Markets';
import ProductsWeShip from './ProductsWeShip';
import TeamMember from './TeamMember';
import WhyCodeCap from './WhyCodeCap';
import HowItWorks from './HowItWorks';
import ComplianceSection from './ComplianceSection';
import ContactCTA from './ContactCTA';

function HomePage() {
  return (
    <>
      <Landing />
      <ServiceOfferings />
      <EngagementModels />
      <Markets />
      <ProductsWeShip />
      <TeamMember />
      <WhyCodeCap />
      <HowItWorks />
      <ComplianceSection />
      <ContactCTA />
    </>
  );
}

export default HomePage;