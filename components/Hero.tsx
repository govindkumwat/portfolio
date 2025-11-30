"use client";

import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const letterContainerVariants: any = {
    hidden: { transition: { staggerChildren: 0.1 } },
    visible: { transition: { staggerChildren: 0.1 } },
};

const letterVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 12, stiffness: 200 }
    },
};

export default function Hero() {
    const name = "Govind Kumawat";

    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#030014] text-white px-4 pt-20">
            {/* Background Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] opacity-50 animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[120px] opacity-50 animate-pulse delay-1000" />

            <div className="z-10 text-center max-w-5xl mx-auto space-y-8">
                <div className="flex flex-col items-center gap-3 mb-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md"
                    >
                        <span className="text-purple-300 text-sm font-medium tracking-wider uppercase">
                            Senior Software Engineer
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-green-300 text-sm font-medium tracking-wider">
                            Open for Opportunities
                        </span>
                    </motion.div>
                </div>

                <motion.div
                    variants={letterContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="overflow-hidden"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 flex flex-wrap justify-center gap-x-4">
                        {name.split(" ").map((word, i) => (
                            <span key={i} className="inline-block whitespace-nowrap">
                                {word.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={letterVariants}
                                        className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }} // Delay after name reveal
                    className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
                >
                    Building <span className="text-cyan-400 font-normal">scalable frontend</span> applications and crafting
                    <span className="text-purple-400 font-normal"> immersive</span> web experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    className="flex flex-wrap gap-6 justify-center items-center pt-4"
                >
                    <Link
                        href="#contact"
                        className="group relative px-8 py-4 bg-white text-black rounded-full font-bold transition-all hover:scale-105"
                    >
                        <div className="absolute inset-0 rounded-full blur-lg bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10">Get in Touch</span>
                    </Link>
                    <Link
                        href="#projects"
                        className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium transition-all hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
                    >
                        View Work
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="flex gap-8 justify-center items-center pt-12"
                >
                    <a
                        href="https://www.linkedin.com/in/govind-kumawat-92a63a165"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-purple-400 transition-colors transform hover:scale-110"
                    >
                        <Linkedin className="w-8 h-8" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href="mailto:kumawatgovind1997@gmail.com"
                        className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                    >
                        <Mail className="w-8 h-8" />
                        <span className="sr-only">Email</span>
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
}
