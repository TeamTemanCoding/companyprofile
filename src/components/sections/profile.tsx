import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

const Profile = () => {
    return (
        <React.Fragment>
            <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <Image
                    src="/section/Founder.png"
                    alt="Founder"
                    width={287}
                    height={468}
                />
                <div className="flex flex-col max-sm:text-xs">
                    <h3 className="font-extralight">Satria Mika N</h3>
                    <div className="w-full h-[2px] rounded-full bg-white"></div>
                    <p>Founder Teman Coding</p>
                </div>
            </motion.div>
            <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <Image
                    src="/section/ProjectManager.png"
                    alt="Project Manager"
                    width={287}
                    height={468}
                />
                <div className="flex flex-col max-sm:text-xs">
                    <h3 className="font-extralight">Dyah Eka Lestari</h3>
                    <div className="w-full h-[2px] rounded-full bg-white"></div>
                    <p>Project Manager</p>
                </div>
            </motion.div>
        </React.Fragment>
    )
}

export default Profile