"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import hackerRankLogo from '../assets/logo/hackerRank.svg';
import leetcodeLogo from '../assets/logo/leetcode.png';
import FadeInOnScroll from "./animations/fadeIn";
import SectionHeader from "./sectionHeader";

const platforms = [
    {
        name: "HackerRank",
        handle: "Naveen7239",
        logo: hackerRankLogo,
        profileLink: "https://www.hackerrank.com/profile/Naveen7239",
        summary: "Problem solving and language proficiency tracks across Java, Python and SQL.",
        stats: [
            { label: "Problems solved", value: "50+" },
            { label: "Badges", value: "3 earned" },
        ],
        highlight: "Silver in Java, Bronze in Python and SQL",
        accent: "#00EA64",
    },
    {
        name: "LeetCode",
        handle: "7239ZweeN",
        logo: leetcodeLogo,
        profileLink: "https://leetcode.com/u/7239ZweeN/",
        summary: "Data structures and algorithms practice focused on interview-style problems.",
        stats: [
            { label: "Problems solved", value: "60+" },
            { label: "Global rank", value: "1,467,302" },
        ],
        highlight: "Ranked among LeetCode users worldwide",
        accent: "#FFA116",
    },
];

export default function CodingPerformance({ className }: { className: string }) {
    return (
        <section className={`flex flex-col gap-10 max-w-6xl mx-auto ${className}`}>
            <SectionHeader
                eyebrow="Problem Solving"
                title="Competitive"
                highlight="Programming"
                description="Regular algorithmic practice that keeps my problem solving sharp outside of day-to-day product work."
                align="left"
            />

            <div className="grid md:grid-cols-2 gap-5">
                {platforms.map((platform, index) => (
                    <FadeInOnScroll key={platform.name} direction={index % 2 === 0 ? "left" : "right"} duration={0.6}>
                        <motion.div
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 0.985 }}
                            transition={{ type: "spring", stiffness: 300, damping: 22 }}
                            style={{ "--accent": platform.accent } as React.CSSProperties}
                            className="group card-surface card-hover h-full overflow-hidden p-6 md:p-8"
                        >
                            <span
                                className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-[0.08] blur-3xl transition-opacity duration-500 group-hover:opacity-20 bg-[var(--accent)]"
                            />

                            <div className="relative flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f0ecf9] bg-[#fbfaff]">
                                    <Image src={platform.logo} alt={platform.name} className="h-8 w-8 object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">{platform.name}</h3>
                                    <p className="font-mono text-xs text-slate-400">@{platform.handle}</p>
                                </div>
                            </div>

                            <p className="relative mt-5 text-sm leading-relaxed text-muted-foreground">{platform.summary}</p>

                            <div className="relative mt-6 grid grid-cols-2 gap-3">
                                {platform.stats.map((stat) => (
                                    <div key={stat.label} className="rounded-2xl border border-[#f0ecf9] bg-[#fbfaff] p-4">
                                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
                                        <p className="mt-1.5 font-serif text-3xl leading-none text-foreground">{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="relative mt-5 flex items-center gap-2 text-sm text-slate-600">
                                <Award className="h-4 w-4 text-violet-500" />
                                {platform.highlight}
                            </div>

                            <div className="relative mt-6 flex items-center justify-between border-t border-[#f0ecf9] pt-5">
                                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                                    Active profile
                                </span>
                                <Link
                                    href={platform.profileLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-violet-700 hover:text-violet-900"
                                >
                                    View profile
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </Link>
                            </div>
                        </motion.div>
                    </FadeInOnScroll>
                ))}
            </div>
        </section>
    );
}
