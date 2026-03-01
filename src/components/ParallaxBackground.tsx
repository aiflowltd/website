import { BLUE_SPOT, PURPLE_SPOT } from "@/constants/images";

export const ParallaxBackground = () => {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden"
      style={{ backgroundColor: "#141414" }}
    >
      {/* Purple – Top Left */}
      <div
        className="absolute top-0 left-0 w-[250vw] h-[250vw] opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url(${PURPLE_SPOT})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
          transform: "translate(-48%, -40%)",
          backgroundColor: "#141414",
        }}
        aria-hidden
      />

      {/* Blue – Bottom Right */}
      <div
        className="absolute bottom-0 right-0 w-[240vw] h-[240vw] opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url(${BLUE_SPOT})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
          transform: "translate(55%, 30%)",
        }}
        aria-hidden
      />
    </div>
  );
};
