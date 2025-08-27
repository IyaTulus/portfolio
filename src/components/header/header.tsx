import { Icon } from "@iconify/react";
import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skils', link: '#skils' },
    { name: 'Experince', link: '#experince' },
    { name: 'Project', link: '#project' },
];

const iconItems = [
    { name: 'lets-icons:home', link: '#home' },
    { name: 'ci:user-01', link: '#skils' },
    { name: 'mdi:brain-freeze-outline', link: '#about' },
    { name: 'octicon:project-roadmap-16', link: '#experince' },
    { name: 'lucide:brain-circuit', link: '#project' },
];

const Header: React.FC = () => {
    const [shadowNav, setShadowNav] = useState(false);
    const [isActives, setIsActives] = useState('#home');

    const navButtom = () => {
        return (
            <nav className="flex gap-x-[15px] backdrop-blur-[1.5px] shadow-md p-2 z-50 md:hidden justify-around m-10 rounded-full">
                {iconItems.map((item) => {
                    const isActive = isActives === item.link;
                    return (
                        <Link key={item.link} to={item.link} onClick={() => setIsActives(item.link)} className={classNames(
                            "p-3 m-1 hover:text-[#37B7C3] transition-colors duration-100 text-[23px] text-slate-700 rounded-full",
                            {
                                "bg-[#37B7C3] text-white hover:text-slate-100": isActive,
                            }
                        )}>
                            <Icon icon={item.name} />
                        </Link>
                    )
                })}
            </nav>
        )
    }

    const navTopDeks = () => {
        return (
            <nav className="flex fixed top-0 left-0 w-full backdrop-blur-[1.5px] shadow-md p-4 z-50 justify-between items-center">
                <div className="hidden md:flex gap-8 mr-auto w-full text-[#37B7C3] font-medium">
                    <div className="mx-10">
                        <h1 className="font-bold text-[18px]">AldigitalDev</h1>
                    </div>

                    <div className="flex w-full justify-center gap-10 items-center text-slate-700 font-normal">
                        {menuItems.map((item) => {
                            const isActive = isActives === item.link;
                            return (
                                <Link key={item.link} to={item.link} onClick={() => setIsActives(item.link)} className={classNames(
                                    "hover:text-[#088395] transition-colors duration-100",
                                    {
                                        "text-[#37B7C3] ": isActive,
                                    }
                                )}>
                                    {item.name}
                                </Link>

                            )
                        }
                        )}
                    </div>
                </div>

                <button className="md:hidden text-[#37B7C3] hover:text-[#088395] transition-colors duration-100" onClick={() => setShadowNav(!shadowNav)}>
                    <Icon icon="stash:burger-classic-duotone" width="32" height="32" />
                </button>
            </nav>
        )
    }

    return (
        <>
            {navTopDeks()}
            {shadowNav === true && (
                <motion.div
                    className="flex fixed bottom-0 justify-center items-center w-full"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    transition={{ duration: 0.1 }}
                >
                    {navButtom()}
                </motion.div>
            )}
        </>
    )
}

export default Header;  