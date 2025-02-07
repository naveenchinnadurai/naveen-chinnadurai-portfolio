import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const openPdf = () => {
  const pdfUrl = "../assets/Naveen_Fullstack_Resume.pdf"; 
  window.open(pdfUrl, "_blank");
};