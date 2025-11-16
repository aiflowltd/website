// Environment variables
// In Vite, client-side env vars must be prefixed with VITE_
export const VITE_GOOGLE_TAG_MANAGER_ID =
  import.meta.env.VITE_GOOGLE_TAG_MANAGER_ID || undefined;

// Check if we're in production
export const IS_PRODUCTION = import.meta.env.PROD;
