import React from 'react'
import { motion } from "framer-motion"

interface IBoxProps {
    label: string;
    description: string;
    className: string;
}

const Box = ({ label, description, className }: IBoxProps) => {
    return (
        <motion.div
            className="relative inline-flex w-full overflow-hidden rounded-3xl p-[2px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className={`absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#19055F_0%,#7200F1_50%,#AD179E_100%)] ${className}`} />
            <div className="h-full w-full space-y-4 flex flex-col px-5 py-5 rounded-[25px] bg-[#381958] text-sm font-medium text-white backdrop-blur-3xl">
                <h3>{label}</h3>
                <p className="font-light text-white/80">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default Box