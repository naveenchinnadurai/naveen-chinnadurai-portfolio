"use client";
import { education } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BookOpen, GraduationCap, MapPin, School } from 'lucide-react';
import { useState } from 'react';
import FadeInOnScroll from './animations/fadeIn';
import SectionHeader from "./sectionHeader";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

type EducationItem = (typeof education)[number];

const ease = [0.22, 1, 0.36, 1] as const;

function getScore(edu: EducationItem) {
    const [label, raw] = edu.details[0].split(":").map((s) => s.trim());
    const value = parseFloat(raw);
    return { label, raw, percent: raw.includes("%") ? value : value * 10 };
}

function Education() {
    const [open, setOpen] = useState(false);

    return (
        <section className="relative py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
            <SectionHeader
                eyebrow="Education"
                title="Academic"
                highlight="Journey"
                description="From school fundamentals to a Computer Science degree."
                className="mb-12"
            />

            <motion.div
                className="grid md:grid-cols-3 gap-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.degree}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                        }}
                    >
                        <EducationSummary edu={edu} featured={index === 0} onOpen={() => setOpen(true)} />
                    </motion.div>
                ))}
            </motion.div>

            <FadeInOnScroll direction="bottom" duration={0.6} className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-12">
                <button onClick={() => setOpen(true)} className="btn-primary group">
                    View full education history
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                    onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: "smooth" })}
                    className="btn-secondary"
                >
                    Courses & certifications
                </button>
            </FadeInOnScroll>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="w-[calc(100%-2rem)] max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl border-[#ece7f7] bg-background p-0 gap-0">
                    <DialogHeader className="sticky top-0 z-10 text-left border-b border-[#ece7f7] bg-background/90 backdrop-blur-md px-6 md:px-8 py-5">
                        <span className="eyebrow">Education</span>
                        <DialogTitle className="text-2xl font-bold tracking-tight">
                            Education <span className="font-serif italic font-normal text-violet-600">history</span>
                        </DialogTitle>
                        <DialogDescription className="text-sm text-muted-foreground">
                            Coursework, scores and what each stage focused on.
                        </DialogDescription>
                    </DialogHeader>

                    <ol className="relative px-6 md:px-8 py-7">
                        <span className="absolute left-[2.6rem] md:left-[3.1rem] top-10 bottom-10 w-px bg-gradient-to-b from-violet-300 via-violet-200 to-transparent" />
                        {education.map((edu, index) => (
                            <motion.li
                                key={edu.degree}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease, delay: 0.1 + index * 0.1 }}
                                className="relative pl-14 pb-8 last:pb-0"
                            >
                                <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-background bg-violet-600 text-white shadow-[0_6px_16px_-6px_rgba(124,58,237,0.7)]">
                                    {index === 0 ? <GraduationCap className="h-4 w-4" /> : <School className="h-4 w-4" />}
                                </span>
                                <EducationDetail edu={edu} />
                            </motion.li>
                        ))}
                    </ol>
                </DialogContent>
            </Dialog>
        </section>
    );
}

function EducationSummary({ edu, featured, onOpen }: { edu: EducationItem; featured: boolean; onOpen: () => void }) {
    const score = getScore(edu);

    return (
        <motion.button
            onClick={onOpen}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className={`group card-surface card-hover w-full h-full text-left p-6 flex flex-col overflow-hidden ${featured ? "bg-gradient-to-br from-white to-violet-50/80" : ""}`}
        >
            <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-violet-600">{edu.duration.replace("-", " — ")}</span>
                <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:text-violet-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            <h3 className="mt-5 text-lg font-bold leading-snug text-foreground">{edu.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>

            <div className="mt-auto pt-7 flex items-end justify-between">
                <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">{score.label}</p>
                    <p className="font-serif text-4xl leading-none text-foreground mt-1.5">{score.raw}</p>
                </div>
                <span className="chip">{edu.status}</span>
            </div>
        </motion.button>
    );
}

function EducationDetail({ edu }: { edu: EducationItem }) {
    const score = getScore(edu);

    return (
        <div className="card-surface rounded-2xl p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs text-violet-600">{edu.duration}</span>
                <span className="chip">{edu.status}</span>
            </div>

            <h4 className="mt-3 text-lg font-bold leading-snug text-foreground">{edu.degree}</h4>
            <p className="text-sm font-medium text-violet-700">{edu.institution}</p>
            <p className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                <MapPin className="w-3.5 h-3.5" />
                {edu.location}
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground mt-4">{edu.description}</p>

            <div className="mt-5">
                <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-muted-foreground">{score.label}</span>
                    <span className="font-semibold text-foreground">{score.raw}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-violet-50 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${score.percent}%` }}
                        transition={{ duration: 1.2, ease, delay: 0.4 }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-400 to-violet-600"
                    />
                </div>
            </div>

            <div className="mt-5">
                <p className="flex items-center gap-2 mb-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    <BookOpen className="w-3.5 h-3.5 text-violet-500" />
                    Key coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                        <span key={course} className="rounded-lg border border-[#f0ecf9] bg-[#fbfaff] px-2.5 py-1 text-xs text-slate-600">
                            {course}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Education;
