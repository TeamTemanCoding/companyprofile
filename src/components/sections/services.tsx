import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { services } from '@/data/data';

const Services = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col space-y-2">
                <motion.h3
                    className="font-bold w-fit bg-gradient-to-r from-[#EA0EE7] to-[#7100F1] bg-clip-text text-transparent text-3xl md:text-4xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Our Services
                </motion.h3>
                <motion.p
                    className="font-normal text-white text-base md:text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    We provide complete solutions for your digital needs. Here are our
                    featured services:
                </motion.p>
            </div>
            <div className="w-full h-full pt-10">
                <div className="grid gap-6 md:grid-cols-3 h-full">
                    {services.map(({ title, description, icon }, idx) => (
                        <motion.div
                            key={idx + 1}
                            className="flex flex-col space-y-6 items-center text-start h-full"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src={icon}
                                alt={title}
                                width={100}
                                height={100}
                                className="w-20 h-20 md:w-24 md:h-24"
                            />
                            <div className="px-5 bg-white/10 text-white py-5 rounded-3xl flex flex-col space-y-4 h-full">
                                <h4 className="font-medium text-lg">{title}</h4>
                                <p className="font-light text-white/80 text-sm md:text-base">
                                    {description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Services