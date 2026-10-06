"use client"

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

const stats = [
  { value: "1.2+", label: "Years experience" },
  { value: `${projects.length}+`, label: "Projects built" },
  { value: "3", label: "Industry sectors" },
]

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/naveenchinnadurai" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/naveen-chinnadurai/" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/918098150750" },
]

// Tech badges floating around the portrait
const floatingTech = [
  { icon: FaReact, label: "React", color: "#61DAFB", className: "-left-6 top-10", delay: 0 },
  { icon: SiNestjs, label: "NestJS", color: "#E0234E", className: "-right-8 top-24", delay: 0.6 },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff", className: "-left-10 bottom-24", delay: 1.2 },
  { icon: FaAws, label: "AWS", color: "#FF9900", className: "-right-4 bottom-10", delay: 1.8 },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6", className: "left-1/2 -translate-x-1/2 -bottom-6", delay: 2.4 },
]

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(timer)
  }, [])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section className="relative text-white min-h-screen flex items-center px-4 md:px-6 py-16 md:py-10">
      {/* Background: masked grid + glows */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage: "linear-gradient(rgba(167,139,250,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute top-1/4 -left-20 h-80 w-80 rounded-full bg-violet-700/25 blur-[120px] -z-10" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-96 w-96 rounded-full bg-indigo-700/20 blur-[130px] -z-10" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        {/* Copy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs md:text-sm text-violet-100 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Software Developer at Metayb · Open to opportunities
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08]">
            Hi, I{"'"}m{" "}
            <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Naveen Chinnadurai
            </span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-4 flex items-center justify-center lg:justify-start gap-3 text-xl md:text-2xl font-medium text-gray-300 h-9">
            <span className="h-px w-8 bg-violet-400/60 hidden sm:block" />
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="text-violet-200"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed text-gray-400">
            I build fast, scalable web products end to end. For the past 1.2 years at{" "}
            <span className="text-gray-200">Metayb</span> I{"'"}ve shipped microsites and microservices for
            clients in <span className="text-gray-200">finance</span>, <span className="text-gray-200">communication</span>{" "}
            and <span className="text-gray-200">marketing</span>, using React, Next.js, Node.js and NestJS.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <button
              onClick={() => scrollTo("portfolio")}
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold shadow-[0_0_30px_rgba(139,92,246,0.45)] transition-all hover:shadow-[0_0_40px_rgba(139,92,246,0.65)] hover:from-violet-500 hover:to-indigo-500"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleOpenPdf()}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-200 backdrop-blur-md transition-colors hover:border-violet-400/60 hover:bg-violet-500/10"
            >
              <Download className="h-4 w-4" />
              Download resume
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8">
            <div className="hidden divide-x divide-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="px-4 first:pl-0 last:pr-0 text-left">
                  <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all hover:-translate-y-0.5 hover:border-violet-400/60 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="order-1 lg:order-2 relative mx-auto w-56 sm:w-64 lg:w-full lg:max-w-[360px]"
        >
          {/* Rotating gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,#7c3aed,#4f46e5,#a78bfa,#7c3aed)] opacity-80 blur-[1px]"
          />
          <div className="absolute -inset-10 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-full border-4 border-[#000319] bg-white">
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
              className={`absolute hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-[#0b0820]/85 px-3 py-2 text-xs font-medium text-gray-200 shadow-lg backdrop-blur-md ${className}`}
            >
              <Icon className="h-4 w-4" style={{ color }} />
              {label}
            </motion.div>
          ))}

          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:hidden inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-[#0b0820]/90 px-3 py-1 text-xs text-gray-300">
            <MapPin className="h-3 w-3 text-violet-300" /> Tamil Nadu, India
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("skills")}
        aria-label="Scroll to skills"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  )
}
