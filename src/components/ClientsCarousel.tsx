import bitdefenderLogo from "@/assets/clients/bitdefender.png";
import bloombergLogo from "@/assets/clients/bloomberg.png";
import boschLogo from "@/assets/clients/bosch.png";
import bpLogo from "@/assets/clients/bp.png";
import exomatterLogo from "@/assets/clients/exomatter.png";
import googleLogo from "@/assets/clients/google.png";
import metaphysicLogo from "@/assets/clients/metaphysic.png";
import metroLogo from "@/assets/clients/metro.png";
import upliftLogo from "@/assets/clients/uplift.png";
import accesaLogo from "@/assets/clients/accesa.png";
import upcLogo from "@/assets/clients/upc.png";

const clients = [
  { name: "Accesa", logo: accesaLogo },
  { name: "Bitdefender", logo: bitdefenderLogo },
  { name: "Bloomberg", logo: bloombergLogo },
  { name: "Bosch", logo: boschLogo },
  { name: "BP", logo: bpLogo },
  { name: "Exomatter", logo: exomatterLogo },
  { name: "Google", logo: googleLogo },
  { name: "Metaphysic", logo: metaphysicLogo },
  { name: "Metro Digital", logo: metroLogo },
  { name: "Uplift", logo: upliftLogo },
  { name: "UPC", logo: upcLogo },
];

export const ClientsCarousel = () => {
  const duplicated = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="relative py-12 px-6 w-full overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Reliable AI, used and trusted by large organizations worldwide
          </p>
        </div>

        {/* Marquee container with 10% margin */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {duplicated.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-8"
                style={{ minWidth: "160px" }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
