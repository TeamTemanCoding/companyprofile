import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Hero />
      <section className="w-full px-10 flex flex-row max-sm:flex-col space-x-10 py-5 items-center">
        <div className="w-full flex-col space-y-4">
          <h1 className="font-bold bg-gradient-to-r from-[#EA0EE7] via- to-[#7100F1] [#7100F1] bg-clip-text text-transparent text-3xl">
            Teman Coding
          </h1>
          <p className="text-white/80">
            is a Company founded in 2024 with the aim of helping businesses and
            individuals build a professional and attractive digital presence. We
            provide website creation services that are functional, responsive,
            and tailored to your needs. With a focus on quality and innovation,
            Teman Coding is ready to be a trusted partner to realize your ideas
            into effective digital solutions.
          </p>
        </div>
        <div className=" w-fit">
          <div className="flex flex-col w-full">
            <div className=" flex w-full justify-end items-center">
              <Image
                src="/section/TemanCodingprofile.png"
                alt="Profile"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex justify-center ">
              <div className="flex flex-row w-fit space-x-20 max-sm:space-x-5 text-white text-center">
                <div className="max-sm:text-xs w-full">
                  <h2 className="font-medium ">Fullstack Engineer</h2>
                  <div className=" w-full h-[2px] rounded-full bg-white"></div>
                  <p className=" font-extralight">Ega Gofur</p>
                </div>
                <div className="max-sm:text-xs w-full">
                  <h2 className="font-medium">Software Engineer</h2>
                  <div className=" w-full h-[2px] rounded-full bg-white"></div>
                  <p className=" font-extralight">Joenathan Haganta .G</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space-x-5 py-32 max-sm:px-10 flex flex-row text-white text-center justify-center items-center ">
        <div className=" flex flex-col">
          <Image
            src="/section/Founder.png"
            alt="Founder"
            width={287}
            height={468}
          />
          <div className="flex flex-col max-sm:text-xs">
            <h3 className="font-extralight">Satria Mika N</h3>
            <div className=" w-full h-[2px] rounded-full bg-white"></div>
            <p>Founder Teman Coding</p>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/section/ProjectManager.png"
            alt="Founder"
            width={287}
            height={468}
          />
          <div className="flex flex-col max-sm:text-xs">
            <h3 className="font-extralight">Dyah Eka Lestari</h3>
            <div className=" w-full h-[2px] rounded-full bg-white"></div>
            <p>Project Manager</p>
          </div>
        </div>
      </section>
      <section className=" w-full p-10 space-x-5 text-white flex flex-row max-sm:flex-col max-sm:space-y-6">
        <div className="relative inline-flex w-full overflow-hidden rounded-3xl p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#19055F_0%,#7200F1_50%,#AD179E_100%)]" />
          <div className=" h-full w-full space-y-4 flex flex-col px-5 py-5 rounded-[25px] bg-[#381958] text-sm font-medium text-white backdrop-blur-3xl">
          <h3>Vision</h3>
            <p className="font-light text-white/80">
              To be a trusted team in creating creative and innovative digital
              solutions through high-quality websites that support business and
              technology development.
            </p>
          </div>
        </div>
        <div className="relative inline-flex w-full overflow-hidden rounded-3xl p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <div className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] max-sm:animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#19055F_0%,#7200F1_50%,#AD179E_100%)]" />
          <div className=" h-full w-full space-y-4 flex flex-col px-5 py-5 rounded-[25px] bg-[#381958] text-sm font-medium text-white backdrop-blur-3xl">
          <h3>Mission</h3>
            <p className="font-light text-white/80">
              Providing the best service, developing the skills of each team
              member, building long-term relationships with clients, focusing on
              professional results.
            </p>
          </div>
        </div>
      </section>
      <section className=" w-full px-10 py-40 space-y-10 flex flex-col">
        <div className=" flex flex-col space-y-2">
          <h3 className="font-bold w-fit bg-gradient-to-r from-[#EA0EE7] to-[#7100F1] bg-clip-text text-transparent text-4xl">
            Our Services
          </h3>
          <p className="font-normal text-white">
            We provide complete solutions for your digital needs. Here are our
            featured services:
          </p>
        </div>
        <div className="w-full max-h-60 pt-10">
          <div className="h-full w-full space-x-6 flex flex-row max-sm:flex-col">
            <div className="w-full flex flex-col space-y-10">
              <div className=" w-full justify-center flex ">
                <Image
                  src="/section/IconTC1.svg"
                  alt="IconTc"
                  width={100}
                  height={100}
                />
              </div>
              <div className="px-5 bg-white/5 text-white py-5 rounded-3xl h-full flex flex-col space-y-4">
                <h4 className="font-medium">Custom Website Creation</h4>
                <p className="font-light text-white">
                  Build your digital identity with a website that is
                  specifically designed for your business needs. From modern
                  design to advanced functionality, we ensure the best user
                  experience.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col space-y-10">
              <div className=" w-full justify-center flex ">
                <Image
                  src="/section/IconTC2.svg"
                  alt="IconTc"
                  width={100}
                  height={100}
                />
              </div>
              <div className="px-5 bg-white/5 text-white py-5 rounded-3xl h-full flex flex-col space-y-4">
                <h4 className="font-medium">E-commerce Development</h4>
                <p className="font-light text-white">
                  Start your online business with a reliable and secure
                  e-commerce platform. We provide features such as product
                  management, payment integration, and sales analytics.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col space-y-10">
              <div className=" w-full justify-center flex ">
                <Image
                  src="/section/IconTC3.svg"
                  alt="IconTc"
                  width={100}
                  height={100}
                />
              </div>
              <div className="px-5 bg-white/5 text-white py-5 rounded-3xl h-full flex flex-col space-y-4">
                <h4 className="font-medium">Professional UI/UX Design</h4>
                <p className="font-light text-white">
                  Make your visitors' experience more enjoyable with intuitive
                  and aesthetic interface design. Our focus is on functionality
                  and user convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
