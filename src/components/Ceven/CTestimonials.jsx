import { cn } from "../../lib/utils.js";
import anna from "../../assets/team/anna.jpg";
import emily from "../../assets/team/emily.jpg";
import jessica from "../../assets/team/jessica.jpg";
import { SparklesCore } from "../ui/sparkles.jsx";
import { useState, useEffect } from "react";

export default function CTestimonials() {
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
    <div
      id="testimonials"
      className="min-h-screen flex flex-col items-center justify-center w-full py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-white relative z-20 mb-8">
        Client Reviews
      </h1>

      {/* Decorative Elements */}
      <div className="w-full max-w-[40rem] h-40 relative mb-8">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* Cards */}
      <div
        className={`flex ${isMobile ? "flex-col" : "flex-row"} justify-center ${
          isMobile ? "space-y-8" : "space-x-4"
        }`}
      >
        {CARDS.map((card, index) => (
          <div
            key={card.id}
            className={`transition-transform duration-300 ease-in-out transform 
              ${isMobile ? "scale-100" : index === 1 ? "scale-110 z-10" : ""} 
              hover:scale-105 hover:z-20 dark:bg-richBlack rounded-3xl p-6 shadow-xl 
              border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] 
              dark:shadow-white/[0.05] flex flex-col justify-between 
              ${
                isMobile ? "w-full" : "w-80 md:w-96"
              } h-auto md:h-96 cursor-pointer mb-8 md:mb-0`}
          >
            <div className="flex flex-col items-center flex-grow">
              <img
                src={card.image}
                alt={card.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4"
              />
              <div className="font-normal text-neutral-700 dark:text-neutral-200 text-center flex-grow">
                {card.content}
              </div>
              <div className="text-center mt-2">
                <p className="text-neutral-500 font-medium dark:text-white" style={{color: "white"}}>
                  {card.name}
                </p>
                <p className="text-neutral-400 font-normal dark:text-neutral-200" style={{color: "white"}}>
                  {card.designation}
                </p>
              </div>
              <div className="flex mt-2">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${
                      starIndex < card.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      style={{backgroundColor: "transparent", color: "#10b981"}}
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-richBlack dark:text-emerald-500 px-1 py-0.5",
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Anna",
    designation: "Cybersecurity",
    image: anna,
    content: (
      <p style={{color: "white", fontSize: "13px"}}>
        "We enlisted 'Cybermatris' to enhance our cybersecurity, and we couldn’t be happier. Their thorough analysis of our system uncovered several vulnerabilities we hadn't noticed. Thanks to their recommendations and quick implementation, we feel much more secure. A professional and responsive team that I highly recommend!"
      </p>
    ),
    rating: 5,
  },
  {
    id: 1,
    name: "Jessica",
    designation: "Web Development",
    image: jessica,
    content: (
      <p style={{color: "white", fontSize: "13px"}}>
        "The website that 'Cybermatris' developed for our company is simply stunning! They took all our requests into account and delivered a product that is not only visually appealing but also very functional. Communication was smooth throughout the project. Thank you for your excellent work!"
      </p>
    ),
    rating: 5,
  },
  {
    id: 2,
    name: "Emily",
    designation: "Infrastructure",
    image: emily,
    content: (
      <p style={{color: "white", fontSize: "13px"}}>
        "We recently partnered with 'Cybermatris' to optimize our IT infrastructure. Their expertise allowed us to reduce costs while improving performance. The team was very engaged, and their ongoing support is a real asset. We are thrilled with the results and would recommend their services to other businesses without hesitation!"
      </p>
    ),
    rating: 5,
  },
];
