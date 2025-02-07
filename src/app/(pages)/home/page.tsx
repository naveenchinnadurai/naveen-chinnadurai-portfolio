import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import spotlight from '../../../assets/spotlight.png';
import me from '../../../assets/me.png';
import ProjectCard from "@/components/projectCard";
import { FiMapPin, FiPhone, FiMail, FiGlobe } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import react from '../../../assets/logo/react.svg';
import git from '../../../assets/logo/git.svg';
import figma from '../../../assets/logo/figma.svg';
import github from '../../../assets/logo/github.png';
import java from '../../../assets/logo/java.svg';
import javascript from '../../../assets/logo/javascript.png';
import next from '../../../assets/logo/nextjs.svg';
import sqlite from '../../../assets/logo/sqlite.png';
import typescript from '../../../assets/logo/typescript.png';
import postgresql from '../../../assets/logo/postgresql.svg';
import { certifications, education } from "@/lib/data";
import { Calendar } from "lucide-react";
import CodingPerformance from "@/components/coding";
import ContactInfo from "@/components/contact";
import { Button } from "@/components/ui/button";

function App() {
    const skills = [
        { src: react, alt: "React" },
        { src: javascript, alt: "JavaScript" },
        { src: typescript, alt: "TypeScript" },
        { src: next, alt: "Next.js" },
        { src: figma, alt: "Figma" },
        { src: git, alt: "Git", size: "h-16 w-16" },
        { src: github, alt: "GitHub" },
        { src: java, alt: "Java", size: "h-16 w-16" },
        { src: sqlite, alt: "SQLite", size: "h-14 w-16" },
        { src: postgresql, alt: "PostgreSQL" },
    ];

    return (
        <div className="">
            <Image src={spotlight} alt="Spotlight Image" className="absolute top-0 right-0" />
            <Image src={spotlight} alt="Spotlight Image" className="absolute -top-4 left-4 -rotate-90" />
            {/* Banner Section */}
            <section className="text-gray-800 w-5/6 h-fit mx-auto">
                <Navbar />
                <div className=" container items-center grid grid-cols-3 mx-auto py-36">
                    <div className="flex  px-3 flex-col col-span-2 justify-center text-center rounded-sm  lg:text-left">
                        <p className="text-xl text-white font-bold">Hey there,</p>
                        <h1 className="text-5xl font-bold leading-none sm:text-7xl mt-2"> Naveen Chinnadurai</h1>
                        <span className="text-violet-600 text-5xl font-extrabold mt-2"> Full Stack Developer</span>

                        <p className="mt-2 mb-8 text-lg">Dictum aliquam porta in condimentum ac integer
                            <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque <br /> ligula sem Lorem ipsum dolor sit amet consectetur
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start gap-2">
                            <Link href="https:github.com/naveenchinnadurai" className="cursor-pointer"><FaGithub className="text-4xl" /></Link>
                            <Link href="https:linkedin.com/in/naveenchinnadurai" className="cursor-pointer"><FaLinkedin className="text-4xl" /></Link>
                            <Link href="https:wa.me/+918098150750" className="cursor-pointer"><FaWhatsapp className="text-4xl" /></Link>
                        </div>
                    </div>
                    <div className="flex relative items-center justify-center p-6 mt-8 lg:mt-0 h-full w-full">
                        <Image src={me} alt="My Image" className="absolute -left-4 object-contain !w-[130%] !h-[130%]" />
                    </div>
                </div>
            </section>
            {/* Skills Section */}
            <div className="flex flex-col gap-8">
                <div className="text-center">
                    <h2 className="relative text-4xl font-bold mb-2 text-white tracking-[10px]">
                        Skills
                        <span className="tracking-[18px] absolute -top-10 -left-3 inset-0 -z-10 text-gray-200 text-[6rem] font-bold leading-none opacity-10">
                            Skills
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia.
                    </p>
                </div>
                <div className="flex gap-8 justify-center items-center">
                    {
                        skills.map((skill, index) => (
                            <Image key={index} src={skill.src} alt={skill.alt} className={skill.size || "h-14 w-14"} />
                        ))
                    }
                </div>
            </div>
            {/* About Section */}
            <section className="h-screen text-white py-12 px-6 w-4/5 mx-auto flex flex-col md:flex-row items-center justify-end space-y-8 md:space-y-0">
                <div className="h-[500px] w-[400px] bg-slate-400">
                    <img
                        src="https://via.placeholder.com/400x500" // Replace with actual image URL
                        alt="Profile"
                        className="h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="ml-8 w-3/6">
                    <h2 className="text-4xl font-bold mb-4 relative tracking-widest">
                        <span className="absolute -top-5 -left-3 inset-0 -z-10 text-gray-200 text-[4rem] font-bold tracking-wider leading-none opacity-10">
                            ABOUT
                        </span>
                        About Me
                    </h2>
                    <p className="text-gray-400 mb-6">
                        I'm a passionate developer skilled in frontend and backend
                        technologies. I enjoy creating user-friendly applications and
                        solving challenging problems. I'm a passionate developer skilled in frontend and backend
                        technologies. I enjoy creating user-friendly applications and
                        solving challenging problems.
                    </p>
                    <ul className="text-gray-300 space-y-2">
                        <li>
                            <span className="font-semibold">Name:</span> Naveen Chinnadurai
                        </li>
                        <li>
                            <span className="font-semibold">Date of birth:</span> March 02, 2004
                        </li>
                        <li>
                            <span className="font-semibold">Address:</span> Ariyalur, Tamilnadu
                        </li>
                        <li>
                            <span className="font-semibold">Zip code:</span> 621704
                        </li>
                        <li>
                            <span className="font-semibold">Email:</span>    dev.iamnaveen@gmail.com
                        </li>
                        <li>
                            <span className="font-semibold">Phone:</span> +91 8098150750
                        </li>
                    </ul>
                    <Button className="mt-4">View Resume</Button>
                </div>
            </section>
            {/* Education Section */}
            <div className="flex flex-col gap-8">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="relative text-4xl font-bold mb-2 w-full text-center text-white tracking-[12px]">
                        Education
                        <span className="absolute w-full text-center -top-4 -left-3 inset-0 -z-10 text-gray-200 text-[4rem] font-bold tracking-[12px] leading-none opacity-10">
                            EDUCATION
                        </span>
                    </h2>
                </div>

                <div className="mx-auto w-4/5 relative">
                    {
                        education.map((edu, index) => (
                            <div key={index} className="flex items-center w-full relative">
                                {/* Timeline Line */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-1 h-full bg-blue-500"></div>

                                {/* Content Box */}
                                <div className={`w-full flex rounded-lg shadow-lg ${index % 2 === 0 ? " justify-start pt-5" : " justify-end py-10"}`}>
                                    <div className={`bg-gray-900 p-6 rounded-lg shadow-md w-1/2 ${index % 2 === 0 ? " mr-10" : " ml-10"}`}>
                                        <h3 className="text-2xl text-slate-400 font-bold">{edu.degree}</h3>
                                        <p className="text-xl text-violet-600">{edu.institution}</p>
                                        <p className="text-gray-400">{edu.location} | {edu.duration}</p>
                                        <ul className="list-disc list-inside mt-3 text-gray-600">
                                            {
                                                edu.details.map((detail, idx) => (
                                                    <li key={idx}>{detail}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>

                                {/* Circular Marker */}
                                <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                            </div>
                        ))
                    }
                </div>


            </div>
            {/* Projects */}
            <div className="flex flex-col pt-28 items-center gap-4">
                <div className="text-center">
                    <h2 className="relative text-4xl font-bold mb-2 text-white tracking-[10px]">
                        Projects
                        <span className="absolute -top-4 -left-3 inset-0 -z-10 text-gray-200 text-[4rem] font-bold tracking-[10px] leading-none opacity-10">
                            PORTFOLIO
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia.
                    </p>
                </div>
                <ul className="flex text-violet-950 mb-4">
                    <li className="border border-r-0 px-5 py-1 rounded-s-full">All</li>
                    <li className="border border-r-0 px-4 py-1">Landing Page</li>
                    <li className="border border-r-0 px-4 py-1">Web Apps</li>
                    <li className="border px-5 py-1 rounded-e-full">Mobile Apps</li>
                </ul>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-10 gap-3 align-content-center">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
            {/* Coding Profiles */}
            <CodingPerformance className="m-10" />
            {/* Certifications */}
            <div className="flex flex-col gap-2 p-10">
                <h2 className="relative text-4xl font-bold mb-2 text-white text-center tracking-wider">
                    Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    {
                        certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="border border-gray-700 cursor-pointer rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <h4 className="text-lg font-semibold mb-2 text-gray-500">{cert.name}</h4>
                                <p className="text-gray-300 mb-1">{cert.issuer}</p>
                                <p className="text-sm text-purple-500 flex items-center">
                                    <Calendar className="mr-1 h-3 w-3" /> {cert.date}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <ContactInfo />
            <Footer />
        </div>
    );
}

export default App;
