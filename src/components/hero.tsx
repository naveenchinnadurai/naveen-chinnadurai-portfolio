"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fadeIn"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import me from '../assets/me.png';
import Image from "next/image"

export function Hero() {
  return (
    <section className="text-white min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Image
          src={me.src}
          alt="Naveen Chinnadurai"
          width={240}
          height={240}
          className="w-32 h-32 md:w-60 md:h-60 mx-auto rounded-full object-contain shadow-lg bg-white"
          quality={100}
          loading="lazy"
        />

        <div className="space-y-4">
          <FadeIn direction="bottom" delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I{"'"}m{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-950/60 bg-clip-text text-transparent">
                Naveen Chinnadurai
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="bottom" delay={0.4}>
            <p className="text-xl md:text-2xl text-muted-foreground w-fit mx-auto text-slate-500">
              Full Stack Developer passionate about creating innovative web solutions
            </p>
          </FadeIn>

          <FadeIn direction="bottom" delay={0.45}>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto text-slate-500">
              Fresh graduate with hands-on experience in modern web technologies, ready to contribute to your team{"'"}s
              success
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="bottom" delay={0.8} className="flex sm:hidden gap-4 justify-center items-center ">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant='default' size="lg" className="gap-2 rounded-lg bg-gradient-to-r from-purple-950 to-purple-950/60">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </motion.div>
        </FadeIn>

        <FadeIn direction="top" delay={1.0}>
          <div className="flex justify-center items-center gap-6">
            <FadeIn direction="left" duration={0.6}>
              <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://github.com/naveenchinnadurai" target="__blank" className="cursor-pointer">
                  <FaGithub className="text-4xl text-zinc-500" />
                </Link>
              </motion.div>
            </FadeIn>
            <FadeIn direction="left" duration={0.8}>
              <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://www.linkedin.com/in/naveen-chinnadurai/" className="cursor-pointer">
                  <FaLinkedin className="text-4xl  text-zinc-500" />
                </Link>
              </motion.div>
            </FadeIn>
            <FadeIn direction="left" duration={1}>
              <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
                <Link href="https:wa.me/+918098150750" className="cursor-pointer">
                  <FaWhatsapp className="text-4xl  text-zinc-500" />
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </FadeIn>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  )
}
