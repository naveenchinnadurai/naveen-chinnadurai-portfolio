'use client';

import express from '../assets/logo/express.png';
import figma from '../assets/logo/figma.svg';
import git from '../assets/logo/git.svg';
import github from '../assets/logo/github.svg';
import java from '../assets/logo/java.svg';
import javascript from '../assets/logo/javascript.png';
import next from '../assets/logo/nextjs.svg';
import nodejs from '../assets/logo/node.svg';
import postgresql from '../assets/logo/postgresql.svg';
import python from '../assets/logo/python.svg';
import react from '../assets/logo/react.svg';
import sqlite from '../assets/logo/SQLite.svg';
import supabase from '../assets/logo/supabase.svg';
import tailwind from '../assets/logo/tailwind.svg';
import typescript from '../assets/logo/typescript.png';
import c from '../assets/logo/c.svg';
import cplusplus from '../assets/logo/c++.svg';
import bootstrap from '../assets/logo/bootstrap.svg';
import mysql from '../assets/logo/mysql.svg';
import drizzleORM from '../assets/logo/drizzleorm.svg';
import postman from '../assets/logo/postman.svg';
import materialUI from '../assets/logo/materialUI.svg';

import SectionHeader from "@/components/sectionHeader";
import { motion } from "framer-motion";
import { Cloud, Code2, Database, LayoutTemplate } from "lucide-react";
import Image from 'next/image';
import type { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';

const skillsLogo = {
    "Java": java,
    "React": react,
    "JavaScript": javascript,
    "Node.js": nodejs,
    "TypeScript": typescript,
    "Tailwind CSS": tailwind,
    "Next.js": next,
    "Figma": figma,
    "Git": git,
    "Github": github,
    "SQLite": sqlite,
    "PostgreSQL": postgresql,
    "Python": python,
    "Supabase": supabase,
    "Express.js": express,
    "C": c,
    "C++": cplusplus,
    "Bootstrap": bootstrap,
    "MySQL": mysql,
    "Drizzle ORM": drizzleORM,
    "Postman": postman,
    "Material UI": materialUI,
} as const;

type SkillKey = keyof typeof skillsLogo;

// Skills without a bundled logo file render a react-icons glyph in the brand colour
const skillsIcon: Record<string, { icon: IconType; color: string }> = {
    "NestJS": { icon: SiNestjs, color: "#E0234E" },
    "AWS": { icon: FaAws, color: "#FF9900" },
};


const skillCategories = [
    {
        title: "Frontend",
        icon: LayoutTemplate,
        blurb: "Interfaces that feel effortless",
        skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Material UI"],
    },
    {
        title: "Backend",
        icon: Database,
        blurb: "APIs, services and data",
        skills: ["Node.js", "NestJS", "Express.js", "SQLite", "PostgreSQL", "MySQL", "Drizzle ORM"],
    },
    {
        title: "Programming",
        icon: Code2,
        blurb: "Languages I think in",
        skills: ["Java", "Python", "TypeScript", "JavaScript", "C", "C++"],
    },
    {
        title: "Cloud & Tools",
        icon: Cloud,
        blurb: "Shipping and collaborating",
        skills: ["AWS", "Git", "Github", "Supabase", "Figma", "Postman"],
    },
];

const allSkills = skillCategories.flatMap((c) => c.skills);

function SkillLogo({ skill, className }: { skill: string; className: string }) {
    if (skillsLogo[skill as SkillKey]) {
        return <Image src={skillsLogo[skill as SkillKey]} alt="" className={`${className} object-contain`} />;
    }
    if (skillsIcon[skill]) {
        const { icon: Icon, color } = skillsIcon[skill];
        return <Icon className={className} style={{ color }} />;
    }
    return null;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Skills() {
    return (
        <section id="skills" className="relative py-16 md:py-24 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    eyebrow="Tech Stack"
                    title="Skills &"
                    highlight="Tools"
                    description="The languages, frameworks and platforms I use to design, build and ship production software."
                    className="mb-14"
                />

                <motion.div
                    className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch overflow-x-auto sm:overflow-visible snap-x snap-mandatory hide-scrollbar -mx-4 px-4 py-3 -my-3 sm:m-0 sm:p-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                            }}
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 0.98 }}
                            className="group card-surface card-hover h-full p-6 flex flex-col shrink-0 basis-[84%] sm:basis-auto snap-center"
                        >
                            <div className="flex items-start justify-between">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 transition-colors duration-500 group-hover:bg-violet-600 group-hover:text-white">
                                    <category.icon className="h-5 w-5" />
                                </span>
                                <span className="font-mono text-xs text-slate-300 transition-colors group-hover:text-violet-400">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-foreground">{category.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{category.blurb}</p>

                            <div className="my-5 h-px bg-gradient-to-r from-violet-100 via-violet-100 to-transparent" />

                            <ul className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="inline-flex items-center gap-2 rounded-xl border border-[#f0ecf9] bg-[#fbfaff] pl-1.5 pr-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-violet-200 hover:bg-violet-50"
                                    >
                                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white shadow-[0_1px_3px_rgba(30,27,46,0.08)]">
                                            <SkillLogo skill={skill} className="h-4 w-4" />
                                        </span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-auto pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                                {category.skills.length} tools
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <p className="sm:hidden mt-4 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Swipe to explore
                    <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>→</motion.span>
                </p>
            </div>

            {/* Infinite logo marquee */}
            <div
                className="relative mt-12 md:mt-16 overflow-hidden"
                style={{
                    maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
                    WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
                }}
            >
                <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
                    {[...allSkills, ...allSkills].map((skill, i) => (
                        <span key={`${skill}-${i}`} aria-hidden={i >= allSkills.length} className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-400 whitespace-nowrap">
                            <SkillLogo skill={skill} className="h-5 w-5 grayscale opacity-70" />
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
