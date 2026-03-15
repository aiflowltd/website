import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { companyInfo } from "@/data/team";
import { AI_FLOW_LOGO_LARGE } from "@/constants/images";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { openPreferences } = useCookieConsent();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo & Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={AI_FLOW_LOGO_LARGE}
                alt="AI Flow"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs leading-relaxed">
              AI systems for firms where data quality and decision speed
              determine the outcome.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {companyInfo.email}
            </p>
            <div className="flex gap-3">
              <a
                href={companyInfo.linkedinCompany}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our work
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h3 className="font-bold mb-4">Industries</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/industry/construction"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Construction
                </Link>
              </li>
              <li>
                <Link
                  to="/industry/real-estate"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy;{currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
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
