import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Service } from "@/data/services";
import { cloneElement } from "react";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
  className?: string;
}

export const ServiceCard = ({ 
  service, 
  variant = "default",
  className = "" 
}: ServiceCardProps) => {
  const isCompact = variant === "compact";
  
  // Adjust icon size based on variant
  const iconWithSize = cloneElement(service.icon, {
    className: isCompact ? "w-8 h-8" : "w-12 h-12",
  });

  return (
    <Card
      className={`bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer ${
        isCompact ? "p-6" : "p-8"
      } ${className}`}
    >
      <div className="text-primary mb-4 group-hover:scale-110 transition-transform inline-block">
        {iconWithSize}
      </div>
      
      <h3 className={`font-bold mb-3 ${isCompact ? "text-xl" : "text-2xl"}`}>
        {service.title}
      </h3>
      
      <p className={`text-muted-foreground leading-relaxed ${isCompact ? "mb-4" : "mb-6"}`}>
        {service.description}
      </p>
      
      {service.features && service.features.length > 0 && (
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

