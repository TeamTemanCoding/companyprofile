"use client";
import Hero from "@/components/hero";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className=" scroll-smooth">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>
      <section
        id="Home"
        className="w-full px-10 flex flex-row max-sm:flex-col space-x-10 py-5 items-center"
      >
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
      </section>

      {/* Other sections with scroll animations */}
      <section
        id="About"
        className="space-x-5 py-32 max-sm:px-10 flex flex-row text-white text-center justify-center items-center"
      >
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
      </section>

      <section className="w-full p-10 space-x-5 text-white flex flex-row max-sm:flex-col max-sm:space-y-6">
        <motion.div
          className="relative inline-flex w-full overflow-hidden rounded-3xl p-[2px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#19055F_0%,#7200F1_50%,#AD179E_100%)]" />
          <div className="h-full w-full space-y-4 flex flex-col px-5 py-5 rounded-[25px] bg-[#381958] text-sm font-medium text-white backdrop-blur-3xl">
            <h3>Vision</h3>
            <p className="font-light text-white/80">
              To be a trusted team in creating creative and innovative digital
              solutions through high-quality websites that support business and
              technology development.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="relative inline-flex w-full overflow-hidden rounded-3xl p-[2px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] max-sm:animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#19055F_0%,#7200F1_50%,#AD179E_100%)]" />
          <div className="h-full w-full space-y-4 flex flex-col px-5 py-5 rounded-[25px] bg-[#381958] text-sm font-medium text-white backdrop-blur-3xl">
            <h3>Mission</h3>
            <p className="font-light text-white/80">
              Providing the best service, developing the skills of each team
              member, building long-term relationships with clients, focusing on
              professional results.
            </p>
          </div>
        </motion.div>
      </section>

      <section
        id="Services"
        className="w-full px-5 md:px-10 py-20 space-y-10 flex flex-col"
      >
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
            {[
              {
                title: "Custom Website Creation",
                description:
                  "Build your digital identity with a website that is specifically designed for your business needs. From modern design to advanced functionality, we ensure the best user experience.",
                icon: "/section/IconTC1.svg",
              },
              {
                title: "E-commerce Development",
                description:
                  "Start your online business with a reliable and secure e-commerce platform. We provide features such as product management, payment integration, and sales analytics.",
                icon: "/section/IconTC2.svg",
              },
              {
                title: "Professional UI/UX Design",
                description:
                  "Make your visitors' experience more enjoyable with intuitive and aesthetic interface design. Our focus is on functionality and user convenience.",
                icon: "/section/IconTC3.svg",
              },
            ].map(({ title, description, icon }, idx) => (
              <motion.div
                key={idx}
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
      </section>
    </section>
  );
}
