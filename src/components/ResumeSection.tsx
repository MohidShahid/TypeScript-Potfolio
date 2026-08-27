import { useState } from "react";
import "../App.css";
import AnimatedTabs from "./AnimatedTabs";
import {
  Award,
  Cpu,
  Zap,
  Sparkles,
  ChevronDown,
  ChevronUp,
  FileText,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ui/ScrollReveal";

const ResumeSection = () => {
  const [tabVal, setTabVal] = useState(0);
  const [isAbstractExpanded, setIsAbstractExpanded] = useState(false);
  return (
    <div
      className="flex w-full md:gap-14 gap-4 pb-10 md:flex-row flex-col mb-14 md:px-0 px-2.5"
      id="resume"
    >
      <ScrollReveal
        direction="right"
        className="w-full md:w-[40%]"
        duration={0.7}
      >
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
      </ScrollReveal>

      <ScrollReveal
        direction="left"
        className="md:w-[60%] w-full"
        duration={0.7}
      >
        <AnimatePresence mode="wait">
          {tabVal === 0 && (
            <motion.div
              key="about-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6 w-full"
            >
              {/* Heading */}
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Based in Pakistan
              </h1>

              {/* Paragraph */}
              <p className="text-gray-600 text-base leading-relaxed">
                BS Software Engineering graduate specializing in Artificial
                Intelligence, with a manuscript under peer review at a Springer
                Nature journal on multimodal generative AI. Architected a
                6-model synthesis pipeline and production-grade computer
                vision-NLP systems, engineering GPU-efficient orchestration,
                real-time inference, and RAG-driven intelligence from research
                to full-stack deployment.
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
            </motion.div>
          )}

          {tabVal === 1 && (
            <motion.div
              key="publication-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6 w-full"
            >
              {/* Publication Card Container */}
              <div className="w-full bg-white/90 dark:bg-[#0c0c0c] border border-gray-200/70 dark:border-gray-700/50 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300">
                {/* Header Row: Status Badge & Venue */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold  tracking-wider bg-[#FFB646]/20 text-[#D97706] dark:text-[#FFB646] border border-[#FFB646]/40 shadow-xs">
                      <Sparkles className="size-3.5" /> Peer Review
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Springer Nature • Multimedia Tools and Applications
                    </span>
                  </div>

                  <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800/80 px-2.5 py-1 rounded-md font-mono">
                    ID: 3584a910-999b-4c24-aa3f-73b20ad59e74
                  </span>
                </div>

                {/* Paper Title */}
                <h2 className="text-xl md:text-2xl font-bold font-sans text-gray-900 dark:text-white leading-snug tracking-tight">
                  OrchestraGen: A Unified Memory-Orchestrated Multi-Model
                  Pipeline for Text-to-Avatar Synthesis
                </h2>

                {/* Authors */}
                <p className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 mt-2">
                  <span className="text-black dark:text-white font-bold">
                    Haffi Irfan
                  </span>{" "}
                  • Dr. Muhammad Saleem
                </p>

                {/* Breakthrough Highlights Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                  <div className="p-3.5 rounded-xl bg-[#0808080a] dark:bg-white/5 border border-black/5 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-[#FF9330] mb-1">
                      <Cpu className="size-4" />
                      <span className="text-xs font-bold uppercase">
                        Memory
                      </span>
                    </div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      1.88×
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      System Scaling
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0808080a] dark:bg-white/5 border border-black/5 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-[#FF9330] mb-1">
                      <Zap className="size-4" />
                      <span className="text-xs font-bold uppercase">
                        Latency
                      </span>
                    </div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      -33.1%
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Faster Inference
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0808080a] dark:bg-white/5 border border-black/5 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-[#FF9330] mb-1">
                      <CheckCircle2 className="size-4" />
                      <span className="text-xs font-bold uppercase">
                        Alignment
                      </span>
                    </div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      0.35
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      CLIP Score
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0808080a] dark:bg-white/5 border border-black/5 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-[#FF9330] mb-1">
                      <Layers className="size-4" />
                      <span className="text-xs font-bold uppercase">
                        Weights
                      </span>
                    </div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      60.1 GB
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      on 32GB Dual-T4
                    </p>
                  </div>
                </div>

                {/* Key Insights Summary */}
                <div className="bg-[#FFE9D9]/40 border-l-4 border-[#FF9330] p-4 rounded-r-xl my-4">
                  <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                    <span className="font-bold text-black dark:text-white">
                      Core Innovation:{" "}
                    </span>
                    OrchestraGen transforms raw text prompts into fully animated
                    3D-aware portrait videos using LLM prompt enhancement,
                    dual-stage diffusion, and facial retargeting—running
                    smoothly on constrained consumer dual-GPU hardware via
                    Dynamic Memory Orchestration.
                  </p>
                </div>

                {/* Expandable Full Abstract */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <button
                    onClick={() => setIsAbstractExpanded(!isAbstractExpanded)}
                    className="flex items-center justify-between w-full text-left font-bold text-sm text-gray-900 dark:text-white hover:text-[#FF9330] transition-colors cursor-pointer py-1"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="size-4 text-[#FF9330]" />
                      {isAbstractExpanded
                        ? "Hide Full Abstract"
                        : "Read Full Abstract"}
                    </span>
                    {isAbstractExpanded ? (
                      <ChevronUp className="size-4" />
                    ) : (
                      <ChevronDown className="size-4" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isAbstractExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-[15px] pt-3">
                          Recent advances in multimedia generative artificial
                          intelligence have been driven by large-scale
                          vision–language diffusion models and increasing
                          specialization in computer vision. Although the
                          performance of individual models continues to improve,
                          deploying complex multi-model AI pipelines in
                          real-world applications remains challenging due to
                          resource conflicts, memory constraints, version
                          incompatibilities, and limited robustness. Moreover,
                          existing text-to-avatar generation systems typically
                          rely on high-end GPUs, which limits their scalability
                          on consumer-grade hardware.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-[15px] pt-2">
                          We propose OrchestraGen, a multi-model generative
                          pipeline that transforms textual prompts into fully
                          animated portrait videos. OrchestraGen uses LLM-based
                          prompt enhancement, dual-stage diffusion synthesis,
                          3D-aware portrait animation through custom body motion
                          via facial retargeting, and super-resolution
                          enhancement on constrained dual-GPU hardware. Dynamic
                          Memory Orchestration enables reliable execution of
                          60.1 GB of heterogeneous model weights on a 32 GB
                          dual-T4 configuration, achieving a 1.88× system memory
                          scaling factor while maintaining peak single-GPU
                          occupancy at 13.8 GB. Heterogeneous GPU-CPU
                          parallelism and dual-GPU parallel frame enhancement
                          collectively reduce animation latency by 33.1%, while
                          three-mode LLM prompt enhancement achieves a CLIP
                          alignment score of 0.35.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Keywords Chips */}
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-gray-200/60 dark:border-gray-800">
                  <span className="text-xs font-bold text-gray-500 self-center mr-1">
                    Keywords:
                  </span>
                  {[
                    "Multi-Model Orchestration",
                    "Text-to-Avatar Synthesis",
                    "Dual-GPU Parallel Inference",
                    "Dynamic Memory Management",
                    "Dependency Conflict Resolution",
                  ].map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#0808080a] dark:bg-white/10 text-gray-800 dark:text-gray-300"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {tabVal === 2 && (
            <motion.div
              key="skills-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6 w-full"
            >
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

                  // CORE CONCEPTS
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
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="flex flex-col items-center bg-[#0808080a] p-4 rounded-lg hover:shadow-md transition-shadow cursor-default"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="h-10 w-10 object-contain"
                      loading="lazy"
                    />
                    <p className="mt-2 text-sm font-medium text-gray-700">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {tabVal === 3 && (
            <motion.div
              key="education-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6 w-full"
            >
              {/* Experience Card 1 */}
              <div className="w-full bg-[#0808080a] rounded-lg p-4 flex flex-col md:flex-row gap-14 py-8 hover:shadow-sm transition-shadow">
                <p className="text-gray-600 font-medium md:w-36">2022 - 2026</p>
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

              {/* Experience Card 2 */}
              <div className="w-full bg-[#0808080a] rounded-lg p-4 flex flex-col md:flex-row py-8 gap-14 hover:shadow-sm transition-shadow">
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
            </motion.div>
          )}

          {tabVal === 4 && (
            <motion.div
              key="certifications-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-8 w-full"
            >
              {/* Certification Card 1 */}
              <div className="group w-full rounded-xl border border-white/20 bg-[#0808080a] backdrop-blur-md p-6 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFB646]/10 rounded-full">
                    <Award className="text-[#FFB646]" size={26} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold text-[#0f172b]">
                      Microsoft Azure Certified
                    </h1>
                    <p className="text-[#FFB646] font-semibold">
                      AI Fundamentals
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Demonstrated foundational knowledge of AI concepts and
                      Azure services including ML, Computer Vision, NLP, and
                      Responsible AI practices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Certification 2 */}
              <div className="group w-full rounded-xl border border-white/20 bg-[#0808080a] backdrop-blur-md p-6 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFB646]/10 rounded-full">
                    <Award className="text-[#FFB646]" size={26} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold text-[#0f172b]">
                      National Vocational and Technical Training Institute
                      (NAVTTC)
                    </h1>
                    <p className="text-[#FFB646] font-semibold">
                      Artificial Intelligence (Machine Learning; Deep Learning;
                      Communication)
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Completed industry-level AI training with ML & DL
                      practical projects. Certified by NAVTTC and Corvit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Certification 3 */}
              <div className="group w-full rounded-xl border border-white/20 bg-[#0808080a] backdrop-blur-md p-6 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
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
            </motion.div>
          )}
        </AnimatePresence>
      </ScrollReveal>
    </div>
  );
};

export default ResumeSection;
