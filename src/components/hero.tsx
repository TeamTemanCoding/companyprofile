"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/hero";

export default function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className="flex items-center justify-center text-center">
              <h1 className="text-6xl font-bold text-white">
                Welcome to Teman Coding Your Trusted Website Solution <br />
              </h1>
            </div>
            <span className="text-xl font-normal mt-1 text-white">
              We offer website creation solutions tailored to your business
              needs. From simple to complex websites, we are here to help you
              create the perfect online presence.
            </span>
          </>
        }
      >
        <div className="w-full h-screen flex flex-col">
          <div className="px-5 py-2 fixed">
            <div className="justify-self-start self-start">Logo</div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="text-center">
              <h1 className="text-white text-5xl font-semibold max-w-2xl">
                Build Your Dream Website Starting Today
              </h1>
              <p className="text-white pt-2">
                "We are Here to Bring Your Ideas to Life"
              </p>
              <a
                href=""
                className="mt-4 inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
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
