'use client'
import Image from "next/image";
import { useState, useRef } from "react";

export default function Nav() {
  const [hoverStyle, setHoverStyle] = useState({
    left: 0,
    width: 0,
  });
  const [active, setActive] = useState("Home"); // State untuk tombol aktif
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
      // Jika ada tombol aktif, kunci posisi background ke tombol tersebut
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
      // Kembalikan posisi default jika tidak ada tombol aktif
      setHoverStyle({
        left: 0,
        width: 0,
      });
    }
  };

  const handleClick = (label: string) => {
    setActive(label); // Set tombol aktif
    const activeButton = document.querySelector(`[data-label="${label}"]`);
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
  };

  return (
    <div className="bg-black/5 backdrop-blur-md flex flex-row w-screen fixed z-50 justify-between items-center">
      {/* Logo */}
      <Image
        width={50}
        height={50}
        src="/logoTC.png"
        alt="Logo"
        className="ml-3"
      />

      {/* Navbar Buttons */}
      <div
        className="relative flex flex-row text-white border-2 p-2 font-bold px-7 border-purple-950 rounded-full border-solid gap-4"
        ref={navbarRef}
      >
        {/* Background Animasi */}
        <div
          className="absolute h-10 bg-purple-600 rounded-full transition-all duration-300"
          style={{
            left: `${hoverStyle.left}px`,
            width: `${hoverStyle.width}px`,
          }}
        ></div>

        {/* Tombol Navbar */}
        {["Home", "About", "Services", "Contact"].map((label) => (
          <button
            key={label}
            data-label={label} // Tambahkan atribut untuk tracking tombol
            className={`relative z-10 px-4 py-2 ${
              active === label
                ? "text-white font-bold"
                : "hover:text-gray-300"
            }`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(label)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Order Button */}
      <div>
        <button className="bg-purple-700 w-32 h-10 rounded-full text-white mr-8 hover:bg-purple-900 hover:scale-110 transition-all duration-200 ease-out">
          Order
        </button>
      </div>
    </div>
  );
}
