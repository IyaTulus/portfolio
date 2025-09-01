import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useProject from "../../hooks/projects/useProject";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from "swiper"
import 'swiper/css';
import 'swiper/css/pagination';
import './projectStyle.css';
import classNames from "classnames";
import { Link } from "react-router-dom";

interface ProjectType {
    id: number;
    nama: string;
    deskripsi: string;
    image: string;
    icon: string;
    link: string;
    kategori: string; // Properti baru untuk sub-judul
}

const Project = () => {
    const { projects, loading, error } = useProject();
    const [activeIndex, setActiveIndex] = useState(0);

    const renderProjects = () => {
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <Swiper
                modules={[EffectCoverflow, Pagination]}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{clickable: true}}
                className="mySwiper"
                onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
            >
                {projects.map((key, index) => (
                    <SwiperSlide
                        key={key.id}
                        className={classNames(
                            "mySwiper", {
                                "swiper-slide-active": activeIndex === index,
                            } 
                        )}
                        onClick={() => window.open(key.link, "_blank")}
                    >
                        <div className="absolute w-full h-full z-10 bg-gradient-to-t from-black via-black/70 to-transparent transition duration-700 ease-in-out info-project">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="absolute bottom-0 left-0 right-0 text-white p-4 rounded-b-lg"
                            >
                                <h3 className="text-lg font-bold">{key.nama}</h3>
                                <p className="text-sm">{key.kategori}</p>
                                <p className="mt-2 text-sm">{key.deskripsi}</p>
                                <div className="mt-2 flex space-x-2">
                                    <Icon icon={key.icon} width="24" height="24" />
                                </div>
                            </motion.div>
                        </div>
                        <div className={classNames(
                            "absolute bg-black/25 backdrop-blur-sm w-full h-full z-20 transition duration-700 ease-in-out", {
                                "opacity-100": activeIndex !== index,
                                "opacity-0": activeIndex === index,
                            }
                        )}/>
                        <img src={key.image} alt={key.nama} className="transition duration-700 ease-in-out"/>
                    </SwiperSlide>
                ))}

            </Swiper>
        );
    }

    return (
        <div className="px-5 md:px-16 py-10 bg-[#EBF4F6]" id="projects">
            <h1 className='text-[2rem] md:text-[4rem] tracking-wider font-bold w-auto text-[#088395]'>Projects</h1>
            <span className='flex text-[1rem] md:text-[2rem] tracking-wider font-light text-[#088395]'>My work</span>
            <div className="flex justify-center items-center mt-10">
                {renderProjects()}
            </div>
        </div>
    );
};

export default Project;