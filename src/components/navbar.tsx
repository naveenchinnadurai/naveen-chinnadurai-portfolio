"use client"
import React from "react";
import { Button } from "./ui/button";
import { openPdf } from "@/lib/utils";

function Navbar() {
  return (
    <nav className=" bg-gray-800/80 flex items-center justify-between gap-7 px-10 py-5 mt-7 rounded-2xl text-white shadow-md w-fit mx-auto">
      <ul className="hidden md:flex space-x-6 text-lg font-medium">
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Skills</li>
        <li className="hover:text-gray-300 cursor-pointer">Portfolio</li>
        <li className="hover:text-gray-300 cursor-pointer">Certifications</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
      </ul>

      <Button variant="default" onClick={() => openPdf()} className="rounded-xl px-6 py-2 bg-purple-950 cursor-pointer">
        Resume
      </Button>
    </nav>
  );
}

export default Navbar;
