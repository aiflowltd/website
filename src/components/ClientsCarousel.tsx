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

export const ClientsCarousel = () => {
  const clients = [
    { name: "Google", logo: googleLogo },
    { name: "Bitdefender", logo: bitdefenderLogo },
    { name: "Bloomberg", logo: bloombergLogo },
    { name: "Bosch", logo: boschLogo },
    { name: "BP", logo: bpLogo },
    { name: "Exomatter", logo: exomatterLogo },
    { name: "Metaphysic", logo: metaphysicLogo },
    { name: "Metro", logo: metroLogo },
    { name: "Uplift", logo: upliftLogo },
    { name: "Accesa", logo: accesaLogo },
    { name: "UPC", logo: upcLogo },
  ];

  return (
    <section className="relative py-24 w-full bg-transparent">
      <div className="w-full px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're proud to work with some of the world's most innovative companies
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {clients.map((client, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="p-1">
                    <Card className="bg-transparent border-none p-8 flex items-center justify-center h-32 hover:border-primary transition-all duration-300 group cursor-pointer hover:shadow-lg">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-h-16 max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

