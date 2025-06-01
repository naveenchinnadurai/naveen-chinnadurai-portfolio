"use client"
import { certifications, projects } from "@/lib/data";
import { Calendar, ChevronsDown } from "lucide-react";
import Image from "next/image";
import { Suspense, lazy, useEffect, useState } from "react";

import spotlight from '../../assets/spotlight.png';

import About from "@/components/about";
import FadeInOnScroll from "@/components/animations/fadeIn";
import Education from "@/components/education";
import { Hero } from "@/components/hero";
import Skills from "@/components/skills";

// Lazy load components
const Navbar = lazy(() => import("@/components/navbar"));
const CodingPerformance = lazy(() => import("@/components/coding"));
const ContactInfo = lazy(() => import("@/components/contact"));
const Footer = lazy(() => import("@/components/footer"));
const ProjectCard = lazy(() => import("@/components/projectCard"));

function App() {
    const [isMobile, setIsMobile] = useState(false);
    console.log(isMobile)
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

    // if (isMobile) {
    //     return (
    //         <div className="flex flex-col justify-center items-center h-screen text-center p-5">
    //             <MessageCircleWarning className="text-7xl text-purple-300 mb-3" />
    //             <h2 className="text-lg text-violet-600">Currently Not available for Mobile Devices,</h2>
    //             <h2 className="text-md text-violet-400">Try with Desktop screens</h2>
    //         </div>
    //     )
    // }

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
                <section className="md:w-5/6 h-fit mx-auto z-50">
                    <Navbar onLinkClick={scrollToSection} />
                    <Hero />
                </section>
                {/* Skills Section */}
                <div id="skills" className="">
                    <Skills />
                </div>

                {/* About Section */}
                <section id="about" >
                    <About />
                </section >

                <div id="education">
                    <Education />
                </div>

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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 md:px-10 gap-3 align-content-center">
                        {
                            projects.slice(0, displayCount).map((project, index) => (
                                <FadeInOnScroll key={index} direction="left" duration={(index % 5) / 10 + 0.4} className="flex items-stretch">
                                    <ProjectCard project={project} />
                                </FadeInOnScroll>
                            ))
                        }
                        {/* Button to load more projects */}
                    </div>
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
                </div >

                {/* Coding Profiles */}
                <CodingPerformance className="mx-3 md:mx-10 py-12 px-6 " />

                {/* Certifications */}
                <div id='certifications' className="flex flex-col gap-2 py-12 md:px-6 mx-3 md:mx-10">
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
