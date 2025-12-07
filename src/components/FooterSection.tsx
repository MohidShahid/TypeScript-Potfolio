import { Email, Github, LinkedIn } from "@/assets/SocialIcon";
import "../App.css";
import { ArrowUpRight } from "lucide-react";

const FooterSection = () => {
  return (
    <div className="w-full bg-black">
      <div className="w-full max-w-7xl mx-auto pt-20 px-4">
        
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start lg:items-center gap-10">
          
          {/* Left Section */}
          <div className="flex flex-col items-start gap-11 py-14 w-full lg:w-[35%]">
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold relative text-white SyneClass leading-tight">
              <span className="relative inline-block z-10">
                Let's
                <span className="absolute w-10 h-10 sm:w-12 sm:h-12 bg-[#FFB646] rounded-full -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 z-[-3]"></span>
              </span>{" "}
              work
              <br /> together
            </p>

            {/* Location + Socials */}
            <div className="flex flex-wrap items-center gap-4 text-white">
              <p className="font-bold text-lg SyneClass">Based in Pakistan |</p>
              <div className="flex items-center gap-4 opacity-90">
                <LinkedIn className="w-5 h-5 hover:text-blue-600 transition" />
                <Github className="w-5 h-5 hover:text-blue-600 transition" />
                <Email className="w-5 h-5 hover:text-red-600 transition" />
              </div>
            </div>
          </div>

          {/* Right Section Cards */}
          <div className="flex flex-wrap justify-between gap-6 w-full lg:w-[65%]">
            {/* Card 1 */}
            <div className="border border-[#ffffff33] rounded-2xl py-8 px-6 flex flex-col gap-8 w-full sm:w-[48%] lg:w-[48%]">
              <h3 className="text-white SyneClass text-xl sm:text-2xl font-bold">
                Looking for an AI Engineer?
              </h3>
              <div className="flex items-center justify-between">
                <h2 className="text-[#FF9330] SyneClass text-xl sm:text-2xl font-bold break-all">
                  haffiirfan@gmail.com
                </h2>
                <ArrowUpRight size={20} color="#FF9330" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-[#ffffff33] rounded-2xl py-8 px-6 flex flex-col gap-8 w-full sm:w-[48%] lg:w-[48%]">
              <h3 className="text-white SyneClass text-xl sm:text-2xl font-bold">
                Want a more in-depth look at my history?
              </h3>
              <div className="flex items-center justify-between">
                <h2 className="text-[#FF9330] SyneClass text-xl sm:text-2xl font-bold">
                  +92 3181415197
                </h2>
                <ArrowUpRight size={20} color="#FF9330" />
              </div>
            </div>
          </div>
        </div>

        {/* Big Name SVG */}
        <p className="py-9 text-center">
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 1281 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="0"
              y="80"
              fontFamily="Syne"
              fontWeight="900"
              fontSize="60"
              className="sm:text-[80px] lg:text-[100px]"
              fill="#FFE9D9"
            >
              HAFFI IRFAN
            </text>
          </svg>
        </p>

        {/* Bottom Line */}
        <div className="border-t border-[#ffffff33] pb-10">
          <p className="text-white text-base sm:text-lg py-7">
            &copy; 2025 Haffi Irfan, All Rights Reserved
          </p>
        </div>

      </div>
    </div>
  );
};

export default FooterSection;
