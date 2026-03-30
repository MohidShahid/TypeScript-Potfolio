import Carousel, { type SlideData } from "@/components/ui/carousel";

export function NeuroAnimateCarousel() {
  const slideData: SlideData[] = [
    {
      title: "Video 1",
      button: "Watch Video",
      src: "https://res.cloudinary.com/dlerfbweh/video/upload/v1774776250/result4_a4w9xn.mp4", // TODO: Add video URL
      type: "video",
    },
    {
      title: "Video 2",
      button: "Watch Video",
      src: "https://res.cloudinary.com/dlerfbweh/video/upload/v1774776220/result_5_rldmyr.mp4", // TODO: Add video URL
      type: "video",
    },
    {
      title: "Video 3",
      button: "Watch Video",
      src: "https://res.cloudinary.com/dlerfbweh/video/upload/v1774776231/result1_ssxbar.mp4", // TODO: Add video URL
      type: "video",
    },
    {
      title: "Video 4",
      button: "Watch Video",
      src: "https://res.cloudinary.com/dlerfbweh/video/upload/v1774776212/result2_onwjke.mp4", // TODO: Add video URL
      type: "video",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
