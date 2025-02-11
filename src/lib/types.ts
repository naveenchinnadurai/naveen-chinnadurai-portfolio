import { StaticImageData } from "next/image";

export type ProjectType = {
    name: string;
    description: string;
    techStack: string[];
    repo: string;
    liveSite: string | null;
    image: StaticImageData;
};