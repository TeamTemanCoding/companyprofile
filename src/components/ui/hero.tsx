"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div className=" relative " ref={containerRef}>
      <div
        className="py-48 w-full relative"
        style={{
          perspective: "900px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};


export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="max-w-5xl  mx-auto h-[40rem] max-sm:h-[20rem] w-full p-1 rounded-[30px]"
    >
      <div className="flex space-x-5 max-sm:hidden pl-10">
        <div className="w-20 h-1 bg-[#6C6C6C] rounded-t-full"></div>
        <div className="w-10 h-1 bg-[#6C6C6C] rounded-t-full"></div>
      </div>

      <div className="h-full w-full overflow-hidden rounded-2xl bg-[#6C6C6C] p-1">
        <div className=" h-full w-full  overflow-hidden rounded-2xl bg-[#0D0D0D] p-5">
          <div className=" h-full w-full overflow-hidden rounded-2xl gradient-bg flex  bg-gradient-to-b from-purple-600 to-blue-900">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
