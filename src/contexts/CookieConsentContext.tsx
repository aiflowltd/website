import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CookiePreferences,
  DEFAULT_PREFERENCES,
  deleteNonEssentialCookies,
  getStoredConsent,
  hasConsented,
  storeConsent,
} from "@/lib/cookies";

interface CookieConsentContextValue {
  preferences: CookiePreferences;
  hasUserConsented: boolean;
  showBanner: boolean;
  showPreferences: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
  openPreferences: () => void;
  closePreferences: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null
);

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [hasUserConsented, setHasUserConsented] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setPreferences(stored);
      setHasUserConsented(true);
      setShowBanner(false);
    } else {
      setHasUserConsented(false);
      setShowBanner(true);
    }
  }, []);

  const applyConsent = useCallback((prefs: CookiePreferences) => {
    setPreferences(prefs);
    storeConsent(prefs);
    setHasUserConsented(true);
    setShowBanner(false);
    setShowPreferences(false);

    if (!prefs.analytics && !prefs.marketing) {
      deleteNonEssentialCookies();
    }
  }, []);

  const acceptAll = useCallback(() => {
    applyConsent({ necessary: true, analytics: true, marketing: true });
  }, [applyConsent]);

  const rejectAll = useCallback(() => {
    applyConsent({ necessary: true, analytics: false, marketing: false });
    deleteNonEssentialCookies();
  }, [applyConsent]);

  const savePreferences = useCallback(
    (prefs: CookiePreferences) => {
      applyConsent({ ...prefs, necessary: true });
    },
    [applyConsent]
  );

  const openPreferences = useCallback(() => {
    setShowPreferences(true);
  }, []);

  const closePreferences = useCallback(() => {
    setShowPreferences(false);
    if (!hasConsented()) {
      setShowBanner(true);
    }
  }, []);

  const value = useMemo(
    () => ({
      preferences,
      hasUserConsented,
      showBanner,
      showPreferences,
      acceptAll,
      rejectAll,
      savePreferences,
      openPreferences,
      closePreferences,
    }),
    [
      preferences,
      hasUserConsented,
      showBanner,
      showPreferences,
      acceptAll,
      rejectAll,
      savePreferences,
      openPreferences,
      closePreferences,
    ]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent must be used within CookieConsentProvider"
    );
  }
  return context;
}
