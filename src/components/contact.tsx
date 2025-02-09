import { FiMapPin, FiPhone, FiMail, FiGlobe } from "react-icons/fi";
import FadeInOnScroll from "./animations/fadeIn";


export default function ContactInfo() {
    const contactDetails = [
        {
            icon: <FiMapPin className="text-purple-950 text-3xl mx-auto mb-4" />,
            title: "ADDRESS",
            info: "Ariyalur, Tamilnadu",
        },
        {
            icon: <FiPhone className="text-purple-950/80 text-3xl mx-auto mb-4" />,
            title: "CONTACT NUMBER",
            info: "+91 8098150750",
        },
        {
            icon: <FiMail className="text-purple-950 text-3xl mx-auto mb-4" />,
            title: "EMAIL ADDRESS",
            info: "dev.iamnaveen@gmail.com",
        },
        {
            icon: <FiGlobe className="text-purple-950 text-3xl mx-auto mb-4" />,
            title: "WEBSITE",
            info: "yoursite.com",
        },
    ];
    return (
        <section className={`text-white py-20 px-6`}>
            <div className="text-center mb-10">
                <h2 className="relative text-4xl font-bold mb-2 tracking-wider">
                    <FadeInOnScroll direction="bottom" duration={0.6}>
                        Contact Me
                    </FadeInOnScroll>
                    <FadeInOnScroll direction="bottom" duration={0.4} className="absolute -top-6 md:-top-10 -left-3 inset-0 -z-10">
                        <span className=" text-gray-20 text-7xl 0 md:text-8xl font-bold tracking-wider leading-none opacity-10">
                            Contact
                        </span>
                    </FadeInOnScroll>
                </h2>
                <FadeInOnScroll direction="bottom" duration={0.6}>
                    <p className="text-gray-400 text-md">
                        Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia.
                    </p>
                </FadeInOnScroll>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {
                    contactDetails.map((item, index) => (
                        <FadeInOnScroll direction="left" duration={index / 10 + 0.35} key={index} className="text-center">
                            {item.icon}
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-400 mt-1 text-sm">{item.info}</p>
                        </FadeInOnScroll>
                    ))
                }
            </div>
        </section>

    );
}
