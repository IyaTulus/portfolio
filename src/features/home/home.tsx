import useProject from '../../hooks/projects/useProject';
import profileHm from '../../assets/image/profile_hm.png';
import { motion, AnimatePresence } from "framer-motion";
import './home.css';

const Home: React.FC = () => {
    const { projects, loading, error } = useProject();

    const countTotalProjects = () => {
        if (loading) {
            return (
                <p>Loading...</p>
            );
        }

        if (error) {
            return (
                <p>error</p>
            );
        }

        if (projects.length > 10) {
            return "10+";
        }

        return `${projects.length}`;
    }

    return (
        <div id="home" className="flex h-[30rem] md:h-[49rem]">
            <div className="w-full" />
            <motion.div
                className="flex items-center h-full w-[100rem] bg-[#37B7C3] relative headerBlue"
                initial={{ opacity: 0 }} // posisi awal
                animate={{ opacity: 1 }}  // posisi akhir
                transition={{ duration: 2, ease: "easeOut" }} // transisi animasi
            />
            <div className='absolute w-full h-[30rem] md:h-[49rem] top-0 left-0 flex items-center'>
                <motion.div className='w-full p-5 md:p-20'
                    initial={{ opacity: 0, x:-100 }} // posisi awal
                    animate={{ opacity: 1, x:0 }}  // posisi akhir
                    transition={{ duration: 1, ease: "easeOut" }} // transisi animasi
                >
                    <h1 className='flex text-[2rem] md:text-[4rem] tracking-wider font-bold w-[11rem] md:w-[45rem] text-[#088395]'>Software Developer</h1>
                    <div className='flex gap-5 mt-5'>
                        <a className='border-[#088395] border-2 bg-[#088395] p-2 rounded-tl-lg rounded-br-lg text-white hover:bg-white hover:text-[#088395] duration-150 md:text-xl'>Linkedin</a>
                        <a className='border-[#088395] border-2 p-2 rounded-tl-lg rounded-br-lg text-[#088395] hover:bg-[#088395] hover:text-white duration-150 md:text-xl'>Github</a>
                    </div>
                    <div className='mt-10 md:mt-14 flex flex-col md:justify-bottom md:gap-1'>
                        <h1 className='text-[13px] md:text-[25px] tracking-wider font-medium md:font-light text-[#088395]'>Projects Worked in my career</h1>
                        <h1 className='text-[20px] text-[50px] tracking-wider font-medium text-[#088395]'>{countTotalProjects()}</h1>
                    </div>
                </motion.div>
                <motion.div
                    className='w-full flex justify-end pr-5 md:pr-20 h-full items-end'
                    initial={{ opacity: 0 }} // posisi awal
                    animate={{ opacity: 1 }}  // posisi akhir
                    transition={{ duration: 1, ease: "easeOut" }} // transisi animasi
                >
                    <div className='absolute pl-[200px] w-[25rem] md:w-[38rem]'>
                        <img src={profileHm} alt="" className='grayscale' />
                    </div>
                    <div className='w-full h-full flex justify-end items-center'>
                        <h1 className="absolute right-0 top-1/2 translate-x-[155px] md:translate-x-[17rem] rotate-90 text-[35px] md:text-[64px] font-extrabold text-white border-white text-stroke">
                            ALDI TULUS PRIBADI
                        </h1>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Home;