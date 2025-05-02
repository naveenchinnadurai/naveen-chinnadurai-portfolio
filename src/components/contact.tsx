'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { FaExternalLinkAlt as Message } from "react-icons/fa";
import { FiGlobe, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import FadeInOnScroll from "./animations/fadeIn";

export default function ContactInfo() {
    const [open, setOpen] = useState(false);

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
            title: "Send Message",
            info: "message",
        },
    ];

    return (
        <section className="text-white py-20 px-6">
            <div className="text-center mb-10">
                <h2 className="relative text-4xl font-bold mb-2 tracking-wider">
                    <FadeInOnScroll direction="bottom" duration={0.6}>
                        Contact Me
                    </FadeInOnScroll>
                    <FadeInOnScroll direction="bottom" duration={0.4} className="absolute -top-6 md:-top-10 -left-3 inset-0 -z-10">
                        <span className="text-gray-200 text-7xl md:text-8xl font-bold tracking-wider leading-none opacity-10">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
                {
                    contactDetails.map((item, index) => (
                        <FadeInOnScroll direction="left" duration={index / 10 + 0.35} key={index} className="text-center">
                            {item.icon}
                            <h3 className="text-lg font-semibold">
                                {item.title}
                            </h3>
                            {
                                item.info == 'message' && (
                                    <Dialog open={open} onOpenChange={setOpen}>
                                        <DialogTrigger asChild>
                                            <Button className="text-purple-950 hover:text-purple-900 rounded-full px-0 py-0 ml-2 text-sm font-semibold">
                                                <Message />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-md bg-[#010219] text-white rounded-2xl border-none py-10">
                                            <DialogHeader>
                                                <DialogTitle className="text-center text-2xl mb-4">Ping Me !!   </DialogTitle>
                                            </DialogHeader>
                                            <ContactForm onSuccess={() => setOpen(false)} />
                                        </DialogContent>
                                    </Dialog>
                                )
                            }
                            {
                                item.info != 'message' && (
                                    <p className="text-gray-400 mt-1 text-sm">{item.info}</p>
                                )
                            }
                        </FadeInOnScroll>
                    ))
                }
            </div>
        </section >
    );
}

function ContactForm({ onSuccess }: { onSuccess: () => void }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        setFormData({
            name: "",
            phone: "",
            message: "",
        });
        onSuccess(); // Close the modal
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                className="border-slate-600 rounded-md"
                onChange={handleChange}
                required
            />
            <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                className="border-slate-600 rounded-md"
                onChange={handleChange}
                required
            />
            <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                className="border-slate-600 rounded-md"
                onChange={handleChange}
                required
            />
            <Button type="submit" className="w-full border border-purple-950 hover:border-purple-900 rounded-md text-md mt-4">
                Send Message
            </Button>
        </form>
    );
}
