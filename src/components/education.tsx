import { Badge } from "@/components/ui/badge";
import { education } from '@/lib/data';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { default as FadeIn, default as FadeInOnScroll } from './animations/fadeIn';
import { Card, CardContent } from './ui/card';

function Education() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <div className="py-12 px-6 md:px-0 mx-auto md:w-4/5 relative">
                <h2 className="text-4xl font-bold mb-7 relative tracking-widest text-center">
                    <FadeInOnScroll direction="bottom">
                        <span className="absolute -top-8 -left-3 inset-0 -z-10 text-gray-200 text-[4rem] font-bold tracking-wider leading-none opacity-10">
                            EDUCATION
                        </span>
                    </FadeInOnScroll>
                    <FadeInOnScroll direction="bottom" duration={0.8}>
                        <h2 className="text-white text-md">Education Qualification</h2>
                    </FadeInOnScroll>
                </h2>

                {
                    education.map((edu, index) => (
                        <div className='relative' key={index}>
                            <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-10"></div>
                            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-1 h-full bg-blue-500"></div>
                            <FadeIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.2}>
                                <div className={`relative flex items-center  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`} >
                                    {/* Content */}
                                    <div className={`w-full md:w-1/2 pb-3 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} ml-5 md:ml-0`}>
                                        <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
                                            <Card className=" group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                                                <CardContent className="bg-gradient-to-r from-[#584781] to-[#1b0d31] p-6 rounded-lg relative ">
                                                    <div className="flex items-start justify-between mb-4">
                                                        <div className="flex items-start gap-4">
                                                            <motion.div
                                                                className="p-3 border-indigo-200 rounded-xl"
                                                                whileHover={{ rotate: 360 }}
                                                                transition={{ duration: 0.6 }}
                                                            >
                                                                <GraduationCap className="w-6 h-6 text-primary" />
                                                            </motion.div>
                                                            <div>
                                                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                                    {edu.degree}
                                                                </h3>
                                                                <p className="text-muted-foreground font-medium text-lg">{edu.institution}</p>
                                                                <p className="text-muted-foreground font-medium text-lg">{edu.location}</p>
                                                            </div>
                                                        </div>
                                                        {/* <Badge variant="secondary" className="border-purple-700/90 text-white absolute top-2 right-2">
                                                            {edu.status}
                                                        </Badge> */}
                                                    </div>
                                                    <div className="flex flex-wrap gap-4 text-sm">
                                                        <div className="flex items-center gap-2 text-muted-foreground">
                                                            <Calendar className="w-4 h-4" />
                                                            {edu.duration}
                                                        </div>
                                                        <Badge className="font-semibold">
                                                            {edu.details[0]}
                                                        </Badge>
                                                    </div>
                                                </CardContent>
                                                {/* <CardFooter className='text-white'>
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <BookOpen className="w-4 h-4 text-primary" />
                                                        <h4 className="font-semibold">Key Coursework</h4>
                                                    </div>
                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                                        {edu.coursework.map((course, courseIndex) => (
                                                            <motion.div key={courseIndex} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                                <Badge className="text-xs justify-center cursor-pointer">
                                                                    {course}
                                                                </Badge>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </CardFooter> */}
                                            </Card>
                                        </motion.div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    ))
                }
            </div >

            <h1 className="text-center text-white">
                Explore the Course I have done,
                <Link
                    onClick={() => scrollToSection('certifications')}
                    href=""
                    className="text-violet-800 underline">
                    here
                </Link>
            </h1>

        </>
    )
}

export default Education
