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
    const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(167, 139, 250, 0.12), transparent 80%)`;

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
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group card-surface card-hover w-full h-full flex flex-col overflow-hidden p-2"
        >
            {/* Cursor-follow spotlight */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: spotlight }}
            />

            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden rounded-[1.25rem] bg-violet-50">
                <Image
                    src={project.image}
                    alt={project.name}
                    placeholder="blur"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-violet-700 shadow-sm">
                    <CategoryIcon className="w-3 h-3" />
                    {category}
                </span>
            </div>

            {/* Body */}
            <div className="relative z-20 flex flex-col flex-1 px-3 pt-5 pb-3">
                <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-bold text-foreground leading-snug">
                        {project.name.trim()}
                    </h3>
                    <span className="font-mono text-xs text-slate-300 transition-colors group-hover:text-violet-400">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2 flex-1 line-clamp-3">
                    {project.description.trim()}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.map((tech) => {
                        const logo = getTechStackLogo(tech);
                        return (
                            <span
                                key={tech}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-[#f0ecf9] bg-[#fbfaff] px-2 py-1 text-[11px] font-medium text-slate-600"
                            >
                                {logo && <Image src={logo} alt="" className="h-3.5 w-3.5 object-contain" />}
                                {getTechStackName(tech)}
                            </span>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2 mt-5">
                    <Link
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex-1 px-4 py-2.5"
                    >
                        <Github className="text-base" />
                        Code
                    </Link>
                    {project.liveSite && (
                        <Link
                            href={project.liveSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary group/live flex-1 px-4 py-2.5"
                        >
                            Live Demo
                            <ArrowUpRight size={16} className="transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                        </Link>
                    )}
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