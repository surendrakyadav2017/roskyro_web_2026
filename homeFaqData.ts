// Shared FAQ content for the homepage. Used by both:
// 1. JsonLd.tsx — to inject FAQPage schema at the top level, on initial render
//    (so search/AI crawlers reliably see it without depending on a
//    deep-in-the-page useEffect firing).
// 2. HomeFaq.tsx — to render the visible FAQ section on the page.

export const HOME_FAQS = [
  {
    question: 'What is ROSKYRO?',
    answer:
      'ROSKYRO is an AI Growth Technology Company based in India. It helps small and medium businesses become visible on Google Search, get recommended by AI tools like ChatGPT and Gemini, and build stronger online trust through automated systems for visibility, reputation, and lead generation.',
  },
  {
    question: 'What services does ROSKYRO offer?',
    answer:
      'ROSKYRO offers Google Business Profile optimization, local SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), online reputation and review management, WhatsApp Business API automation, AI chatbots, and CRM and lead generation systems — organized under its Knowledge, Yield, Reputation, and Optimization (K-Y-R-O) framework.',
  },
  {
    question: 'Who is ROSKYRO for?',
    answer:
      'ROSKYRO is built for small and medium businesses and professionals in India — including clinics, CAs, lawyers, retail shops, and service providers — who want more customers from Google and AI search without managing the technical work themselves.',
  },
  {
    question: 'How is ROSKYRO different from a marketing agency?',
    answer:
      'ROSKYRO builds AI-powered systems rather than running one-off marketing campaigns. The goal is measurable, ongoing visibility and automation — including how a business appears across both traditional search and newer AI answer engines — rather than time-limited service work.',
  },
  {
    question: 'How can I get started with ROSKYRO?',
    answer:
      "Businesses can book a free visibility audit through the ROSKYRO website or WhatsApp. The audit reviews a business's current Google and online presence and outlines specific areas for improvement before any paid engagement begins.",
  },
];
