"use client";

import React from "react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import AnoAI from "@/components/ui/animated-shader-background";

// Project items using images from public folder
const items: CardStackItem[] = [
    {
        id: 1,
        title: "Gym Web",
        description: "A modern fitness and gym website",
        imageSrc: "/gym-web-amber.vercel.app.png",
        href: "https://gym-web-amber.vercel.app",
    },
    {
        id: 2,
        title: "Krishna Reminds",
        description: "A spiritual reminder application",
        imageSrc: "/httpskrishnareminds.vercel.app.png",
        href: "https://krishnareminds.vercel.app",
    },
    {
        id: 3,
        title: "Sehat Saathi",
        description: "A medical health companion platform",
        imageSrc: "/httpssehatsaathi-med.vercel.app.png",
        href: "https://sehatsaathi-med.vercel.app",
    },
    {
        id: 4,
        title: "Speed Test Pro",
        description: "Internet speed testing application",
        imageSrc: "/httpsspeedtestpro-five.vercel.app.png",
        href: "https://speedtestpro-five.vercel.app",
    },
    {
        id: 5,
        title: "Sentience",
        description: "Emotional Intelligence Platform",
        imageSrc: "/sentience.png",
        href: "https://sentience-v2.vercel.app/sentience",
    },
];

export default function ProjectsPage() {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Skills', url: '/skills', icon: Briefcase },
        { name: 'Project', url: '/projects', icon: FileText },
        { name: 'About ', url: '/about', icon: User }
    ];

    return (
        <div className="min-h-screen bg-background font-sans flex flex-col items-center">
            <AnoAI />
            <NavBar items={navItems} />
            <div className="w-full flex-1 flex flex-col items-center justify-center py-12 pb-28 sm:py-16 md:py-20 md:pb-20">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-10 text-foreground font-orbitron px-4">My Projects</h1>
                <div className="w-full max-w-5xl px-4 sm:px-6 md:p-8">
                    <CardStack
                        items={items}
                        initialIndex={0}
                        autoAdvance
                        intervalMs={3000}
                        pauseOnHover={false}
                        showDots
                    />
                </div>
            </div>
        </div>
    );
}
