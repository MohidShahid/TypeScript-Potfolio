import { useState } from "react";
import "../App.css";
import AnimatedTabs from "./AnimatedTabs";
import { Award } from "lucide-react";

const ResumeSection = () => {
  const [tabVal, setTabVal] = useState(0);
  return (
    <div
      className="flex w-full md:gap-14 gap-4 pb-10 md:flex-row flex-col mb-14 md:px-0 px-2.5"
      id="resume"
    >
      <div className="w-full md:w-[40%]">
        <p className="text-[#FF9330] font-syne SyneClass text-2xl font-bold">
          Resume
        </p>
        <div className="relative flex flex-col items-start SyneClass">
          <p className="md:text-6xl text-3xl font-bold relative">
            <span className="absolute md:w-24 md:h-24 w-10 h-10 bg-[#FFB646] rounded-full -top-2 md:-left-4 -z-10 -left-2"></span>
            All
            <span className="ml-2">over my details find here...</span>
          </p>
        </div>

        <AnimatedTabs tabVal={tabVal} setTabVal={setTabVal} />
      </div>
      {tabVal === 0 && (
        <div className="flex flex-col gap-6 md:w-[60%] w-full">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Based in Pakistan
          </h1>

          {/* Paragraph */}
          <p className="text-gray-600 text-base leading-relaxed">
            Result-driven final year student focused on applied AI and
            multimodal generative research, with a distinguished research
            background. Possesses hands-on expertise in end-to-end development
            and deployment of deep learning models in Computer Vision and NLP.
            Proficient in Python and well-versed in industry standard
            development tools and methodologies, ensuring quality and
            scalability. My research focuses on multimodal generative systems
            and 3D-aware image synthesis—developing geometry-guided models that
            produce spatially consistent visual outputs from user's text.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-6 md:w-[70%] wrap-break-word">
            {/* Name */}
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Name
            </span>
            <p className="SyneClass text-lg font-bold text-gray-900 dark:text-white">
              Haffi Irfan
            </p>

            {/* Nationality */}
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Nationality
            </span>
            <p className="SyneClass text-lg font-bold text-gray-900 dark:text-white">
              Pakistan
            </p>

            {/* Phone */}
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Phone
            </span>
            <p className="SyneClass text-lg font-bold text-gray-900 dark:text-white">
              +92 318 1415197
            </p>

            {/* Email */}
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Email
            </span>
            <p className="SyneClass text-lg font-bold text-gray-900 dark:text-white ">
              haffiirfan@gmail.com
            </p>

            {/* Freelance */}
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Freelance
            </span>
            <p className="SyneClass text-lg font-bold text-gray-900 dark:text-white">
              Available
            </p>

            {/* Language */}
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Language
            </span>
            <p className="SyneClass text-lg font-bold text-gray-900 dark:text-white">
              Urdu, English
            </p>
          </div>
        </div>
      )}

      {tabVal === 1 && (
        <div className="flex flex-col gap-6 md:w-[60%] w-full">
          {/* Experience Card */}
          {/* Add more cards as needed */}
          <div className="w-full bg-white/80 dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-gray-700/40 rounded-xl p-6 md:p-7 shadow-sm hover:shadow-md transition-all duration-300">
            {/* Title Row */}
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100 pl-7">
              Research Paper (Submitted)
            </h2>

            <div className="flex items-center gap-4 mb-2">
              <span className="w-5 h-3 bg-[#FFB646] rounded-full shadow-md"></span>
              <span className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                HiGen3vid : Framework for Dependency, Quality and Memory
                Optimization in Multimedia Generation Models
              </span>
            </div>

            {/* Description */}
            <div className="pl-7 flex flex-col gap-3">
              <p className="pt-5">
                Haffi Irfan{" "}
                <span className="text-lg text-black font-bold">.</span> Dr
                Muhammad Saleem
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                <span className="font-bold">Abstrat: </span>Recent advances in
                multimedia generative artificial intelligence have been driven
                by large-scale vision–language diffusion models and increasing
                specialization in computer vision. Although the performance of
                individual models continues to improve, the deployment of
                complex multimedia AI pipelines in real-world applications
                remains challenging due to resource conflicts, memory
                constraints, version incompatibilities, and limited robustness.
                Moreover, existing text-to-image and text-to-3D generation
                systems typically depend on high-end GPU resources, which
                restricts their scalability on consumer-grade hardware. We
                propose HiGen3vid, a robust multimedia AI orchestration
                framework that resolves model version incompatibilities and
                dynamically manages memory to enable the efficient execution of
                large-scale AI models. HiGen3vid generates high-quality 3D-like
                visual content from simple textual input using open-source
                diffusion models integrated with large language models, while
                supporting graceful degradation under constrained computational
                resources. Extensive experimental evaluation demonstrates that
                HiGen3vid achieves a state-of-the-art CLIP score of 0.41,
                representing a 41% improvement over the DreamFusion baseline
                (∼0.31). Furthermore, HiGen3vid attains an FID score of 24.2 and
                an 87% user preference rate, confirming its superior visual
                quality and geometric fidelity.
              </p>
              <p>
                <span className="text-black font-bold word-spacing-[4px]">
                  Keywords:{" "}
                </span>
                Dependency Resolution, Dynamic Memory Management, Robust AI
                Systems, Graceful Degradation, Multi-Model Orchestration
              </p>
              <p className="pt-5 flex gap-4">
                <span className="text-[#FFB646] font-bold">Submitted to: </span>
                {"  "}Multimedia Tools and Application (Springer)
              </p>
            </div>
          </div>
        </div>
      )}

      {tabVal == 2 && (
        <div className="flex flex-col gap-6 md:w-[60%] w-full">
          <h2 className="text-3xl font-bold SyneClass mb-6">Skills</h2>

          {/* SKILLS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              // LANGUAGES
              {
                name: "Python",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              },
              {
                name: "C",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
              },
              {
                name: "C++",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
              },

              // CORE CONCEPTS (use simple icons or text)
              {
                name: "OOP",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              },
              {
                name: "DSA",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
              },
              {
                name: "AI",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
              },
              {
                name: "ML",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
              },
              {
                name: "DL",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
              },
              {
                name: "NLP",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
              },

              // LIBRARIES
              {
                name: "NumPy",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
              },
              {
                name: "pandas",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
              },
              {
                name: "scikit-learn",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
              },
              {
                name: "TensorFlow",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
              },
              {
                name: "PyTorch",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
              },
              {
                name: "Keras",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
              },
              {
                name: "NLTK",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              },
              {
                name: "spaCy",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center bg-[#0808080a] p-4 rounded-lg hover:shadow-md transition-all"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-10 w-10 object-contain"
                />
                <p className="mt-2 text-sm font-medium text-gray-700">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      {tabVal == 3 && (
        <div className="flex flex-col gap-6 md:w-[60%] w-full">
          {/* Experience Card */}
          <div className="w-full bg-[#0808080a] rounded-lg p-4 flex flex-col md:flex-row gap-14 py-8">
            {/* Date */}
            <p className="text-gray-600 font-medium md:w-36">2022 - 2026</p>

            {/* Content */}
            <div className="flex flex-col gap-1 justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFB646] rounded-full"></span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Minhaj University
                </span>
              </div>
              <h2 className="SyneClass text-lg font-bold text-gray-900 dark:text-white">
                Bachelor of Science in Software Engineering
              </h2>
            </div>
          </div>

          {/* Add more cards as needed */}
          <div className="w-full bg-[#0808080a] rounded-lg p-4 flex flex-col md:flex-row py-8 gap-14">
            <p className="text-gray-600 font-medium md:w-36">2019 - 2021</p>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFB646] rounded-full"></span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Superior College
                </span>
              </div>
              <h2 className="SyneClass text-lg font-bold text-gray-900 dark:text-white">
                FSC (Pre-Engineering)
              </h2>
            </div>
          </div>
        </div>
      )}
      {tabVal == 4 && (
        <div className="flex flex-col gap-8 md:w-[60%] w-full">
          {/* Certification Card */}
          <div className="group w-full rounded-xl border border-white/20 bg-[#0808080a] backdrop-blur-md p-6  hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FFB646]/10 rounded-full">
                <Award className="text-[#FFB646]" size={26} />
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold text-[#0f172b]">
                  Microsoft Azure Certified
                </h1>
                <p className="text-[#FFB646] font-semibold">AI Fundamentals</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Demonstrated foundational knowledge of AI concepts and Azure
                  services including ML, Computer Vision, NLP, and Responsible
                  AI practices.
                </p>
              </div>
            </div>
          </div>

          {/* Certification 2 */}
          <div className="group w-full rounded-xl border border-white/20 bg-[#0808080a] backdrop-blur-md p-6  hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FFB646]/10 rounded-full">
                <Award className="text-[#FFB646]" size={26} />
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold text-[#0f172b]">
                  National Vocational and Technical Training Institute (NAVTTC)
                </h1>
                <p className="text-[#FFB646] font-semibold">
                  Artificial Intelligence (Machine Learning; Deep Learning;
                  Communication)
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Completed industry-level AI training with ML & DL practical
                  projects. Certified by NAVTTC and Corvit.
                </p>
              </div>
            </div>
          </div>

          {/* Certification 3 */}
          <div className="group w-full rounded-xl border border-white/20 bg-[#0808080a] backdrop-blur-md p-6  hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FFB646]/10 rounded-full">
                <Award className="text-[#FFB646]" size={26} />
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold text-[#0f172b]">
                  Corvit Systems
                </h1>
                <p className="text-[#FFB646] font-semibold">
                  Artificial Intelligence (ML & DL)
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Completed hands-on AI training with real-world machine
                  learning and deep learning projects at Corvit.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeSection;
