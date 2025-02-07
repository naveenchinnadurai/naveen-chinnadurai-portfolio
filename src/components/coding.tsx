"use client";
import { FaStar, FaMedal, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import hackerRankLogo from '../assets/hackerRank.svg';
import leetcodeLogo from '../assets/leetcode.png';
import Link from "next/link";
import Image from "next/image";

const platforms = [
    {
        name: "HackerRank",
        logo: hackerRankLogo,
        profileLink: "https://www.hackerrank.com/your_username",
        rating: "5★",
        badges: "Gold in Problem Solving",
        problemsSolved: "150+",
        gradient: "from-green-500 to-green-700",
    },
    {
        name: "LeetCode",
        logo: leetcodeLogo,
        profileLink: "https://leetcode.com/your_username",
        rating: "1800+",
        badges: "Top 10% in Contests",
        problemsSolved: "300+",
        gradient: "from-yellow-500 to-orange-600",
    },
];

export default function CodingPerformance({ className }: { className: string }) {
    return (
        <section className={`py-10 text-white rounded-xl flex flex-col gap-7 justify-center items-center ${className}`}>
            <h2 className="text-3xl font-bold text-gray-100">COMPETETIVE PROGRAMMING</h2>
            <div className="w-full p-10 rounded-xl bg-gray-900 grid md:grid-cols-2 gap-10">
                {
                    platforms.map((platform, index) => (
                        <div key={index} className={`bg-gradient-to-r ${platform.gradient} p-1 rounded-2xl shadow-lg`}>
                            <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center text-center">
                                <Image src={platform.logo} alt={platform.name} className="w-20 h-20 object-contain mb-4" />
                                <h3 className="text-2xl font-semibold">{platform.name}</h3>
                                <div className="flex items-center gap-2 text-gray-300 mt-3">
                                    <FaStar className="text-yellow-400" />
                                    <p className="text-lg font-medium">Rating: {platform.rating}</p>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <FaMedal className="text-blue-400" />
                                    <p className="text-lg font-medium">Badges: {platform.badges}</p>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <FaCheckCircle className="text-green-400" />
                                    <p className="text-lg font-medium">Solved: {platform.problemsSolved}</p>
                                </div>
                                <Link
                                    href={platform.profileLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-white bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                                >
                                    View Profile <FaExternalLinkAlt />
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
