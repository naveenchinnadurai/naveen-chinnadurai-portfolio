"use client";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronsDown } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import FadeInOnScroll from "./animations/fadeIn";
import ProjectCard, { getProjectCategory, ProjectCategory } from "./projectCard";
import SectionHeader from "./sectionHeader";

const PAGE_SIZE = 4;
const filters: ("All" | ProjectCategory)[] = ["All", "Full Stack", "Web", "Mobile", "Desktop"];

function Projects() {
    const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
    const [displayCount, setDisplayCount] = useState(PAGE_SIZE);

    const filtered = useMemo(
        () => activeFilter === "All" ? projects : projects.filter((p) => getProjectCategory(p) === activeFilter),
        [activeFilter]
    );
    const rowRef = useRef<HTMLDivElement>(null);
    const [scrollState, setScrollState] = useState({ progress: 0, canPrev: false, canNext: false });

    const updateScrollState = useCallback(() => {
        const row = rowRef.current;
        if (!row) return;
        const max = row.scrollWidth - row.clientWidth;
        setScrollState({
            progress: max > 0 ? (row.scrollLeft + row.clientWidth) / row.scrollWidth : 1,
            canPrev: row.scrollLeft > 4,
            canNext: row.scrollLeft < max - 4,
        });
    }, []);

    useEffect(() => {
        updateScrollState();
        window.addEventListener("resize", updateScrollState);
        return () => window.removeEventListener("resize", updateScrollState);
    }, [activeFilter, updateScrollState]);

    const scrollRow = (dir: number) => {
        const row = rowRef.current;
        if (row) row.scrollBy({ left: dir * row.clientWidth, behavior: "smooth" });
    };

    const countFor = (filter: (typeof filters)[number]) =>
        filter === "All" ? projects.length : projects.filter((p) => getProjectCategory(p) === filter).length;

    const selectFilter = (filter: (typeof filters)[number]) => {
        setActiveFilter(filter);
        setDisplayCount(PAGE_SIZE);
    };

    return (
        <section className="relative flex flex-col py-16 items-center gap-8 px-4 md:px-10">
            <div className="pointer-events-none absolute top-40 left-0 w-80 h-80 bg-purple-700/10 blur-[120px] rounded-full -z-10" />
            <div className="pointer-events-none absolute bottom-20 right-0 w-96 h-96 bg-violet-700/15 blur-[120px] rounded-full -z-10" />

            <SectionHeader
                eyebrow="Portfolio"
                title="Featured"
                highlight="Projects"
                description="A selection of things I have designed and built, from full-stack platforms and mobile apps to polished landing pages and everyday tools."
            />

            {/* Filters */}
            <FadeInOnScroll direction="bottom" duration={0.5} className="w-full flex justify-center">
                {/* Single row on every screen; scrolls sideways on narrow phones instead of wrapping */}
                <div className="flex max-w-full overflow-x-auto hide-scrollbar gap-1 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter;
                        return (
                            <button
                                key={filter}
                                onClick={() => selectFilter(filter)}
                                className={`relative shrink-0 whitespace-nowrap px-2.5 sm:px-3 md:px-4 py-1.5 text-[13px] sm:text-sm rounded-full transition-colors ${isActive ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="project-filter-pill"
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_0_18px_rgba(139,92,246,0.5)]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">
                                    {filter}
                                    <span className={`hidden sm:inline ml-1.5 text-xs ${isActive ? "text-violet-100" : "text-gray-500"}`}>
                                        {countFor(filter)}
                                    </span>
                                </span>
                            </button>
                        );
                    })}
                </div>
            </FadeInOnScroll>

            {/* Phones: vertical list with load more. sm and up: a single swipeable row (2 / 3 / 4 cards per view). */}
            <div className="relative w-full">
                <motion.div
                    key={activeFilter}
                    ref={rowRef}
                    onScroll={updateScrollState}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                    className="flex flex-col gap-5 sm:flex-row sm:overflow-x-auto sm:snap-x sm:snap-mandatory hide-scrollbar sm:py-3 sm:-my-3 sm:px-1 sm:-mx-1"
                >
                    {filtered.map((project, index) => (
                        <motion.div
                            key={project.name}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                            }}
                            className={`${index >= displayCount ? "hidden sm:flex" : "flex"} shrink-0 snap-start sm:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-2.5rem)/3)] 2xl:basis-[calc((100%-3.75rem)/4)]`}
                        >
                            <ProjectCard project={project} index={index} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Row controls (sm and up) */}
                {filtered.length > 1 && (
                    <div className="hidden sm:flex items-center justify-between gap-6 mt-8">
                        <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
                                animate={{ width: `${Math.max(scrollState.progress * 100, 8)}%` }}
                                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                            />
                        </div>
                        <div className="flex gap-2">
                            {[{ dir: -1, Icon: ChevronLeft, enabled: scrollState.canPrev, label: "Previous projects" },
                              { dir: 1, Icon: ChevronRight, enabled: scrollState.canNext, label: "Next projects" }].map(({ dir, Icon, enabled, label }) => (
                                <button
                                    key={label}
                                    aria-label={label}
                                    disabled={!enabled}
                                    onClick={() => scrollRow(dir)}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-200 transition-all hover:bg-violet-500/25 hover:border-violet-400 disabled:opacity-30 disabled:pointer-events-none"
                                >
                                    <Icon className="h-5 w-5" />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {displayCount < filtered.length && (
                <motion.button
                    onClick={() => setDisplayCount(displayCount + PAGE_SIZE)}
                    whileTap={{ scale: 0.97 }}
                    className="sm:hidden group flex items-center gap-2 px-6 py-2.5 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-200 hover:bg-violet-500/20 hover:border-violet-400 transition-colors"
                >
                    Load more projects
                    <span className="text-xs text-violet-300/70">({filtered.length - displayCount} left)</span>
                    <ChevronsDown className="w-4 h-4 animate-bounce" />
                </motion.button>
            )}
        </section>
    );
}

export default Projects;
