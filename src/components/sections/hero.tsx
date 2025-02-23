"use client";
import React from "react";
import { ContainerScroll } from "../ui/hero";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="px-5">
            <div className="flex items-center justify-center max-sm:text-start text-center">
              <h1 className="text-5xl max-sm:text-2xl font-bold text-white">
                Welcome to Teman Coding Your <span className="bg-gradient-to-r from-purple-900 to-white bg-clip-text text-transparent">Trusted Website Solution</span> <br />
              </h1>
            </div>
            <span className="text-xl text-[#858585] max-sm:text-sm max-sm:text-start flex font-normal mt-1">
              We offer website creation solutions tailored to your business
              needs. From simple to complex websites, we are here to help you
              create the perfect online presence.
            </span>
          </div>
        }
      >
        <div className="w-full h-[600px] max-sm:h-auto flex flex-col">
          <div className="px-5 max-sm:px-1 py-2 fixed">
            <div className="justify-self-start self-start">
              <Image src="/logoTC.png" alt="logo" width={50} height={80} />
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center max-sm:px-3">
            <div className="text-center">
              <h1 className="text-white text-5xl max-sm:text-xs font-semibold max-w-2xl">
                Build Your Dream Website Starting Today
              </h1>
              <p className="text-[#858585] pt-2 max-sm:text-xs">
                &rdquo;We are Here to Bring Your Ideas to Life&rdquo;
              </p>
              <a
                href="https://linktr.ee/temancoding.com" target="_blank"
                className="mt-4 inline-block max-sm:text-xs shadow-md shadow-black hover:shadow-sm bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
