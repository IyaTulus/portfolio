import React from 'react';
import useGallery from '../../hooks/gallery/useGallery';

const Gallery: React.FC = () => {
    const { gallery, loading, error } = useGallery();

    return (
        <section className="mt-16 w-full mb-20 font-mono relative" id="gallery">
            
            {/* Minimalist Cyan Glow behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-term-cyan/5 blur-3xl pointer-events-none rounded-full"></div>

            <div className="flex justify-between items-center mb-14 w-full relative z-10 opacity-0-init animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="flex items-center gap-3">
                    <span className="text-[#4af626] font-bold text-xl animate-pulse">❯</span> 
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide mix-blend-screen">ls -la ./gallery</h2>
                </div>
            </div>

            <div className="relative z-10">
                {loading ? (
                    <div className="text-term-cyan animate-pulse flex items-center gap-3">
                        <span className="w-2 h-4 bg-term-cyan animate-ping"></span> Mounting visual sectors...
                    </div>
                ) : error ? (
                    <div className="text-red-500 font-bold border border-red-500/30 p-4 bg-red-500/10">
                        stderr: {error}
                    </div>
                ) : gallery.length === 0 ? (
                    <div className="text-term-dim font-bold flex items-center gap-2">
                        <span>Directory is empty.</span>
                    </div>
                ) : (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {gallery.map((item: any, index: number) => (
                            <div key={item.id} className="break-inside-avoid relative group border border-term-dim/30 bg-[#0a0f14]/60 hover:border-term-cyan/60 transition-all duration-500 overflow-hidden hover:shadow-[0_0_15px_rgba(0,255,238,0.15)] rounded-sm opacity-0-init animate-slide-up" style={{ animationDelay: `${(index + 2) * 150}ms` }}>
                                
                                {/* Top Scanline */}
                                <div className="absolute top-0 left-0 w-0 h-[2px] bg-term-cyan group-hover:w-full group-hover:shadow-[0_0_10px_rgba(0,255,238,0.8)] transition-all duration-700 z-20"></div>

                                {/* Image Box */}
                                <div className="relative overflow-hidden w-full group">
                                    <div className="absolute inset-0 bg-[#0a0f14]/40 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500 pointer-events-none"></div>
                                    <img 
                                        src={item.image} 
                                        alt={item.caption || `Gallery Image ${index}`}
                                        className="w-full h-auto object-cover grayscale-[60%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        loading="lazy"
                                    />
                                    
                                    {/* PID overlay */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="text-[10px] text-[#4af626] bg-[#0a0f14]/90 border border-[#4af626]/30 px-2 py-1 tracking-widest font-bold font-mono shadow-md">
                                            IMG:{(index + 1001).toString()}
                                        </span>
                                    </div>

                                    {/* Animated left border on hover */}
                                    <div className="absolute left-0 bottom-0 w-[2px] h-0 bg-[#4af626] group-hover:h-full transition-all duration-500 z-20"></div>
                                </div>

                                {/* Caption Area */}
                                {item.caption && item.caption.trim() !== "" && (
                                    <div className="p-4 bg-[#0a0f14]/80 border-t border-term-dim/20 relative z-20">
                                        <div className="text-sm text-term-base/80 font-mono tracking-wide leading-relaxed pl-2 border-l-2 border-transparent group-hover:border-term-cyan/50 transition-colors">
                                            <span className="text-term-dim font-bold mr-2">{">"}</span>
                                            {item.caption}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
