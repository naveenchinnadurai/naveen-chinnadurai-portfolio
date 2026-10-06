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

import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Cloud, Code, Database, Globe } from "lucide-react";
import Image from 'next/image';
import type { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';
import SectionHeader from "@/components/sectionHeader";

const skillsLogo = {
    "Java": { src: java, size: "h-8 w-8 md:h-10 md:w-10" },
    "React": { src: react, size: "h-10 w-10 md:h-9 md:w-9" },
    "JavaScript": { src: javascript, size: "h-8 w-8 md:h-8 md:w-8" },
    "Node.js": { src: nodejs, size: "h-8 w-8 md:h-8 md:w-8" },
    "TypeScript": { src: typescript, size: "h-8 w-8 md:h-8 md:w-8" },
    "Tailwind CSS": { src: tailwind, size: "h-8 w-8 md:h-10 md:w-10" },
    "Next.js": { src: next, size: "h-8 w-8 md:h-9 md:w-9 bg-gray-200 rounded-full" },
    "Figma": { src: figma, size: "h-8 w-8 md:h-8 md:w-8" },
    "Git": { src: git, size: "h-8 w-8 md:h-8 md:w-8" },
    "Github": { src: github, size: "h-8 w-8 md:h-8 md:w-8 bg-gray-200 rounded-full " },
    "SQLite": { src: sqlite, size: "h-8 w-8 md:h-8 md:w-8" },
    "PostgreSQL": { src: postgresql, size: "h-8 w-8 md:h-8 md:w-8" },
    "Python": { src: python, size: "h-8 w-8 md:h-10 md:w-10" },
    "Supabase": { src: supabase, size: "h-8 w-8 md:h-8 md:w-8" },
    "Express.js": { src: express, size: "h-8 w-8 md:h-8 md:w-13" },
    "C": { src: c, size: "h-8 w-8 md:h-9 md:w-9" },
    "C++": { src: cplusplus, size: "h-8 w-8 md:h-9 md:w-9" },
    "Bootstrap": { src: bootstrap, size: "h-8 w-8 md:h-10 md:w-10" },
    "MySQL": { src: mysql, size: "h-8 w-8 md:h-8 md:w-8" },
    "Drizzle ORM": { src: drizzleORM, size: "h-8 w-8 md:h-9 md:w-11" },
    "Postman": { src: postman, size: "h-8 w-8 md:h-8 md:w-8" },
    "Material UI": { src: materialUI, size: "h-8 w-8 md:h-10 md:w-7" },
} as const;

type SkillKey = keyof typeof skillsLogo;

// Skills without a bundled logo file render a react-icons glyph in the brand colour
const skillsIcon: Record<string, { icon: IconType; color: string }> = {
    "NestJS": { icon: SiNestjs, color: "#E0234E" },
    "AWS": { icon: FaAws, color: "#FF9900" },
};

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            icon: Globe,
            skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Material UI"],
        },
        {
            title: "Backend",
            icon: Database,
            skills: ["Node.js", "NestJS", "Express.js", "SQLite", "PostgreSQL", "MySQL", "Drizzle ORM"],
        },
        {
            title: "Programming",
            icon: Code,
            skills: ["Java", "Python", "TypeScript", "JavaScript", "C", "C++"],
        },
        {
            title: "Cloud & Tools",
            icon: Cloud,
            skills: ["AWS", "Git", "Github", "Supabase", "Figma", "Postman"],
        },
    ];

    return (
        <section id="skills" className="py-20 px-4 bg-slate-800/90 text-white">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    eyebrow="Tech Stack"
                    title="Skills &"
                    highlight="Tools"
                    description="The languages, frameworks and platforms I use to design, build and ship production software."
                    className="mb-14"
                />

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {
                        skillCategories.map((category, index) => (
                            <StaggerItem key={index} direction="up">
                                <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    <Card className="h-full hover:shadow-xl transition-shadow bg-[#0B1322] border border-slate-800 rounded-lg">
                                        <CardHeader className="text-center">
                                            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                                                <category.icon className="w-8 h-8 mx-auto mb-2 text-purple-800" />
                                            </motion.div>
                                            <CardTitle className="text-lg">{category.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-wrap gap-4 justify-center">
                                                {
                                                    category.skills.map((skill, skillIndex) => {
                                                        return (
                                                            <motion.div
                                                                key={skillIndex}
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.95 }}
                                                                className="flex flex-col items-center gap-1.5 w-16"
                                                            >
                                                                {
                                                                    skillsLogo[skill as SkillKey] ? (
                                                                        <Image
                                                                            src={skillsLogo[skill as SkillKey].src}
                                                                            alt={skill}
                                                                            title={skill}
                                                                            className={skillsLogo[skill as SkillKey].size + " object-contain"}
                                                                        />
                                                                    ) : skillsIcon[skill] ? (
                                                                        (() => {
                                                                            const { icon: Icon, color } = skillsIcon[skill];
                                                                            return <Icon title={skill} className="h-8 w-8 md:h-9 md:w-9" style={{ color }} />;
                                                                        })()
                                                                    ) : null
                                                                }
                                                                <span className="text-[11px] text-gray-400">{skill}</span>
                                                            </motion.div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </StaggerItem>
                        ))
                    }
                </StaggerContainer>
            </div>
        </section>
    );
}
