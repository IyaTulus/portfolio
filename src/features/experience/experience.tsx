import { useEffect, useRef, useState } from "react";
import useExperience from "../../hooks/experience/useExperience";
import './experience.css';
import classNames from "classnames";

const Experience: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { experience } = useExperience();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (experience.length === 0) return;

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === experience.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [experience]);

    useEffect(() => {
        // Ambil referensinya terlebih dahulu
        const container = containerRef.current;
        const card = cardRefs.current[activeIndex];

        // Lakukan pengecekan pada variabel yang sudah dibuat
        if (container && card) {
            // Di dalam blok ini, TypeScript tahu 'card' tidak mungkin 'null'
            container.scrollTo({
                left: card.offsetLeft - container.offsetLeft,
                behavior: "smooth",
            });
        }
    }, [activeIndex]);

    const renderExperienceCard = () => {
        return (
            <div
                className="flex flex-col md:flex-row gap-6 overflow-y-auto md:overflow-x-auto md:overflow-y-hidden md:max-w-[55rem] h-[25rem] md:h-auto scrollbar-hide"
            >
                {experience.map((item, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <div
                            key={item.id}
                            ref={(el) => {
                                cardRefs.current[index] = el;
                            }}
                            className={classNames(
                                "flex md:flex-shrink-0 w-[23rem] md:w-[25rem] rounded-tr-lg rounded-bl-lg border-2 border-[#088395] transition-all duration-700 ease-in-out snap-center",
                                {
                                    "scale-100 blur-0 opacity-100 shadow-lg": isActive,
                                    "scale-90 blur-sm opacity-50": !isActive,
                                }
                            )}
                        >
                            <div className="relative flex bg-cover bg-center justify-center items-center  rounded-bl-lg" style={{
                                backgroundImage: `url(${item.image})`
                            }}>
                                {/* Overlay blur + gelap */}
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm  rounded-bl-lg" />

                                <div className="relative z-10 text-white">
                                    <img
                                        src={item.image}
                                        alt="WAKAHIM"
                                        className="w-[10rem]  rounded-bl-lg"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center gap-2 px-2 text-slate-700">
                                <h1 className="font-semibold">{item.nama}</h1>
                                <h1 className="font-light">{item.deskripsi}</h1>
                            </div>
                        </div>
                    );
                })}
            </div>

        )
    }

    return (
        <div className="px-5 md:px-16 py-10" id="skill">
            <h1 className='flex text-[2rem] md:text-[4rem] tracking-wider font-bold w-[11rem] md:w-[45rem] text-[#088395]'>Experience</h1>
            <span className='flex text-[1rem] md:text-[2rem] tracking-wider font-light text-[#088395]'>Experience and organization</span>
            <div className="flex justify-center px-4 py-8 md:py-[8rem]">
                {renderExperienceCard()}
            </div>
        </div>
    )
}

export default Experience;