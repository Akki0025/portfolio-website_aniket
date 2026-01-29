"use client";

import { SectionHeader } from "../components/SectionHeader";
import { TechIcon } from "../components/TechIcon";
import { data } from "../data";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <SectionHeader
                title="Selected Work"
                description="A timeline of technical milestones and product engineering."
            />

            <div className="max-w-3xl mx-auto relative px-4">
                {/* Vertical Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent md:left-1/2 md:-ml-[0.5px]" />

                <div className="space-y-16">
                    {data.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0 group"
                        >
                            {/* Marker Node */}
                            <div className="absolute left-[29px] md:left-1/2 md:-ml-[5px] top-6 w-[3px] h-[40px] bg-gradient-to-b from-blue-500 to-transparent rounded-full md:hidden" />

                            <div className="absolute left-[20px] md:left-1/2 md:-ml-2 top-8 w-4 h-4 rounded-full border-2 border-zinc-900 bg-zinc-800 group-hover:bg-blue-500 group-hover:border-blue-400 group-hover:scale-125 transition-all duration-500 z-10 shadow-[0_0_0_4px_rgba(0,0,0,1)]" />

                            {/* Date/Context (Left or Right depending on index) */}
                            <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:order-last"}`}>
                                <div className="hidden md:block">
                                    <span className="text-4xl font-bold text-zinc-800/50 group-hover:text-zinc-700/50 transition-colors">
                                        {project.year}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content (Right or Left) */}
                            <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pl-12 md:order-last" : "md:pr-12 md:text-right"}`}>
                                <div
                                    className="relative bg-[rgba(15,15,20,0.55)] backdrop-blur-[10px] border border-white/[0.05] p-6 rounded-2xl hover:bg-[rgba(15,15,30,0.6)] hover:border-blue-500/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_25px_50px_-15px_rgba(59,130,246,0.25)]"
                                    data-cursor="card"
                                >
                                    <div className={`flex flex-col gap-1 mb-4 ${index % 2 !== 0 ? "md:items-end" : ""}`}>
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="text-blue-400 font-medium">{project.role}</span>
                                            <span className="text-zinc-600">•</span>
                                            <span className="text-zinc-500">{project.context}</span>
                                        </div>
                                    </div>

                                    <p className={`text-zinc-400 text-sm leading-relaxed mb-6 font-light ${index % 2 !== 0 ? "md:text-right" : ""}`}>
                                        {project.description}
                                    </p>

                                    <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="text-[10px] uppercase tracking-wider text-zinc-500 border border-white/5 px-2 py-1 rounded bg-white/[0.02]">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link Icons positioned absolutely or inline */}
                                    <div className={`mt-6 flex gap-3 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                                        {project.links?.github && (
                                            <a href={project.links.github} className="text-zinc-600 hover:text-white transition-colors">
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.links?.demo && (
                                            <a href={project.links.demo} className="text-zinc-600 hover:text-white transition-colors">
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
