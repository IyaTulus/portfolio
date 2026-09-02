import useDescAbout from '../../hooks/descAbout/useDescAbout';
import useAbout from '../../hooks/about/useAbout';
import DOMPurify from 'dompurify';
import { Icon } from '@iconify/react';

const About: React.FC = () => {
    const { descAbout, loading: loadingDesc } = useDescAbout();
    const { about, loading: loadingAbout } = useAbout();

    return (
        <section className="mt-12 w-full mb-16 font-mono" id="about">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 relative">

                {/* Minimalist Cyan Glow behind the whole section */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-term-cyan/5 blur-3xl pointer-events-none rounded-full"></div>

                {/* Left Column: Description */}
                <div className="w-full md:w-[50%] z-10">
                    <div className="flex justify-between items-center mb-10 relative opacity-0-init animate-slide-up" style={{ animationDelay: '100ms' }}>
                        <div className="flex items-center gap-3">
                            <span className="text-[#4af626] font-bold text-xl animate-pulse">❯</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide mix-blend-screen">cat about.md</h2>
                        </div>
                    </div>

                    {loadingDesc ? (
                        <div className="text-term-cyan animate-pulse flex items-center gap-3">
                            <span className="w-2 h-4 bg-term-cyan animate-ping"></span> Reading stream...
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {descAbout.map((item, index) => (
                                <div
                                    key={item.id}
                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.deskripsi) }}
                                    className="text-base text-term-base/90 leading-relaxed text-justify border-l-[3px] border-term-purple/30 pl-5 hover:border-term-cyan transition-colors duration-500 hover:shadow-[-5px_0_15px_-5px_rgba(0,255,238,0.4)] opacity-0-init animate-slide-up"
                                    style={{ animationDelay: `${(index + 2) * 150}ms` }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Divider Line */}
                <div className="hidden md:block w-[1px] bg-gradient-to-b from-transparent via-term-cyan/40 to-transparent shadow-[0_0_10px_rgba(0,255,238,0.2)]"></div>

                {/* Right Column: Core Offerings */}
                <div className="w-full md:w-[45%] flex flex-col z-10">
                    <div className="mb-10 relative opacity-0-init animate-slide-up" style={{ animationDelay: '300ms' }}>
                        <div className="text-term-purple font-semibold flex items-center gap-3 text-lg">
                            <span className="text-term-cyan">{"//"}</span>
                            <span className="tracking-wide text-white">core_offerings.json</span>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {loadingAbout ? (
                            <div className="text-term-cyan animate-pulse">Querying specs...</div>
                        ) : (
                            about.map((item, index) => (
                                <div key={item.id} className="group border-l-[2px] p-2 border-term-dim/30 hover:border-[#4af626] hover:bg-term-cyan/5 pl-5 py-2 transition-all duration-300 opacity-0-init animate-slide-up" style={{ animationDelay: `${(index + 3) * 150}ms` }}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex gap-4">
                                            <span className="text-xs text-term-purple mt-1 font-bold">
                                                0{index + 1}
                                            </span>
                                            <span className="font-bold text-term-cyan group-hover:text-white transition-colors text-lg tracking-wide">
                                                {item.title}
                                            </span>
                                        </div>
                                        <Icon icon={item.icon} className="text-term-dim text-xl group-hover:text-[#4af626] group-hover:drop-shadow-[0_0_5px_#4af626] transition-all duration-300" />
                                    </div>
                                    <div className="text-sm text-term-base/70 leading-relaxed pl-8">
                                        {item.description}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;