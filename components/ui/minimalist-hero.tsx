"use client";

import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
  >
    {children}
  </a>
);

// Helper component for social media icons
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-foreground">
    <Icon className="h-5 w-5" />
  </a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLButtonElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const footerIconsRef = useRef<HTMLDivElement>(null);
  const footerLocRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial Setup
      gsap.set([
        logoRef.current,
        navRef.current,
        mobileMenuRef.current,
        leftTextRef.current,
        circleRef.current,
        imageRef.current,
        rightTextRef.current,
        footerIconsRef.current,
        footerLocRef.current
      ], { opacity: 0 });

      gsap.set(logoRef.current, { x: -20 });
      gsap.set(mobileMenuRef.current, { x: 20 });
      gsap.set(leftTextRef.current, { y: 20 });
      gsap.set(circleRef.current, { scale: 0.8 });
      gsap.set(imageRef.current, { y: 100, scale: 1.1 }); // More dramatic image entry
      gsap.set(rightTextRef.current, { y: 20 });
      gsap.set(footerIconsRef.current, { y: 20 });
      gsap.set(footerLocRef.current, { y: 20 });

      // Animation Sequence
      tl.to([logoRef.current, navRef.current, mobileMenuRef.current], {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1
      })
        .to(circleRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.75)"
        }, "-=0.4")
        .to(imageRef.current, {
          opacity: 1,
          y: 0,
          scale: 1.5, // Match expectation of scale-150 class
          duration: 1.5,
          ease: "power4.out" // Very smooth deceleration
        }, "-=1.0")
        .to(leftTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8
        }, "-=0.8")
        .to(rightTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8
        }, "-=0.6")
        .to([footerIconsRef.current, footerLocRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1
        }, "-=0.4");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Header - Hidden in favor of TubelightNavbar but keeping structure for animation targeting if needed */}
      <div className="hidden w-full max-w-7xl items-center justify-between">
        <div ref={logoRef} className="text-xl font-bold tracking-wider">
          {logoText}
        </div>
        <div ref={navRef} className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <button
          ref={mobileMenuRef}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-5 bg-foreground"></span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3">
        {/* Left Text Content */}
        <div
          ref={leftTextRef}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">{mainText}</p>
          <a href={readMoreLink} className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font">
            Read More
          </a>
        </div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full">
          <div
            ref={circleRef}
            className="absolute z-0 h-[300px] w-[300px] rounded-full bg-yellow-400/90 md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
          ></div>
          <img
            ref={imageRef}
            src={imageSrc}
            alt={imageAlt}
            // scale-150 handled by GSAP now for smoother initial state, but base styles remain
            className="relative z-10 h-auto w-56 object-cover md:w-64 lg:w-72"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found`;
            }}
          />
        </div>

        {/* Right Text */}
        <div
          ref={rightTextRef}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="text-7xl font-extrabold text-foreground md:text-8xl lg:text-9xl">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <div
          ref={footerIconsRef}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </div>
        <div
          ref={footerLocRef}
          className="text-sm font-medium text-foreground/80"
        >
          {locationText}
        </div>
      </footer>
    </div>
  );
};
