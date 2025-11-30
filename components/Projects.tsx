"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const projects = [
    {
        title: "Auction Marketplace",
        tech: "Next.js, TypeScript, Tailwind",
        description: "Built user-facing modules for a real-estate marketplace. Implemented high-performance pages for property search, listings, auctions, and customer dashboards.",
        role: "Senior Software Engineer"
    },
    {
        title: "BookDirect",
        tech: "Angular JS",
        description: "Online Hotel Booking platform. Integrated a real-time booking engine for seamless reservations and spearheaded dynamic pricing.",
        role: "Senior Software Engineer"
    },
    {
        title: "Xbid Live Bidding App",
        tech: "React JS",
        description: "Property bidding platform. Integrated a live bidding engine to handle real-time auctions with cross-platform users.",
        role: "Senior Software Engineer"
    },
    {
        title: "WhatsEngage",
        tech: "React JS, Node.js",
        description: "WhatsApp Business Companion. Developed an end-to-end WhatsApp API solution enabling SMEs to automate customer engagement.",
        role: "Software Engineer"
    },
    {
        title: "WoodenStreet E-com",
        tech: "React JS",
        description: "Scalable B2C platform with personalized UI. Implemented responsive design and secure sessions.",
        role: "Software Engineer"
    },
    {
        title: "IC Compliance App",
        tech: "React JS, Salesforce",
        description: "Salesforce-integrated React application for IC compliance.",
        role: "Software Engineer"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
                        Featured Work
                    </h2>
                    <p className="text-slate-400 text-lg">A selection of projects that define my career.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <TiltCard className="glass-card rounded-2xl overflow-hidden h-full flex flex-col group relative border border-white/5 hover:border-cyan-500/30 transition-colors">
                                {/* Abstract Visual Header */}
                                <div className="h-48 bg-gradient-to-br from-white/5 to-white/0 relative overflow-hidden group-hover:from-purple-500/10 transition-colors duration-500">
                                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                                        {/* Abstract Shapes */}
                                        <div className="absolute top-4 left-4 w-24 h-24 rounded-full border border-white/20" />
                                        <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full border border-white/10" />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-45" />
                                    </div>

                                    {/* Project specific abstract hint */}
                                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                        <div className="h-2 w-1/3 bg-white/10 rounded-full" />
                                        <div className="h-2 w-1/4 bg-white/10 rounded-full" />
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col h-full relative transform-style-3d">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-purple-500/20" />

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors relative z-10 translate-z-10">
                                        {project.title}
                                    </h3>

                                    <div className="mb-6 translate-z-10">
                                        <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                                            {project.tech}
                                        </span>
                                    </div>

                                    <p className="text-slate-300 leading-relaxed mb-6 flex-grow relative z-10 translate-z-5">
                                        {project.description}
                                    </p>

                                    <div className="pt-6 border-t border-white/10 mt-auto relative z-10 translate-z-5">
                                        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                                            Role: <span className="text-slate-300">{project.role}</span>
                                        </p>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
