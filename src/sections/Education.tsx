
import { SectionHeader } from "../components/SectionHeader";
import { data } from "../data";
import { ExternalLink } from "lucide-react";

export function Education() {
    return (
        <section className="py-20">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Education Column */}
                <div id="education" data-section="Education" className="scroll-mt-24">
                    <SectionHeader
                        title="Education"
                        description=""
                        className="mb-8 text-left"
                    />
                    <div className="space-y-6">
                        {data.education.map((edu, index) => (
                            <div
                                key={index}
                                className="bg-[rgba(15,15,20,0.55)] backdrop-blur-[10px] border border-white/[0.05] rounded-2xl p-8 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-[rgba(15,15,30,0.6)] hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] transition-all duration-500 group"
                                data-cursor="card"
                            >
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
                                <div className="flex justify-between items-center text-zinc-500 text-sm font-medium">
                                    <span>{edu.school}</span>
                                    <span className="bg-white/5 px-3 py-1 rounded-full">{edu.gpa || edu.marks}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements Column */}
                <div id="achievements" data-section="Achievements" className="scroll-mt-24">
                    <SectionHeader
                        title="Achievements"
                        description=""
                        className="mb-8 text-left"
                    />

                    <div className="space-y-4">
                        {data.achievements.map((achievement, index) => (
                            <a
                                key={index}
                                href={achievement.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-[rgba(15,15,20,0.55)] backdrop-blur-[10px] border border-white/[0.05] rounded-2xl p-8 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-[rgba(15,15,30,0.6)] hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] transition-all duration-500 group"
                                data-cursor="card"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-zinc-500 text-sm">{achievement.issuer}</p>
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-zinc-600 group-hover:text-blue-400 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 duration-500" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
