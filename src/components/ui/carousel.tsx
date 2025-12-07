import { IconArrowNarrowRight } from "@tabler/icons-react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useId, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ----------------------------------------------------
   TYPES
----------------------------------------------------- */
interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

/* ----------------------------------------------------
   LIGHTBOX MODAL
----------------------------------------------------- */
const LightboxModal = ({
  isOpen,
  slides,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  isOpen: boolean;
  slides: SlideData[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-9999 flex items-center justify-center"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10"
        >
          <X size={28} />
        </button>

        {/* Image */}
        <motion.img
          key={slides[currentIndex].src}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          src={slides[currentIndex].src}
          className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-xl object-contain"
        />

        {/* Left */}
        <button
          onClick={onPrev}
          className="absolute left-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Right */}
        <button
          onClick={onNext}
          className="absolute right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20"
        >
          <ChevronRight size={32} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

/* ----------------------------------------------------
   SINGLE SLIDE
----------------------------------------------------- */
const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  return (
    <div className="[perspective-1400px] [transform-style-preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600"
            alt={slide.title}
            src={slide.src}
          />
        </div>
        <article
          className={`relative p-[4vmin] transition-opacity duration-500 ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold">
            {slide.title}
          </h2>
          <div className="flex justify-center">
            <button className="mt-6 px-4 py-2 text-black bg-white rounded-2xl shadow hover:shadow-lg">
              {slide.button}
            </button>
          </div> */}
        </article>
      </li>
    </div>
  );
};

/* ----------------------------------------------------
   CAROUSEL (WITH LIGHTBOX)
----------------------------------------------------- */
export default function Carousel({ slides }: { slides: SlideData[] }) {
  const [current, setCurrent] = useState(1);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setCurrent(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  const nextLightbox = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevLightbox = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
  };

  const id = useId();

  return (
    <div className="relative w-[70vmin] h-[70vmin] mx-auto" aria-labelledby={`carousel-heading-${id}`}>
      <ul
        className="absolute flex transition-transform duration-1000"
        style={{ transform: `translateX(-${current * (100 / slides.length)}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={openLightbox}
          />
        ))}
      </ul>

      {/* Carousel Controls */}
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <button
          onClick={handlePrev}
          className="mx-2 w-10 h-10 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:-translate-y-1 transition"
        >
          <IconArrowNarrowRight className="rotate-180" />
        </button>
        <button
          onClick={handleNext}
          className="mx-2 w-10 h-10 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:-translate-y-1 transition"
        >
          <IconArrowNarrowRight />
        </button>
      </div>

      {/* LIGHTBOX MODAL */}
      <LightboxModal
        isOpen={isLightboxOpen}
        slides={slides}
        currentIndex={current}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
      />
    </div>
  );
}
