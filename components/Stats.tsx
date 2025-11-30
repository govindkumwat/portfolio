"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Delivered", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "Commitment", value: "100%" },
];

export default function Stats() {
    return (
        <section className="py-10 relative z-10 border-b border-white/5 bg-white/5 backdrop-blur-sm">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
