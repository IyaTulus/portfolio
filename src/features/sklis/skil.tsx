import { Icon } from "@iconify/react";
import useSkills from "../../hooks/skils/useSkill";

const Skils: React.FC = () => {
    const { skills, loading, error } = useSkills();

    return (
        <section className="mt-12 w-full mb-16 font-mono relative" id="skills">
            
            {/* Minimalist Cyan Glow behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-term-cyan/5 blur-3xl pointer-events-none rounded-full"></div>

            <div className="flex justify-between items-center mb-12 w-full relative z-10 opacity-0-init animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="flex items-center gap-3">
                    <span className="text-[#4af626] font-bold text-xl animate-pulse">❯</span> 
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide mix-blend-screen">npm list --depth=0</h2>
                </div>
            </div>
            
            <div className="relative z-10">
                {loading ? (
                    <div className="text-term-cyan animate-pulse flex items-center gap-3">
                        <span className="w-2 h-4 bg-term-cyan animate-ping"></span> Resolving dependencies...
                    </div>
                ) : error ? (
                    <div className="text-red-500 font-bold border border-red-500/30 p-4 bg-red-500/10">
                        stderr: {error}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                        {skills.map((item, index) => (
                            <div
                                key={item.id}
                                className="group relative flex flex-col justify-between border-t border-b border-term-dim/30 bg-[#0a0f14]/40 hover:bg-term-cyan/5 p-5 transition-all duration-300 opacity-0-init animate-slide-up"
                                style={{ animationDelay: `${(index + 1) * 100}ms` }}
                            >
                                {/* Scanline Highlight Top */}
                                <div className="absolute top-0 left-0 w-0 h-[1px] bg-term-cyan group-hover:w-full group-hover:shadow-[0_0_10px_rgba(0,255,238,0.8)] transition-all duration-500"></div>

                                <div className="flex items-start justify-between mb-6">
                                    <Icon icon={item.icon} className="text-4xl text-term-dim group-hover:text-[#4af626] group-hover:drop-shadow-[0_0_8px_#4af626] transition-all duration-300" />
                                    <span className="text-[10px] text-term-purple/60 font-bold tracking-widest uppercase">
                                        MOD_{(index + 1).toString().padStart(2, '0')}
                                    </span>
                                </div>
                                
                                <div>
                                    <h3 className="font-bold text-term-base group-hover:text-white transition-colors text-base truncate mb-3 tracking-wide select-all">
                                        {item.nama}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <div className="text-[10px] text-term-dim uppercase tracking-widest font-bold">Status</div>
                                        <div className="text-[10px] text-term-cyan font-bold tracking-widest px-2 py-0.5 border border-term-cyan/30 bg-term-cyan/10 group-hover:bg-[#4af626]/20 group-hover:text-[#4af626] group-hover:border-[#4af626]/50 transition-colors">
                                            {item.status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Skils;