import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { teamMembers, companyInfo } from "@/data/team";
import logo from "@/assets/logo.png";
import irinaPhoto from "@/assets/irina.png";
import mihaiPhoto from "@/assets/mihai.png";

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

            {/* Profile Circles */}
            <div className="flex items-center gap-2 pl-2 border-l border-border">
              <a
                href={teamMembers.irina.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                title={`${teamMembers.irina.name} - LinkedIn`}
              >
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                  <img
                    src={irinaPhoto}
                    alt={teamMembers.irina.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Linkedin className="w-2.5 h-2.5 text-background" />
                </div>
              </a>

              <a
                href={teamMembers.mihai.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                title={`${teamMembers.mihai.name} - LinkedIn`}
              >
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                  <img
                    src={mihaiPhoto}
                    alt={teamMembers.mihai.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Linkedin className="w-2.5 h-2.5 text-background" />
                </div>
              </a>
            </div>

            <a
              href={companyInfo.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-primary hover:bg-primary/90 text-background font-semibold px-6"
              >
                BOOK A CALL
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
