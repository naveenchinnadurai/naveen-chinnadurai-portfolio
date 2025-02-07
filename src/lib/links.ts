import { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface Link {
  icon: () => ReactNode; 
}

export const links: Link[] = [
  {
    icon: () => <FaGithub />,
  },
  {
    icon: () => <FaLinkedin />,
  },
  {
    icon: () => <FaWhatsapp />,
  },
];
