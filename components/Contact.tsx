"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative z-10">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
                        Let's Connect
                    </h2>
                    <p className="text-slate-400 text-lg">Ready to start your next project? Drop me a line.</p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Contact Info</h3>

                        <div className="space-y-6">
                            <a
                                href="tel:+919571367116"
                                className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-colors"
                            >
                                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                    <Phone className="w-5 h-5" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Phone</p>
                                    <p className="text-white font-medium group-hover:text-purple-300 transition-colors">+91 9571367116</p>
                                </div>
                            </a>

                            <a
                                href="mailto:kumawatgovind1997@gmail.com"
                                className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-colors"
                            >
                                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 6l10 7 10-7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm text-slate-500">Email</p>
                                    <p className="text-white font-medium group-hover:text-cyan-300 transition-colors break-all">kumawatgovind1997@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/govind-kumawat-92a63a165"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-colors"
                            >
                                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">LinkedIn</p>
                                    <p className="text-white font-medium group-hover:text-blue-300 transition-colors">govind-kumawat-92a63a165</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
