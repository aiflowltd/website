import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import client logos
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

export const GLOBAL_SCALE = 2;
export const ClientsCarousel = () => {
  const clients = [
    {
      name: "Google",
      logo: googleLogo,
      scale: 1,
      marginX: undefined,
    },
    {
      name: "Bitdefender",
      logo: bitdefenderLogo,
      scale: 1.0,
      marginBottom: "20px",
      marginX: undefined,
    },
    {
      name: "Bloomberg",
      logo: bloombergLogo,
      scale: 1.1,
      marginBottom: undefined,
      marginX: undefined,
    },
    {
      name: "Bosch",
      logo: boschLogo,
      scale: 1.0,
      marginBottom: undefined,
      marginX: undefined,
    },
    {
      name: "BP",
      logo: bpLogo,
      scale: 0.4,
      marginBottom: "20px",
      marginX: "10px",
    },
    {
      name: "Exomatter",
      logo: exomatterLogo,
      scale: 1.0,
      marginBottom: "10px",
      marginX: undefined,
    },
    {
      name: "Metaphysic",
      logo: metaphysicLogo,
      scale: 1.3,
      marginBottom: "10px",
      marginX: undefined,
    },
    {
      name: "Metro",
      logo: metroLogo,
      scale: 1.1,
      marginBottom: "10px",
      marginX: undefined,
    },
    {
      name: "Uplift",
      logo: upliftLogo,
      scale: 0.9,
      marginBottom: "10px",
      marginX: undefined,
    },
    {
      name: "Accesa",
      logo: accesaLogo,
      scale: 0.8,
      marginBottom: "25px",
      marginX: undefined,
    },
    {
      name: "UPC",
      logo: upcLogo,
      scale: 0.5,
      marginBottom: undefined,
      marginX: undefined,
    },
  ];

  return (
    <section className="relative py-24 w-full bg-transparent">
      <div className="w-full px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're proud to work with some of the world's
            <br />
            most innovative companies
          </p>
        </div>
      </div>

      <div className="w-[90%] mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            duration: 50,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {clients.map((client, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:pl-6 basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div
                  className="p-1"
                  style={{
                    marginLeft: client.marginX,
                    marginRight: client.marginX,
                  }}
                >
                  <Card
                    className="bg-transparent border-none flex items-center justify-center transition-all duration-300 group cursor-pointer hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.2)]"
                    style={{
                      height: "128px",
                      minHeight: "128px",
                      maxHeight: "128px",
                      width: "124px",
                      padding: "32px",
                      boxSizing: "border-box",
                    }}
                  >
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                      style={{
                        transform:
                          client.scale !== 1
                            ? `scale(${client.scale * GLOBAL_SCALE})`
                            : `scale(${GLOBAL_SCALE})`,
                        marginBottom: client.marginBottom,
                        marginLeft: client.marginX,
                        marginRight: client.marginX,
                      }}
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
