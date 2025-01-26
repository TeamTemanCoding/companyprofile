import Image from "next/image";

export default function Footer() {
  return (
    <footer id="Contact" className="flex flex-row max-sm:flex-col max-sm:space-y-10 text-white items-start mt-20 p-4">

      <div className="w-full sm:w-auto flex justify-center sm:justify-start">
        <Image
          width={200}
          height={200}
          src="/logoTC.png"
          alt="Logo"
          className="mx-auto"
        />
      </div>

      {/* Contact Section */}
      <div className="w-full sm:w-auto flex-1">
        <span className="font-bold text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm block mb-4 text-center sm:text-left">
          Contact
        </span>
        <div className="flex flex-col gap-4 underline underline-offset-[14px]">
          <div className="flex gap-4 items-center max-sm:text-sm max-md:text-base max-lg:text-lg">
            <Image width={20} height={20} src="/section/Email.png" alt="Email" className=" max-sm:w-5" />
            <span>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=teamtemancoding@gmail.com&&"
                className="transition-all duration-200 ease-in hover:text-purple-600 hover:scale-105 hover:decoration-white"
              >
                teamtemancoding@gmail.com
              </a>
            </span>
          </div>
          <div className="flex gap-4 items-center mt-2 max-sm:text-sm max-md:text-base max-lg:text-lg">
            <Image
              width={20}
              height={20}
              src="/section/WhatsApp.png"
              alt="WhatsApp"
              className="max-sm:w-5"
            />
            <span>
              <a
                href="https://wa.me/+6275683643764"
                className="transition-all duration-200 ease-in hover:text-purple-600 hover:scale-105 hover:decoration-white"
              >
                +62 756 8364 3764
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full sm:w-auto flex-1 justify-end max-sm:text-sm max-md:text-base max-lg:text-lg">
        <span className="font-bold text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm  block mb-4 text-center sm:text-left">
          Services
        </span>
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="transition-all duration-200 ease-in hover:text-purple-600 hover:scale-105"
          >
            Custom website creation services
          </a>
          <a
            href="#"
            className="transition-all duration-200 ease-in hover:text-purple-600 hover:scale-105"
          >
            E-Commerce web creation services
          </a>
          <a
            href="#"
            className="transition-all duration-200 ease-in hover:text-purple-600 hover:scale-105"
          >
            UI/UX Design
          </a>
          <a
            href="#"
            className="transition-all duration-200 ease-in hover:text-purple-600 hover:scale-105"
          >
            Landing page creation services
          </a>
          <a
            href="#"
            className="transition-all duration-200 ease-in hover:text-purple-600 hover:scale-105"
          >
            Mobile-Friendly Website Creation
          </a>
        </div>
      </div>

      {/* Location Section */}
      <div className="w-full sm:w-auto flex-1">
        <span className="font-bold text-2xl  max-lg:text-xl max-md:text-base max-sm:text-sm block mb-4 text-center sm:text-left">
          Our Location
        </span>
        <a
          href="https://www.google.com/maps"
          className="flex justify-center sm:justify-start"
        >
          <Image
            width={210}
            height={210}
            src="/section/GMaps.png"
            alt="Google Maps"
            className="mt-4 transition-all duration-200 ease-in hover:scale-105 max-sm:w-40"
          />
        </a>
      </div>
    </footer>
  );
}
