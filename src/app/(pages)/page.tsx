"use client"
import { certifications } from "@/lib/data";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import type { IconType } from "react-icons";
import { FcGoogle } from "react-icons/fc";
import { SiCoursera, SiFreecodecamp, SiKaggle } from "react-icons/si";
import Image, { StaticImageData } from "next/image";
import { Suspense, lazy } from "react";

import guviLogo from '../../assets/logo/guvi.png';
import udemyLogo from '../../assets/logo/udemy.png';
import spotlight from '../../assets/spotlight.png';

import About from "@/components/about";
import ScrollToTop from "@/components/animations/scrollToTop";
import Education from "@/components/education";
import { Hero } from "@/components/hero";
import Skills from "@/components/skills";
import SectionHeader from "@/components/sectionHeader";

// Lazy load components
const Navbar = lazy(() => import("@/components/navbar"));
const CodingPerformance = lazy(() => import("@/components/coding"));
const ContactInfo = lazy(() => import("@/components/contact"));
const Footer = lazy(() => import("@/components/footer"));
const Projects = lazy(() => import("@/components/projects"));

// Provider logos for certifications; providers without a brand icon fall back to a monogram
const providerLogos: { match: string; icon?: IconType; color?: string; image?: StaticImageData }[] = [
    { match: "google", icon: FcGoogle },
    { match: "guvi", image: guviLogo },
    { match: "coursera", icon: SiCoursera, color: "#0056D2" },
    { match: "free code camp", icon: SiFreecodecamp, color: "#0A0A23" },
    { match: "kaggle", icon: SiKaggle, color: "#20BEFF" },
    { match: "udemy", image: udemyLogo },
];

function ProviderLogo({ issuer }: { issuer: string }) {
    const logo = providerLogos.find((p) => issuer.toLowerCase().includes(p.match));
    return (
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.25)] ring-1 ring-violet-200/40">
            {logo?.image
                ? <Image src={logo.image} alt={issuer} className="h-7 w-7 object-contain" />
                : logo?.icon
                ? <logo.icon className="h-6 w-6" style={logo.color ? { color: logo.color } : undefined} aria-label={issuer} />
                : <span className="text-sm font-bold text-violet-700">{issuer.slice(0, 2).toUpperCase()}</span>}
        </span>
    );
}

function App() {
    // Smooth Scroll function
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

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
                <div className="">
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
                <div id="portfolio">
                    <Projects />
                </div>

                {/* Coding Profiles */}
                <CodingPerformance className="mx-3 md:mx-10 py-12 px-6 " />

                {/* Certifications */}
                <div id='certifications' className="relative flex flex-col gap-2 py-12 md:px-6 mx-3 md:mx-10">
                    <div className="pointer-events-none absolute top-10 left-1/3 w-96 h-60 bg-violet-400/10 blur-[110px] rounded-full -z-10" />
                    <SectionHeader
                        eyebrow="Credentials"
                        title="Courses &"
                        highlight="Certifications"
                        description="Courses and credentials I have earned to keep my skills current."
                        align="left"
                        className="mb-4"
                    />
                    <div className="flex w-full overflow-x-auto hide-scrollbar py-4 -my-2">
                        <motion.div
                            className="w-fit flex gap-4 px-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "some" }}
                            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        >
                            {
                                certifications.map((cert) => (
                                    <motion.div
                                        key={cert.name}
                                        variants={{
                                            hidden: { opacity: 0, y: 24 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                                        }}
                                        whileHover={{ y: -6 }}
                                        className="group relative w-[280px] shrink-0 rounded-2xl p-[1px] bg-gradient-to-br from-violet-300/60 via-purple-200/20 to-purple-300/40 hover:from-violet-200 hover:to-purple-200 transition-colors duration-500"
                                    >
                                        <div className="h-full flex flex-col rounded-2xl bg-gradient-to-br from-[#2a2350] to-[#1b1638] p-5 shadow-[0_0_0_rgba(196,181,253,0)] group-hover:shadow-[0_10px_40px_-10px_rgba(196,181,253,0.45)] transition-shadow duration-500">
                                            <div className="mb-4 flex items-center justify-between">
                                                <ProviderLogo issuer={cert.issuer} />
                                                <Award className="w-5 h-5 text-violet-300/50 group-hover:text-violet-200 transition-colors" />
                                            </div>
                                            <h4 className="text-base md:text-lg font-semibold text-violet-50 leading-snug mb-1 flex-1">{cert.name}</h4>
                                            <p className="text-sm text-violet-200/80 mb-4">{cert.issuer}</p>
                                            <span className="self-start inline-flex items-center gap-1.5 text-xs text-violet-100 bg-violet-300/15 border border-violet-300/30 px-2.5 py-1 rounded-full">
                                                <Calendar className="h-3 w-3" /> {cert.date}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    </div>
                </div >

                <div id="contact" className="">
                    <ContactInfo />
                </div>
                <Footer />
            </div >
            <ScrollToTop />
        </Suspense >
    );
}

export default App;
