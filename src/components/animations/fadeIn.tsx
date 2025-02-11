"use client"
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface FadeInOnScrollProps {
    children: React.ReactNode;
    threshold?: number;  // Customize the threshold of in-view trigger
    direction?: "top" | "bottom" | "left" | "right"; // Direction of the animation
    duration?: number; // Duration of the fade-in effect
    className?: string;
    delay?: number
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
    children,
    threshold = 0.3,
    direction = "top",
    duration = 0.5,
    className = "",
    delay = 0
}) => {
    const { ref, inView } = useInView({
        triggerOnce: false,  // Ensures the animation happens only once when it enters view
        threshold,  // Percentage of element in view before trigger (default is 0.1)
    });

    const animations = {
        top: {
            initial: { opacity: 0, y: -100 },
            animate: { opacity: inView ? 1 : 0, y: inView ? 0 : -100 },
        },
        bottom: {
            initial: { opacity: 0, y: 100 },
            animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 100 },
        },
        left: {
            initial: { opacity: 0, x: -100 },
            animate: { opacity: inView ? 1 : 0, x: inView ? 0 : -100 },
        },
        right: {
            initial: { opacity: 0, x: 100 },
            animate: { opacity: inView ? 1 : 0, x: inView ? 0 : 100 },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial={animations[direction].initial}
            animate={animations[direction].animate}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeInOnScroll;
