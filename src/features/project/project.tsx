import { Icon } from "@iconify/react";
import useProject from "../../hooks/projects/useProject";

const Project: React.FC = () => {
    const { projects, loading, error } = useProject();

    return (
        <section className="mt-16 w-full mb-20 font-mono relative" id="projects">

            {/* Minimalist Cyan Glow behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-term-cyan/5 blur-3xl pointer-events-none rounded-full"></div>

            <div className="flex justify-between items-center mb-14 w-full relative z-10 opacity-0-init animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="flex items-center gap-3">
                    <span className="text-[#4af626] font-bold text-xl animate-pulse">❯</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide mix-blend-screen">ls -la ./projects</h2>
                </div>
            </div>

            <div className="relative z-10">
                {loading ? (
                    <div className="text-term-cyan animate-pulse flex items-center gap-3">
                        <span className="w-2 h-4 bg-term-cyan animate-ping"></span> Scanning directories...
                    </div>
                ) : error ? (
                    <div className="text-red-500 font-bold border border-red-500/30 p-4 bg-red-500/10">
                        stderr: {error}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {projects.map((project: any, index: number) => (
                            <div key={project.id} className="group relative flex flex-col border border-term-dim/30 bg-[#0a0f14]/60 hover:border-term-cyan/60 transition-all duration-500 overflow-hidden hover:shadow-[0_0_15px_rgba(0,255,238,0.15)] rounded-sm opacity-0-init animate-slide-up" style={{ animationDelay: `${(index + 2) * 150}ms` }}>

                                {/* Top Scanline */}
                                <div className="absolute top-0 left-0 w-0 h-[2px] bg-term-cyan group-hover:w-full group-hover:shadow-[0_0_10px_rgba(0,255,238,0.8)] transition-all duration-700 z-20"></div>

                                {/* Image Container */}
                                <div className="h-48 md:h-56 relative overflow-hidden border-b border-term-dim/30">
                                    <div className="absolute inset-0 bg-term-bg/40 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500 pointer-events-none"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f14] to-transparent z-10 pointer-events-none"></div>
                                    <img
                                        src={project.image}
                                        alt={project.nama}
                                        className="w-full h-full object-cover object-center grayscale-[80%] opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        loading="lazy"
                                    />
                                    {/* Project Category Tag overlay on image */}
                                    {project.kategori && project.kategori.trim() !== "" && (
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="text-[10px] text-[#0a0f14] bg-term-cyan font-bold px-2 py-1 tracking-widest uppercase shadow-[0_0_10px_rgba(0,255,238,0.5)]">
                                                {project.kategori}
                                            </span>
                                        </div>
                                    )}
                                    {/* PID overlay */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="text-[10px] text-[#4af626] bg-[#0a0f14]/90 border border-[#4af626]/30 px-2 py-1 tracking-widest font-bold font-mono shadow-md">
                                            PID:{(index + 101).toString()}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-6 flex flex-col flex-grow relative">
                                    {/* Animated left border on hover */}
                                    <div className="absolute left-0 bottom-0 w-[2px] h-0 bg-[#4af626] group-hover:h-full transition-all duration-500 delay-100"></div>

                                    <div className="flex justify-between items-start mb-2 pt-1 pl-2">
                                        <h3 className="font-bold text-xl md:text-2xl text-white tracking-wide group-hover:text-term-cyan transition-colors duration-300">
                                            {project.nama}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-term-base/70 mb-6 line-clamp-3 leading-relaxed text-justify pl-2">
                                        {project.deskripsi}
                                    </p>

                                    {/* Tech Stack */}
                                    {project.bahasa && project.bahasa.trim() !== "" && (
                                        <div className="mt-auto pl-2">
                                            <div className="text-[10px] text-term-cyan/70 uppercase tracking-widest font-bold mb-3">Dependencies</div>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.bahasa.split(",").filter((t: string) => t.trim() !== "").map((tech: string, i: number) => (
                                                    <span key={i} className="text-xs text-term-purple bg-term-purple/10 border border-term-purple/20 px-2 py-0.5 hover:border-term-purple/60 hover:text-white hover:bg-term-purple/20 transition-colors duration-300">
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="pt-4 mt-auto border-t border-term-dim/20 flex gap-5 pl-2">

                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-[#4af626] transition-colors duration-300 group/link outline-none"
                                            >
                                                <span className="tracking-wide border-b border-transparent group-hover/link:border-[#4af626] transition-all">View Detail</span>
                                            </a>
                                        )}
                                        {project.link_demo && (
                                            <a
                                                href={project.link_demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-term-cyan hover:text-white transition-colors duration-300 group/link outline-none"
                                            >
                                                <Icon icon="mdi:web" className="text-xl group-hover/link:drop-shadow-[0_0_5px_rgba(0,255,238,0.8)]" />
                                                <span className="tracking-wide border-b border-transparent group-hover/link:border-term-cyan transition-all">Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* View More Button Container */}
            {!loading && !error && projects.length > 0 && (
                <div className="mt-16 flex justify-center relative z-10 opacity-0-init animate-slide-up" style={{ animationDelay: '600ms' }}>
                    <button className="group relative px-6 py-2 border border-term-cyan/40 bg-[#0a0f14]/80 text-term-cyan font-bold tracking-widest uppercase text-sm hover:shadow-[0_0_15px_rgba(0,255,238,0.3)] hover:text-white transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-term-cyan/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative z-10 flex items-center gap-2">
                            <span>./view_more.sh</span>
                            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">❯</span>
                        </span>
                    </button>
                </div>
            )}
        </section>
    );
};

export default Project;