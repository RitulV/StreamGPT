export const BASE_IMG_URL = "https://ritulv.github.io/image-hosting/";
export const LOCAL_AUTH_TOKEN = `sb-${
  new URL(import.meta.env.VITE_SUPABASE_URL).hostname.split(".")[0]
}-auth-token`;