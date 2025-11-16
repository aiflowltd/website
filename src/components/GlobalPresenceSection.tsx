import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export const GlobalPresenceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const locations = [
    {
      coordinates: [23.5859, 46.7712],
      label: "Cluj-Napoca, Romania",
      color: "#FF8C00",
    },
    {
      coordinates: [8.5417, 47.3769],
      label: "Zürich, Switzerland",
      color: "#FF8C00",
    },
    { coordinates: [55.2708, 25.2048], label: "Dubai, UAE", color: "#FF8C00" },
    { coordinates: [-0.1276, 51.5074], label: "London, UK" },
    {
      coordinates: [-74.006, 40.7128],
      label: "New York City, USA",
      color: "#FF8C00",
    },
    {
      coordinates: [-122.4194, 37.7749],
      label: "San Francisco, USA",
    },
    {
      coordinates: [-104.9903, 39.7392],
      label: "Denver, USA",
    },
    { coordinates: [103.8198, 1.3521], label: "Singapore" },
    { coordinates: [-80.1918, 25.7617], label: "Miami, USA" },
    {
      coordinates: [139.6917, 35.6895],
      label: "Tokyo, Japan",
    },
    {
      coordinates: [18.0632, 59.3346],
      label: "Stockholm, Sweden",
    },
  ];

  return (
    <section id="global-presence" className="relative py-24 px-30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Global <span className="text-primary">Presence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Remote first, adapted to your timezone.
          </p>
        </div>

        <div className="w-[90%] mx-auto -my-20 md:-my-32">
          <ComposableMap projectionConfig={{ scale: 150 }} className="w-full">
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="hsl(var(--muted))"
                    stroke="hsl(var(--border))"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none", filter: "brightness(1.4)" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {locations.map((location, index) => (
              <Marker key={index} coordinates={location.coordinates}>
                <g
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="cursor-pointer"
                >
                  <circle
                    r={hoveredIndex === index ? 8 : 6}
                    fill={location.color || "#3B82F6"}
                    className={hoveredIndex === index ? "" : "animate-pulse"}
                    style={{
                      transition: "r 0.3s ease",
                    }}
                  />
                  <circle
                    r={hoveredIndex === index ? 4 : 3}
                    fill={location.color || "#3B82F6"}
                    className="opacity-80"
                    style={{
                      transition: "r 0.3s ease",
                    }}
                  />
                  {hoveredIndex === index && (
                    <text
                      textAnchor="middle"
                      y={-15}
                      className="fill-foreground font-semibold pointer-events-none"
                      style={{
                        fontSize: isMobile ? "18px" : "12px",
                        fontWeight: 600,
                      }}
                    >
                      {location.label}
                    </text>
                  )}
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
};
