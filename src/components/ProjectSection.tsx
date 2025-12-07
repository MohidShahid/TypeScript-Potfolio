import { CarouselDemo } from "./FYPCarousel";
import FYPSection from "./FYPSection"
import "../App.css";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ProjectSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-[#FFE9D9]" id="project">
      <div className="flex flex-col items-center justify-center">
        <p className="SyneClass text-[#FF9330] text-2xl font-bold">Projects</p>

        <div className="relative flex flex-col items-start SyneClass mt-4">
          <p className="text-6xl font-bold relative">
            My Recent{' '}
            <span className="relative inline-block z-10">
              Work
              {/* Small blob behind "Work" */}
              <span className="absolute w-12 h-12 bg-[#FFB646] rounded-full -bottom-2 left-1/2 -translate-x-1/2 z-[-3]"></span>
            </span>
          </p>
        </div>
      </div>
      <FYPSection />
      <div className="w-full max-w-7xl mx-auto px-4 py-3.5">
      <CarouselDemo />
      </div>
      <div className="flex items-center justify-center w-[80%] bg-[#0f172b] rounded-md cursor-pointer" onClick={()=> navigate('all-projects')}>
      <Button className=" py-6 text-base font-semibold text-white cursor-pointer">View All Projects</Button>
      <ArrowUpRight size={20} color="#ffff"/>
      </div>
    </div>
  );
};

export default ProjectSection;
