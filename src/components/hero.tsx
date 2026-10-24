"use client"

import { useExperienceYears } from "@/hooks/useExperience"
import { projects } from "@/lib/data"
import { handleOpenPdf } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowDown, ArrowRight, Download, MapPin } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaAws, FaGithub, FaLinkedin, FaReact, FaWhatsapp } from "react-icons/fa"
import { SiNestjs, SiNextdotjs, SiTypescript } from "react-icons/si"
import me from '../assets/me.png'

const roles = ["Software Developer", "React & Next.js Engineer", "Problem Solver"]

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/naveenchinnadurai" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/naveen-chinnadurai/" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/918098150750" },
]

// Tech badges floating around the portrait
const floatingTech = [
  { icon: FaReact, label: "React", color: "#149ECA", className: "-left-8 top-10", delay: 0 },
  { icon: SiNestjs, label: "NestJS", color: "#E0234E", className: "-right-10 top-24", delay: 0.6 },
  { icon: SiNextdotjs, label: "Next.js", color: "#111111", className: "-left-12 bottom-24", delay: 1.2 },
  { icon: FaAws, label: "AWS", color: "#FF9900", className: "-right-6 bottom-12", delay: 1.8 },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6", className: "left-1/2 -translate-x-1/2 -bottom-5", delay: 2.4 },
]

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const experience = useExperienceYears()

  const stats = [
    { value: `${experience}+`, label: "Years experience" },
    { value: `${projects.length}+`, label: "Projects built" },
    { value: "3", label: "Industry sectors" },
  ]

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(timer)
  }, [])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section className="relative min-h-screen flex items-center px-4 md:px-6 py-16 md:py-10">
      {/* Background: faint dotted grid + soft lavender glows */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: "radial-gradient(rgba(124,58,237,0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute top-1/4 -left-24 h-80 w-80 rounded-full bg-violet-300/30 blur-[110px] -z-10" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-96 w-96 rounded-full bg-fuchsia-200/40 blur-[120px] -z-10" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        {/* Copy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/80 px-4 py-1.5 text-xs md:text-sm text-slate-600 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Software Developer at <span className="font-semibold text-foreground">Metayb</span>
              {" "}<span className="hidden sm:inline">· Open to opportunities</span>
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-7 text-[2.6rem] sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-foreground">
            Hi, I{"'"}m{" "}
            <span className="relative inline-block font-serif italic font-normal text-violet-600 tracking-normal">
              Naveen
              <motion.svg
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-3 w-full text-violet-300"
                aria-hidden
              >
                <motion.path
                  d="M2 9 C 50 2, 150 2, 198 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, ease, delay: 0.9 }}
                />
              </motion.svg>
            </span>
            <br className="hidden sm:block" /> Chinnadurai
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-5 flex items-center justify-center lg:justify-start gap-3 h-9">
            <span className="font-mono text-sm text-violet-500">~/</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl font-semibold text-slate-700"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed text-muted-foreground">
            I build fast, scalable web products end to end. For the past {experience} years at{" "}
            <span className="font-medium text-foreground">Metayb</span> I{"'"}ve shipped microsites and microservices for
            clients in finance, communication and marketing, using React, Next.js, Node.js and NestJS.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <button onClick={() => scrollTo("portfolio")} className="btn-primary group w-full sm:w-auto">
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={() => handleOpenPdf()} className="btn-secondary w-full sm:w-auto">
              <Download className="h-4 w-4" />
              Download resume
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8">
            <div className="flex divide-x divide-violet-100">
              {stats.map((stat) => (
                <div key={stat.label} className="px-5 first:pl-0 last:pr-0 text-left">
                  <p className="font-serif text-3xl md:text-4xl text-foreground leading-none">{stat.value}</p>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-btn">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="order-1 lg:order-2 relative mx-auto w-56 sm:w-64 lg:w-full lg:max-w-[360px]"
        >
          {/* Slowly rotating dashed orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 rounded-full border border-dashed border-violet-300/70"
          />
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-violet-200 via-fuchsia-100 to-indigo-200" />
          <div className="relative aspect-square overflow-hidden rounded-full border-[6px] border-white bg-violet-50 shadow-[0_30px_60px_-25px_rgba(91,33,182,0.45)]">
            <Image src={me} alt="Naveen Chinnadurai" priority placeholder="blur" className="h-full w-full object-cover object-top" />
          </div>

          {floatingTech.map(({ icon: Icon, label, color, className, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: 0.8 + delay / 4, duration: 0.4 },
                scale: { delay: 0.8 + delay / 4, duration: 0.4 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
              }}
              className={`absolute hidden sm:flex items-center gap-2 rounded-full border border-[#ece7f7] bg-white/95 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-[0_10px_30px_-12px_rgba(91,33,182,0.35)] backdrop-blur-md ${className}`}
            >
              <Icon className="h-4 w-4" style={{ color }} />
              {label}
            </motion.div>
          ))}

          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:hidden inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#ece7f7] bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
            <MapPin className="h-3 w-3 text-violet-500" /> Tamil Nadu, India
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("skills")}
        aria-label="Scroll to skills"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 hover:text-violet-600 transition-colors"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  )
}
