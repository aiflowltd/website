export type CookieCategory = "necessary" | "analytics" | "marketing";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CONSENT_KEY = "cookie_consent";
const CONSENT_TIMESTAMP_KEY = "cookie_consent_timestamp";
const CONSENT_VERSION = "1";

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function getStoredConsent(): CookiePreferences | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed.preferences as CookiePreferences;
  } catch {
    return null;
  }
}

export function storeConsent(preferences: CookiePreferences): void {
  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify({ version: CONSENT_VERSION, preferences })
  );
  localStorage.setItem(CONSENT_TIMESTAMP_KEY, new Date().toISOString());
}

export function clearConsent(): void {
  localStorage.removeItem(CONSENT_KEY);
  localStorage.removeItem(CONSENT_TIMESTAMP_KEY);
}

export function hasConsented(): boolean {
  return getStoredConsent() !== null;
}

export function deleteNonEssentialCookies(): void {
  const essentialPrefixes = ["cookie_consent", "sidebar:state"];
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const name = cookie.split("=")[0].trim();
    if (!name) continue;
    const isEssential = essentialPrefixes.some(
      (prefix) => name === prefix || name.startsWith(prefix)
    );
    if (!isEssential) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
    }
  }
}
