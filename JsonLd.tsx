import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE, CONTACT, SOCIAL_LINKS } from './siteConfig';
import { HOME_FAQS } from './homeFaqData';

/**
 * Injects Organization + WebSite + Service (+ FAQPage on the homepage)
 * JSON-LD structured data into <head>, at the top level of the app.
 *
 * This is the single most important AEO/GEO signal for a new brand: it tells
 * Google and AI answer engines exactly what ROSKYRO is, what it does, and
 * how to contact it — in a machine-readable format.
 *
 * Important: this lives at the App root (not deep inside a page section) and
 * re-runs on every route change via useLocation, so schema is present as
 * early as possible after JS executes — rather than depending on a
 * lower-on-the-page component's own useEffect, which crawlers with limited
 * render time may miss.
 */
export default function JsonLd() {
  const location = useLocation();

  useEffect(() => {
    const existing = document.getElementById('roskyro-jsonld');
    if (existing) existing.remove();

    const graph: any[] = [
      {
        '@type': 'Organization',
        '@id': `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}${SITE.logoPath}`,
        description: SITE.description,
        email: CONTACT.email,
        telephone: `+${CONTACT.whatsappNumber}`,
        address: {
          '@type': 'PostalAddress',
          addressRegion: CONTACT.region,
          addressCountry: CONTACT.country,
        },
        sameAs: SOCIAL_LINKS.map((s) => s.url),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { '@id': `${SITE.url}/#organization` },
      },
      {
        '@type': 'Service',
        serviceType: 'AI-Powered Digital Visibility, SEO, AEO, GEO & Reputation Management',
        provider: { '@id': `${SITE.url}/#organization` },
        areaServed: 'IN',
        description: SITE.description,
      },
    ];

    // Add FAQPage schema only on the homepage, where the matching visible
    // FAQ content (HomeFaq.tsx) lives — schema should always match visible
    // page content.
    if (location.pathname === '/') {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: HOME_FAQS.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      });
    }

    const data = {
      '@context': 'https://schema.org',
      '@graph': graph,
    };

    const script = document.createElement('script');
    script.id = 'roskyro-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }, [location.pathname]);

  return null;
}
