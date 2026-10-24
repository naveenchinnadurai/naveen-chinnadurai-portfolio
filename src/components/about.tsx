"use client";
import { useExperienceYears } from '@/hooks/useExperience';
import { projects } from '@/lib/data';
import { handleOpenPdf } from "@/lib/utils";
import { motion } from 'framer-motion';
import { Briefcase, Download, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import me from '../assets/me.png';
import FadeInOnScroll from './animations/fadeIn';
import SectionHeader from "./sectionHeader";

const focusAreas = ["Microsites", "Microservices", "Full-stack web apps", "React Native apps"];

const details = [
    { icon: Briefcase, label: "Currently", value: "Software Developer at Metayb" },
    { icon: MapPin, label: "Based in", value: "Ariyalur, Tamil Nadu, India" },
    { icon: Mail, label: "Email", value: "dev.iamnaveen@gmail.com", href: "mailto:dev.iamnaveen@gmail.com" },
];

function About() {
    const experience = useExperienceYears();

    const stats = [
        { value: `${experience}+`, label: "Years of professional experience" },
        { value: "3", label: "Industry sectors delivered for" },
        { value: `${projects.length}+`, label: "Personal projects built" },
    ];

    return (
        <div className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-12 md:gap-16 items-center">
                {/* Portrait */}
                <FadeInOnScroll direction="left" duration={0.8} className="mx-auto w-full max-w-[250px] sm:max-w-[300px] md:max-w-[340px] mb-6 md:mb-0">
                    <div className="relative">
                        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-violet-200/70 via-fuchsia-100/60 to-indigo-200/60 blur-2xl" />
                        <motion.div
                            whileHover={{ rotate: -1.5, scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 200, damping: 18 }}
                            className="relative rounded-[2rem] bg-white p-2.5 shadow-[0_30px_60px_-30px_rgba(91,33,182,0.45)] ring-1 ring-[#ece7f7]"
                        >
                            <div className="rounded-[1.6rem] overflow-hidden bg-violet-50">
                                <Image src={me} alt="Naveen Chinnadurai" className="w-full aspect-[4/5] object-cover object-top" placeholder="blur" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 rounded-full border border-[#ece7f7] bg-white px-4 py-2 text-sm text-slate-600 shadow-[0_12px_30px_-12px_rgba(91,33,182,0.35)]"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            Working at <span className="font-semibold text-violet-700">Metayb</span>
                        </motion.div>
                    </div>
                </FadeInOnScroll>

                {/* Content */}
                <div>
                    <SectionHeader
                        eyebrow="About Me"
                        title="Building products that"
                        highlight="people rely on"
                        align="left"
                        className="mb-6"
                    />

                    <FadeInOnScroll direction="bottom" duration={0.7}>
                        <p className="text-slate-600 leading-relaxed text-[17px]">
                            I{"'"}m a Software Developer at <span className="text-violet-700 font-semibold">Metayb</span>, where
                            I{"'"}ve spent the past {experience} years building production software for projects across the
                            <span className="text-foreground font-medium"> finance</span>, <span className="text-foreground font-medium">communication</span> and
                            <span className="text-foreground font-medium"> marketing</span> sectors.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            My work spans customer-facing microsites as well as the microservices behind them, giving me
                            an end-to-end view of how products are designed, built and shipped. I care about clean,
                            maintainable code and interfaces that feel effortless to use.
                        </p>
                    </FadeInOnScroll>
                </div>
            </div>

            {/* Full-width stats + details */}
            <div className="mt-16 border-t border-[#ece7f7] pt-10">
                <FadeInOnScroll direction="bottom" duration={0.7}>
                    <div className="card-surface grid grid-cols-3 divide-x divide-[#ece7f7] mb-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 px-4 py-5 md:px-8 md:py-7"
                            >
                                <p className="font-serif text-4xl md:text-6xl leading-none text-violet-600">{stat.value}</p>
                                <p className="text-[11px] md:text-sm text-muted-foreground leading-snug md:max-w-[9rem]">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </FadeInOnScroll>

                <FadeInOnScroll direction="bottom" duration={0.7}>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {details.map(({ icon: Icon, label, value, href }) => (
                            <li key={label} className="card-surface rounded-2xl flex items-center gap-4 p-4 last:sm:col-span-2 last:lg:col-span-1">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                                    <Icon className="w-5 h-5" />
                                </span>
                                <div className="min-w-0">
                                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</p>
                                    {href
                                        ? <a href={href} className="text-sm font-semibold text-slate-700 hover:text-violet-700 transition-colors break-words">{value}</a>
                                        : <p className="text-sm font-semibold text-slate-700">{value}</p>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </FadeInOnScroll>

                <FadeInOnScroll direction="bottom" duration={0.8}>
                    <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 shrink-0">What I work on</p>
                            <div className="flex flex-wrap gap-2">
                                {focusAreas.map((area) => (
                                    <span key={area} className="chip text-xs md:text-sm">{area}</span>
                                ))}
                            </div>
                        </div>
                        <button onClick={() => handleOpenPdf()} className="btn-primary shrink-0 w-full sm:w-auto sm:self-start lg:self-auto">
                            <Download className="w-4 h-4" />
                            View Resume
                        </button>
                    </div>
                </FadeInOnScroll>
            </div>
        </div>
    )
}

export default About
