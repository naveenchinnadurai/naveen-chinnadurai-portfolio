"use client";
import React from "react";

import bootstrap from '../assets/logo/bootstrap.svg';
import css from '../assets/logo/css.svg';
import drizzle from '../assets/logo/drizzleorm.svg';
import expo from '../assets/logo/expogo.svg';
import figma from '../assets/logo/figma.svg';
import html from '../assets/logo/html.svg';
import javascript from '../assets/logo/javascript.png';
import kivy from '../assets/logo/kivy.png';
import next from '../assets/logo/nextjs.svg';
import nodejs from '../assets/logo/node.svg';
import postgresql from '../assets/logo/postgresql.svg';
import python from '../assets/logo/python.svg';
import react from '../assets/logo/react.svg';
import sqlite from '../assets/logo/SQLite.svg';
import supabase from '../assets/logo/supabase.svg';
import tailwind from '../assets/logo/tailwind.svg';
import typescript from '../assets/logo/typescript.png';

import { FaGithub as Github } from "react-icons/fa";

import { ProjectType } from "@/lib/types";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, Globe, Layers, Monitor, Smartphone } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectCardProps = {
    project: ProjectType;
    index: number;
};

export type ProjectCategory = "Full Stack" | "Web" | "Mobile" | "Desktop";

export function getProjectCategory(project: ProjectType): ProjectCategory {
    const stack = project.techStack.map((t) => t.toLowerCase());
    if (stack.some((t) => ["reactnative", "expogo"].includes(t))) return "Mobile";
    if (stack.some((t) => ["kivy", "python"].includes(t))) return "Desktop";
    if (stack.some((t) => ["nodejs", "postgresql", "supabase", "drizzleorm"].includes(t))) return "Full Stack";
    return "Web";
}

const categoryIcons: Record<ProjectCategory, React.ElementType> = {
    "Full Stack": Layers,
    "Web": Globe,
    "Mobile": Smartphone,
    "Desktop": Monitor,
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const mouseX = useMotionValue(-500);
    const mouseY = useMotionValue(-500);
    const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.18), transparent 80%)`;

    const category = getProjectCategory(project);
    const CategoryIcon = categoryIcons[category];

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group relative w-full h-full rounded-2xl p-[1px] bg-gradient-to-b from-violet-500/40 via-white/5 to-transparent hover:from-violet-400 hover:via-indigo-500/40 transition-colors duration-500"
        >
            <div className="relative h-full flex flex-col rounded-2xl bg-[#0b0820] overflow-hidden">
                {/* Cursor-follow spotlight */}
                <motion.div
                    className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: spotlight }}
                />

                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.name}
                        placeholder="blur"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0820] via-[#0b0820]/20 to-transparent" />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-violet-100 bg-black/50 backdrop-blur-md border border-violet-400/30 px-2.5 py-1 rounded-full">
                        <CategoryIcon className="w-3 h-3" />
                        {category}
                    </span>
                    <span className="absolute top-2 right-3 text-3xl font-black text-white/15 group-hover:text-violet-300/40 transition-colors">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                </div>

                {/* Body */}
                <div className="relative z-20 flex flex-col flex-1 p-5 pt-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-violet-200 transition-colors">
                        {project.name.trim()}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mt-2 flex-1">
                        {project.description.trim()}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.techStack.map((tech) => {
                            const logo = getTechStackLogo(tech);
                            return (
                                <span
                                    key={tech}
                                    className="inline-flex items-center gap-1.5 text-[11px] text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded-md"
                                >
                                    {logo && <Image src={logo} alt="" className="h-3.5 w-3.5 object-contain" />}
                                    {getTechStackName(tech)}
                                </span>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-2 mt-5 pt-4 border-t border-white/10">
                        <Link
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 text-sm text-gray-200 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-violet-400/50 transition-colors"
                        >
                            <Github className="text-base" />
                            Code
                        </Link>
                        {project.liveSite && (
                            <Link
                                href={project.liveSite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/live flex-1 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-white py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all"
                            >
                                Live Demo
                                <ArrowUpRight size={16} className="transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

function getTechStackName(tech: string): string {
    const names: { [key: string]: string } = {
        "typescript": "TypeScript",
        "react": "React",
        "reactnative": "React Native",
        "nodejs": "Node.js",
        "python": "Python",
        "javascript": "JavaScript",
        "nextjs": "Next.js",
        "postgresql": "PostgreSQL",
        "sqlite": "SQLite",
        "figma": "Figma",
        "tailwindcss": "Tailwind",
        "html": "HTML",
        "css": "CSS",
        "drizzleorm": "Drizzle",
        "expogo": "Expo",
        "kivy": "Kivy",
        "supabase": "Supabase",
        "bootstrap": "Bootstrap"
    };

    return names[tech.toLowerCase()] ?? tech;
}

function getTechStackLogo(tech: string): StaticImageData {
    const techLogos: { [key: string]: StaticImageData } = {
        "typescript": typescript,
        "react": react,
        "reactnative": react,
        "nodejs": nodejs,
        "python": python,
        "javascript": javascript,
        "nextjs": next,
        "postgresql": postgresql,
        "sqlite": sqlite,
        "figma": figma,
        "tailwindcss": tailwind,
        "html": html,
        "css": css,
        "drizzleorm": drizzle,
        "expogo": expo,
        "kivy": kivy,
        "supabase": supabase,
        "bootstrap": bootstrap
    };

    return techLogos[tech.toLowerCase()]
}


export default ProjectCard;