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
            className="fixed bottom-6 right-6 z-50 bg-slate-900 hover:bg-slate-700 text-white p-3 rounded-full shadow-xl transition-colors"
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-5 h-5" />
        </motion.button>
    );
};

export default ScrollToTop;
