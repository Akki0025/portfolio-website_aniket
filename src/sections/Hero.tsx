"use client";

import { motion } from "framer-motion";
import { data } from "../data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-32">
            {/* Background Earth Layer */}

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center relative">
                    {/* Subtle dark gradient overlay for depth */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial from-black/40 to-transparent pointer-events-none z-[-1] blur-2xl" />

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold leading-none tracking-tighter bg-gradient-to-b from-white to-zinc-200 bg-clip-text text-transparent"
                    >
                        Aniket
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold leading-none mb-6 tracking-tighter bg-gradient-to-b from-zinc-200 to-zinc-500 bg-clip-text text-transparent"
                    >
                        Kumar
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className="text-zinc-500/80 font-medium tracking-widest uppercase mb-6 block text-lg md:text-xl">
                            {data.hero.subtitle}
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                    >
                        {data.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <a
                            href="#experience"
                            className="group bg-zinc-200 hover:bg-white text-black px-8 py-4 rounded-full font-medium transition-all duration-500 flex items-center justify-center gap-3 text-lg w-full sm:w-auto shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5),0_0_10px_rgba(251,191,36,0.2)] hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {data.hero.cta.primary}
                        </a>
                        <a
                            href="/resume.pdf"
                            className="px-8 py-4 rounded-full font-medium border border-white/[0.1] hover:border-white/40 hover:bg-white/[0.05] transition-all duration-500 text-white text-center text-lg w-full sm:w-auto hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(251,191,36,0.1)] active:scale-[0.98]"
                        >
                            {data.hero.cta.secondary}
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
            </motion.div>
        </section>
    );
}
