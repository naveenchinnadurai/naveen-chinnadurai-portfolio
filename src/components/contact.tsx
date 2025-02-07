import { FiMapPin, FiPhone, FiMail, FiGlobe } from "react-icons/fi";


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
                <h2 className="relative text-4xl font-bold mb-2">
                    Contact Me
                    <span className="absolute -top-10 -left-3    inset-0 -z-10 text-gray-200 text-[6rem] font-bold tracking-wide leading-none opacity-10">
                        Contact
                    </span>
                </h2>
                <p className="text-gray-400 text-lg">
                    Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {
                    contactDetails.map((item, index) => (
                        <div key={index} className="text-center">
                            {item.icon}
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-400 mt-1">{item.info}</p>
                        </div>
                    ))
                }
            </div>
        </section>

    );
}
