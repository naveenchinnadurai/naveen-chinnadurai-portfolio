"use client";
import { useEffect, useState } from "react";

// First day at Metayb
export const CAREER_START = new Date(2025, 6, 21);

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

/** Years since CAREER_START, rounded down to one decimal (e.g. "1.2"). */
export function getExperienceYears(now: Date = new Date()): string {
    const years = Math.max(0, (now.getTime() - CAREER_START.getTime()) / MS_PER_YEAR);
    return (Math.floor(years * 10) / 10).toFixed(1);
}

/**
 * The page is statically prerendered, so start from the build-time value to match
 * the HTML, then switch to today's value once mounted in the browser.
 */
export function useExperienceYears(): string {
    const [years, setYears] = useState(() =>
        getExperienceYears(new Date(Number(process.env.NEXT_PUBLIC_BUILD_TIME) || Date.now()))
    );

    useEffect(() => {
        setYears(getExperienceYears());
    }, []);

    return years;
}
