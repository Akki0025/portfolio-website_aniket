"use client";

import { SectionHeader } from "../components/SectionHeader";
import { data } from "../data";

export function TechnicalArsenal() {
    return (
        <section id="arsenal" className="py-20">
            <SectionHeader
                title="Technical Arsenal"
                description="The tools and technologies I use to build scalable applications."
            />

            <div className="grid md:grid-cols-3 gap-10">
                {/* Frontend Engineering - Highlighted */}
                <div
                    className="bg-[rgba(15,15,20,0.55)] backdrop-blur-[10px] border border-white/[0.05] rounded-2xl p-8 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[rgba(15,15,30,0.6)] hover:shadow-[0_25px_50px_-15px_rgba(59,130,246,0.25)] transition-all duration-500 relative overflow-hidden group"
                    data-cursor="card"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h3 className="text-xl font-bold text-white mb-6 relative z-10">Frontend Engineering</h3>
                    <div className="flex flex-wrap gap-2 relative z-10">
                        {data.skills.frontend.map((skill) => (
                            <span key={skill} className="px-3 py-1.5 bg-zinc-800 text-zinc-200 rounded-full text-sm font-medium border border-zinc-700/50">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Backend Engineering */}
                <div
                    className="bg-[rgba(15,15,20,0.55)] backdrop-blur-[10px] border border-white/[0.05] rounded-2xl p-8 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[rgba(15,15,30,0.6)] hover:shadow-[0_25px_50px_-15px_rgba(59,130,246,0.25)] transition-all duration-500 relative overflow-hidden group"
                    data-cursor="card"
                >
                    <h3 className="text-xl font-bold text-white mb-6">Backend Engineering</h3>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.backend.map((skill) => (
                            <span key={skill} className="px-3 py-1.5 bg-zinc-800/50 text-zinc-400 rounded-full text-sm font-medium border border-zinc-800">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Data Persistence */}
                <div
                    className="bg-[rgba(15,15,20,0.55)] backdrop-blur-[10px] border border-white/[0.05] rounded-2xl p-8 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[rgba(15,15,30,0.6)] hover:shadow-[0_25px_50px_-15px_rgba(59,130,246,0.25)] transition-all duration-500 relative overflow-hidden group"
                    data-cursor="card"
                >
                    <h3 className="text-xl font-bold text-white mb-6">Data Persistence</h3>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.database.map((skill) => (
                            <span key={skill} className={`px-3 py-1.5 rounded-full text-sm font-medium border ${skill === 'MySQL' ? 'bg-white text-black font-bold shadow-lg shadow-white/10 border-white' :
                                (skill === 'MongoDB' || skill === 'Prisma' ? 'bg-zinc-800/50 text-zinc-400 opacity-80 border-zinc-800' : 'bg-zinc-800/50 text-zinc-400 border-zinc-800')
                                }`}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
