"use client";
import { projects } from '@/lib/data';
import { handleOpenPdf } from "@/lib/utils";
import { motion } from 'framer-motion';
import { Briefcase, Download, Mail, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import me from '../assets/me.png';
import FadeInOnScroll from './animations/fadeIn';
import SectionHeader from "./sectionHeader";

const stats = [
    { value: "1.2+", label: "Years of professional experience" },
    { value: "3", label: "Industry sectors delivered for" },
    { value: `${projects.length}+`, label: "Personal projects built" },
];

const focusAreas = ["Microsites", "Microservices", "Full-stack web apps", "React Native apps"];

const details = [
    { icon: Briefcase, label: "Currently", value: "Software Developer at Metayb" },
    { icon: MapPin, label: "Based in", value: "Ariyalur, Tamil Nadu, India" },
    { icon: Mail, label: "Email", value: "dev.iamnaveen@gmail.com", href: "mailto:dev.iamnaveen@gmail.com" },
];

function About() {
    return (
        <div className="text-white py-20 px-4 md:px-6 md:w-4/5 mx-auto">
            <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-10 md:gap-14 items-center">
                {/* Portrait */}
                <FadeInOnScroll direction="left" className="mx-auto w-full max-w-[340px] mb-6 md:mb-0">
                    <div className="relative">
                        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-600/40 via-transparent to-indigo-600/30 blur-2xl" />
                        <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-violet-400/60 via-white/10 to-purple-400/40">
                            <div className="rounded-3xl overflow-hidden bg-white">
                                <Image src={me} alt="Naveen Chinnadurai" className="w-full aspect-[4/5] object-cover object-top" placeholder="blur" />
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 rounded-full border border-white/10 bg-[#0b0820]/90 backdrop-blur-md px-4 py-2 text-sm shadow-lg"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            Working at <span className="font-semibold text-violet-200">Metayb</span>
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

                    <FadeInOnScroll direction="bottom" duration={0.6}>
                        <p className="text-gray-300 leading-relaxed">
                            I{"'"}m a Software Developer at <span className="text-violet-300 font-medium">Metayb</span>, where
                            I{"'"}ve spent the past 1.2 years building production software for projects across the
                            <span className="text-white"> finance</span>, <span className="text-white">communication</span> and
                            <span className="text-white"> marketing</span> sectors.
                        </p>
                        <p className="text-gray-400 leading-relaxed mt-4">
                            My work spans customer-facing microsites as well as the microservices behind them, giving me
                            an end-to-end view of how products are designed, built and shipped. I care about clean,
                            maintainable code and interfaces that feel effortless to use.
                        </p>
                    </FadeInOnScroll>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mt-8">
                        {stats.map((stat, i) => (
                            <FadeInOnScroll key={stat.label} direction="bottom" delay={i * 0.1}>
                                <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-3 md:p-4">
                                    <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">
                                        {stat.value}
                                    </p>
                                    <p className="text-[11px] md:text-xs text-gray-400 mt-1 leading-snug">{stat.label}</p>
                                </div>
                            </FadeInOnScroll>
                        ))}
                    </div>

                    {/* Focus areas */}
                    <FadeInOnScroll direction="bottom" duration={0.6}>
                        <div className="mt-8">
                            <p className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                                <Sparkles className="w-4 h-4 text-violet-400" />
                                What I work on
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {focusAreas.map((area) => (
                                    <span key={area} className="text-xs md:text-sm text-violet-100 bg-violet-500/10 border border-violet-500/25 px-3 py-1 rounded-full">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeInOnScroll>

                    {/* Details */}
                    <FadeInOnScroll direction="bottom" duration={0.7}>
                        <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                            {details.map(({ icon: Icon, label, value, href }) => (
                                <li key={label} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                                        <Icon className="w-4 h-4 text-violet-300" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-xs text-gray-500">{label}</p>
                                        {href
                                            ? <a href={href} className="text-sm text-gray-200 hover:text-violet-300 transition-colors break-all">{value}</a>
                                            : <p className="text-sm text-gray-200">{value}</p>}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </FadeInOnScroll>

                    <FadeInOnScroll direction="bottom" duration={0.8}>
                        <button
                            onClick={() => handleOpenPdf()}
                            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-medium shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:from-violet-500 hover:to-indigo-500 transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            View Resume
                        </button>
                    </FadeInOnScroll>
                </div>
            </div>
        </div>
    )
}

export default About
