import React from 'react';

interface LogoProps {
  variant?: 'nav' | 'footer';
}

/**
 * ROSKYRO brand logo — served as a static asset so every visitor sees
 * the real brand mark (previous version relied on localStorage, which
 * only showed the logo on the browser that uploaded it).
 */
export default function Logo({ variant = 'nav' }: LogoProps) {
  if (variant === 'nav') {
    return (
      <a href="/" className="flex items-center select-none" aria-label="ROSKYRO — Home">
        <img
          src="/logo.png"
          alt="ROSKYRO — AI Growth Technology Company"
          className="h-8 sm:h-9 w-auto object-contain"
          width={160}
          height={36}
          loading="eager"
        />
      </a>
    );
  }

  // Footer / larger variant
  return (
    <a href="/" className="inline-flex items-center select-none" aria-label="ROSKYRO — Home">
      <img
        src="/logo.png"
        alt="ROSKYRO — AI Growth Technology Company"
        className="h-10 sm:h-11 w-auto object-contain"
        width={200}
        height={45}
        loading="lazy"
      />
    </a>
  );
}
