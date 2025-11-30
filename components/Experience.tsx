"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Senior Software Engineer (Next JS)",
        company: "Xome Inc. (Auction Marketplace)",
        period: "Oct 2025 – Present",
        description: [
            "Built user-facing modules for Xome’s real-estate marketplace using Next.js, TypeScript, and Tailwind.",
            "Implemented high-performance pages for property search, listings, auctions, and customer dashboards.",
            "Integrated REST APIs, optimized rendering with SSR, and improved Lighthouse performance scores by implementing efficient caching and code-splitting strategies."
        ]
    },
    {
        role: "Senior Software Engineer (Angular JS)",
        company: "Granicus (BookDirect)",
        period: "Jan 2025 – Present",
        description: [
            "Partnering on an Online Hotel Booking platform, enhancing booking workflows and refining usability.",
            "Integrated a real-time booking engine for seamless reservations across platforms.",
            "Spearheaded dynamic pricing, automated booking confirmations, and onboarding flow."
        ]
    },
    {
        role: "Senior Software Engineer (React JS)",
        company: "Xome Inc. (Xbid Live Bidding App)",
        period: "Nov 2024 – Oct 2025",
        description: [
            "Enhanced features for a property bidding platform to optimize real estate transactions.",
            "Integrated a live bidding engine to handle real-time auctions with cross-platform users.",
            "Customized automated bidding, proxy bidding, and onboarding flows."
        ]
    },
    {
        role: "Software Engineer (ReactJS + Node JS)",
        company: "WhatsEngage (WhatsApp Business Companion)",
        period: "Jun 2023 – May 2024",
        description: [
            "Developed an end-to-end WhatsApp API solution using React and Node.js.",
            "Enabled SMEs to automate customer engagement, reducing manual effort."
        ]
    },
    {
        role: "Software Engineer (React JS)",
        company: "WoodenStreet (E-com App)",
        period: "Jun 2023 – May 2024",
        description: [
            "Delivered a scalable React-based B2C platform with personalized UI and workflow.",
            "Implemented responsive design and secure sessions, improving shopping experience."
        ]
    },
    {
        role: "Software Engineer",
        company: "Elevance.io (IC Compliance App)",
        period: "Sep 2021 – Jun 2023",
        description: [
            "Built and maintained a Salesforce-integrated React application for IC compliance."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative z-10">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
                        Professional Journey
                    </h2>
                    <p className="text-slate-400 text-lg">Building impactful solutions across industries.</p>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center gap-2 text-cyan-400 mt-2 font-medium">
                                        <Briefcase className="w-4 h-4" />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 bg-white/5 px-4 py-2 rounded-full text-sm border border-white/5">
                                    <Calendar className="w-4 h-4" />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
