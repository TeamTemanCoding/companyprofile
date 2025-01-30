"use client";

import Hero from "@/components/sections/hero";
import { motion } from "framer-motion";
import About from "@/components/sections/about";
import Profile from "@/components/sections/profile";
import VisionMission from "@/components/sections/visionMission";
import Services from "@/components/sections/services";
import PageContainer from "@/components/layouts/pageContainer";
import SectionContainer from "@/components/layouts/sectionContainer";

export default function Home() {
  return (
    <PageContainer className="scroll-smooth">
      {/* <SectionContainer> */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 30 }}
        transition={{ duration: 1, ease: "easeOut" }}
        id="Home"
      >
        <Hero />
      </motion.div>
      {/* </SectionContainer> */}

      <SectionContainer
        id="About"
        className="w-full px-10 flex flex-row max-sm:flex-col space-x-10 py-5 items-center"
      >
        <About />
      </SectionContainer>

      <SectionContainer
        id="About"
        className="space-x-5 py-32 max-sm:px-10 flex flex-row text-white text-center justify-center items-center"
      >
        <Profile />
      </SectionContainer>

      <SectionContainer className="w-full p-10 space-x-5 text-white flex flex-row max-sm:flex-col max-sm:space-y-6">
        <VisionMission />
      </SectionContainer>

      <SectionContainer
        id="Services"
        className="w-full px-5 md:px-10 py-20 space-y-10 flex flex-col"
      >
        <Services />
      </SectionContainer>
    </PageContainer>
  );
}
