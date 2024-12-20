import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Spotlight } from "../ui/Spotlight";
import { Globe } from "./Globe";
import { Cover } from "../ui/cover";
import { useLanguage } from "../../LanguageContext";

function CHero() {
  const {t} = useLanguage();
  return (
    <>
      <Spotlight id="main" className="absolute -top-[42rem] opacity-80" fill="#1D2D44" />
      <div className="mx-auto flex items-center justify-center relative w-full  flex-col space-y-4 sm:space-y-6 md:space-y-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 px-4 sm:px-6 md:px-8">
        <h1 style={{color: "white", backgroundColor: "transparent"}} className="font-roboto uppercase text-center text-base sm:text-xl mt-20 md:text-2xl lg:text-3xl xl:text-3xl font-semibold max-w-7xl mx-auto z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 via-neutral-600 to-neutral-600 dark:from-neutral-800 dark:via-white dark:to-white bg-richBlack">
          {t('CHero_trans')}{" "}
          <br/>{t('CHero_across')}
          
          {/* <span className="text-platinum">
            <Cover>Across All Platforms</Cover>
          </span> */}
        </h1>
        {/* Description */}
        <p className="text-white text-center font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose max-w-3xl mx-auto">
          {t('CHero_our')}{" "}
          <span className="text-platinum">
          {t('CHero_our2')}
          </span>
          .
        </p>

        {/* Buttons */}
        {/* <div className="flex items-center justify-center flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 relative w-full">
          <button className="w-full sm:w-auto bg-chamBray rounded-full py-2 px-6 sm:px-8 font-bold text-sm sm:text-base text-white border-2 border-silverLakeBlue cursor-pointer hover:border-richBlack hover:bg-black hover:text-platinum transition-all ease-linear duration-200 shadow-lg tracking-wider">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </button>

          <button className="w-full sm:w-auto bg-transparent rounded-full py-2 px-6 sm:px-8 font-bold text-sm sm:text-base text-platinum border-2 border-silverLakeBlue hover:border-black hover:bg-chamBray hover:text-platinum transition-all ease-linear duration-200 shadow-lg tracking-wider">
            <Link to="/eleven">Eleven</Link>
          </button>
        </div> */}

        {/* Globe component */}
        <Globe className="mt-3 sm:mt-0 md:mt-1 lg:mt-7 w-full max-w-xl mx-auto" />
      </div>
    </>
  );
}

export default CHero;
