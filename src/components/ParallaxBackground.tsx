import { useEffect, useState } from "react";
import nyBackground from "@/assets/ny-background.jpg";

export const ParallaxBackground = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / maxScroll;
      
      // Zoom out effect: starts at 1.2 and goes to 1.0 as you scroll
      const newScale = 1.2 - scrollProgress * 0.2;
      setScale(Math.max(1, newScale));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url(${nyBackground})`,
          transform: `scale(${scale})`,
          filter: "grayscale(100%) opacity(0.5)",
        }}
      />
      <div className="absolute inset-0 bg-background/80" />
    </div>
  );
};
