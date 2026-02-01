import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Early 2024",
            content: (
                <div>
                    <h4 className="text-neutral-900 dark:text-neutral-100 text-base md:text-lg font-semibold mb-4">
                        Foundations
                    </h4>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        This is when I began taking development seriously.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        I focused on understanding the fundamentals — HTML, CSS, Java, and Python — and how the web actually works beyond tutorials.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Instead of chasing trends, I spent time learning layout, responsiveness, and structure. This phase taught me discipline and consistency in writing code that is readable and intentional.
                    </p>
                </div>
            ),
        },
        {
            title: "Mid 2024",
            content: (
                <div>
                    <h4 className="text-neutral-900 dark:text-neutral-100 text-base md:text-lg font-semibold mb-4">
                        UI, Systems, Direction
                    </h4>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        As I built more, my interest shifted toward UI/UX and design systems.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        I started thinking less about single pages and more about reusable components, spacing rules, and visual consistency.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        This is also when I began learning React, moving from static layouts to component-driven development. Design stopped being decoration and became part of the logic.
                    </p>
                </div>
            ),
        },
        {
            title: "Hackathons",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        I participated in multiple hackathons, including events at VIT, where I won one.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        These experiences pushed me to build fast, think clearly under pressure, and collaborate effectively. Hackathons helped me understand how ideas turn into working products — not perfect, but functional and focused.
                    </p>
                </div>
            ),
        },
        {
            title: "AI & ML",
            content: (
                <div>
                    <h4 className="text-neutral-900 dark:text-neutral-100 text-base md:text-lg font-semibold mb-4">
                        Awareness
                    </h4>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Alongside frontend development, I have exposure to AI/ML concepts.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        I understand how machine learning models work, how LLMs are trained, and how AI systems are structured — even as I continue learning.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                        I don&apos;t treat AI as a buzzword, but as a tool that should integrate thoughtfully into real products.
                    </p>
                </div>
            ),
        },
        {
            title: "Now",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
                        Currently, I&apos;m focused on:
                    </p>
                    <div className="mb-6">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                            Improving my React and component architecture skills
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                            Building better UI systems, not just interfaces
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                            Deepening my understanding of AI/ML through practical applications
                        </div>
                    </div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                        I&apos;m still learning — but I&apos;m building consistently, thinking long-term, and moving with intent.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
