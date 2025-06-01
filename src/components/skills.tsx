'use client';
import figma from '../assets/logo/figma.svg';
import git from '../assets/logo/git.svg';
import github from '../assets/logo/github.svg';
import java from '../assets/logo/java.svg';
import javascript from '../assets/logo/javascript.png';
import next from '../assets/logo/nextjs.svg';
import postgresql from '../assets/logo/postgresql.svg';
import react from '../assets/logo/react.svg';
import sqlite from '../assets/logo/sqlite.png';
import typescript from '../assets/logo/typescript.png';
import tailwind from '../assets/logo/tailwind.svg';
import python from '../assets/logo/python.svg';
import nodejs from '../assets/logo/nodejs.svg';
import supabase from '../assets/logo/supabase.svg';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Smartphone } from "lucide-react";
import FadeIn from "@/components/animations/fadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { motion } from "framer-motion";

const skillsLogo = {
    "Java": { src: java, size: "h-12 w-12 md:h-16 md:w-16" },
    "React": { src: react },
    "JavaScript": { src: javascript },
    "Node.js": { src: nodejs, size: "h-12 w-14 md:h-20 md:w-24" },
    "TypeScript": { src: typescript },
    "Tailwind CSS": { src: tailwind, size: "h-12 w-12 md:h-16 md:w-16" },
    "Next.js": { src: next },
    "Figma": { src: figma },
    "Git": { src: git, size: "h-12 w-12 md:h-16 md:w-16" },
    "GitHub": { src: github, size: "border border-[1px] border-white h-8 w-8 md:h-14 md:w-14 rounded-2xl" },
    "SQLite": { src: sqlite, size: "h-12 w-12 md:h-14 md:w-20" },
    "PostgreSQL": { src: postgresql },
    "Python": { src: python },
    "Supabase": { src: supabase, size: "h-10 w-10" }
};


export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            icon: Globe,
            skills: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS",],
        },
        {
            title: "Backend",
            icon: Database,
            skills: ["Node.js", "Express.js", "SQLite", "REST APIs", , "PostgreSQL", "MySQL",],
        },
        {
            title: "Programming",
            icon: Code,
            skills: ["Java", "Python", "C/C++", "JavaScript"],
        },
        {
            title: "Others Tools",
            icon: Smartphone,
            skills: ["Git", "Github", "Supabase", "Figma"],
        },
    ];

    return (
        <section id="skills" className="py-20 px-4 bg-slate-800/90 text-white">
            <div className="max-w-6xl mx-auto">
                <FadeIn direction="top">
                    <div className="text-center mb-16">
                        <h2 className="relative text-4xl font-bold mb-2 text-white tracking-[10px]">
                            <FadeIn direction="bottom" duration={0.5}>
                                Skills
                            </FadeIn>
                            <FadeIn direction="bottom" duration={0.4} className="absolute -top-4 md:-top-10 inset-0 -z-10">
                                <span className="tracking-[16px] md:tracking-[18px] text-slate-800 text-6xl md:text-8xl font-bold leading-none">
                                    Skills
                                </span>
                            </FadeIn>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Technologies and tools I{"'"}ve worked with during my learning journey
                        </p>
                    </div>
                </FadeIn>

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
                                                        console.log(skillsLogo["Java"]);
                                                        return (
                                                            <motion.div
                                                                key={skillIndex}
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.95 }}
                                                                className="flex flex-col items-center gap-1 w-fit"
                                                            >
                                                                {/* {
                                                                    skillsLogo[skill] ? (
                                                                        <img
                                                                            src={skillsLogo[skill].src}
                                                                            alt={skill}
                                                                            className={`h-10 w-10 md:h-12 md:w-12 ${skillsLogo[skill].size || ''}`}
                                                                        />
                                                                    ) : (
                                                                        <span className="text-sm text-muted-foreground">{skill}</span>
                                                                    )
                                                                } */}
                                                                <Badge variant="secondary" className="text-[10px] w-fit text-center px-2 bg-slate-800">
                                                                    {skill}
                                                                </Badge>
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
