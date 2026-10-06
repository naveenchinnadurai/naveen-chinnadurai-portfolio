'use client';

import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import FadeInOnScroll from "./animations/fadeIn";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import SectionHeader from "./sectionHeader";

const EMAIL = "dev.iamnaveen@gmail.com";

const contactMethods = [
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Phone, label: "Phone", value: "+91 80981 50750", href: "tel:+918098150750" },
    { icon: MapPin, label: "Location", value: "Ariyalur, Tamil Nadu, India", href: null },
];

const socials = [
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/naveen-chinnadurai/" },
    { icon: FaGithub, label: "GitHub", href: "https://github.com/naveenchinnadurai" },
    { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/918098150750" },
];

export default function ContactInfo() {
    const [open, setOpen] = useState(false);

    return (
        <section className="text-white py-20 px-4 md:px-10">
            <SectionHeader
                eyebrow="Contact"
                title="Let's"
                highlight="Connect"
                description="Have a role, a project or just a question? I'm open to new opportunities and usually reply within a day."
                className="mb-12"
            />

            <FadeInOnScroll direction="bottom" duration={0.6} className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
                    {/* Details */}
                    <div className="relative p-6 md:p-10 bg-gradient-to-br from-violet-700/25 via-violet-900/10 to-transparent border-b md:border-b-0 md:border-r border-white/10">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Open to opportunities
                        </span>
                        <h3 className="mt-5 text-2xl font-semibold">Let{"'"}s build something great together.</h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-400">
                            Reach out directly through any of the channels below, or drop a message using the form.
                        </p>

                        <ul className="mt-8 space-y-5">
                            {contactMethods.map(({ icon: Icon, label, value, href }) => {
                                const content = (
                                    <>
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-300 transition-colors group-hover:border-violet-400/50 group-hover:bg-violet-500/10">
                                            <Icon className="h-4 w-4" />
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block text-xs text-gray-500">{label}</span>
                                            <span className="block text-sm text-gray-200 break-all transition-colors group-hover:text-violet-200">{value}</span>
                                        </span>
                                    </>
                                );
                                return (
                                    <li key={label}>
                                        {href
                                            ? <a href={href} className="group flex items-center gap-4">{content}</a>
                                            : <div className="group flex items-center gap-4">{content}</div>}
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-10 flex gap-3">
                            {socials.map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-white"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>

                        {/* Phones: the form opens in a popup */}
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <button className="md:hidden mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-medium shadow-[0_0_20px_rgba(139,92,246,0.35)]">
                                    <MessageSquare className="h-4 w-4" />
                                    Send a message
                                </button>
                            </DialogTrigger>
                            <DialogContent className="w-[calc(100%-2rem)] max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0b0820] p-6 text-white">
                                <DialogHeader className="text-left">
                                    <DialogTitle className="text-xl font-semibold">Send a message</DialogTitle>
                                    <DialogDescription className="text-sm text-gray-400">
                                        I usually reply within a day.
                                    </DialogDescription>
                                </DialogHeader>
                                <ContactForm onSubmitted={() => setOpen(false)} />
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* Form (tablet and desktop) */}
                    <div className="hidden md:block p-10">
                        <ContactForm />
                    </div>
                </div>
            </FadeInOnScroll>
        </section>
    );
}

const fieldClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-violet-400/60 focus:bg-white/[0.05]";

function ContactForm({ onSubmitted }: { onSubmitted?: () => void }) {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const subject = formData.subject || `Hello from ${formData.name}`;
        const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        onSubmitted?.();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                    <span className="mb-2 block text-xs font-medium text-gray-400">Name</span>
                    <input name="name" type="text" required placeholder="Your name" value={formData.name} onChange={handleChange} className={fieldClass} />
                </label>
                <label className="block">
                    <span className="mb-2 block text-xs font-medium text-gray-400">Email</span>
                    <input name="email" type="email" required placeholder="you@company.com" value={formData.email} onChange={handleChange} className={fieldClass} />
                </label>
            </div>
            <label className="block">
                <span className="mb-2 block text-xs font-medium text-gray-400">Subject</span>
                <input name="subject" type="text" placeholder="Job opportunity, project, collaboration…" value={formData.subject} onChange={handleChange} className={fieldClass} />
            </label>
            <label className="block">
                <span className="mb-2 block text-xs font-medium text-gray-400">Message</span>
                <textarea name="message" required rows={5} placeholder="Tell me a little about what you have in mind" value={formData.message} onChange={handleChange} className={`${fieldClass} resize-none`} />
            </label>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <p className="text-xs text-gray-500">Opens your email app with the message ready to send.</p>
                <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-medium shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-colors hover:from-violet-500 hover:to-indigo-500"
                >
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
            </div>
        </form>
    );
}
