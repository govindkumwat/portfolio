"use client";

import { motion } from "framer-motion";

const skills = {
    Frontend: ["React.js", "Next.js", "Redux", "Hooks", "HTML", "CSS", "JavaScript (ES6+)", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "REST APIs", "Socket.io", "Microsoft SignalR"],
    "Cloud & DevOps": ["AWS", "Azure", "Google Cloud", "CI/CD"],
    Tools: ["Git", "JIRA", "Postman", "Bitbucket"],
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative z-10">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
                        Technical Arsenal
                    </h2>
                    <p className="text-slate-400 text-lg">The tools and technologies I use to build the future.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover:border-purple-500/30 transition-colors group"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-white/5 text-slate-300 text-sm font-medium rounded-lg border border-white/5 hover:bg-white/10 hover:text-white hover:border-purple-500/50 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
