'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavbarProps {
    logoText: string;
    navLinks: { label: string; href: string }[];
    className?: string;
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
    >
        {children}
    </a>
);

export const Navbar = ({ logoText, navLinks, className }: NavbarProps) => {
    return (
        <header className={cn("z-30 flex w-full max-w-7xl items-center justify-between", className)}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold tracking-wider"
            >
                {logoText}
            </motion.div>
            <div className="hidden items-center space-x-8 md:flex">
                {navLinks.map((link) => (
                    <NavLink key={link.label} href={link.href}>
                        {link.label}
                    </NavLink>
                ))}
            </div>
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col space-y-1.5 md:hidden"
                aria-label="Open menu"
            >
                <span className="block h-0.5 w-6 bg-foreground"></span>
                <span className="block h-0.5 w-6 bg-foreground"></span>
                <span className="block h-0.5 w-5 bg-foreground"></span>
            </motion.button>
        </header>
    );
};
