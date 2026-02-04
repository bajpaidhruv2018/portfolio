'use client';

import React from 'react';
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { MinimalistHero } from '@/components/ui/minimalist-hero'; // Using Hero for content, ignoring its internal navbar
import SocialCardDemo from '@/components/demos/social-card-demo';
import { ModeToggle } from '@/components/ui/mode-toggle';
import dynamic from 'next/dynamic';

const HorizonHeroSection = dynamic(
  () => import('@/components/ui/horizon-hero-section').then((mod) => mod.HorizonHeroSection),
  { ssr: false }
);

export default function MinimalistHeroDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Skills', url: '/skills', icon: Briefcase },
    { name: 'Project', url: '/projects', icon: FileText },
    { name: 'About ', url: '/about', icon: User }
  ];

  const heroNavLinks = [
    { label: 'HOME', href: '/' },
    { label: 'SKILLS', href: '/skills' },
    { label: 'PROJECT', href: '/projects' },
    { label: 'ABOUT ME', href: '#' },
  ];

  const socialLinks = [
    // Social links remain as placeholders in MinimalistHero, or can be passed here if needed
    { icon: User, href: '#' }, // Importing User just to have an icon, ideally replace with correct social icons if needed
  ];

  // We need to render the new NavBar and the Hero.
  // Since MinimalistHero has its own header, we might see double headers.
  // Ideally we should refactor MinimalistHero, but for now let's render NavBar *outside*.
  // However, MinimalistHero takes full screen. The new NavBar is fixed.
  // So it should overlay nicely.

  return (
    <div className="relative">
      <NavBar items={navItems} />
      <div className="fixed top-6 left-6 z-50 font-bold text-xl tracking-widest text-foreground hidden md:block">
        DHRUV BAJPAI
      </div>
      <div className="fixed top-6 right-6 z-50">
        <ModeToggle />
      </div>
      <div className="fixed bottom-6 left-6 z-50">
        <SocialCardDemo />
      </div>
      <MinimalistHero
        logoText="Dhruv Bajpai"
        navLinks={heroNavLinks} // Keeping these for the hero's internal structure if needed, or we can pass empty to hide them if we refactor Hero
        mainText="A person who never made a mistake never tried anything new. Life is about learning from the things we do wrong"
        readMoreLink="/about"
        imageSrc="/hero-image.png"
        imageAlt="A portrait of a person in a black turtleneck, in profile."
        overlayText={{
          part1: 'less is',
          part2: 'more.',
        }}
        socialLinks={[]} // MinimalistHero expects social links, passing empty or mock
        locationText="Arlington Heights, IL"
      />
      <div className="w-full h-screen bg-black z-20 relative">
        <HorizonHeroSection />
      </div>
    </div>
  );
};
