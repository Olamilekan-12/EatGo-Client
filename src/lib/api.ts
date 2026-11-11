/**
 * Backend base URL from VITE_API_BASE_URL, without trailing slashes, so a
 * value like "https://api.example.com/" can't produce "//api/..." requests.
 */
export const API_BASE_URL = (
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? ""
).trim().replace(/\/+$/, "");
