import { useEffect, useState } from "react";
import {
  DUBAI_BACKGROUND_2,
  DUBAI_BACKGROUND,
  DUBAI_BACKGROUND_3,
  NY_BACKGROUND,
  ZURICH_BACKGROUND,
} from "@/constants/images";

const backgrounds = [
  DUBAI_BACKGROUND,
  DUBAI_BACKGROUND_2,
  DUBAI_BACKGROUND_3,
  NY_BACKGROUND,
  ZURICH_BACKGROUND,
];

export const ParallaxBackground = () => {
  const [scale, setScale] = useState(1.4);
  const [randomBackground] = useState(() => {
    return backgrounds[Math.floor(Math.random() * backgrounds.length)];
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / maxScroll;

      // Zoom out effect: starts at 1.2 and goes to 1.0 as you scroll
      const newScale = 1.4 - scrollProgress * 0.2;
      setScale(Math.max(1, newScale));
    };

    // Set initial scale based on current scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url(${randomBackground})`,
          transform: `scale(${scale})`,
          filter: "grayscale(100%) opacity(0.4)",
        }}
      />
      <div className="absolute inset-0 bg-background/80" />
    </div>
  );
};
