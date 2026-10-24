"use client"
import { certifications } from "@/lib/data";
import { MotionConfig, motion } from "framer-motion";
import { Award } from "lucide-react";
import type { IconType } from "react-icons";
import { FcGoogle } from "react-icons/fc";
import { SiCoursera, SiFreecodecamp, SiKaggle } from "react-icons/si";
import Image, { StaticImageData } from "next/image";
import { Suspense, lazy } from "react";

import guviLogo from '../../assets/logo/guvi.png';
import udemyLogo from '../../assets/logo/udemy.png';

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
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f0ecf9] bg-[#fbfaff]">
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
        // Honour the OS "reduce motion" setting for every framer-motion animation
        <MotionConfig reducedMotion="user">
            <Suspense fallback={
                <div className="h-screen flex justify-center items-center">
                    <span className="loader"></span>
                </div>
            }>
                <div className="w-full overflow-hidden relative">
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
                    <CodingPerformance className="px-4 md:px-6 py-16 md:py-24" />

                    {/* Certifications */}
                    <div id='certifications' className="relative flex flex-col gap-2 py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
                        <SectionHeader
                            eyebrow="Credentials"
                            title="Courses &"
                            highlight="Certifications"
                            description="Courses and credentials I have earned to keep my skills current."
                            align="left"
                            className="mb-4"
                        />
                        <div className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-px-2 hide-scrollbar py-6 -my-4">
                            <motion.div
                                className="w-fit flex gap-4 px-2"
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
                                            whileTap={{ scale: 0.98 }}
                                            className="group card-surface card-hover w-[260px] sm:w-[280px] shrink-0 snap-start flex flex-col p-5"
                                        >
                                            <div className="mb-5 flex items-center justify-between">
                                                <ProviderLogo issuer={cert.issuer} />
                                                <Award className="w-5 h-5 text-slate-300 group-hover:text-violet-500 transition-colors" />
                                            </div>
                                            <h4 className="text-base font-bold text-foreground leading-snug mb-1 flex-1">{cert.name}</h4>
                                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                            <div className="mt-5 pt-4 border-t border-[#f0ecf9] flex items-center justify-between">
                                                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">Issued</span>
                                                <span className="font-mono text-xs text-violet-600">{cert.date}</span>
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
        </MotionConfig>
    );
}

export default App;
