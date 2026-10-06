"use client";
import { education } from '@/lib/data';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, GraduationCap, MapPin, School } from 'lucide-react';
import { useRef } from 'react';
import FadeInOnScroll from './animations/fadeIn';
import SectionHeader from "./sectionHeader";

function Education() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 80%", "end 60%"],
    });
    const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative py-16 px-4 md:px-0 mx-auto md:w-4/5">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-violet-700/20 blur-[120px] rounded-full -z-10" />

            <SectionHeader
                eyebrow="Education"
                title="Academic"
                highlight="Journey"
                description="From school fundamentals to a Computer Science degree, the academic path that shaped how I think about problems and build software."
                className="mb-14"
            />

            <div ref={timelineRef} className="relative">
                {/* Timeline track + animated fill */}
                <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/10 rounded-full" />
                <motion.div
                    style={{ scaleY: lineProgress }}
                    className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-indigo-500 via-violet-500 to-indigo-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
                />

                <div className="space-y-12">
                    {education.map((edu, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div key={edu.degree} className="relative">
                                {/* Timeline node */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                                    className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-10"
                                >
                                    <span className="absolute inset-0 rounded-full bg-violet-500/60 animate-ping" />
                                    <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#0d0a24] border-2 border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                                        {index === 0
                                            ? <GraduationCap className="w-4 h-4 text-violet-300" />
                                            : <School className="w-4 h-4 text-violet-300" />}
                                    </span>
                                </motion.div>

                                <div className={`flex ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.25 }}
                                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                        className={`w-full pl-12 md:pl-0 md:w-[calc(50%-2.5rem)]`}
                                    >
                                        <EducationCard edu={edu} />
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <FadeInOnScroll direction="bottom" className="flex justify-center mt-14">
                <button
                    onClick={() => scrollToSection('certifications')}
                    className="group flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-200 text-sm md:text-base hover:bg-violet-500/20 hover:border-violet-400 transition-colors"
                >
                    <span className="sm:hidden">View my certifications</span>
                    <span className="hidden sm:inline">Explore the courses & certifications I have completed</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
            </FadeInOnScroll>
        </section>
    );
}

type EducationItem = (typeof education)[number];

function EducationCard({ edu }: { edu: EducationItem }) {
    const [scoreLabel, scoreValueRaw] = edu.details[0].split(":").map((s) => s.trim());
    const scoreValue = parseFloat(scoreValueRaw);
    const scorePercent = scoreValueRaw.includes("%") ? scoreValue : scoreValue * 10;

    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/50 via-white/5 to-indigo-500/40 hover:from-violet-400 hover:to-purple-400 transition-colors duration-500"
        >
            <div className="relative rounded-2xl bg-[#0b0820]/95 backdrop-blur-xl p-5 md:p-6 overflow-hidden">
                {/* Hover sheen */}
                <div className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full bg-violet-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs md:text-sm text-violet-200 bg-violet-500/10 border border-violet-500/30 px-3 py-1 rounded-full">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {edu.status}
                    </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-violet-200 transition-colors">
                    {edu.degree}
                </h3>
                <p className="text-violet-300/90 font-medium">{edu.institution}</p>
                <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed mt-4">{edu.description}</p>

                {/* Score */}
                <div className="mt-5">
                    <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-400">{scoreLabel}</span>
                        <span className="font-semibold text-white">{scoreValueRaw}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${scorePercent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
                            className="h-full rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-violet-400"
                        />
                    </div>
                </div>

                {/* Coursework */}
                <div className="mt-5">
                    <div className="flex items-center gap-2 mb-2.5 text-sm font-semibold text-gray-300">
                        <BookOpen className="w-4 h-4 text-violet-400" />
                        Key Coursework
                    </div>
                    <motion.div
                        className="flex flex-wrap gap-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.4 } } }}
                    >
                        {edu.coursework.map((course) => (
                            <motion.span
                                key={course}
                                variants={{
                                    hidden: { opacity: 0, y: 10, scale: 0.9 },
                                    visible: { opacity: 1, y: 0, scale: 1 },
                                }}
                                className="text-xs text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md hover:border-violet-400/60 hover:text-violet-200 hover:bg-violet-500/10 transition-colors cursor-default"
                            >
                                {course}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default Education;
