import { SparklesCore } from "../ui/sparkles.jsx";
import { useState, useEffect } from "react";
import Carousel from "./Carousel.jsx";

export default function CProjects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white relative z-20 mb-4 sm:mb-6 md:mb-8">
          Projects
        </h1>
        {/* Decorative Elements */}
        <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-0 relative mb-4 sm:mb-6 md:mb-8">
          <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-30 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-30 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1} 
            particleDensity={isMobile ? 600 : 1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
          <Carousel/>
      </div>
    </>
  );
}
