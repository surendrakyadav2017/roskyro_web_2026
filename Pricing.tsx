import React from 'react';
import Seo from './Seo';
import PricingSection from './PricingSection';
import { PricingPlan } from './types';

interface PricingPageProps {
  plans: PricingPlan[];
  onBookAuditForPlan: (planName: string) => void;
}

export default function PricingPage({ plans, onBookAuditForPlan }: PricingPageProps) {
  return (
    <>
      <Seo
        title="Pricing | ROSKYRO — AI Growth Systems for Every Business Stage"
        description="Transparent pricing for ROSKYRO's AI growth systems — from the Starter System to full Enterprise orchestration. Setup fees and recurring plans for SEO, AEO, GEO, and automation."
        path="/pricing"
      />
      <div className="pt-20">
        <PricingSection plans={plans} onBookAuditForPlan={onBookAuditForPlan} />
      </div>
    </>
  );
}
