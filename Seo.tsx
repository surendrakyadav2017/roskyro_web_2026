import { useEffect } from 'react';
import { SITE } from './siteConfig';

interface SeoProps {
  title: string;
  description: string;
  path: string; // e.g. "/" or "/services"
}

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Lightweight per-page SEO updater for a client-side rendered SPA.
 *
 * Important honesty note: because this app is a Vite/React SPA without
 * server-side rendering, search engine crawlers that do not execute
 * JavaScript will primarily see the tags already present in index.html
 * (which are kept accurate for the homepage). This component improves the
 * experience for crawlers and tools that DO execute JS (Googlebot generally
 * does), and keeps the browser tab / social-share metadata correct as the
 * user navigates between pages.
 *
 * It also fires a manual GA4 page_view on every route change. The base
 * gtag.js snippet in index.html only fires one automatic page_view on
 * initial load — without this, navigating between routes via React Router
 * (no full page reload) would be invisible to Google Analytics.
 */
export default function Seo({ title, description, path }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (el) {
        el.setAttribute(attr, value);
      }
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', `${SITE.url}${path}`);
    setMeta('meta[property="twitter:title"]', 'content', title);
    setMeta('meta[property="twitter:description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', `${SITE.url}${path}`);

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: title,
        page_path: path,
        page_location: `${SITE.url}${path}`,
      });
    }

    window.scrollTo(0, 0);
  }, [title, description, path]);

  return null;
}
