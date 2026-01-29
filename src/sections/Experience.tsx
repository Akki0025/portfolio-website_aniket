"use client";

import { SectionHeader } from "../components/SectionHeader";
import { data } from "../data";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
    return (
        <section id="experience" className="py-32">
            <SectionHeader
                title="Professional Journey"
                description="My professional journey and key milestones."
            />

            <div className="max-w-[780px] mx-auto">
                {data.experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -4 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                        data-cursor="card"
                        className="relative p-8 md:p-10 rounded-[18px] border border-white/[0.05] bg-[rgba(15,15,20,0.55)] backdrop-blur-[10px] hover:border-blue-500/40 hover:bg-[rgba(15,15,30,0.6)] hover:shadow-[0_25px_50px_-15px_rgba(59,130,246,0.25)] transition-all duration-500 overflow-hidden group"
                    >
                        {/* Top Gradient Accent */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

                        {/* Live Link Button - Absolute Top Right */}
                        {job.link && (
                            <div className="md:absolute md:top-8 md:right-8 mb-6 md:mb-0 inline-flex">
                                <a
                                    href={job.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all duration-300"
                                >
                                    <span className="text-sm font-medium text-blue-400/90 group-hover:text-blue-300">Visit Live Site</span>
                                    <ExternalLink size={14} className="text-blue-400/90 group-hover:text-blue-300 group-hover:translate-x-0.5 transition-transform duration-300" />
                                </a>
                            </div>
                        )}

                        <div className="flex flex-col gap-6 max-w-2xl">
                            {/* Header */}
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-zinc-100 mb-2">
                                    {job.role}
                                </h3>
                                {/* Date moved below role - De-emphasized */}
                                <span className="text-xs text-zinc-600 font-medium tracking-wide block mb-4 uppercase">
                                    {job.date}
                                </span>

                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-center gap-2 flex-wrap text-blue-400/90 font-medium text-base">
                                        <span>{job.project}</span>
                                    </div>
                                    <div className="text-sm text-zinc-500 font-medium tracking-wide">
                                        {job.client}
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-zinc-400/90 leading-relaxed text-base font-light">
                                {job.description}
                            </p>

                            {/* Tech Pills */}
                            <div className="flex flex-wrap gap-2 mt-1">
                                {job.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-medium text-zinc-500 border border-white/[0.08] rounded-full hover:border-white/[0.15] transition-colors cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
