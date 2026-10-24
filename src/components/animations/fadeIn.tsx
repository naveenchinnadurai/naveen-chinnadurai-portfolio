"use client";
import { motion } from 'framer-motion';

interface FadeInOnScrollProps {
    children: React.ReactNode;
    threshold?: number;
    direction?: "top" | "bottom" | "left" | "right";
    duration?: number;
    className?: string;
    delay?: number;
    triggerOnce?: boolean;
}

const getOffset = (dir: string) => {
    switch (dir) {
        case "top": return { x: 0, y: -30 };
        case "bottom": return { x: 0, y: 30 };
        case "left": return { x: -30, y: 0 };
        case "right": return { x: 30, y: 0 };
        default: return { x: 0, y: 0 };
    }
};

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
    children,
    threshold = 0.2,
    direction = "top",
    duration = 0.5,
    className = "",
    delay = 0,
    triggerOnce = true
}) => {
    const offset = getOffset(direction);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: triggerOnce, amount: threshold }}
            variants={{
                hidden: { opacity: 0, ...offset },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] }
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeInOnScroll;
