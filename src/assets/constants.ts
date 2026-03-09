export const BASE_IMG_URL = "https://ritulv.github.io/image-hosting/";
export const LOCAL_AUTH_TOKEN = `sb-${
  new URL(import.meta.env.VITE_SUPABASE_URL).hostname.split(".")[0]
}-auth-token`;

export const TMDB_GET_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export const BACKDROP_PATH = `https://image.tmdb.org/t/p/w440_and_h660_face`;
export const BACKDROP_PATH_ORG = `https://image.tmdb.org/t/p/original`;
export const YT_VID = `https://www.youtube.com/embed/`;
export const HOST_URL = `https://ritulv.github.io/image-hosting`;