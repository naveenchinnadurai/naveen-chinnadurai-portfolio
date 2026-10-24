"use client";
import { motion } from "framer-motion";

type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    highlight?: string;
    description?: string;
    align?: "center" | "left";
    className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function SectionHeader({
    eyebrow,
    title,
    highlight,
    description,
    align = "center",
    className = "",
}: SectionHeaderProps) {
    const centered = align === "center";

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"} ${className}`}
        >
            <motion.span variants={item} className="eyebrow inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                {eyebrow}
            </motion.span>

            <motion.h2 variants={item} className="mt-4 text-[2rem] leading-[1.1] md:text-5xl font-bold tracking-tight text-foreground">
                {title}
                {highlight && (
                    <>
                        {" "}
                        <span className="font-serif italic font-normal text-violet-600 text-[1.12em] tracking-normal">
                            {highlight}
                        </span>
                    </>
                )}
            </motion.h2>

            {description && (
                <motion.p variants={item} className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
}
