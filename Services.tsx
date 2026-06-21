import React from 'react';
import Seo from './Seo';
import KyroFramework from './KyroFramework';
import VisibilityLayer from './VisibilityLayer';

interface ServicesProps {
  onBookAudit: () => void;
}

export default function Services({ onBookAudit }: ServicesProps) {
  return (
    <>
      <Seo
        title="Services | ROSKYRO — Knowledge, Yield, Reputation & Optimization Systems"
        description="Explore ROSKYRO's K-Y-R-O framework: AI-powered Knowledge, Yield, Reputation, and Optimization systems including SEO, AEO, GEO, WhatsApp automation, and reputation management."
        path="/services"
      />
      <div className="pt-20">
        <KyroFramework onBookAudit={onBookAudit} />
        <VisibilityLayer />
      </div>
    </>
  );
}
