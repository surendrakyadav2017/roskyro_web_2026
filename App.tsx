import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import AuditModal from './AuditModal';
import JsonLd from './JsonLd';

import Home from './Home';
import Services from './Services';
import PricingPage from './Pricing';
import Blog from './Blog';
import BlogPost from './BlogPost';
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';
import Terms from './Terms';
import NotFound from './NotFound';

import { PRICING_PLANS } from './solutionsData';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);
  const [planContext, setPlanContext] = useState<string>('');

  const handleBookAudit = () => {
    setPlanContext('');
    setIsAuditModalOpen(true);
  };

  const handlePlanBooking = (planName: string) => {
    setPlanContext(planName);
    setIsAuditModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative">
      <JsonLd />

      <Navbar onBookAudit={handleBookAudit} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onBookAudit={handleBookAudit} />} />
          <Route path="/services" element={<Services onBookAudit={handleBookAudit} />} />
          <Route
            path="/pricing"
            element={<PricingPage plans={PRICING_PLANS} onBookAuditForPlan={handlePlanBooking} />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact onBookAudit={handleBookAudit} />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer onBookAudit={handleBookAudit} />

      <FloatingWhatsApp />

      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        selectedPlanContext={planContext}
      />
    </div>
  );
}
