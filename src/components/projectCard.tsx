import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

import figma from '../assets/logo/figma.svg';
import javascript from '../assets/logo/javascript.png';
import next from '../assets/logo/nextjs.svg';
import postgresql from '../assets/logo/postgresql.svg';
import react from '../assets/logo/react.svg';
import sqlite from '../assets/logo/sqlite.png';
import typescript from '../assets/logo/typescript.png';
import tailwind from '../assets/logo/tailwind.svg'
import python from '../assets/logo/python.svg'
import nodejs from '../assets/logo/nodejs.svg'
import html from '../assets/logo/html.svg'
import css from '../assets/logo/css.svg'
import drizzle from '../assets/logo/drizzleorm.svg'
import expo from '../assets/logo/expogo.svg'

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { shortenText } from "@/lib/utils";

// Define the Project type
type Project = {
    name: string;
    description: string;
    techStack: string[];
    liveSite: string;
    image: string;
};

// Define the props for the component
type ProjectCardProps = {
    project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
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
            "expogo": expo
        };

        return techLogos[tech.toLowerCase()]
    }


    return (
        <Card className="relative bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto border-none">
            <CardHeader className="p-4 pb-0">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-44 object-cover rounded-lg"
                />
                <div className="flex items-center gap-4 py-2 w-fit">
                    {project.techStack.map((tech, index) => (
                        <Image key={index} src={getTechStackLogo(tech)} alt={tech} className="h-5 w-5" />
                    ))}
                </div>
            </CardHeader>
            <CardContent className="p-4 pt-1 pb-0">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{shortenText(project.description, 15)}</p>
            </CardContent>
            <CardFooter className="flex justify-end p-4 py-3 h-10">
                <Link
                    href={project.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-5 text-blue-500 text-sm font-medium flex justify-center items-center hover:underline"
                >
                    Live Site
                    <ArrowRight size={17} className="ml-1" />
                </Link>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
