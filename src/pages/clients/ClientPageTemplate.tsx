import { useEffect, useState, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Move } from "lucide-react";

interface ClientPageTemplateProps {
  websiteUrl: string;
  widgetUrl: string;
  clientName: string;
}

const ClientPageTemplate = ({
  websiteUrl,
  widgetUrl,
  clientName,
}: ClientPageTemplateProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [position, setPosition] = useState(() => {
    const x = searchParams.get("x");
    const y = searchParams.get("y");
    return {
      x: x ? parseInt(x) : -1,
      y: y ? parseInt(y) : -1,
    };
  });
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const positionRef = useRef(position);

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  useEffect(() => {
    document.title = clientName;
    if (position.x === -1 || position.y === -1) {
      setPosition({
        x: window.innerWidth - 424,
        y: Math.max(40, window.innerHeight - 640),
      });
    }
  }, [clientName]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - positionRef.current.x,
      y: e.clientY - positionRef.current.y,
    };
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    const newX = Math.max(0, Math.min(window.innerWidth - 400, e.clientX - dragOffset.current.x));
    const newY = Math.max(40, Math.min(window.innerHeight - 100, e.clientY - dragOffset.current.y));
    setPosition({ x: newX, y: newY });
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setSearchParams({ x: positionRef.current.x.toString(), y: positionRef.current.y.toString() });
    }
  }, [isDragging, setSearchParams]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        src={websiteUrl}
        className="absolute inset-0 w-full h-full border-0"
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: "rgba(0,0,0,0.1)",
        }}
      />
      <div
        className="absolute pointer-events-auto"
        style={{
          zIndex: 2,
          left: position.x,
          top: position.y,
        }}
      >
        <div
          className="relative pt-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => !isDragging && setIsHovered(false)}
        >
          <button
            onMouseDown={handleMouseDown}
            className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 py-2 px-4 rounded-full select-none cursor-grab active:cursor-grabbing transition-all hover:scale-105"
            style={{
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
              opacity: isHovered || isDragging ? 1 : 0,
              pointerEvents: isHovered || isDragging ? "auto" : "none",
              transition: "opacity 0.2s, transform 0.2s",
            }}
          >
            <Move className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-medium">Move widget</span>
          </button>
          <iframe
            src={widgetUrl}
            width="400"
            height="600"
            className="border-0 rounded-2xl shadow-2xl"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientPageTemplate;

