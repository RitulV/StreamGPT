export const BASE_IMG_URL = "https://ritulv.github.io/image-hosting/";
export const LOCAL_AUTH_TOKEN = `sb-${
  new URL(import.meta.env.VITE_SUPABASE_URL).hostname.split(".")[0]
}-auth-token`;

export const TMDB_GET_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGRkMmU4Yzk0ZTM5MzllNjAyOGY5MjE3Yjk2MzA5YSIsIm5iZiI6MTc1NTkyNzQ3Mi43NjQsInN1YiI6IjY4YTk1M2IwMWI3MDAzNTA5ZTU0NzlhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1QwOcwISkUSauQZIvx5B146UA2aYq4b-n6TEJddWCws",
  },
};

export const BACKDROP_PATH = `https://image.tmdb.org/t/p/w440_and_h660_face`;
