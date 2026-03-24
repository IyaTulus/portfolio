import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const menuItems = [
    { name: 'home', link: '/', icon: 'mdi:home-outline' },
    { name: 'about', link: '/about', icon: 'mdi:account-outline' },
    { name: 'skills', link: '/skills', icon: 'mdi:rocket-outline' },
    { name: 'experience', link: '/experience', icon: 'mdi:format-list-bulleted' },
    { name: 'projects', link: '/projects', icon: 'mdi:book-outline' },
    { name: 'gallery', link: '/gallery', icon: 'mdi:image-multiple-outline' },
];

const Header: React.FC = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll for subtle background opacity changes
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* TOP NAVBAR (Desktop Menu & Mobile Logo) */}
            <nav 
                className={classNames(
                    "fixed top-0 left-0 w-full z-50 font-mono transition-all duration-300",
                    {
                        "bg-[#0a0f14]/95 backdrop-blur-md border-b-[1px] border-term-cyan/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]": scrolled,
                        "bg-transparent border-b-[1px] border-transparent": !scrolled
                    }
                )}
            >
                {/* Top scanning line indicator */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4af626]/50 to-transparent"></div>
                
                <div className="max-w-5xl mx-auto px-6 h-16 flex justify-center md:justify-between items-center relative z-20">
                    {/* Logo / Prompt */}
                    <Link to="/" className="font-bold tracking-wider flex items-center group cursor-pointer text-sm md:text-base">
                        <span className="text-term-cyan">visitor</span>
                        <span className="text-term-dim">@</span>
                        <span className="text-white">aldi</span>
                        <span className="text-term-dim mx-2">~/</span>
                        <span className="text-term-cyan animate-pulse">_</span>
                    </Link>

                    {/* Desktop Menu (Hidden on Mobile) */}
                    <div className="hidden md:flex gap-8 items-center h-full">
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.link;
                            return (
                                <Link 
                                    key={item.link} 
                                    to={item.link}
                                    className={classNames(
                                        "relative flex flex-col items-center justify-center group h-full px-2",
                                        "text-[11px] tracking-[0.2em] uppercase transition-colors duration-300",
                                        {
                                            "text-term-cyan font-bold": isActive,
                                            "text-term-base/50 hover:text-white": !isActive,
                                        }
                                    )}
                                >
                                    {item.name}
                                    {/* Subtle active dot indicator */}
                                    {isActive && (
                                        <span className="absolute bottom-4 w-1 h-1 bg-term-cyan rounded-full shadow-[0_0_5px_rgba(0,255,238,0.8)]"></span>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* MOBILE BOTTOM DOCK (Hidden on Desktop) */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0b1215] border border-term-cyan/20 rounded-full flex items-center justify-between px-2 py-2 z-50 w-[90%] max-w-[360px]">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.link;
                    return (
                        <Link 
                            key={item.link} 
                            to={item.link}
                            className={classNames(
                                "w-11 h-11 rounded-full transition-all duration-300 flex items-center justify-center",
                                {
                                    "bg-[#133036] text-term-cyan": isActive,
                                    "text-[#3a4f54] hover:text-term-cyan/70": !isActive,
                                }
                            )}
                            title={item.name}
                        >
                            <Icon icon={item.icon} className="text-xl" />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Header;  