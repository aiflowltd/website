import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Link, useLocation } from "react-router-dom";
import { teamMembers, companyInfo } from "@/data/team";
import { AI_FLOW_LOGO_LARGE, AI_FLOW_LOGO_SMALL } from "@/constants/images";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/20 backdrop-blur-md ">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer"
          >
            {/* Small screen logo */}
            <img
              src={AI_FLOW_LOGO_SMALL}
              alt="AI Flow"
              className="h-8 w-auto md:hidden"
            />
            {/* Large screen logo */}
            <img
              src={AI_FLOW_LOGO_LARGE}
              alt="AI Flow"
              className="h-10 w-auto hidden md:block"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {/* Profile Circles */}

            <NavLink
              to="/case-studies"
              className="text-foreground hover:text-primary transition-colors relative pb-1"
              activeClassName="text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
            >
              <h4 className="text-xl font-semibold">Case Studies</h4>
            </NavLink>
            <NavLink
              to="/blog"
              className="text-foreground hover:text-primary transition-colors relative pb-1"
              activeClassName="text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
            >
              <h4 className="text-xl font-semibold">Blog</h4>
            </NavLink>
            <NavLink
              to="/careers"
              className="text-foreground hover:text-primary transition-colors relative pb-1"
              activeClassName="text-primary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
            >
              <h4 className="text-xl font-semibold">Careers</h4>
            </NavLink>

            <div className="flex items-center pl-2 border-border">
              <a
                href="#team"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("team");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="group relative -ml-4 z-40 hover:z-50 transition-all duration-300"
                title={`${teamMembers.irina.name} - View Team`}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                  <img
                    src={teamMembers.irina.photo}
                    alt={teamMembers.irina.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>

              <a
                href="#team"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("team");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="group relative -ml-4 z-40 hover:z-50 transition-all duration-300"
                title={`${teamMembers.mihai.name} - View Team`}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                  <img
                    src={teamMembers.mihai.photo}
                    alt={teamMembers.mihai.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>

              <a
                href="#team"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("team");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="group relative -ml-4 z-40 hover:z-50 transition-all duration-300"
                title="View Team"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110 bg-black flex items-center justify-center">
                  <span className="text-lg font-semibold text-foreground">
                    + 10
                  </span>
                </div>
              </a>
            </div>

            <a href={"/contact"}>
              <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 font-semibold px-6">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="right" className="w-[85vw] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-6 mt-8">
            <NavLink
              to="/case-studies"
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              <h4 className="text-xl font-semibold">Case Studies</h4>
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              <h4 className="text-xl font-semibold">Blog</h4>
            </NavLink>
            <NavLink
              to="/careers"
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              <h4 className="text-xl font-semibold">Careers</h4>
            </NavLink>

            <div className="flex items-center gap-2 pt-4 border-t border-border">
              <a
                href="#team"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const element = document.getElementById("team");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="group relative z-40 hover:z-50 transition-all duration-300"
                title={`${teamMembers.irina.name} - View Team`}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                  <img
                    src={teamMembers.irina.photo}
                    alt={teamMembers.irina.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>

              <a
                href="#team"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const element = document.getElementById("team");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="group relative -ml-4 z-40 hover:z-50 transition-all duration-300"
                title={`${teamMembers.mihai.name} - View Team`}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                  <img
                    src={teamMembers.mihai.photo}
                    alt={teamMembers.mihai.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>

              <a
                href="#team"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const element = document.getElementById("team");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="group relative -ml-4 z-40 hover:z-50 transition-all duration-300"
                title="View Team"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110 bg-black flex items-center justify-center">
                  <span className="text-sm font-semibold text-foreground">
                    + 10
                  </span>
                </div>
              </a>
            </div>

            <a href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 font-semibold px-6 w-full">
                Contact Us
              </Button>
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
