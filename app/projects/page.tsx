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
            <div className="w-full flex-1 flex flex-col items-center justify-center py-20">
                <h1 className="text-4xl font-bold mb-10 text-foreground font-orbitron">My Projects</h1>
                <div className="w-full max-w-5xl p-8">
                    <CardStack
                        items={items}
                        initialIndex={0}
                        autoAdvance
                        intervalMs={3000}
                        pauseOnHover
                        showDots
                    />
                </div>
            </div>
        </div>
    );
}
