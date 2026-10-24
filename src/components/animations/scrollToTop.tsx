"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 bg-violet-600 hover:bg-violet-700 text-white p-3 rounded-full shadow-[0_12px_28px_-10px_rgba(124,58,237,0.7)] transition-colors"
            style={{ pointerEvents: isVisible ? "auto" : "none" }}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-5 h-5" />
        </motion.button>
    );
};

export default ScrollToTop;
