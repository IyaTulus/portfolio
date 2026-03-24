import useExperience from "../../hooks/experience/useExperience";

const Experience: React.FC = () => {
    const { experience, loading } = useExperience();

    return (
        <section className="mt-16 w-full mb-20 font-mono relative" id="experience">
            
            {/* Title */}
            <div className="flex justify-center mb-16 relative z-10 opacity-0-init animate-slide-up" style={{ animationDelay: '100ms' }}>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide mix-blend-screen">
                    Experiences
                </h2>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-0">
                {loading ? (
                    <div className="text-term-cyan animate-pulse flex items-center justify-center gap-3">
                        <span className="w-2 h-4 bg-term-cyan animate-ping"></span> Tailing system logs...
                    </div>
                ) : (
                    <div className="relative w-full">
                        {/* Center Line Axis */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-term-dim/30 md:-translate-x-1/2"></div>
                        
                        <div className="flex flex-col gap-10 md:gap-12">
                            {experience.map((item: any, index: number) => {
                                const renderDate = item.end ? `${item.start} - ${item.end}` : item.start;

                                return (
                                    <div key={item.id} className="relative flex flex-col md:flex-row items-start justify-between group opacity-0-init animate-slide-up" style={{ animationDelay: `${(index + 2) * 150}ms` }}>
                                        
                                        {/* Center Node / Dot */}
                                        <div className="absolute left-[-5px] md:left-1/2 w-2.5 h-2.5 bg-[#0a0f14] border-2 border-term-cyan/50 rounded-full md:-translate-x-1/2 mt-1.5 z-10 group-hover:bg-term-cyan group-hover:shadow-[0_0_10px_rgba(0,255,238,0.8)] transition-all duration-300"></div>
                                        
                                        {/* Left Side: Date & Location */}
                                        <div className="w-full md:w-[45%] text-left md:text-right pl-6 md:pl-0 pr-0 md:pr-10 mb-2 md:mb-0">
                                            {renderDate && (
                                                <div className="text-sm md:text-base text-term-base/80 mb-1 font-semibold tracking-wide">
                                                    {renderDate}
                                                </div>
                                            )}
                                            {item.location && (
                                                <div className="text-xs text-term-dim tracking-wide">
                                                    {item.location}
                                                </div>
                                            )}
                                        </div>
                                        
                                        {/* Right Side: Role, Company, Tech */}
                                        <div className="w-full md:w-[45%] text-left pl-6 md:pl-10">
                                            <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide group-hover:text-term-cyan transition-colors duration-300">
                                                {item.deskripsi}
                                            </h3>
                                            <div className="text-sm md:text-base text-term-cyan font-medium">
                                                {item.nama}
                                            </div>
                                            {item.tach && (
                                                <div className="text-xs text-term-dim/80 leading-relaxed font-semibold mt-2">
                                                    {item.tach}
                                                </div>
                                            )}
                                        </div>
                                        
                                    </div>
                                );
                            })}
                        </div>
                        
                        {/* Down Arrow "See Others" */}
                        <div className="mt-16 flex flex-col items-center justify-center relative z-10">
                            <div className="w-8 h-8 rounded-full bg-[#182732] border border-term-cyan/20 flex flex-col items-center justify-center mb-4 cursor-pointer hover:bg-term-cyan/20 hover:border-term-cyan transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                    <polyline points="7 13 12 18 17 13"></polyline>
                                    <polyline points="7 6 12 11 17 6"></polyline>
                                </svg>
                            </div>
                            <span className="text-white text-sm font-bold tracking-wide">See Others</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;