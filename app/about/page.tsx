"use client";

import React from "react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { TimelineDemo } from "@/components/demos/timeline-demo";

export default function AboutPage() {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Skills', url: '/skills', icon: Briefcase },
        { name: 'Project', url: '#', icon: FileText },
        { name: 'About ', url: '/about', icon: User }
    ];

    return (
        <div className="min-h-screen bg-background font-sans flex flex-col items-center">
            <NavBar items={navItems} />
            <div className="w-full">
                <TimelineDemo />
            </div>
        </div>
    );
}
