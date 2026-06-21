import { useEffect } from 'react';
import { SITE, CONTACT, SOCIAL_LINKS } from './siteConfig';

/**
 * Injects Organization + WebSite JSON-LD structured data into <head>.
 * This is the single most important AEO/GEO signal for a new brand:
 * it tells Google and AI answer engines exactly what ROSKYRO is, what it
 * does, and how to contact it — in a machine-readable format.
 */
export default function JsonLd() {
  useEffect(() => {
    const existing = document.getElementById('roskyro-jsonld');
    if (existing) existing.remove();

    const data = {
      '@context': 'https://schema.org',
      '@graph': [
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
      ],
    };

    const script = document.createElement('script');
    script.id = 'roskyro-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }, []);

  return null;
}
