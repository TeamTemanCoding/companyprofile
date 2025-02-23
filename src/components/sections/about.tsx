import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

const About = () => {
    return (
        <React.Fragment>

            <div className="w-full flex-col space-y-4">
                <motion.h1
                    className="font-bold bg-gradient-to-r from-[#EA0EE7] via- to-[#7100F1] w-fit bg-clip-text  text-transparent text-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Teman Coding
                </motion.h1>
                <motion.p
                    className="text-white/80"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    is a company founded in 2024 with the aim of helping businesses and
                    individuals build a professional and attractive digital presence. We
                    provide website creation services that are functional, responsive,
                    and tailored to your needs. With a focus on quality and innovation,
                    Teman Koding is ready to be a trusted partner to realize your ideas
                    into effective digital solutions.
                </motion.p>
            </div>
            <motion.div
                className="w-fit"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col w-full">
                    <div className="flex w-full justify-end items-center">
                        <Image
                            src="/section/TemanCodingprofile.png"
                            alt="Profile"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-row w-fit space-x-20 max-sm:space-x-5 text-white text-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="max-sm:text-xs w-full"
                            >
                                <h2 className="font-medium">Fullstack Engineer</h2>
                                <div className="w-full h-[2px] rounded-full bg-white"></div>
                                <p className="font-extralight">Ega Gofur</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="max-sm:text-xs w-full"
                            >
                                <h2 className="font-medium">Software Engineer</h2>
                                <div className="w-full h-[2px] rounded-full bg-white"></div>
                                <p className="font-extralight">Joenathan Haganta .G</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </React.Fragment>
    )
}

export default About