import { useEffect, useRef } from "react";
import TagManager from "react-gtm-module";
import { Analytics } from "@vercel/analytics/react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { VITE_GOOGLE_TAG_MANAGER_ID } from "@/constants/env";

function activateScriptsByCategory(category: string) {
  const scripts = document.querySelectorAll<HTMLScriptElement>(
    `script[type="text/plain"][data-cookie-category="${category}"]`
  );

  scripts.forEach((original) => {
    if (original.dataset.activated === "true") return;

    const replacement = document.createElement("script");
    replacement.type = "text/javascript";

    Array.from(original.attributes).forEach((attr) => {
      if (attr.name === "type") return;
      replacement.setAttribute(attr.name, attr.value);
    });
    replacement.dataset.activated = "true";

    if (!original.src && original.textContent) {
      replacement.textContent = original.textContent;
    }

    original.parentNode?.replaceChild(replacement, original);
  });
}

function GTMLoader({ enabled }: { enabled: boolean }) {
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!enabled || loadedRef.current || !VITE_GOOGLE_TAG_MANAGER_ID) return;
    TagManager.initialize({ gtmId: VITE_GOOGLE_TAG_MANAGER_ID });
    loadedRef.current = true;
  }, [enabled]);

  return null;
}

export function ConsentGatedAnalytics() {
  const { preferences, hasUserConsented } = useCookieConsent();

  useEffect(() => {
    if (!hasUserConsented) return;
    if (preferences.analytics) {
      activateScriptsByCategory("analytics");
    }
    if (preferences.marketing) {
      activateScriptsByCategory("marketing");
    }
  }, [hasUserConsented, preferences.analytics, preferences.marketing]);

  if (!hasUserConsented) return null;

  return (
    <>
      <GTMLoader enabled={preferences.analytics} />
      {preferences.analytics && <Analytics />}
    </>
  );
}
