// Central site configuration — single source of truth for brand & contact details.
// Update values here and they propagate across the entire site (navbar, footer,
// JSON-LD schema, contact page, WhatsApp links, etc.)

export const SITE = {
  name: 'ROSKYRO',
  tagline: 'AI Growth Technology Company',
  fullTagline: 'More Visibility. More Trust. More Revenue. Less Manual Work.',
  url: 'https://www.roskyro.in',
  description:
    'ROSKYRO is an AI Growth Technology Company helping small and medium businesses across India get more customers, more trust, and more revenue through AI-powered visibility, reputation, and automation systems.',
  logoPath: '/logo.png',
  ogImage: '/og-image.png',
  founderName: 'Founder, ROSKYRO',
  foundingYear: '2026',
};

export const CONTACT = {
  whatsappNumber: '919244166752', // E.164 without the + (for wa.me links)
  displayPhone: '+91 92441 66752',
  email: 'roskyroofficial@gmail.com',
  serviceArea: 'Pan-India (Remote-first) — HQ: Madhya Pradesh, India',
  city: 'Jabalpur',
  region: 'Madhya Pradesh',
  country: 'IN',
};

export const SOCIAL_LINKS = [
  { name: 'Linkedin', url: 'https://www.linkedin.com/company/roskyro.in/' },
  { name: 'Instagram', url: 'https://www.instagram.com/roskyro.in/' },
  { name: 'Facebook', url: 'https://www.facebook.com/roskyro.in/' },
  { name: 'Youtube', url: 'https://www.youtube.com/@ROSKYRO' },
];

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi ROSKYRO, I'm interested in your AI growth & visibility services.";

export function buildWhatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
