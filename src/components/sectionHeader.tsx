"use client";
import { motion } from "framer-motion";

type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    highlight?: string;
    description?: string;
    align?: "center" | "left";
    tone?: "violet" | "neutral";
    className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function SectionHeader({
    eyebrow,
    title,
    highlight,
    description,
    align = "center",
    tone = "violet",
    className = "",
}: SectionHeaderProps) {
    const centered = align === "center";
    const violet = tone === "violet";

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"} ${className}`}
        >
            <motion.div variants={item} className="flex items-center gap-3">
                <motion.span
                    variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.6, ease } } }}
                    className={`h-px w-8 origin-right ${violet ? "bg-gradient-to-r from-transparent to-violet-400" : "bg-gradient-to-r from-transparent to-neutral-500"}`}
                />
                <span className={`text-xs md:text-sm font-semibold uppercase tracking-[0.25em] ${violet ? "text-violet-300" : "text-neutral-400"}`}>
                    {eyebrow}
                </span>
                {centered && (
                    <motion.span
                        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.6, ease } } }}
                        className={`h-px w-8 origin-left ${violet ? "bg-gradient-to-l from-transparent to-violet-400" : "bg-gradient-to-l from-transparent to-neutral-500"}`}
                    />
                )}
            </motion.div>

            <motion.h2 variants={item} className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                {title}
                {highlight && (
                    <>
                        {" "}
                        <span className={violet
                            ? "bg-gradient-to-r from-violet-300 via-purple-300 to-violet-400 bg-clip-text text-transparent"
                            : "text-neutral-400"}>
                            {highlight}
                        </span>
                    </>
                )}
            </motion.h2>

            {description && (
                <motion.p variants={item} className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${violet ? "text-gray-400" : "text-neutral-400"}`}>
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
}
