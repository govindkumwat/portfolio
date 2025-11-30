"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>

                            <div className="space-y-6">
                                <a
                                    href="tel:+919571367116"
                                    className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-colors"
                                >
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                        <Phone className="w-5 h-5" />
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
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Email</p>
                                        <p className="text-white font-medium group-hover:text-cyan-300 transition-colors">kumawatgovind1997@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/govind-kumawat-92a63a165"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-colors"
                                >
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">LinkedIn</p>
                                        <p className="text-white font-medium group-hover:text-blue-300 transition-colors">govind-kumawat-92a63a165</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
