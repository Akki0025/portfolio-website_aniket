"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [cursorState, setCursorState] = useState<"default" | "button" | "card" | "section">("default");
    const [cursorText, setCursorText] = useState("");

    // Mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics
    const springConfig = { damping: 20, stiffness: 100, mass: 0.8 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Button/Link interactions
            const isButton = target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button") || target.closest("a");

            // Card interactions
            const isCard = target.closest("[data-cursor='card']");

            // Section detection
            const section = target.closest("[data-section]");
            const sectionName = section ? section.getAttribute("data-section") : "";

            if (isButton) {
                setCursorState("button");
                setCursorText("");
            } else if (isCard) {
                setCursorState("card");
                setCursorText(""); // No text on card hover
            } else if (section) {
                setCursorState("section");
                setCursorText(sectionName || "");
            } else {
                setCursorState("default");
                setCursorText("");
            }
        };

        const handleMouseOut = () => {
            setCursorState("default");
            setCursorText("");
        };

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            {/* Star Cursor (Card / Button / Default) - Hidden on Section */}
            <motion.div
                className="absolute flex items-center justify-center text-white"
                initial={false}
                animate={{
                    opacity: cursorState === "section" ? 0 : (cursorState === "button" || cursorState === "card" ? 0.9 : 0.4),
                    scale: cursorState === "section" ? 0 : (cursorState === "button" ? 1.2 : (cursorState === "card" ? 1 : 0.7)),
                    filter: (cursorState === "button" || cursorState === "card")
                        ? "drop-shadow(0 0 4px rgba(255, 255, 255, 0.6)) blur(0px)"
                        : "drop-shadow(0 0 1px rgba(255, 255, 255, 0.2)) blur(0px)",
                }}
                style={{ mixBlendMode: "screen" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <StarIcon className="w-6 h-6" />
            </motion.div>

            {/* Text Pill (Section Only) */}
            <motion.div
                className="absolute flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/10 overflow-hidden"
                initial={{ width: 0, padding: 0, opacity: 0 }}
                animate={{
                    width: (cursorState === "section" && cursorText) ? "auto" : 0,
                    paddingLeft: (cursorState === "section" && cursorText) ? 20 : 0,
                    paddingRight: (cursorState === "section" && cursorText) ? 20 : 0,
                    height: (cursorState === "section" && cursorText) ? 36 : 0,
                    opacity: (cursorState === "section" && cursorText) ? 1 : 0,
                    scale: (cursorState === "section" && cursorText) ? 1 : 0,
                    x: (cursorState === "section" && cursorText) ? 24 : 0, // Offset to right
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <motion.span
                    className="text-xs font-bold text-white uppercase tracking-widest whitespace-nowrap"
                >
                    {cursorText}
                </motion.span>
            </motion.div>
        </motion.div>
    );
}

function StarIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 0C12 0 14.5 9 22 12C14.5 15 12 24 12 24C12 24 9.5 15 2 12C9.5 9 12 0 12 0Z" />
        </svg>
    );
}
