import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { AI_FLOW_LOGO_SYMBOL } from "@/constants/images";
import { SiteButton } from "@/components/SiteButton";
import {
  Menu,
  X,
  Landmark,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const industryLinks = [
  { name: "EU — Regulated Institutions", href: "/industry/regulated-institutions", icon: Landmark },
  { name: "US — Growth Fintechs", href: "/industry/growth-fintechs", icon: TrendingUp },
] as const;

const navItemClass =
  "text-[13px] font-medium tracking-[0.01em] text-[#555A66] hover:text-[#0E1015] transition-colors";
const navItemActive = "text-[#0E1015]";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setMobileIndustriesOpen(false);
  }, [location.pathname, location.hash]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200 backdrop-blur-md",
          scrolled ? "bg-white/80" : "bg-white/60",
        )}
        style={{ height: 64 }}
      >
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 h-full flex items-center justify-between gap-4">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center shrink-0 min-w-0"
          >
            <img
              src={AI_FLOW_LOGO_SYMBOL}
              alt="AI Flow Software"
              className="h-10 w-auto shrink-0"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-end min-w-0">
            <NavLink
              to="/services"
              className={navItemClass}
              activeClassName={navItemActive}
            >
              Services
            </NavLink>
            <NavLink
              to="/case-studies"
              className={navItemClass}
              activeClassName={navItemActive}
            >
              Our work
            </NavLink>

            <div className="relative group flex items-center h-full">
              <button
                type="button"
                className={cn(
                  navItemClass,
                  "flex items-center gap-0.5 h-full py-2 cursor-pointer bg-transparent border-0 font-sans",
                  location.pathname.startsWith("/industry/") && navItemActive,
                )}
                aria-haspopup="true"
              >
                Industries
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="rounded-lg border border-[#E2E6F0] bg-white shadow-lg py-2 min-w-[220px]">
                  {industryLinks.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-[#0E1015] hover:bg-[#F7F9FC] transition-colors"
                    >
                      <item.icon className="w-4 h-4 shrink-0 text-[#555A66]" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink
              to="/team"
              className={navItemClass}
              activeClassName={navItemActive}
            >
              About us
            </NavLink>
            <NavLink
              to="/careers"
              className={navItemClass}
              activeClassName={navItemActive}
            >
              Careers
            </NavLink>
            <NavLink
              to="/blog"
              className={navItemClass}
              activeClassName={navItemActive}
            >
              Blog
            </NavLink>

            <Link to="/contact" className="shrink-0 ml-2">
              <SiteButton variant="nav">Contact us</SiteButton>
            </Link>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16 md:hidden">
          <div className="px-6 py-8 flex flex-col gap-0 overflow-y-auto max-h-[calc(100vh-4rem)]">
            <MobileRow>
              <Link
                to="/services"
                className="block py-5 text-base font-medium text-[#0E1015] hover:text-[#112e63] transition-colors"
              >
                Services
              </Link>
            </MobileRow>
            <MobileRow>
              <Link
                to="/case-studies"
                className="block py-5 text-base font-medium text-[#0E1015] hover:text-[#112e63] transition-colors"
              >
                Our work
              </Link>
            </MobileRow>

            <div className="border-t border-[#E2E6F0]">
              <button
                type="button"
                onClick={() => setMobileIndustriesOpen((v) => !v)}
                className="flex w-full items-center justify-between py-5 text-base font-medium text-[#0E1015] text-left"
                aria-expanded={mobileIndustriesOpen}
              >
                Industries
                <span className="text-[#555A66] text-sm">
                  {mobileIndustriesOpen ? "−" : "+"}
                </span>
              </button>
              {mobileIndustriesOpen && (
                <ul className="pb-2 pl-1 space-y-0 border-l-2 border-[#E2E6F0] ml-2">
                  {industryLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className="flex items-center gap-3 py-3 pl-4 text-sm font-medium text-[#555A66] hover:text-[#112e63]"
                      >
                        <item.icon className="w-4 h-4 shrink-0" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <MobileRow>
              <Link
                to="/team"
                className="block py-5 text-base font-medium text-[#0E1015] hover:text-[#112e63] transition-colors"
              >
                About us
              </Link>
            </MobileRow>
            <MobileRow>
              <Link
                to="/careers"
                className="block py-5 text-base font-medium text-[#0E1015] hover:text-[#112e63] transition-colors"
              >
                Careers
              </Link>
            </MobileRow>
            <MobileRow>
              <Link
                to="/blog"
                className="block py-5 text-base font-medium text-[#0E1015] hover:text-[#112e63] transition-colors"
              >
                Blog
              </Link>
            </MobileRow>

            <hr className="border-t border-[#E2E6F0] mb-8" />
            <Link to="/contact">
              <SiteButton variant="nav" className="w-full justify-center">
                Contact us
              </SiteButton>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

function MobileRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-t border-[#E2E6F0] first:border-t-0">{children}</div>
  );
}
