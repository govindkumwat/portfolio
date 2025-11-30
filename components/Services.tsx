"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Server, Zap } from "lucide-react";

const services = [
    {
        icon: <Layout className="w-8 h-8 text-cyan-400" />,
        title: "Frontend Architecture",
        description: "Designing scalable, maintainable, and high-performance frontend systems using React and Next.js."
    },
    {
        icon: <Server className="w-8 h-8 text-purple-400" />,
        title: "Backend Solutions",
        description: "Building robust REST APIs and microservices with Node.js, Express, and cloud integrations."
    },
    {
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
        title: "Performance Optimization",
        description: "Enhancing web vitals, reducing load times, and implementing efficient caching strategies."
    },
    {
        icon: <Code2 className="w-8 h-8 text-green-400" />,
        title: "Full Stack Development",
        description: "End-to-end application development from database design to pixel-perfect UI implementation."
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative z-10">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
                        What I Do
                    </h2>
                    <p className="text-slate-400 text-lg">Delivering value through technical excellence.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-purple-500/30"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
