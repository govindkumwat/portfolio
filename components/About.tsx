"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-900 text-slate-300">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-xl">
                        <p className="text-lg leading-relaxed mb-6">
                            I am a Senior Software Engineer with over 4 years of hands-on experience architecting and developing responsive, scalable, and cloud-native applications. My expertise spans across e-commerce, real estate, and SaaS domains, where I have successfully delivered business-driven solutions.
                        </p>
                        <p className="text-lg leading-relaxed">
                            I specialize in React, Next.js, and Node.js, with a strong focus on improving application performance and implementing real-time features. I am a strong collaborator with a proven track record of owning features end-to-end, from concept to deployment.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
