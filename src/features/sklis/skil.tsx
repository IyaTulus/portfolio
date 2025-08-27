import { Icon } from "@iconify/react";
import useSkills from "../../hooks/skils/useSkill";

const Skils: React.FC = () => {
    const { skills } = useSkills();

    return (
        <div className="px-5 md:px-16 py-10 bg-[#EBF4F6]" id="skill">
            <h1 className='flex text-[2rem] md:text-[4rem] tracking-wider font-bold w-[11rem] md:w-[45rem] text-[#088395]'>Skills</h1>
            <span className='flex text-[1rem] md:text-[2rem] tracking-wider font-light text-[#088395]'>My Skill</span>
            <div className="flex w-full justify-center items-center mt-10">
                <div className="grid md:grid-cols-2 gap-5 md:gap-x-[5rem] md:gap-y-[2rem] py-5">
                    {skills.map((item) => (
                        <div
                            key={item.id}
                            className="flex border-2 border-[#088395] rounded-br-lg rounded-tl-lg md:w-[25rem] 
             transition-all duration-300 ease-in-out transform hover:scale-105 
             hover:shadow-lg hover:shadow-[#088395]/30 hover:border-transparent 
             hover:bg-gradient-to-r hover:from-[#088395]/10 hover:to-[#37B7C3]/10"
                        >
                            <div className="flex justify-center items-center w-[4rem] p-3">
                                <Icon icon={item.icon} className="text-[2rem] text-[#088395]" />
                            </div>
                            <div className="flex flex-col justify-center p-3 text-slate-700">
                                <h1 className="font-semibold text-xl md:text-2xl">{item.nama}</h1>
                                <h1 className="font-light">{item.status}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skils;