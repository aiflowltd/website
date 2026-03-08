import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Shield, BarChart3, Megaphone, Cookie, Settings2 } from "lucide-react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { CookiePreferences } from "@/lib/cookies";

export function CookieBanner() {
  const {
    preferences,
    showBanner,
    showPreferences,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences,
    closePreferences,
  } = useCookieConsent();

  const [localPrefs, setLocalPrefs] = useState<CookiePreferences>(preferences);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setLocalPrefs(preferences);
  }, [preferences]);

  useEffect(() => {
    if (showBanner || showPreferences) {
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
    }
  }, [showBanner, showPreferences]);

  if (!showBanner && !showPreferences) return null;

  if (showPreferences) {
    return <PreferencesModal
      localPrefs={localPrefs}
      setLocalPrefs={setLocalPrefs}
      onSave={() => savePreferences(localPrefs)}
      onAcceptAll={acceptAll}
      onRejectAll={rejectAll}
      onClose={closePreferences}
      isVisible={isVisible}
    />;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[9999] transition-transform duration-500 ease-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-card/95 backdrop-blur-xl border-t border-border shadow-2xl shadow-black/50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm mb-1">
                  We value your privacy
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use cookies to enhance your experience, analyze site traffic, and for marketing purposes.
                  You can choose which cookies you allow. Read our{" "}
                  <Link
                    to="/privacy"
                    className="text-primary hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for more information.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 flex-shrink-0 w-full lg:w-auto">
              <button
                onClick={openPreferences}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-muted/50 transition-all"
              >
                <Settings2 className="w-4 h-4" />
                Customize
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-muted/50 transition-all"
              >
                Reject All
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CATEGORIES = [
  {
    key: "necessary" as const,
    label: "Strictly Necessary",
    icon: Shield,
    locked: true,
    description:
      "These cookies are essential for the website to function properly. They enable basic features like page navigation and access to secure areas. The website cannot function properly without these cookies.",
    cookies: ["Session management", "Cookie consent preferences", "UI state"],
  },
  {
    key: "analytics" as const,
    label: "Analytics & Performance",
    icon: BarChart3,
    locked: false,
    description:
      "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve how our website works.",
    cookies: ["Google Analytics", "Umami Analytics", "Google Tag Manager", "Vercel Analytics"],
  },
  {
    key: "marketing" as const,
    label: "Marketing & Advertising",
    icon: Megaphone,
    locked: false,
    description:
      "These cookies are used to deliver advertisements more relevant to you and your interests. They may also be used to limit the number of times you see an ad and measure the effectiveness of advertising campaigns.",
    cookies: ["LinkedIn Insight Tag"],
  },
];

function PreferencesModal({
  localPrefs,
  setLocalPrefs,
  onSave,
  onAcceptAll,
  onRejectAll,
  onClose,
  isVisible,
}: {
  localPrefs: CookiePreferences;
  setLocalPrefs: (p: CookiePreferences) => void;
  onSave: () => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onClose: () => void;
  isVisible: boolean;
}) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`relative bg-card border border-border rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Cookie Preferences</h2>
              <p className="text-xs text-muted-foreground">
                Manage your cookie settings
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use cookies and similar technologies to help personalise content, tailor and measure ads, and provide a better experience.
            By clicking "Accept All" you agree to all cookies. You can customize your preferences below.
            In compliance with the EU General Data Protection Regulation (GDPR), you have the right to accept or reject non-essential cookies.
          </p>

          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isEnabled = localPrefs[cat.key];

            return (
              <div
                key={cat.key}
                className="border border-border rounded-lg overflow-hidden"
              >
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold">{cat.label}</h3>
                      {cat.locked && (
                        <span className="text-xs text-primary font-medium">
                          Always active
                        </span>
                      )}
                    </div>
                  </div>

                  {cat.locked ? (
                    <div className="w-11 h-6 rounded-full bg-primary/20 flex items-center justify-end px-0.5 cursor-not-allowed">
                      <div className="w-5 h-5 rounded-full bg-primary" />
                    </div>
                  ) : (
                    <button
                      onClick={() =>
                        setLocalPrefs({
                          ...localPrefs,
                          [cat.key]: !isEnabled,
                        })
                      }
                      className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors duration-200 ${
                        isEnabled ? "bg-primary" : "bg-muted"
                      }`}
                      role="switch"
                      aria-checked={isEnabled}
                      aria-label={`Toggle ${cat.label}`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
                          isEnabled ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  )}
                </div>

                <div className="px-4 pb-4">
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.cookies.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <p className="text-xs text-muted-foreground">
            For more details, please read our{" "}
            <Link
              to="/privacy"
              className="text-primary hover:underline font-medium"
            >
              Privacy Policy
            </Link>
            . You can change your preferences at any time from the footer of our website.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 p-6 border-t border-border">
          <button
            onClick={onRejectAll}
            className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-muted/50 transition-all"
          >
            Reject All
          </button>
          <div className="flex gap-2">
            <button
              onClick={onSave}
              className="px-4 py-2.5 text-sm font-medium border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all"
            >
              Save Preferences
            </button>
            <button
              onClick={onAcceptAll}
              className="px-6 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
