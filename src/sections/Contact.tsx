"use client";

import { data } from "../data";
import { Github, Linkedin } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="pt-32 pb-20 flex flex-col items-center justify-center text-center relative">
            <h2 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6 tracking-tight">
                Let's build something <br />
                <span className="text-zinc-500">together.</span>
            </h2>

            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light">
                {data.contact.description}
            </p>

            <div className="flex flex-col md:flex-row gap-6 mb-16 relative z-10">
                <a
                    href={`mailto:${data.contact.email}`}
                    className="px-10 py-5 rounded-full bg-[rgba(15,15,20,0.55)] backdrop-blur-[10px] border border-white/[0.05] text-zinc-400 hover:text-white hover:bg-[rgba(15,15,30,0.6)] hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.25)] hover:-translate-y-1 text-lg font-medium"
                >
                    {data.contact.email}
                </a>
                <a
                    href={`tel:${data.contact.phone}`}
                    className="px-10 py-5 rounded-full bg-[rgba(15,15,20,0.55)] backdrop-blur-[10px] border border-white/[0.05] text-zinc-400 hover:text-white hover:bg-[rgba(15,15,30,0.6)] hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.25)] hover:-translate-y-1 text-lg font-medium"
                >
                    {data.contact.phone}
                </a>
            </div>

            <div className="flex gap-10 relative z-10">
                <a
                    href={data.contact.social.github}
                    className="text-zinc-400 hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
                    aria-label="GitHub"
                >
                    <Github className="w-[30px] h-[30px]" />
                </a>
                <a
                    href={data.contact.social.linkedin}
                    className="text-zinc-400 hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
                    aria-label="LinkedIn"
                >
                    <Linkedin className="w-[30px] h-[30px]" />
                </a>
            </div>

            {/* Bottom Gradient for clean visual ending */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
        </section>
    );
}
