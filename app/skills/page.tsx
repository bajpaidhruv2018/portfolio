"use client";

import React from "react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { TextParticle } from "@/components/ui/text-particle";
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { useTheme } from "next-themes";

export default function SkillsPage() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Skills', url: '/skills', icon: Briefcase },
        { name: 'Project', url: '/projects', icon: FileText },
        { name: 'About ', url: '/about', icon: User }
    ];

    return (
        <div className="min-h-screen bg-background p-8 md:p-12 font-sans flex flex-col items-center">
            <NavBar items={navItems} />

            <div className="w-full max-w-7xl flex-grow flex flex-col items-center justify-center pt-20 space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Technical Arsenal
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Interactive exploration of my core competencies. Hover over the skills to disrupt the particles.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {/* Skill 1: TypeScript */}
                    <div className="h-64 border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm relative group">
                        <div className="absolute top-4 left-4 text-sm font-bold text-muted-foreground">LANGUAGE</div>
                        <TextParticle
                            text="TS"
                            fontSize={120}
                            particleColor={isDark ? "#3b82f6" : "#2563eb"} // Blue for TS
                            particleSize={1.5}
                            particleDensity={6}
                        />
                    </div>

                    {/* Skill 2: React */}
                    <div className="h-64 border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm relative group">
                        <div className="absolute top-4 left-4 text-sm font-bold text-muted-foreground">FRAMEWORK</div>
                        <TextParticle
                            text="REACT"
                            fontSize={80}
                            particleColor={isDark ? "#61dafb" : "#0ea5e9"} // Cyan for React
                            particleSize={1.5}
                            particleDensity={5}
                        />
                    </div>

                    {/* Skill 3: Next.js */}
                    <div className="h-64 border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm relative group">
                        <div className="absolute top-4 left-4 text-sm font-bold text-muted-foreground">META-FRAMEWORK</div>
                        <TextParticle
                            text="NEXT"
                            fontSize={100}
                            particleColor="#ffffff" // White for Next.js
                            particleSize={1.5}
                            particleDensity={6}
                        />
                    </div>
                    {/* Skill 4: Python */}
                    <div className="h-64 border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm relative group">
                        <div className="absolute top-4 left-4 text-sm font-bold text-muted-foreground">BACKEND</div>
                        <TextParticle
                            text="PY"
                            fontSize={120}
                            particleColor={isDark ? "#fbbf24" : "#d97706"} // Yellow for Python
                            particleSize={1.5}
                            particleDensity={6}
                        />
                    </div>
                    {/* Skill 5: Node */}
                    <div className="h-64 border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm relative group">
                        <div className="absolute top-4 left-4 text-sm font-bold text-muted-foreground">RUNTIME</div>
                        <TextParticle
                            text="NODE"
                            fontSize={100}
                            particleColor={isDark ? "#22c55e" : "#16a34a"} // Green for Node
                            particleSize={1.5}
                            particleDensity={6}
                        />
                    </div>
                    {/* Skill 6: Tailwind */}
                    <div className="h-64 border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm relative group">
                        <div className="absolute top-4 left-4 text-sm font-bold text-muted-foreground">STYLING</div>
                        <TextParticle
                            text="CSS"
                            fontSize={120}
                            particleColor={isDark ? "#38bdf8" : "#0284c7"} // Sky for Tailwind
                            particleSize={1.5}
                            particleDensity={6}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
