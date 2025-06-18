import React from 'react'
import FadeInOnScroll from './animations/fadeIn'
import { handleOpenPdf } from "@/lib/utils";
import { Button } from './ui/button';
function About() {
    return (
        <div className="h-screen text-white py-10  px-3 md:px-6 md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-end space-y-8 md:space-y-0">
            <FadeInOnScroll direction="left">
                <div className="h-[500px] w-[400px] bg-slate-400 hidden md:flex">
                    {/* <Image
                                src="https://via.placeholder.com/400x500" // Replace with actual image URL
                                alt="Profile"
                                className="h-auto rounded-lg shadow-lg"
                                width={400}
                                height={500}
                            /> */}
                </div>
            </FadeInOnScroll>
            <div className="ml-8 md:w-1/2 ">
                <h2 className="text-4xl font-bold mb-4 relative tracking-widest">
                    <FadeInOnScroll direction="bottom">
                        <span className="absolute -top-5 -left-2 inset-0 -z-10 text-gray-200 text-6xl font-bold tracking-wider leading-none opacity-10">
                            ABOUT
                        </span>
                    </FadeInOnScroll>
                    <FadeInOnScroll direction="bottom" duration={0.8}>
                        About Me
                    </FadeInOnScroll>
                </h2>
                <FadeInOnScroll direction="bottom" duration={0.6}>
                    <p className="text-gray-400 mb-6">
                        I{"'"}m a recent Computer Science graduate with a passion for full-stack development.
                        During my studies, I{"'"}ve worked on numerous projects that have given me
                        hands-on experience with modern web technologies.
                        <br />
                        I enjoy solving complex problems
                        and turning ideas into reality through code. My goal is to contribute to innovative
                        projects while continuously learning and growing as a developer.
                    </p>

                </FadeInOnScroll>
                <ul className="text-gray-300 space-y-2">
                    <li>
                        <FadeInOnScroll direction="bottom" duration={0.3}>
                            <span className="font-semibold">Name:</span> Naveen Chinnadurai
                        </FadeInOnScroll>
                    </li>
                    <li>
                        <FadeInOnScroll direction="bottom" duration={0.35}>
                            <span className="font-semibold">Date of birth:</span> March 02, 2004
                        </FadeInOnScroll>
                    </li>
                    <li>
                        <FadeInOnScroll direction="bottom" duration={0.4}>
                            <span className="font-semibold">Address:</span> Ariyalur, Tamilnadu
                        </FadeInOnScroll>
                    </li>
                    <li>
                        <FadeInOnScroll direction="bottom" duration={0.45}>
                            <span className="font-semibold">Zip code:</span> 621704
                        </FadeInOnScroll>
                    </li>
                    <li>
                        <FadeInOnScroll direction="bottom" duration={0.5}>
                            <span className="font-semibold">Email:</span> dev.iamnaveen@gmail.com
                        </FadeInOnScroll>
                    </li>
                    <li>
                        <FadeInOnScroll direction="bottom" duration={0.55}>
                            <span className="font-semibold">Phone:</span> +91 8098150750
                        </FadeInOnScroll>
                    </li>
                </ul>
                <FadeInOnScroll direction="bottom" duration={0.6}>
                    <Button className="mt-4 bg-slate-800 rounded-lg hover:bg-slate-900" onClick={() => handleOpenPdf()}>View Resume</Button>
                </FadeInOnScroll>
            </div>
        </div>
    )
}

export default About
