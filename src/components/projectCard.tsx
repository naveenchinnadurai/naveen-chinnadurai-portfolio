import { Card, CardContent, CardFooter, CardHeader, } from "@/components/ui/card";
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
import { shortenText } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectCardProps = {
    project: ProjectType;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Card className="w-full relative bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden border-none">
            <CardHeader className="p-4 pb-0">
                <Image
                    src={project.image}
                    alt={project.name}
                    className="w-full h-44 object-cover rounded-lg"
                />
                <div className="flex items-center gap-4 py-2 w-fit">
                    {project.techStack.map((tech, index) => (
                        <Image key={index} src={getTechStackLogo(tech)} alt={tech} className={"h-5 w-5"} />
                    ))}
                </div>
            </CardHeader>
            <CardContent className="p-4 pt-1 pb-0">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{shortenText(project.description, 15)}</p>
            </CardContent>
            <CardFooter className="flex justify-between p-4 pt-4">
                <Link href={project.repo} className="flex gap-1 text-violet-600 text-md">
                    <Github className="text-xl" />
                    Repo
                </Link>
                {
                    project.liveSite ? (
                        <Link
                            href={project?.liveSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-purple-200 text-sm font-medium flex justify-center items-center hover:underline"
                        >
                            Live Site
                            <ArrowRight size={17} className="ml-1" />
                        </Link>
                    ) : null
                }
            </CardFooter>
        </Card>
    );
};

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