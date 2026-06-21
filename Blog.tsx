import React from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import { BLOG_POSTS } from './blogData';
import LucideIcon from './LucideIcon';

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog | ROSKYRO — Insights on AI Search, Local SEO & Reputation"
        description="Practical, no-fluff guides on AEO, GEO, local SEO, Google Business Profile optimization, and reputation management for small and medium businesses."
        path="/blog"
      />

      <section className="pt-32 pb-20 bg-slate-950 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-3 py-1 rounded-full border border-neon-cyan/20">
              ROSKYRO Insights
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Practical Guides on AI Search &amp; Local Growth
            </h1>
            <p className="text-slate-400 text-sm sm:text-base font-sans">
              No fluff, no recycled tips — clear explanations of how AEO, GEO, and local SEO actually work for
              small and medium businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group p-6 rounded-2xl bg-slate-900/30 border border-slate-850 hover:border-neon-cyan/30 hover:bg-slate-900/50 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{post.coverEmoji}</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-2 py-1 rounded-full border border-neon-cyan/20">
                    {post.category}
                  </span>
                </div>

                <h2 className="font-display text-lg font-bold text-white group-hover:text-neon-cyan transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-1">{post.excerpt}</p>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-850">
                  <span className="flex items-center gap-1.5">
                    <LucideIcon name="Calendar" size={12} />
                    {new Date(post.publishDate).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <LucideIcon name="Clock3" size={12} />
                    {post.readMinutes} min read
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
