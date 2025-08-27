import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useProject from "../../hooks/projects/useProject";
import { log } from "console";

// Definisikan tipe data yang lebih kaya untuk setiap proyek
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

    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

    useEffect(() => {
        if (!loading && projects && projects.length > 0 && !selectedProject) {
            setSelectedProject(projects[0]);
        }
    }, [loading, projects, selectedProject]);

    const handleProjectClick = (project: ProjectType) => {
        setSelectedProject(project);
    };

    const renderListProjects = () => {
        // Varian animasi untuk container dan item list
        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.08, // Jarak waktu antar animasi item
                },
            },
        };

        const itemVariants = {
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
        };

        if (loading) {
            return (
                <div>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="flex gap-2 m-2 items-center p-4 animate-pulse">
                            <div className="w-[35px] h-[35px] bg-slate-200 rounded-full"></div>
                            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                        </div>
                    ))}
                </div>
            );
        }

        if (error) {
            return <p className="text-center p-4 text-red-500">Gagal memuat data proyek.</p>;
        }

        return (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col p-2"
            >
                {projects?.map((project) => {
                    const isActive = selectedProject?.id === project.id;

                    return (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            onClick={() => handleProjectClick(project)}
                            whileHover={{ scale: 1.03, boxShadow: '0px 8px 20px rgba(0,0,0,0.1)' }}
                            whileTap={{ scale: 0.98 }}
                            className={`group relative flex gap-4 items-center cursor-pointer m-1 p-3 rounded-lg transition-all duration-300
                                ${isActive
                                    ? 'bg-[#088395] text-white shadow-lg'
                                    : 'hover:bg-white'
                                }`}
                        >
                            <motion.div
                                layoutId="active-border"
                                className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg
                                ${isActive ? 'bg-teal-300' : 'bg-transparent'}`}
                            />
                            <div className={`flex-shrink-0 transition-transform duration-300 ${isActive ? '' : 'group-hover:scale-110'}`}>
                                <Icon icon={project.icon} width="40" height="40" />
                            </div>
                            <div className="flex-grow">
                                <h1 className="font-bold text-lg leading-tight">{project.nama}</h1>
                                <p className={`text-sm transition-colors duration-300 
                                    ${isActive ? 'text-teal-200' : 'text-slate-500 group-hover:text-slate-700'}`
                                }>
                                    {project.kategori}
                                </p>
                            </div>
                            {!isActive && (
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Icon icon="mdi:arrow-right" className="text-[#088395]" />
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>
        );
    };

    const renderDetailProject = () => {
        // ... (Kode renderDetailProject tidak perlu diubah)
        console.log(selectedProject?.image);
        return (
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedProject ? selectedProject.id : 'empty-state'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="w-full h-full"
                >
                    {!selectedProject ? (
                        <div className="flex flex-col justify-center items-center h-full text-slate-400 p-4">
                            <Icon icon="fluent:select-object-24-regular" width="80" />
                            <p className="mt-4 text-lg text-center">Pilih proyek untuk melihat detailnya.</p>
                        </div>
                    ) : (
                        <div className="p-5 text-slate-700 flex flex-col gap-4 h-full overflow-y-auto">
                            <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-lg shadow-lg flex-shrink-0">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.nama}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <h1 className="absolute bottom-4 left-4 text-3xl font-bold text-white tracking-tight">
                                    {selectedProject.nama}
                                </h1>
                            </div>
                            <p className="text-base font-light flex-grow">{selectedProject.deskripsi}</p>
                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-10 bg-[#088395] text-white px-4 rounded-lg hover:bg-[#077a8a] transition-colors shadow-sm">
                                <Icon icon="mdi:web" />
                                Live Demo
                            </a>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        );
    };

    return (
        <div className="px-5 md:px-16 py-10 bg-[#EBF4F6]" id="projects">
            <h1 className='text-[2rem] md:text-[4rem] tracking-wider font-bold w-auto text-[#088395]'>Projects</h1>
            <span className='flex text-[1rem] md:text-[2rem] tracking-wider font-light text-slate-500 -mt-2'>Karya yang pernah saya buat</span>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-[3rem] max-w-7xl mx-auto">
                <div className="md:col-span-2 bg-white rounded-tr-lg rounded-bl-lg shadow-lg overflow-y-auto h-[35rem] p-2">
                    {renderListProjects()}
                </div>

                <div className="md:col-span-3 bg-white rounded-tr-lg rounded-bl-lg shadow-lg flex h-[35rem]">
                    {renderDetailProject()}
                </div>
            </div>
        </div>
    );
};

export default Project;