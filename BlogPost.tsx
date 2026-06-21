import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Seo from './Seo';
import { getPostBySlug } from './blogData';
import { SITE } from './siteConfig';
import LucideIcon from './LucideIcon';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) return;

    const existing = document.getElementById('roskyro-article-jsonld');
    if (existing) existing.remove();

    const graph: any[] = [
      {
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishDate,
        author: { '@type': 'Organization', name: SITE.name },
        publisher: { '@type': 'Organization', name: SITE.name, logo: `${SITE.url}${SITE.logoPath}` },
        mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
      },
    ];

    if (post.faq && post.faq.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: post.faq.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      });
    }

    const script = document.createElement('script');
    script.id = 'roskyro-article-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('roskyro-article-jsonld');
      if (el) el.remove();
    };
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Seo title={`${post.title} | ROSKYRO Blog`} description={post.excerpt} path={`/blog/${post.slug}`} />

      <article className="pt-32 pb-24 bg-slate-950 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-neon-cyan transition-colors mb-8"
          >
            <LucideIcon name="ArrowLeft" size={14} />
            Back to all articles
          </Link>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{post.coverEmoji}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-2 py-1 rounded-full border border-neon-cyan/20">
                {post.category}
              </span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <LucideIcon name="Calendar" size={12} />
                {new Date(post.publishDate).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <LucideIcon name="Clock3" size={12} />
                {post.readMinutes} min read
              </span>
            </div>
          </div>

          <div className="prose-content space-y-5">
            {post.content.map((block, i) => {
              if (block.type === 'p') {
                return (
                  <p key={i} className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="font-display text-xl sm:text-2xl font-bold text-white pt-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'h3') {
                return (
                  <h3 key={i} className="font-display text-lg font-bold text-white pt-2">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className="space-y-2 pl-1">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-2.5 items-start text-slate-300 text-sm sm:text-base leading-relaxed">
                        <span className="text-neon-cyan mt-1.5 shrink-0">
                          <LucideIcon name="Check" size={13} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote
                    key={i}
                    className="border-l-2 border-neon-cyan pl-5 py-1 italic text-slate-200 text-sm sm:text-base"
                  >
                    {block.text}
                  </blockquote>
                );
              }
              return null;
            })}
          </div>

          {post.faq && post.faq.length > 0 && (
            <div className="mt-16 pt-10 border-t border-slate-900 space-y-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white">Frequently Asked Questions</h2>
              <div className="space-y-5">
                {post.faq.map((f, i) => (
                  <div key={i} className="space-y-1.5">
                    <h3 className="font-bold text-sm sm:text-base text-slate-100">{f.question}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 p-6 rounded-2xl bg-slate-900/40 border border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-300 text-sm font-sans">
              Want this fixed on your own business, not just explained in theory?
            </p>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white text-xs font-bold whitespace-nowrap"
            >
              Get Your Free Audit →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
