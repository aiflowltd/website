import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xl font-bold text-background">AI</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </NavLink>
            <NavLink 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Case Studies
            </NavLink>
            <NavLink 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </NavLink>
            <NavLink 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Careers
            </NavLink>
            <NavLink 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </NavLink>
            <Button 
              className="bg-primary hover:bg-primary/90 text-background font-semibold px-6"
            >
              BOOK A CALL
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
