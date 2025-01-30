'use client'

import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/constants/constants";
import Link from "next/link";

export default function Nav() {
  const [hoverStyle, setHoverStyle] = useState({
    left: 0,
    width: 0,
  });
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const navbarRect = navbarRef.current?.getBoundingClientRect();

    if (navbarRect) {
      setHoverStyle({
        left: buttonRect.left - navbarRect.left,
        width: buttonRect.width,
      });
    }
  };

  const handleMouseOut = () => {
    if (active) {
      const activeButton = document.querySelector(`[data-label="${active}"]`);
      if (activeButton) {
        const buttonRect = activeButton.getBoundingClientRect();
        const navbarRect = navbarRef.current?.getBoundingClientRect();
        if (navbarRect) {
          setHoverStyle({
            left: buttonRect.left - navbarRect.left,
            width: buttonRect.width,
          });
        }
      }
    } else {
      setHoverStyle({
        left: 0,
        width: 0,
      });
    }
  };

  const handleClick = (id: string) => {
    setActive(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-black/5 backdrop-blur-md w-screen fixed z-50">
      <div className="container flex justify-between items-center w-full mx-auto">

        {/* Logo */}
        <Image
          width={80}
          height={80}
          src="/logoTC.png"
          alt="Logo"
        />

        <div
          className="hidden md:flex relative flex-row text-white border-2 p-2 font-bold px-7 border-purple-950 rounded-full border-solid gap-4"
          ref={navbarRef}
        >

          <div
            className="absolute h-[30px] bg-purple-600 rounded-full transition-all duration-300"
            style={{
              left: `${hoverStyle.left}px`,
              width: `${hoverStyle.width}px`,
            }}
          ></div>

          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              data-label={label}
              className={`relative z-10 px-5 text-sm py-1 ${active === label ? "text-white " : "hover:text-gray-300"
                }`}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleClick(href)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="md:hidden pr-10">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1 justify-center items-center w-8 h-8"
          >
            {isMobileMenuOpen ? (
              <div className="relative w-8 h-8">
                <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white rotate-45 transition-transform duration-300 ease-in-out"></span>
                <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white -rotate-45 transition-transform duration-300 ease-in-out"></span>
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <span className="w-6 h-[2px] bg-white transition-all"></span>
                <span className="w-6 h-[2px] bg-white transition-all"></span>
                <span className="w-6 h-[2px] bg-white transition-all"></span>
              </div>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md text-white p-4 flex flex-col space-y-3 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(({ label, href }) => (
              <button
                key={label}
                className={`text-sm font-bold py-2 px-4 rounded-md ${active === label ? "bg-purple-600" : "hover:bg-purple-700"
                  }`}
                onClick={() => {
                  handleClick(href);
                  setIsMobileMenuOpen(false);
                }}
              >
                {label}
              </button>
            ))}
            <Link href="https://linktr.ee/temancoding.com" className="bg-purple-700 w-full justify-center items-center h-10 rounded-full text-white mr-8 hover:bg-purple-900 hover:scale-110 transition-all duration-200 ease-out flex">
              Order
            </Link>
          </motion.div>
        )}

        <div className="hidden md:block">
          <Link href="https://linktr.ee/temancoding.com" target="_blank" className="bg-purple-700 px-10 py-2 rounded-full text-white hover:bg-purple-900 hover:scale-110 transition-all duration-200 ease-out">
            Order
          </Link>
        </div>
      </div>
    </div>
  );
}
