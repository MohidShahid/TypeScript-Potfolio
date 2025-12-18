import FYPCover from "../assets/FYPCover.jpg";

const FYPSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20">
      {/* Section Label */}
      <p className="text-[#FF9330] font-syne SyneClass text-xl md:text-2xl font-bold mb-3">
        Final Year Project
      </p>

      {/* Main Heading */}
      <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-10">
        Multimedia Synthesis for 3D Styled Imagery & Short Animations
      </h2>

      {/* Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Section (Image) */}
        <div className="flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-2xl shadow-lg shadow-black/20 border border-white/10">
            <img 
              src={FYPCover} 
              className="w-full h-auto object-cover"
              alt="FYP Preview"
            />
            {/* <video src=""></video> */}
          </div>

        </div>

        {/* Right Section (Description) */}
        <div className="flex flex-col gap-4">
          <h4 className="SyneClass text-lg md:text-xl font-semibold mb-2">
            Project Description
          </h4>

          <p className="text-base leading-relaxed  text-[#08080899]">
            Text-to-3D AI is a stage-based research project that transforms a 
            user’s input into multiple 3D representations including:
          </p>

          <ul className="list-disc pl-6 text-base leading-relaxed text-[#08080899] space-y-2">
            <li>Photorealistic Mode</li>
            <li>Graphic design and game-style characters</li>
            <li>2D images with a 3D appearance</li>
            <li>Short animated videos</li>
          </ul>

          <p className="text-base leading-relaxed text-[#08080899]">
            Built in Python on Stable Diffusion XL (SDXL 1.0) with an SDXL Refiner 
            and an LLM-driven prompt enhancer, this system supports:
          </p>

          <ul className="list-disc pl-6 text-base text-[#08080899] space-y-2">
            <li>Seed control</li>
            <li>Dynamic multi-batch generation</li>
            <li>Metadata export</li>
            <li>Dynamic grids</li>
            <li>Lightweight Gradio-based interface</li>
            <li>SadTalker-based face animation</li>
           <li>GFPGAN-based image enhancement</li>
          </ul>

          <p className="text-base leading-relaxed text-[#08080899] mt-2">
            The project is optimized to run efficiently on Kaggle’s T4x2 GPUs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FYPSection;
