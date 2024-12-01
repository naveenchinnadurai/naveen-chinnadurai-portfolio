import React from "react";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className="flex items-center justify-center px-10 py-7 text-white shadow-md">
      <ul className="hidden md:flex space-x-6 text-md font-medium">
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Portfolio</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
      </ul>

      {/* <Button variant="default" className="hidden md:block rounded-3xl px-6 py-2 bg-violet-950 hover:bg-blue-500">
        Resume
      </Button> */}
    </nav>
  );
}

export default Navbar;
