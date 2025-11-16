import { Link } from "react-router-dom";
import { Linkedin, Mail, Globe } from "lucide-react";
import { teamMembers, companyInfo } from "@/data/team";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="AI Flow Logo" className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              {companyInfo.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href={companyInfo.linkedinCompany}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <a
                  href={companyInfo.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Form
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Work With Us
                </Link>
              </li>
            </ul>

            {/* Socials */}
            <div>
              <h4 className="font-semibold text-sm mb-3">Connect With Us</h4>
              <div className="flex gap-3">
                <a
                  href={teamMembers.irina.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  title={`${teamMembers.irina.name} - LinkedIn`}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300">
                    <img
                      src={teamMembers.irina.photo}
                      alt={teamMembers.irina.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300">
                    <img
                      src={teamMembers.mihai.photo}
                      alt={teamMembers.mihai.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Linkedin className="w-2.5 h-2.5 text-background" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

