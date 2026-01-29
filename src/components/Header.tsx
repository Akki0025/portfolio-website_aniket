"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import clsx from "clsx";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
];

export function Header() {
    const [activeSection, setActiveSection] = useState("home");
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    // Hide header on scroll down, show on scroll up (optional UX polish)
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Handle Active Section (Simple Intersection Observer alternative or just click tracking)
    // For a single page app, Intersection Observer is best.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        navItems.forEach((item) => {
            const section = document.querySelector(item.href);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-[50] flex justify-center pt-6 pointer-events-none"
        >
            <nav className="pointer-events-auto bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                <ul className="flex items-center gap-1 md:gap-2">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                                className={clsx(
                                    "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300",
                                    activeSection === item.href.substring(1)
                                        ? "text-white"
                                        : "text-zinc-500 hover:text-zinc-300"
                                )}
                            >
                                {activeSection === item.href.substring(1) && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white/[0.08] rounded-full"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30,
                                        }}
                                    />
                                )}
                                <span className="relative z-10">{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
}
