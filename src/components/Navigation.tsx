import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { SiteButton } from "@/components/SiteButton";
import { Link, useLocation } from "react-router-dom";
import { teamMembers, companyInfo } from "@/data/team";
import { AI_FLOW_LOGO_LARGE, AI_FLOW_LOGO_SMALL } from "@/constants/images";
import { Menu, Building2, Building, Home, Layers } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// Solutions dropdown items (Industries)
const solutionsItems = [
  {
    name: "Construction",
    description: "AI solutions for construction projects",
    href: "/industry/construction",
    icon: Building2,
  },
  {
    name: "Real Estate",
    description: "AI solutions for real estate industry",
    href: "/industry/real-estate",
    icon: Home,
  },
  {
    name: "PropTech",
    description: "AI Agents for PropTech platforms",
    href: "/industry/proptech",
    icon: Building,
  },
  {
    name: "Custom solutions",
    description: "For your industry",
    href: "/industry/agnostic",
    icon: Layers,
  },
];

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
      <div className="container mx-auto px-8 lg:px-32 py-6">
        <div className="flex items-center justify-between relative">
          {/* Logo - Left */}
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

          {/* Right side - Menus + Team + Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Navigation Links - centered on lg+ via absolute, flows with right content on md */}
            <div className="flex items-center gap-3 [&>*]:m-0 [&>*]:shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              <NavLink
                to="/services"
                className="group flex justify-center items-center py-5 px-1.5 gap-1 h-16 min-w-0 font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-grey relative isolate rounded-none transition-colors hover:text-white"
                activeClassName="text-white"
              >
                <span className="relative flex items-center flex-none font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-inherit before:content-[''] before:absolute before:w-5 before:h-5 before:-left-0.5 before:top-1/2 before:-translate-y-1/2 before:bg-primary before:blur-[12px] before:-z-10 before:pointer-events-none before:opacity-0 group-hover:before:opacity-50">
                  Services
                </span>
              </NavLink>
              <NavLink
                to="/case-studies"
                className="group flex justify-center items-center py-5 px-1.5 gap-1 h-16 min-w-0 font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-grey relative isolate rounded-none transition-colors hover:text-white"
                activeClassName="text-white"
              >
                <span className="relative flex items-center flex-none font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-inherit before:content-[''] before:absolute before:w-5 before:h-5 before:-left-0.5 before:top-1/2 before:-translate-y-1/2 before:bg-primary before:blur-[12px] before:-z-10 before:pointer-events-none before:opacity-0 group-hover:before:opacity-50">
                  Our work
                </span>
              </NavLink>

              {/* Industries Dropdown */}
              <div className="relative group flex items-center min-h-[64px]">
                <button className="flex justify-center items-center py-5 px-1.5 gap-1 h-16 min-w-0 font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-grey relative isolate rounded-none transition-colors cursor-pointer group-hover:text-white">
                  <span className="relative flex items-center flex-none font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-inherit before:content-[''] before:absolute before:w-5 before:h-5 before:-left-0.5 before:top-1/2 before:-translate-y-1/2 before:bg-primary before:blur-[12px] before:-z-10 before:pointer-events-none before:opacity-0 group-hover:before:opacity-50">
                    Industries
                  </span>
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-background/95 backdrop-blur-lg border border-border rounded-xl p-4 shadow-xl">
                    <div className="flex flex-row gap-3">
                      {solutionsItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg border border-border bg-card text-foreground transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:shadow-lg w-32 h-32"
                        >
                          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted border border-border">
                            <item.icon className="w-6 h-6 text-grey" />
                          </div>
                          <span className="font-semibold text-sm text-center text-foreground">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <NavLink
                to="/team"
                className="group flex justify-center items-center py-5 px-1.5 gap-1 h-16 min-w-0 font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-grey relative isolate rounded-none transition-colors hover:text-white"
                activeClassName="text-white"
              >
                <span className="relative flex items-center flex-none font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-inherit before:content-[''] before:absolute before:w-5 before:h-5 before:-left-0.5 before:top-1/2 before:-translate-y-1/2 before:bg-primary before:blur-[12px] before:-z-10 before:pointer-events-none before:opacity-0 group-hover:before:opacity-50">
                  About us
                </span>
              </NavLink>
              <NavLink
                to="/careers"
                className="group flex justify-center items-center py-5 px-1.5 gap-1 h-16 min-w-0 font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-grey relative isolate rounded-none transition-colors hover:text-white"
                activeClassName="text-white"
              >
                <span className="relative flex items-center flex-none font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-inherit before:content-[''] before:absolute before:w-5 before:h-5 before:-left-0.5 before:top-1/2 before:-translate-y-1/2 before:bg-primary before:blur-[12px] before:-z-10 before:pointer-events-none before:opacity-0 group-hover:before:opacity-50">
                  Careers
                </span>
              </NavLink>
              <NavLink
                to="/blog"
                className="group flex justify-center items-center py-5 px-1.5 gap-1 h-16 min-w-0 font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-grey relative isolate rounded-none transition-colors hover:text-white"
                activeClassName="text-white"
              >
                <span className="relative flex items-center flex-none font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-inherit before:content-[''] before:absolute before:w-5 before:h-5 before:-left-0.5 before:top-1/2 before:-translate-y-1/2 before:bg-primary before:blur-[12px] before:-z-10 before:pointer-events-none before:opacity-0 group-hover:before:opacity-50">
                  Blog
                </span>
              </NavLink>
            </div>
            <div className="flex items-center">
              {/* <a
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
                className="group relative z-40 hover:z-50 transition-all duration-300"
                title={`${teamMembers.irina.name} - View Team`}
              >
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                  <img
                    src={teamMembers.irina.photo}
                    alt={teamMembers.irina.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a> */}
              {/* 
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
                className="group relative -ml-2 z-40 hover:z-50 transition-all duration-300"
                title={`${teamMembers.mihai.name} - View Team`}
              >
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110">
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
                className="group relative -ml-2 z-40 hover:z-50 transition-all duration-300"
                title="View Team"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110 bg-black flex items-center justify-center">
                  <span className="text-lg font-semibold text-foreground">
                    + 10
                  </span>
                </div>
              </a>*/}
            </div>

            <a href={"/contact"}>
              <SiteButton variant="nav">Contact Us</SiteButton>
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
          <div className="flex flex-col gap-3 mt-8">
            <NavLink
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className="group flex justify-start items-center pl-0 py-4 px-0 gap-1 h-14 min-w-0 font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-grey relative isolate transition-colors hover:text-white"
              activeClassName="text-white"
            >
              <span className="relative flex items-center flex-none font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-inherit before:content-[''] before:absolute before:w-5 before:h-5 before:-left-0.5 before:top-1/2 before:-translate-y-1/2 before:bg-primary before:blur-[12px] before:-z-10 before:pointer-events-none before:opacity-0 group-hover:before:opacity-50">
                Services
              </span>
            </NavLink>
            <NavLink
              to="/case-studies"
              onClick={() => setIsMenuOpen(false)}
              className="group flex justify-start items-center pl-0 py-4 px-0 gap-1 h-14 min-w-0 font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-grey relative isolate transition-colors hover:text-white"
              activeClassName="text-white"
            >
              <span className="relative flex items-center flex-none font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-inherit before:content-[''] before:absolute before:w-5 before:h-5 before:-left-0.5 before:top-1/2 before:-translate-y-1/2 before:bg-primary before:blur-[12px] before:-z-10 before:pointer-events-none before:opacity-0 group-hover:before:opacity-50">
                Our work
              </span>
            </NavLink>

            {/* Industries Section in Mobile */}
            <div className="flex flex-col gap-3 m-0 p-0">
              <h4 className="font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-grey m-0">
                Industries
              </h4>
              <div className="flex flex-col gap-2 pl-2">
                {solutionsItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card text-foreground transition-all duration-200 hover:border-white/20"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted border border-border">
                      <item.icon className="w-4 h-4 text-grey" />
                    </div>
                    <span className="font-medium text-sm text-foreground">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <NavLink
              to="/team"
              onClick={() => setIsMenuOpen(false)}
              className="group flex justify-start items-center pl-0 py-4 px-0 gap-1 h-14 min-w-0 font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-grey relative isolate transition-colors hover:text-white"
              activeClassName="text-white"
            >
              <span className="relative flex items-center flex-none font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-inherit before:content-[''] before:absolute before:w-5 before:h-5 before:-left-0.5 before:top-1/2 before:-translate-y-1/2 before:bg-primary before:blur-[12px] before:-z-10 before:pointer-events-none before:opacity-0 group-hover:before:opacity-50">
                About us
              </span>
            </NavLink>
            <NavLink
              to="/careers"
              onClick={() => setIsMenuOpen(false)}
              className="group flex justify-start items-center pl-0 py-4 px-0 gap-1 h-14 min-w-0 font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-grey relative isolate transition-colors hover:text-white"
              activeClassName="text-white"
            >
              <span className="relative flex items-center flex-none font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-inherit before:content-[''] before:absolute before:w-5 before:h-5 before:-left-0.5 before:top-1/2 before:-translate-y-1/2 before:bg-primary before:blur-[12px] before:-z-10 before:pointer-events-none before:opacity-0 group-hover:before:opacity-50">
                Careers
              </span>
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="group flex justify-start items-center pl-0 py-4 px-0 gap-1 h-14 min-w-0 font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-grey relative isolate transition-colors hover:text-white"
              activeClassName="text-white"
            >
              <span className="relative flex items-center flex-none font-sans font-light text-base leading-[1.4] tracking-[0.02em] text-inherit before:content-[''] before:absolute before:w-5 before:h-5 before:-left-0.5 before:top-1/2 before:-translate-y-1/2 before:bg-primary before:blur-[12px] before:-z-10 before:pointer-events-none before:opacity-0 group-hover:before:opacity-50">
                Blog
              </span>
            </NavLink>

            <div className="flex items-center gap-2 pt-4 border-t border-border">
              {/* <a
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
              </a> */}

              {/* <a
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
              </a>*/}
            </div>

            <a href="/contact" onClick={() => setIsMenuOpen(false)}>
              <SiteButton variant="nav" className="w-full">
                Contact Us
              </SiteButton>
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
