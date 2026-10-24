"use client";
import { handleOpenPdf } from "@/lib/utils";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-8 pl-7 pr-2 py-2 rounded-full border border-[#ece7f7] bg-white/80 backdrop-blur-xl shadow-[0_12px_32px_-14px_rgba(91,33,182,0.3)] w-fit transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24 pointer-events-none"}`}
    >
      <span className="font-serif italic text-xl text-violet-600 leading-none">N.</span>
      <ul className="flex gap-6 text-sm font-medium text-slate-500">
        {links.map(({ id, label }) => (
          <li key={id}>
            <button onClick={() => onLinkClick(id)} className="relative py-1 transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-violet-500 after:transition-transform after:duration-300 hover:after:scale-x-100">
              {label}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => handleOpenPdf()} className="btn-primary px-5 py-2">
        <Download className="h-4 w-4" />
        Resume
      </button>
    </nav>
  );
}

export default Navbar;
