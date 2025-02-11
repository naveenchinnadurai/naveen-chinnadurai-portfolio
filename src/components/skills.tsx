import React from 'react'
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
import tailwind from '../assets/logo/tailwind.svg'
import python from '../assets/logo/python.svg'
import nodejs from '../assets/logo/nodejs.svg'
import supabase from '../assets/logo/supabase.svg'

import Image from "next/image";
import FadeInOnScroll from "@/components/animations/fadeIn";

function Skills() {
    const skills = [
        { src: java, alt: "Java", size: "h-12 w-12 md:h-16 md:w-16" },
        { src: react, alt: "React" },
        { src: javascript, alt: "JavaScript" },
        { src: nodejs, alt: "Nodejs", size: "h-12 w-14 md:h-20 md:w-24" },
        { src: typescript, alt: "TypeScript" },
        { src: tailwind, alt: "Tailwind", size: "h-12 w-12 md:h-16 md:w-16" },
        { src: next, alt: "Next.js" },
        { src: figma, alt: "Figma" },
        { src: git, alt: "Git", size: "h-12 w-12 md:h-16 md:w-16" },
        { src: github, alt: "GitHub", size: "border border-[1px] border-white h-8 w-8 md:h-14 md:w-14 rounded-2xl" },
        { src: sqlite, alt: "SQLite", size: "h-12 w-12 md:h-14 md:w-20" },
        { src: postgresql, alt: "PostgreSQL" },
        { src: python, alt: "Python" },
        { src: supabase, alt: "Supabase", size: "h-10 w-10" }
    ];
    return (
        <div className="flex flex-col gap-8 px-3">
            <div className="text-center">
                <h2 className="relative text-4xl font-bold mb-2 text-white tracking-[10px]">
                    <FadeInOnScroll direction="bottom" duration={0.5} className="absolute -top-4 md:-top-10  inset-0 -z-10 ">
                        Skills
                    </FadeInOnScroll>
                    <FadeInOnScroll direction="bottom" duration={0.4} className="absolute -top-4 md:-top-10  inset-0 -z-10 ">
                        <span className="tracking-[16px] md:tracking-[18px] text-gray-200 text-6xl md:text-8xl font-bold leading-none opacity-10">
                            Skills
                        </span>
                    </FadeInOnScroll>
                </h2>
                <FadeInOnScroll direction="bottom">
                    <p className="text-gray-400 text-lg">
                        Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia.
                    </p>
                </FadeInOnScroll>
            </div>
            <div className="flex gap-5 md:gap-8 justify-center items-center  md:w-4/5 mx-auto flex-wrap">
                {
                    skills.map((skill, index) => (
                        <FadeInOnScroll key={index} direction="left" duration={(index % 5) / 4 + 0.35}>
                            <Image src={skill.src} alt={skill.alt} className={skill.size || "h-8 w-8 md:h-14 md:w-14"} />
                        </FadeInOnScroll>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills
