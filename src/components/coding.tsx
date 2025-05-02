"use client";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaExternalLinkAlt, FaMedal } from "react-icons/fa";
import hackerRankLogo from '../assets/logo/hackerRank.svg';
import leetcodeLogo from '../assets/logo/leetcode.png';
import FadeInOnScroll from "./animations/fadeIn";

const platforms = [
    {
        name: "HackerRank",
        logo: hackerRankLogo,
        profileLink: "https://www.hackerrank.com/profile/Naveen7239",
        rating: "5★",
        badges: "Silver in Java, Bronze in Python and SQL",
        problemsSolved: "50+ Problems",
        gradient: "from-green-500 to-green-700",
    },
    {
        name: "LeetCode",
        logo: leetcodeLogo,
        profileLink: "https://leetcode.com/u/7239ZweeN/",
        rating: "1800+",
        badges: "Ranked in the row, 1,467,302th Position",
        problemsSolved: "60+ Problems",
        gradient: "from-yellow-500 to-orange-600",
    },
];

export default function CodingPerformance({ className }: { className: string }) {
    return (
        <section className={`py-10 text-white flex flex-col gap-7 justify-center items-center ${className}`}>
            <FadeInOnScroll direction="bottom" duration={0.45} className="w-full">
                <h2 className="text-4xl font-bold text-gray-100 w-full"> Competetive Programming</h2>
            </FadeInOnScroll>
            <div className="w-full p-3 md:p-10 rounded-xl bg-gray-900 grid md:grid-cols-2 gap-10">
                {
                    platforms.map((platform, index) => (
                        <FadeInOnScroll
                            key={index}
                            direction={index % 2 == 0 ? "left" : "right"}
                            duration={0.35}
                            className={`bg-gradient-to-r ${platform.gradient} p-1 rounded-2xl shadow-lg`}
                        >
                            <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center text-center">
                                <Image src={platform.logo} alt={platform.name} className="w-12 h-12 md:h-20 md:w-20 object-contain mb-2" />
                                <h3 className="text-xl md:text-2xl font-semibold">{platform.name}</h3>
                                {/* <div className="flex items-center gap-2 text-gray-300 mt-3">
                                    <FaStar className="text-yellow-400" />
                                    <p className="text-sm md:text-md font-medium">Rating: {platform.rating}</p>
                                </div> */}
                                <div className="flex items-center gap-2 text-gray-300 my-2">
                                    <FaMedal className="text-blue-400" />
                                    <p className="text-sm md:text-md font-medium">Badges: {platform.badges}</p>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <FaCheckCircle className="text-green-400" />
                                    <p className="text-sm md:text-md font-medium">Solved: {platform.problemsSolved}</p>
                                </div>
                                <Link
                                    href={platform.profileLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                                >
                                    View Profile <FaExternalLinkAlt />
                                </Link>
                            </div>
                        </FadeInOnScroll>
                    ))
                }
            </div>
        </section>
    );
}
