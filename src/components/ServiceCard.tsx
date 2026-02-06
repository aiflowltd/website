import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Service } from "@/data/services";
import { cloneElement, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
  className?: string;
}

export const ServiceCard = ({
  service,
  variant = "default",
  className = "",
}: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isCompact = variant === "compact";

  // Adjust icon size based on variant
  const iconWithSize = cloneElement(service.icon, {
    className: isCompact ? "w-8 h-8" : "w-12 h-12",
  });

  const modalIconSize = cloneElement(service.icon, {
    className: "w-12 h-12",
  });

  return (
    <>
      <Card
        className={`bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer ${
          isCompact ? "p-6" : "p-8"
        } ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="text-primary mb-4 group-hover:scale-110 transition-transform inline-block">
          {iconWithSize}
        </div>

        <h3 className={`font-bold mb-3 ${isCompact ? "text-xl" : "text-2xl"}`}>
          {service.title}
        </h3>

        <p className={`text-muted-foreground leading-relaxed`}>
          {service.description}
        </p>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg bg-card/95 backdrop-blur-lg border-border">
          <DialogHeader>
            <div className="text-primary mb-4">{modalIconSize}</div>
            <DialogTitle className="text-2xl font-bold">
              {service.title}
            </DialogTitle>
          </DialogHeader>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {service.description}
          </p>

          {service.features && service.features.length > 0 && (
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
