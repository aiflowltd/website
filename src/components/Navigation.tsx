import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="AI Flow Logo" className="h-10 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/services" 
              className="text-foreground hover:text-primary transition-colors relative pb-1"
              activeClassName="text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
            >
              Services
            </NavLink>
            <NavLink 
              to="/case-studies" 
              className="text-foreground hover:text-primary transition-colors relative pb-1"
              activeClassName="text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
            >
              Case Studies
            </NavLink>
            <NavLink 
              to="/blog" 
              className="text-foreground hover:text-primary transition-colors relative pb-1"
              activeClassName="text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
            >
              Blog
            </NavLink>
            <NavLink 
              to="/careers" 
              className="text-foreground hover:text-primary transition-colors relative pb-1"
              activeClassName="text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
            >
              Careers
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-foreground hover:text-primary transition-colors relative pb-1"
              activeClassName="text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
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
