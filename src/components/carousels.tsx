"use client"
import { useEffect, useRef } from "react";

import { certifications } from "@/lib/data";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";


const Carousels: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const duplicateTestimonials = [...certifications, ...certifications];

    const startInfiniteScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;

            const scroll = () => {
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0; // Reset scroll position when reaching the duplicate's end
                }
                container.scrollLeft += 1; // Adjust the increment for speed
            };

            const scrollInterval = setInterval(scroll, 16); // ~60fps for smooth scrolling

            return () => clearInterval(scrollInterval); // Clear interval on cleanup
        }
    };

    useEffect(() => {
        const cleanup = startInfiniteScroll();
        return cleanup; // Cleanup function
    }, []);

    return (
        <motion.div ref={scrollContainerRef} className="flex gap-5 overflow-x-scroll no-scrollbar w-full py-7 sm:py-16 px-10 scrollbar-hidden">
            <div className="flex">
                {
                    duplicateTestimonials.map((cert, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-red-300 border border-gray-700 cursor-pointer rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <h4 className="text-lg font-semibold mb-2 text-gray-500">{cert.name}</h4>
                                <p className="text-gray-300 mb-1">{cert.issuer}</p>
                                <p className="text-sm text-purple-500 flex items-center">
                                    <Calendar className="mr-1 h-3 w-3" /> {cert.date}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </ motion.div >
    );
};

export default Carousels;
