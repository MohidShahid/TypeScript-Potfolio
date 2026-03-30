import { useRef, useState } from "react";
import { Play } from "lucide-react";

const NeuroAnimateSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20">
      {/* Section Label */}
      <p className="text-[#FF9330] font-syne SyneClass text-xl md:text-2xl font-bold mb-3">
        Next Evolution
      </p>

      {/* Main Heading */}
      <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-10">
        NeuroAnimate: Breaking the Boundaries of Generative Portrait Animation
      </h2>

      {/* Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section (Video) */}
        <div className="flex flex-col gap-6">
          <div className="w-full overflow-hidden">
            {/* Divider */}
            <div className="h-px w-full bg-white/10" />

            {/* Video Section */}
            <div className="relative mt-7">
              <video
                ref={videoRef}
                className="w-full rounded-lg shadow-lg"
                controls={playing}
                muted
                preload="metadata"
                onPlay={() => setPlaying(true)}
              >
                <source
                  src="https://res.cloudinary.com/dlerfbweh/video/upload/v1774875578/1000036551_1_aydxhp.mp4" // Video link will be provided by user
                  type="video/mp4"
                />
              </video>

              {/* Play Button Overlay */}
              {!playing && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg transition hover:bg-black/50"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl">
                    <Play className="h-10 w-10 text-black ml-1" />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Section (Description) */}
        <div className="flex flex-col gap-4">
          <h4 className="SyneClass text-lg md:text-xl font-semibold mb-2">
            NeuroAnimate Evolution
          </h4>

          <p className="text-base leading-relaxed text-[#08080899]">
            NeuroAnimate is a complete architectural evolution designed to break the boundaries of generative portrait animation, engineered custom solutions to achieve true-to-life realism and peak hardware efficiency. Here is how NeuroAnimate redefines the pipeline:
          </p>

          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-[#080808cc]">Beyond the Face (Custom Body Animation)</h5>
              <p className="text-base leading-relaxed text-[#08080899]">
                Overcame the "floating head" limitation of previous models by designing custom body animation algorithms, ensuring the entire posture reacts naturally alongside the face.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-[#080808cc]">Advanced Expressiveness (Custom Lips & Hair)</h5>
              <p className="text-base leading-relaxed text-[#08080899]">
                Standard models often struggle with subtle micro-expressions. I engineered custom methods to amplify lip-sync accuracy and introduce dynamic, realistic hair motion, breathing actual life into the generated subjects.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-[#080808cc]">Extreme Hardware Optimization (Dual-GPU Parallelism)</h5>
              <p className="text-base leading-relaxed text-[#08080899]">
                To handle the massive computational load seamlessly, I architected the inference engine to utilize true Dual-GPU parallel processing effectively slashed inference times in half without compromising fidelity in Kaggle T4x2.
              </p>
            </div>
          </div>

          <p className="text-base leading-relaxed text-[#08080899] mt-2">
            <span className="font-bold text-[#080808cc]">Core Tech:</span> An advanced, heavily customized implementation of the LivePortrait framework, an incredible journey in pushing the limits of Generative AI, optimizing complex computer vision pipelines, and squeezing absolute maximum performance out of hardware architectures.
          </p>

          <p className="text-base italic bg-purple-50/50 p-3 rounded-lg border-l-4 border-[#FF9330]/30">
            The project is optimized for high-performance dual-GPU inference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NeuroAnimateSection;
