import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const words = [
    "products.",
    "agents.",
    "workflows.",
    "automations.",
    "web apps.",
    "data platforms.",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("products.");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Start the animation after initial display of "products."
    if (!hasStarted) {
      const startTimer = setTimeout(() => {
        setHasStarted(true);
        setIsDeleting(true);
      }, 3000); // Show "products." for 3 seconds before starting
      return () => clearTimeout(startTimer);
    }

    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
          setTypingSpeed(120);
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
          setTypingSpeed(70);
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    typingSpeed,
    words,
    hasStarted,
  ]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center max-w-7xl">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-alternates mb-6 leading-tight">
          We build AI powered
          <br />
          <span className="inline-block min-h-[1em] mt-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {currentText || "\u00A0"}
            {/* <span className="inline-block w-[2px] h-[1em] bg-primary animate-pulse ml-1" /> */}
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          In AI & ML before the wave. Building products, not hype.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-full bg-border" />
            <h3 className="text-xl font-semibold">End-to-end products</h3>
            <p className="text-muted-foreground">Build the future</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-full bg-border" />
            <h3 className="text-xl font-semibold">AI consulting</h3>
            <p className="text-muted-foreground">Keep up with the AI wave</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-full bg-border" />
            <h3 className="text-xl font-semibold">ML pipelines</h3>
            <p className="text-muted-foreground">Monetize your data</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="/contact#calendly">
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 text-lg px-12 py-6 h-auto font-semibold"
          >
            Book a call with us
          </Button>
        </Link>

        {/* Scroll Indicator */}
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("services");
            if (element) {
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:text-primary transition-colors"
          title="Scroll to services"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};
