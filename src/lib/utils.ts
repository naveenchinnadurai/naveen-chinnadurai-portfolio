import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleOpenPdf = () => {
  const pdfUrl = '/Naveen_Fullstack_Resume.pdf';
  window.open(pdfUrl, "_blank");
};

export function shortenText(text: string, maxWords: number): string {
  const words = text.split(' ');

  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }

  return text;
}

