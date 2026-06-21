import React from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | ROSKYRO"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <section className="pt-40 pb-32 bg-slate-950 min-h-screen flex items-center justify-center text-center">
        <div className="space-y-6 px-4">
          <span className="font-display text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300">
            404
          </span>
          <h1 className="font-display text-2xl font-bold text-white">Page Not Found</h1>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white text-sm font-bold"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
