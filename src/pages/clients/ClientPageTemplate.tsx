import { useEffect, useState, useRef, useCallback } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Move, Info } from "lucide-react";

interface ClientPageTemplateProps {
  websiteUrl: string;
  widgetUrl: string;
  clientName: string;
  widgetWidth?: number;
  widgetHeight?: number;
  widgetColor?: string;
}

const ClientPageTemplate = ({
  websiteUrl,
  widgetUrl,
  clientName,
  widgetWidth = 400,
  widgetHeight = 600,
  widgetColor,
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
  const [hasConsented, setHasConsented] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const positionRef = useRef(position);

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  useEffect(() => {
    document.title = clientName;
    if (position.x === -1 || position.y === -1) {
      setPosition({
        x: window.innerWidth - widgetWidth - 24,
        y: Math.max(20, window.innerHeight - widgetHeight - 40),
      });
    }
  }, [clientName, widgetWidth, widgetHeight]);

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
    const newX = Math.max(0, Math.min(window.innerWidth - widgetWidth, e.clientX - dragOffset.current.x));
    const newY = Math.max(20, Math.min(window.innerHeight - widgetHeight - 20, e.clientY - dragOffset.current.y));
    setPosition({ x: newX, y: newY });
  }, [isDragging, widgetWidth, widgetHeight]);

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
    <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: "#000000" }}>
      <iframe
        src={websiteUrl}
        className="absolute inset-0 w-full h-full border-0"
        style={{
          zIndex: 0,
          filter: hasConsented ? "none" : "blur(12px)",
          opacity: iframeLoaded ? 1 : 0,
          transition: "opacity 0.3s ease-in",
        }}
        onLoad={() => setIframeLoaded(true)}
        loading="eager"
        allow="fullscreen"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
      {!iframeLoaded && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 0,
            background: "#000000",
          }}
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1ab8ff] mx-auto mb-4"></div>
            <p className="text-white">Loading preview...</p>
          </div>
        </div>
      )}
      {!hasConsented && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            zIndex: 0,
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px)",
          }}
        />
      )}
      {!hasConsented && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8"
            style={{
              backgroundColor: "hsl(0, 0%, 5%)",
              border: "1px solid hsl(0, 0%, 15%)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold" style={{ color: "hsl(0, 0%, 98%)" }}>
                  Demo Preview Notice
                </h2>
                <p className="text-sm" style={{ color: "hsl(0, 0%, 65%)" }}>
                  Powered by AI Flow
                </p>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-base leading-relaxed" style={{ color: "hsl(0, 0%, 98%)" }}>
                This is a demonstration of how our product could appear on{" "}
                <span className="font-semibold">{clientName}</span>'s public website.
              </p>
              <div className="rounded-lg p-4 border" style={{ backgroundColor: "hsl(0, 0%, 15%)", borderColor: "hsl(0, 0%, 15%)" }}>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(0, 0%, 98%)" }}>
                  <strong>Important:</strong> This is not a live integration and does not imply endorsement or usage by the company.
                  All data shown is publicly available data from their website or articles.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setHasConsented(true)}
                className="flex-1 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#1ab8ff",
                }}
              >
                I understand and agree to proceed
              </button>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg font-semibold transition-all text-center"
                style={{
                  color: "hsl(0, 0%, 98%)",
                  border: "1px solid hsl(0, 0%, 15%)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(0, 0%, 15%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                No, thank you
              </Link>
            </div>
          </div>
        </div>
      )}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: "rgba(0,0,0,0.1)",
          display: hasConsented ? "block" : "none",
        }}
      />
      {hasConsented && (
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
            width={widgetWidth}
            height={widgetHeight}
            color={widgetColor}
            className="border-0 rounded-2xl shadow-2xl"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              transform: "scale(80%)",
            }}
          />
        </div>
      </div>
      )}
    </div>
  );
};

export default ClientPageTemplate;

