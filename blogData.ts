// Blog content store. Each post is plain data — no CMS/API dependency,
// so the blog works instantly with zero external services and is fully
// crawlable by Google and AI answer engines (AEO/GEO) at build time.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string; // ISO format
  readMinutes: number;
  coverEmoji: string;
  content: BlogBlock[];
  faq?: { question: string; answer: string }[];
}

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string };

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-is-aeo-geo-local-business',
    title: 'What Are AEO and GEO — and Why Should Your Local Business Care?',
    excerpt:
      'Google search is no longer the only place customers find you. Here is what Answer Engine Optimization and Generative Engine Optimization mean for small businesses in plain language.',
    category: 'AI Search',
    publishDate: '2026-05-12',
    readMinutes: 6,
    coverEmoji: '🤖',
    content: [
      {
        type: 'p',
        text: 'If you run a local business — a clinic, a salon, a coaching center, a CA or law firm — you have probably spent years thinking about one thing: ranking on Google. That is still important. But a new layer of search has emerged, and most small business owners have not heard of it yet.',
      },
      { type: 'h2', text: 'What is AEO (Answer Engine Optimization)?' },
      {
        type: 'p',
        text: 'AEO is the practice of structuring your business information so that answer engines — Google\'s AI Overviews, voice assistants, and featured snippets — can pull a direct answer from your content instead of just listing a blue link. When someone asks "what is the best dentist near me open now," an answer engine wants a clean, structured answer it can read aloud or summarize instantly.',
      },
      { type: 'h2', text: 'What is GEO (Generative Engine Optimization)?' },
      {
        type: 'p',
        text: 'GEO goes a step further. It is about making sure your business is included when someone asks ChatGPT, Gemini, Perplexity, or Claude a question like "recommend a good CA in Indore" or "best dental clinic for root canal near me." These tools generate an answer from a blend of indexed web content, structured data, and citation patterns — not a traditional ranked list.',
      },
      { type: 'h2', text: 'Why this matters more every month' },
      {
        type: 'list',
        items: [
          'More people are asking AI chat tools for local recommendations instead of typing a Google search.',
          'AI answer engines favour businesses with clear, structured, consistent information (schema markup, FAQs, verified profiles).',
          'Businesses that ignore this now will be invisible in this new channel by the time it becomes mainstream — exactly what happened with mobile search a decade ago.',
        ],
      },
      { type: 'h2', text: 'How to start preparing your business today' },
      {
        type: 'list',
        items: [
          'Complete and verify your Google Business Profile with accurate categories, hours, and photos.',
          'Add structured data (JSON-LD schema) to your website so search and AI crawlers understand exactly what you offer.',
          'Publish clear, direct answers to the questions your customers actually ask — in an FAQ format.',
          'Keep your business name, address, and phone number identical everywhere online (this is called NAP consistency).',
        ],
      },
      {
        type: 'quote',
        text: 'The businesses that show up inside AI-generated answers over the next two years will have an enormous advantage — simply because most competitors are not paying attention yet.',
      },
    ],
    faq: [
      {
        question: 'Is AEO the same as traditional SEO?',
        answer:
          'No. Traditional SEO focuses on ranking in a list of links. AEO focuses on being the direct answer an engine gives — often without the user clicking through to a website at all.',
      },
      {
        question: 'Do I need a developer to implement GEO?',
        answer:
          'Basic GEO readiness — schema markup, FAQ content, consistent business information — can be set up without custom development. ROSKYRO handles this as part of its Knowledge and Yield systems.',
      },
    ],
  },
  {
    slug: 'google-business-profile-checklist',
    title: 'The 12-Point Google Business Profile Checklist Every Local Business Should Run Today',
    excerpt:
      'Most local businesses have a Google Business Profile that is only 50% complete. Use this checklist to find out exactly what is missing — and why it is costing you customers.',
    category: 'Local SEO',
    publishDate: '2026-04-28',
    readMinutes: 7,
    coverEmoji: '📍',
    content: [
      {
        type: 'p',
        text: 'Your Google Business Profile (GBP) is often the very first thing a potential customer sees about you — before your website, before your reviews, before anything else. Yet most small businesses treat it as a "set it and forget it" listing. Here is a practical checklist to audit your own profile in the next ten minutes.',
      },
      { type: 'h2', text: 'The checklist' },
      {
        type: 'list',
        items: [
          'Business name matches your real-world signage exactly (no extra keywords stuffed in).',
          'Correct primary category, plus relevant secondary categories.',
          'Complete business description using natural language, not keyword stuffing.',
          'Accurate, up-to-date business hours — including holidays.',
          'Phone number that is monitored and answered.',
          'Website link pointing to a live, working page.',
          'At least 10 high-quality photos, updated within the last 3 months.',
          'A steady stream of new reviews (not just a handful from years ago).',
          'Active responses to all reviews — both positive and negative.',
          'Posts or updates published at least monthly.',
          'Products or services section filled out with pricing where possible.',
          'Questions & Answers section monitored and answered promptly.',
        ],
      },
      { type: 'h2', text: 'Why incomplete profiles lose customers' },
      {
        type: 'p',
        text: 'Google rewards profiles that show consistent activity and completeness with better placement in the local 3-pack — the map results that appear above organic listings for "near me" searches. An incomplete profile signals lower trust to both Google\'s algorithm and to the human reading it.',
      },
    ],
    faq: [
      {
        question: 'How often should I update my Google Business Profile?',
        answer:
          'At minimum, monthly — new photos, a post or offer, and prompt responses to any new reviews or questions.',
      },
      {
        question: 'Does responding to negative reviews actually help?',
        answer:
          'Yes. A calm, professional response to a negative review is often read by far more prospective customers than the review itself, and it directly signals active management to Google\'s ranking systems.',
      },
    ],
  },
  {
    slug: 'why-reviews-matter-more-than-ads',
    title: 'Why 10 Genuine Reviews Often Outperform a Paid Ad Campaign',
    excerpt:
      'For most local service businesses — clinics, professionals, retail — review velocity and quality drive more decisions than any ad spend. Here is the data-backed reasoning.',
    category: 'Reputation',
    publishDate: '2026-04-05',
    readMinutes: 5,
    coverEmoji: '⭐',
    content: [
      {
        type: 'p',
        text: 'When someone is choosing between two nearby businesses offering the same service, what tips the decision? Overwhelmingly, it is social proof — specifically, recent reviews from people who look and sound like them.',
      },
      { type: 'h2', text: 'The trust gap ads cannot close' },
      {
        type: 'p',
        text: 'An advertisement, no matter how well designed, is understood by the viewer as something the business paid for. A review, by contrast, is perceived as an independent, third-party verdict. This single distinction is why review count and recency consistently outperform ad spend in driving local conversion.',
      },
      { type: 'h2', text: 'What "review velocity" means and why it matters' },
      {
        type: 'p',
        text: 'It is not just the total number of reviews — it is how recently they were posted. A business with 80 reviews, none from the last year, looks less active and trustworthy than a competitor with 25 reviews, five of which are from the last month.',
      },
      { type: 'h2', text: 'A simple system to build review velocity' },
      {
        type: 'list',
        items: [
          'Ask at the moment of highest satisfaction — right after a successful service, not days later.',
          'Make it a one-tap process: a direct link or QR code straight to the review form.',
          'Respond to every review within 48 hours.',
          'Never incentivize reviews with discounts — this violates most platform policies and damages authenticity.',
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
