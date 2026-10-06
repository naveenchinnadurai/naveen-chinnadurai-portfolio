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
        <section className={`flex flex-col gap-8 text-white ${className}`}>
            <SectionHeader
                eyebrow="Problem Solving"
                title="Competitive"
                highlight="Programming"
                description="Regular algorithmic practice that keeps my problem solving sharp outside of day-to-day product work."
                align="left"
                tone="neutral"
            />

            <div className="grid md:grid-cols-2 gap-5">
                {platforms.map((platform, index) => (
                    <FadeInOnScroll key={platform.name} direction={index % 2 === 0 ? "left" : "right"} duration={0.45}>
                        <motion.div
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 22 }}
                            style={{ "--accent": platform.accent } as React.CSSProperties}
                            className="group relative h-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-6 md:p-8 transition-colors hover:border-[var(--accent)]"
                        >
                            {/* Accent strip */}
                            <span className="absolute inset-x-0 top-0 h-[3px] bg-[var(--accent)]" />
                            <span
                                className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20 bg-[var(--accent)]"
                            />

                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900">
                                    <Image src={platform.logo} alt={platform.name} className="h-8 w-8 object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{platform.name}</h3>
                                    <p className="text-sm text-neutral-500">@{platform.handle}</p>
                                </div>
                            </div>

                            <p className="mt-5 text-sm leading-relaxed text-neutral-400">{platform.summary}</p>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                {platform.stats.map((stat) => (
                                    <div key={stat.label} className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
                                        <p className="text-xs uppercase tracking-wider text-neutral-500">{stat.label}</p>
                                        <p className="mt-1 text-lg font-semibold text-[var(--accent)]">{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 flex items-center gap-2 text-sm text-neutral-300">
                                <Award className="h-4 w-4 text-[var(--accent)]" />
                                {platform.highlight}
                            </div>

                            <div className="mt-6 flex items-center justify-between border-t border-neutral-800 pt-5">
                                <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                    Active profile
                                </span>
                                <Link
                                    href={platform.profileLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                                >
                                    View profile
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </FadeInOnScroll>
                ))}
            </div>
        </section>
    );
}
