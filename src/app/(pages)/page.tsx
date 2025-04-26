"use client"
import { Suspense, lazy, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { certifications, education, projects } from "@/lib/data";
import { Calendar, ChevronsDown, MessageCircleWarning } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import me from '../../assets/me2.png';
import spotlight from '../../assets/spotlight.png';

import FadeInOnScroll from "@/components/animations/fadeIn";
import { handleOpenPdf } from "@/lib/utils";
import Skills from "@/components/skills";

// Lazy load components
const Navbar = lazy(() => import("@/components/navbar"));
const CodingPerformance = lazy(() => import("@/components/coding"));
const ContactInfo = lazy(() => import("@/components/contact"));
const Footer = lazy(() => import("@/components/footer"));
const ProjectCard = lazy(() => import("@/components/projectCard"));

function App() {
    const [isMobile, setIsMobile] = useState(false);
    const [displayCount, setDisplayCount] = useState(8);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 1000);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const loadMoreProjects = () => {
        setDisplayCount(displayCount + 8);
    };

    // Smooth Scroll function
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (isMobile) {
        return (
            <div className="flex flex-col justify-center items-center h-screen text-center p-5">
                <MessageCircleWarning className="text-7xl text-purple-300 mb-3" />
                <h2 className="text-lg text-violet-600">Currently Not available for Mobile Devices,</h2>
                <h2 className="text-md text-violet-400">Try with Desktop screens</h2>
            </div>
        )
    }

    return (
        <Suspense fallback={
            <div className="h-screen flex justify-center items-center">
                <span className="loader"></span>
            </div>
        }>
            <div className="scrollbar w-full overflow-hidden relative" style={{ scrollBehavior: "smooth" }}>
                {/* Background spotlight images */}
                <div className="-z-10 absolute top-0 right-0">
                    <Image src={spotlight} alt="Spotlight Image" />
                </div>
                <div className="-z-10 absolute -top-4 left-4">
                    <Image src={spotlight} alt="Spotlight Image" className=" -rotate-90" />
                </div>

                {/* Navbar */}
                <section className="text-gray-800 md:w-5/6 h-fit mx-auto z-50">
                    <Navbar onLinkClick={scrollToSection} />
                    <div className="items-center grid grid-col-1 md:grid-cols-3 mx-auto py-36">
                        <div className="flex px-3 flex-col col-span-2 justify-center text-center rounded-sm lg:text-left">
                            <FadeInOnScroll direction="bottom">
                                <p className="text-xl text-white font-bold">Hey there,</p>
                            </FadeInOnScroll>
                            <FadeInOnScroll direction="bottom" duration={0.8}>
                                <h1 className="text-5xl font-bold leading-none sm:text-7xl mt-2"> Naveen Chinnadurai</h1>
                            </FadeInOnScroll>
                            <FadeInOnScroll direction="bottom" duration={1}>
                                <span className="text-violet-600 text-5xl font-extrabold mt-2"> Full Stack Developer</span>
                            </FadeInOnScroll>
                            <FadeInOnScroll direction="bottom" duration={1.2}>
                                <p className="mt-2 mb-8 text-lg">Dictum aliquam porta in condimentum ac integer
                                    <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque <br /> ligula sem Lorem ipsum dolor sit amet consectetur
                                </p>
                            </FadeInOnScroll>
                            <div className="flex items-center sm:space-x-4 justify-center lg:justify-start gap-2">
                                <FadeInOnScroll direction="left" duration={1.2}>
                                    <Link href="https:github.com/naveenchinnadurai" className="cursor-pointer"><FaGithub className="text-4xl" /></Link>
                                </FadeInOnScroll>
                                <FadeInOnScroll direction="left" duration={1.2}>
                                    <Link href="https:linkedin.com/in/naveenchinnadurai" className="cursor-pointer"><FaLinkedin className="text-4xl" /></Link>
                                </FadeInOnScroll>
                                <FadeInOnScroll direction="left" duration={1.2}>
                                    <Link href="https:wa.me/+918098150750" className="cursor-pointer"><FaWhatsapp className="text-4xl" /></Link>
                                </FadeInOnScroll>
                            </div>
                        </div>
                        <FadeInOnScroll duration={0.8} direction="right" className="hidden md:flex col-span-1 relative items-center justify-center p-6 mt-8 lg:mt-0 h-full w-full">
                            <Image src={me} alt="My Image" className="absolute -left-4 object-contain h-[300px] w-[280px] md:w-[130%] md:h-[130%]" width={280} height={300} />
                        </FadeInOnScroll>
                    </div>
                </section>
                {/* Skills Section */}
                <div id="skills" className="">
                    <Skills />
                </div>

                {/* About Section */}
                <section id="about" className="h-screen text-white py-12 px-6 md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-end space-y-8 md:space-y-0">
                    <FadeInOnScroll direction="left">
                        <div className="h-[500px] w-[400px] bg-slate-400 hidden md:flex">
                            {/* <Image
                                src="https://via.placeholder.com/400x500" // Replace with actual image URL
                                alt="Profile"
                                className="h-auto rounded-lg shadow-lg"
                                width={400}
                                height={500}
                            /> */}
                        </div>
                    </FadeInOnScroll>
                    <div className="ml-8 md:w-3/6">
                        <h2 className="text-4xl font-bold mb-4 relative tracking-widest">
                            <FadeInOnScroll direction="bottom">
                                <span className="absolute -top-8 -left-3 inset-0 -z-10 text-gray-200 text-[4rem] font-bold tracking-wider leading-none opacity-10">
                                    ABOUT
                                </span>
                            </FadeInOnScroll>
                            <FadeInOnScroll direction="bottom" duration={0.8}>
                                About Me
                            </FadeInOnScroll>
                        </h2>
                        <FadeInOnScroll direction="bottom" duration={0.6}>
                            <p className="text-gray-400 mb-6">
                                I&apos;m a passionate developer skilled in frontend and backend
                                technologies. I enjoy creating user-friendly applications and
                                solving challenging problems. I&apos;m a passionate developer skilled in frontend and backend
                                technologies. I enjoy creating user-friendly applications and
                                solving challenging problems.
                            </p>

                        </FadeInOnScroll>
                        <ul className="text-gray-300 space-y-2">
                            <li>
                                <FadeInOnScroll direction="bottom" duration={0.3}>
                                    <span className="font-semibold">Name:</span> Naveen Chinnadurai
                                </FadeInOnScroll>
                            </li>
                            <li>
                                <FadeInOnScroll direction="bottom" duration={0.35}>
                                    <span className="font-semibold">Date of birth:</span> March 02, 2004
                                </FadeInOnScroll>
                            </li>
                            <li>
                                <FadeInOnScroll direction="bottom" duration={0.4}>
                                    <span className="font-semibold">Address:</span> Ariyalur, Tamilnadu
                                </FadeInOnScroll>
                            </li>
                            <li>
                                <FadeInOnScroll direction="bottom" duration={0.45}>
                                    <span className="font-semibold">Zip code:</span> 621704
                                </FadeInOnScroll>
                            </li>
                            <li>
                                <FadeInOnScroll direction="bottom" duration={0.5}>
                                    <span className="font-semibold">Email:</span> dev.iamnaveen@gmail.com
                                </FadeInOnScroll>
                            </li>
                            <li>
                                <FadeInOnScroll direction="bottom" duration={0.55}>
                                    <span className="font-semibold">Phone:</span> +91 8098150750
                                </FadeInOnScroll>
                            </li>
                        </ul>
                        <FadeInOnScroll direction="bottom" duration={0.6}>
                            <Button className="mt-4 bg-slate-800 rounded-lg hover:bg-slate-900" onClick={() => handleOpenPdf()}>View Resume</Button>
                        </FadeInOnScroll>
                    </div>
                </section >

                <div id="education" className="py-12 px-6 md:px-0 mx-auto md:w-4/5 relative">
                    <h2 className="text-4xl font-bold mb-7 relative tracking-widest text-center">
                        <FadeInOnScroll direction="bottom">
                            <span className="absolute -top-8 -left-3 inset-0 -z-10 text-gray-200 text-[4rem] font-bold tracking-wider leading-none opacity-10">
                                EDUCATION
                            </span>
                        </FadeInOnScroll>
                        <FadeInOnScroll direction="bottom" duration={0.8}>
                            <h2 className="text-white text-md">Education Qualification</h2>
                        </FadeInOnScroll>
                    </h2>
                    {
                        education.map((edu, index) => (
                            <div key={index} className="flex items-center w-full relative h-fit pb-10 md:p-0  md:h-52 ">
                                {/* Timeline Line */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-1 h-full bg-blue-500"></div>

                                {/* Content Box */}
                                <div className={`w-full flex shadow-lg ${index % 2 === 0 ? " justify-start pt-5" : " md:justify-end py-10"}`}>
                                    <FadeInOnScroll direction={index % 2 == 0 ? "left" : "right"} duration={(index / 10) + 0.4} className={`bg-gray-900 p-4 md:p-6 rounded-xl shadow-md h-fit ml-4 -mt-3 md:-mt-10  md:w-1/2 ${index % 2 === 0 ? " md:mr-10 md:-mt-12 md:-ml-5" : "md:ml-10 md:-mt-8 md:-mr-5"}`}>
                                        <h3 className="text-lg md:text-2xl text-slate-400 font-bold">{edu.degree}</h3>
                                        <p className="text-md md:text-xl text-violet-600">{edu.institution}, {edu.location}</p>
                                        <p className="text-gray-400"> {edu.duration}</p>
                                        <ul className="list-disc list-inside mt-3 text-gray-600">
                                            {
                                                edu.details.map((detail, idx) => (
                                                    <li key={idx}>{detail}</li>
                                                ))
                                            }
                                        </ul>
                                    </FadeInOnScroll>
                                </div>

                                {/* Circular Marker */}
                                <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white"></div>
                            </div>
                        ))
                    }
                </div>

                <h1 className="text-center text-white">Explore the Course I have done, <Link onClick={() => scrollToSection('certifications')} href="" className="text-violet-800 underline">here</Link></h1>

                {/* Projects */}
                <div id="portfolio" className="flex flex-col py-12 items-center gap-4">
                    <div className="text-center">
                        <h2 className="relative text-3xl md:text-4xl font-bold mb-2 text-white tracking-[10px]">
                            <FadeInOnScroll direction="bottom" duration={0.3}>
                                Projects
                            </FadeInOnScroll>
                            <FadeInOnScroll direction="bottom" duration={0.35} className="absolute -top-3 md:-top-5 -left-3 inset-0 -z-10">
                                <span className="text-center text-gray-200 text-5xl md:text-7xl font-bold tracking-[10px] leading-none opacity-10">
                                    PORTFOLIO
                                </span>
                            </FadeInOnScroll>
                        </h2>
                        <FadeInOnScroll direction="bottom" duration={0.45}>
                            <p className="text-gray-400 text-md md:text-lg px-3">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                            </p>
                        </FadeInOnScroll>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 md:px-10 gap-3 align-content-center">
                        {
                            projects.slice(0, displayCount).map((project, index) => (
                                <FadeInOnScroll key={index} direction="left" duration={(index % 5) / 10 + 0.4} className="flex items-stretch">
                                    <ProjectCard project={project} />
                                </FadeInOnScroll>
                            ))
                        }
                        {/* Button to load more projects */}
                        {
                            displayCount < projects.length && (
                                <div className="col-span-4 flex justify-center mt-4">
                                    <button
                                        onClick={loadMoreProjects}
                                        className="flex gap-1 p-2 text-white rounded-md hover:text-violet-700"
                                    >
                                        Load More
                                        <ChevronsDown />
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </div >

                {/* Coding Profiles */}
                <CodingPerformance className="mx-3 md:mx-10 py-12 px-6 " />

                {/* Certifications */}
                <div id='certifications' className="flex flex-col gap-2 py-12 px-6 mx-3 md:mx-10">
                    <h2 className="relative text-4xl font-bold mb-2 text-white tracking-wider">
                        Certifications
                    </h2>
                    <div className="flex w-full overflow-scroll scroll-0 hide-scrollbar">
                        <div className="w-fit flex gap-2">
                            {
                                certifications.map((cert, index) => {
                                    console.log(index / 10)
                                    return (
                                        <div
                                            key={index}
                                            className="z-10 hover:z-20 w-[280px] border border-gray-700 cursor-pointer rounded-lg p-4 transform 
                                        transition duration-300 hover:scale-105 hover:shadow-xl"
                                        >
                                            <h4 className="text-lg font-semibold mb-2 text-gray-500">{cert.name}</h4>
                                            <p className="text-gray-300 mb-1">{cert.issuer}</p>
                                            <p className="text-sm text-purple-500 flex items-center">
                                                <Calendar className="mr-1 h-3 w-3" /> {cert.date}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div >

                <div id="contact" className="">
                    <ContactInfo />
                </div>
                <Footer />
            </div >

        </Suspense >
    );
}

export default App;
