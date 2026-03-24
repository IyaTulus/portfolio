import useProject from '../../hooks/projects/useProject';
import profileHm from '../../assets/image/profile_hm.webp';

const Home: React.FC = () => {
    const { projects, loading, error } = useProject();

    const getProjectCount = () => {
        if (loading) return "loading...";
        if (error) return "ERR";
        return projects.length > 10 ? "10+" : projects.length.toString();
    };

    return (
        <section className="font-mono mt-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8 min-h-[70vh]">
            <div className="w-full md:w-3/5">
                {/* Greeting / Prompt */}
                <div className="text-term-cyan mb-4 text-sm tracking-widest uppercase flex items-center gap-2 font-semibold opacity-0-init animate-slide-up" style={{ animationDelay: '100ms' }}>
                    <span className="w-8 h-[1px] bg-term-cyan"></span>
                    System Online
                </div>

                <div className="mb-10 overflow-hidden opacity-0-init animate-slide-up" style={{ animationDelay: '250ms' }}>
                    <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight font-sans flex items-center">
                        <span className="text-[#4af626] mr-4">{">"}</span>
                        <span className="animate-type border-r-[4px] border-[#4af626] pr-2 animate-blink whitespace-nowrap overflow-hidden py-1 block">
                            Aldi Tulus Pribadi
                        </span>
                    </h1>
                    <p className="text-term-base/70 text-base md:text-lg leading-relaxed max-w-lg mt-4 opacity-0-init animate-slide-up" style={{ animationDelay: '400ms' }}>
                        Software Developer specializing in building scalable systems and elegant digital experiences. Crafting clean code and architecting resilient solutions.
                    </p>
                </div>

                {/* Data Grid */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-10 w-fit opacity-0-init animate-slide-up" style={{ animationDelay: '550ms' }}>
                    <div className="flex flex-col gap-1 border-l-2 border-term-dim/30 pl-3">
                        <span className="text-[10px] text-term-dim uppercase tracking-widest font-bold">Role</span>
                        <span className="text-term-base font-semibold">Full-stack Developer</span>
                    </div>
                    <div className="flex flex-col gap-1 border-l-2 border-term-dim/30 pl-3">
                        <span className="text-[10px] text-term-dim uppercase tracking-widest font-bold">Focus</span>
                        <span className="text-term-base font-semibold">Scalable Systems</span>
                    </div>
                    <div className="flex flex-col gap-1 border-l-2 border-term-dim/30 pl-3">
                        <span className="text-[10px] text-term-dim uppercase tracking-widest font-bold">Projects</span>
                        <span className="text-term-cyan font-bold">{getProjectCount()}</span>
                    </div>
                    <div className="flex flex-col gap-1 border-l-2 border-[#4af626]/30 pl-3">
                        <span className="text-[10px] text-term-dim uppercase tracking-widest font-bold">Status</span>
                        <span className="text-[#4af626] flex items-center gap-2 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4af626] animate-pulse"></span>
                            Available
                        </span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 opacity-0-init animate-slide-up" style={{ animationDelay: '700ms' }}>
                    <a
                        href="https://www.linkedin.com/in/alditulus"
                        target="_blank" rel="noreferrer"
                        className="border border-term-cyan text-term-cyan px-6 py-2.5 hover:bg-term-cyan hover:text-term-bg font-bold transition-all duration-300 text-sm tracking-wider"
                    >
                        LINKEDIN
                    </a>
                    <a
                        href="https://github.com/IyaTulus"
                        target="_blank" rel="noreferrer"
                        className="border border-term-dim text-term-base px-6 py-2.5 hover:border-white hover:text-white transition-all duration-300 text-sm tracking-wider"
                    >
                        GITHUB
                    </a>
                </div>
            </div>

            {/* Profile Image Node */}
            <div className="w-full md:w-2/5 flex justify-center md:justify-end opacity-0-init animate-slide-left" style={{ animationDelay: '850ms' }}>
                <div className="relative group w-48 md:w-60">
                    {/* Glowing Aura underneath */}
                    <div className="absolute inset-0 bg-term-cyan/10 blur-2xl rounded-full group-hover:bg-term-cyan/20 transition-colors duration-700"></div>

                    {/* Image Container */}
                    <div className="relative w-full aspect-[4/5] border border-term-dim/40 overflow-hidden bg-term-bg rounded-sm shadow-2xl">
                        {/* Overlay Scanline */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,238,0.03)_50%)] bg-[length:100%_4px] z-10 pointer-events-none"></div>

                        <img
                            src={profileHm}
                            alt="Aldi Tulus Pribadi"
                            className="w-full h-full object-cover object-top grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                        />

                        {/* Status Bar */}
                        <div className="absolute bottom-0 left-0 w-full bg-term-bg/90 backdrop-blur-sm border-t border-term-dim/40 py-2 px-3 flex justify-between items-center z-20">
                            <span className="text-[10px] text-term-dim tracking-widest font-semibold">SYS.NODE_01</span>
                            <span className="text-[10px] text-[#4af626] tracking-widest font-semibold animate-pulse">ONLINE</span>
                        </div>
                    </div>

                    {/* Decorative Corner accents */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-term-cyan/50 transition-colors duration-500 group-hover:border-[#4af626]"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-term-cyan/50 transition-colors duration-500 group-hover:border-[#4af626]"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-term-cyan/50 transition-colors duration-500 group-hover:border-[#4af626]"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-term-cyan/50 transition-colors duration-500 group-hover:border-[#4af626]"></div>
                </div>
            </div>
        </section>
    );
};

export default Home;