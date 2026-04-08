import { Link } from "react-router-dom";
import { companyInfo } from "@/data/team";
import { AI_FLOW_LOGO_LARGE } from "@/constants/images";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const companyLinks = [
  { label: "How it works", to: "/#how-we-work" },
  { label: "Who we serve", to: "/#who-we-serve" },
  { label: "Our work", to: "/case-studies" },
  { label: "Services", to: "/services" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;

const industryLinks = [
  { label: "EU — Regulated Institutions", to: "/#who-we-serve" },
  { label: "US — Growth Fintechs", to: "/#who-we-serve" },
] as const;

export const Footer = () => {
  const { openPreferences } = useCookieConsent();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={AI_FLOW_LOGO_LARGE}
                alt="AI Flow Software"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-1 max-w-xs font-medium">
              Nothing lost between teams.
            </p>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs leading-relaxed">
              Compliance infrastructure for regulated financial institutions and
              fintechs.
            </p>
            <a
              href="mailto:contact@aiflow.ltd"
              className="text-sm text-primary hover:underline"
            >
              contact@aiflow.ltd
            </a>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Industries</h3>
            <ul className="space-y-3 mb-6">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={companyInfo.linkedinCompany}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 AI Flow Software. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <button
              type="button"
              onClick={openPreferences}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
