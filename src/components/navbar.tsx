"use client";
import { handleOpenPdf } from "@/lib/utils";
import { useEffect, useState } from "react";
import { MdOutlineFileDownload as Download } from "react-icons/md";
import { Button } from "./ui/button";

function Navbar({ onLinkClick }: { onLinkClick: (id: string) => void }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-gray-800/80 hidden md:flex items-center justify-between gap-7 px-12 py-3 mt-7 rounded-2xl text-white shadow-md w-fit mx-auto transition-all duration-300 z-50 ${isSticky ? "fixed top-5 left-0 right-0 transform -translate-y-1/2" : ""
        }`}
    >
      <ul className="hidden sm:flex space-x-6 text-lg font-medium">
        <li className="hover:text-gray-300 cursor-pointer" onClick={() => onLinkClick('about')}>About</li>
        <li className="hover:text-gray-300 cursor-pointer" onClick={() => onLinkClick('skills')}>Skills</li>
        <li className="hover:text-gray-300 cursor-pointer" onClick={() => onLinkClick('education')}>Education</li>
        <li className="hover:text-gray-300 cursor-pointer" onClick={() => onLinkClick('portfolio')}>Portfolio</li>
        <li className="hover:text-gray-300 cursor-pointer" onClick={() => onLinkClick('contact')}>Contact</li>
      </ul>

      <Button onClick={() => handleOpenPdf()} className="flex rounded-xl px-6 py-2 bg-purple-950 cursor-pointer gap-1 items-center">
        <Download className="text-2xl" />
        Resume
      </Button>
    </nav>
  );
}

export default Navbar;
