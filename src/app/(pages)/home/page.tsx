import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import spotlight from '../../../assets/spotlight.png'
import AboutSection from "@/components/about";
import ProjectCard from "@/components/projectCard";
import { FiMapPin, FiPhone, FiMail, FiGlobe } from "react-icons/fi";

function App() {
    return (
        <div className="">
            <Image src={spotlight} alt="Spotlight Image" className="absolute top-0 right-0" />
            <Image src={spotlight} alt="Spotlight Image" className="absolute -top-4 left-4 -rotate-90" />
            <Navbar />
            <header className="text-white text-center py-8">
                <h1 className="text-4xl font-bold">Developer Portfolio</h1>
                <p className="mt-2 text-lg">Welcome to my portfolio!</p>
            </header>
            <AboutSection />
            <div className="grid grid-cols-3 px-10 gap-6">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <section className="text-white py-20 px-6">
                <div className="text-center mb-10">
                    <h2 className="relative text-4xl font-bold mb-2">
                        Contact Me
                        <span className="absolute -top-10 -left-3    inset-0 -z-10 text-gray-200 text-[6rem] font-bold tracking-wide leading-none opacity-10">
                        Contact   
                    </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <div className="text-center">
                        <FiMapPin className="text-yellow-500 text-3xl mx-auto mb-4" />
                        <h3 className="text-lg font-semibold">ADDRESS</h3>
                        <p className="text-gray-400 mt-1"> Ariyalur, Tamilnadu </p>
                    </div>
                    <div className="text-center">
                        <FiPhone className="text-yellow-500 text-3xl mx-auto mb-4" />
                        <h3 className="text-lg font-semibold">CONTACT NUMBER</h3>
                        <p className="text-gray-400 mt-1">+91 8098150750</p>
                    </div>
                    <div className="text-center">
                        <FiMail className="text-yellow-500 text-3xl mx-auto mb-4" />
                        <h3 className="text-lg font-semibold">EMAIL ADDRESS</h3>
                        <p className="text-gray-400 mt-1">dev.iamnaveen@gmail.com</p>
                    </div>
                    <div className="text-center">
                        <FiGlobe className="text-yellow-500 text-3xl mx-auto mb-4" />
                        <h3 className="text-lg font-semibold">WEBSITE</h3>
                        <p className="text-gray-400 mt-1">yoursite.com</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default App;
