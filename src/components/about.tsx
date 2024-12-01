import React from "react";

function AboutSection() {
    return (
        <section className="text-white py-12 px-6 w-4/5 mx-auto flex flex-col md:flex-row items-center justify-end space-y-8 md:space-y-0">
            <div className="flex-shrink-0">
                <img
                    src="https://via.placeholder.com/400x500" // Replace with actual image URL
                    alt="Profile"
                    className="w-80 h-auto rounded-lg shadow-lg"
                />
            </div>
            <div className="ml-8 w-3/6">
                <h2 className="text-4xl font-bold mb-4 relative">
                    <span className="absolute -top-10 -left-3    inset-0 -z-10 text-gray-200 text-[6rem] font-bold tracking-wide leading-none opacity-10">
                        About   
                    </span>
                    About Me
                </h2>
                <p className="text-gray-400 mb-6">
                    I'm a passionate developer skilled in frontend and backend
                    technologies. I enjoy creating user-friendly applications and
                    solving challenging problems.
                </p>
                <ul className="text-gray-300 space-y-2">
                    <li>
                        <span className="font-semibold">Name:</span> Naveen Chinnadurai
                    </li>
                    <li>
                        <span className="font-semibold">Date of birth:</span> March 02, 2004
                    </li>
                    <li>
                        <span className="font-semibold">Address:</span> Ariyalur, Tamilnadu
                    </li>
                    <li>
                        <span className="font-semibold">Zip code:</span> 621704
                    </li>
                    <li>
                        <span className="font-semibold">Email:</span>    dev.iamnaveen@gmail.com
                    </li>
                    <li>
                        <span className="font-semibold">Phone:</span> +91 8098150750
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default AboutSection;
