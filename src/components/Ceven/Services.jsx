import { useState, useEffect } from "react";
import web from "../../assets/services/reshot-icon-coding-in-a-computer-DWHMJ8UE3L-0d8a1.svg";
import app from "../../assets/services/reshot-icon-coding-signs-C6T2PYMGR3-6be4e.svg";
import ml from "../../assets/services/reshot-icon-wisdom-PT6ED7ZAQG-daae8.svg";
import devops from "../../assets/services/reshot-icon-control-settings-MDG6WHZC7X-f25e1.svg";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { SparklesCore } from "../ui/sparkles";
import { useLanguage } from "../../LanguageContext";

function Services() {
  const [isMobile, setIsMobile] = useState(false);
  const {t} = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      id: 1,
      image: web,
      title: t('service_1_title'),
      details: [
        t('service_1_details_1'),
        t('service_1_details_2'),
        t('service_1_details_3'),
        t('service_1_details_4'),
      ],
    },
    {
      id: 2,
      image: app,
      title: t('service_2_title'),
      details: [
        t('service_2_details_1'),
        t('service_2_details_2'),
        t('service_2_details_3'),
        t('service_2_details_4'),
      ],
      imageStyle: "h-8 md:h-10",
    },
    {
      id: 3,
      image: ml,
      title: t('service_3_title'),
      details: [
        t('service_3_details_1'), 
        t('service_3_details_2'), 
        t('service_3_details_3'), 
        t('service_4_details_4')],
    },
    {
      id: 4,
      image: devops,
      title: t('service_4_title'),
      details: [
        t('service_4_details_1'),
        t('service_4_details_2'),
        t('service_4_details_3'),
        t('service_4_details_4'),
      ],
    },
  ];

  const items = services.map((service) => ({
    quote: (
      <>
        <div className="flex justify-center mb-2 md:mb-4">
          <img
            src={service.image}
            className={`mb-3 md:mb-6 filter invert ${
              service.imageStyle || "h-8 md:h-12"
            }`}
            alt={service.title}
          />
        </div>
        <div className="group-hover:text-pink-500 text-lg md:text-xl lg:text-3xl font-semibold text-center">
          {service.title}
        </div>
        <ul className="text-sm md:text-base lg:text-lg mt-1 md:mt-2 text-center">
          {service.details.map((detail, index) => (
            <li key={`${service.title}+${detail}`}>{detail}</li>
          ))}
        </ul>
      </>
    ),
    name: "",
    title: "",
  }));

  return (
    <>
      <div
        id="services"
        className="flex flex-col justify-center items-center -mt-10 md:-mt-20 pb-5 md:pb-10 font-roboto mx-auto space-y-4 md:space-y-8"
      >
        <div className="h-[30rem] md:h-[40rem] w-full bg-richBlack flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-20 mb-1 md:mb-2">
            {t('our_service')}
          </h1>

          {/* Decorative Elements */}
          <div className="w-full md:w-[40rem] h-20 md:h-40 relative mb-1">
            <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] md:h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[0.5px] md:h-px w-3/4" />
            <div className="absolute inset-x-30 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] md:h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-30 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[0.5px] md:h-px w-1/4" />
            <SparklesCore
              background="transparent"
              minSize={0.2}
              maxSize={0.8}
              particleDensity={800}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          {/* Cards  */}
          <div className="-mt-12 md:-mt-24">
            <InfiniteMovingCards
              items={items}
              direction="right"
              speed={isMobile ? "normal" : "slow"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
