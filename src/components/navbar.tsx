"use client";
import { handleOpenPdf } from "@/lib/utils";
import { useEffect, useState } from "react";
import { MdOutlineFileDownload as Download } from "react-icons/md";
import { Button } from "./ui/button";

function Navbar({ onLinkClick }: { onLinkClick: (id: string) => void }) {
  const [isVisible, setIsVisible] = useState(false);

  // Stay hidden over the landing section; slide in once the user scrolls past most of it
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.7);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-hidden={!isVisible}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center justify-between gap-7 px-10 py-2.5 rounded-2xl border border-white/10 bg-[#0b0820]/75 backdrop-blur-xl text-white shadow-[0_8px_30px_rgba(0,0,0,0.4)] w-fit transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24 pointer-events-none"}`}
    >
      <ul className="hidden sm:flex space-x-6 text-base font-medium text-gray-300">
        <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onLinkClick('about')}>About</li>
        <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onLinkClick('skills')}>Skills</li>
        <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onLinkClick('education')}>Education</li>
        <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onLinkClick('portfolio')}>Portfolio</li>
        <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onLinkClick('contact')}>Contact</li>
      </ul>

      <Button onClick={() => handleOpenPdf()} className="flex rounded-xl px-5 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 cursor-pointer gap-1 items-center">
        <Download className="text-2xl" />
        Resume
      </Button>
    </nav>
  );
}

export default Navbar;
