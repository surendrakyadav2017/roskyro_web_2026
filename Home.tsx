import React from 'react';
import { useNavigate } from 'react-router-dom';
import Seo from './Seo';
import Hero from './Hero';
import ProblemGaps from './ProblemGaps';
import FeaturesHighlight from './FeaturesHighlight';
import EarlyAccess from './EarlyAccess';
import FinalCta from './FinalCta';

interface HomeProps {
  onBookAudit: () => void;
}

export default function Home({ onBookAudit }: HomeProps) {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="ROSKYRO | AI Growth Technology Company — More Visibility, Trust & Revenue"
        description="ROSKYRO builds AI and automation systems that increase business visibility (SEO + AEO + GEO), strengthen reputation, and accelerate revenue for small and medium businesses across India."
        path="/"
      />
      <Hero onBookAudit={onBookAudit} onExploreSystems={() => navigate('/services')} />
      <ProblemGaps />
      <FeaturesHighlight />
      <EarlyAccess />
      <FinalCta onBookAudit={onBookAudit} />
    </>
  );
}
