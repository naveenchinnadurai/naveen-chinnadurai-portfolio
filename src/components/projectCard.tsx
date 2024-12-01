import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"

function ProjectCard() {
    return (
        <Card className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto border-none">
            <CardHeader>
                <img
                    src="https://via.placeholder.com/400x300" // Replace with actual image URL
                    alt="Project Thumbnail"
                    className="w-full h-48 object-cover"
                />
            </CardHeader>
            <CardContent>
                <h3 className="text-xl font-semibold mb-2">AI Image SaaS - Canva Application</h3>
                <p className="text-gray-400 text-sm mb-4">
                    A REAL Software-as-a-Service app with AI features and a payments and
                    credits system using the latest tech stack.
                </p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div className="flex items-center space-x-2">
                    <img
                        src="https://via.placeholder.com/24" // Replace with tech stack icons
                        alt="Tech 1"
                        className="w-6 h-6"
                    />
                    <img
                        src="https://via.placeholder.com/24"
                        alt="Tech 2"
                        className="w-6 h-6"
                    />
                    <img
                        src="https://via.placeholder.com/24"
                        alt="Tech 3"
                        className="w-6 h-6"
                    />
                    <img
                        src="https://via.placeholder.com/24"
                        alt="Tech 4"
                        className="w-6 h-6"
                    />
                </div>
                <a href="#" className="text-blue-500 text-sm font-medium flex items-center hover:underline" >
                    Check Live Site
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 10.5l6 6m0 0l-6 6m6-6H3"
                        />
                    </svg>
                </a>
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;
