"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-20 bg-slate-900 text-slate-300">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-start gap-4"
                    >
                        <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Master of Computer Applications (MCA)</h3>
                            <p className="text-indigo-400 mb-1">Chandigarh University</p>
                            <p className="text-slate-500 text-sm">2019 – 2021</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-start gap-4"
                    >
                        <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Bachelor of Computer Applications (BCA)</h3>
                            <p className="text-indigo-400 mb-1">Poornima University</p>
                            <p className="text-slate-500 text-sm">2015 – 2018</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
