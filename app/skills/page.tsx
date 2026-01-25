"use client";

import React from "react";
import { Navbar } from "@/components/ui/navbar"; // Old navbar, replacing
import { NavBar } from "@/components/ui/tubelight-navbar"; // New navbar
import { Home, User, Briefcase, FileText } from 'lucide-react';

export default function SkillsPage() {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Skills', url: '/skills', icon: Briefcase },
        { name: 'Project', url: '#', icon: FileText },
        { name: 'About ', url: '/about', icon: User }
    ];

    return (
        <div className="min-h-screen bg-background p-8 md:p-12 font-sans flex flex-col items-center">
            <NavBar items={navItems} />
            <div className="w-full max-w-7xl flex-grow flex items-center justify-center pt-20">
                {/* Content cleared previously */}
            </div>
        </div>
    );
}
