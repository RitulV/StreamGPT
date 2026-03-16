import axios from "axios";
import { useEffect, useState } from "react";
import { type SeriesDetails } from "../utils/seriesSlice";
import { type MovieDetails } from "../utils/movieSlice";
import { BACKDROP_PATH } from "../assets/constants";
import { Link } from "react-router-dom";

const TMDB_HEADERS = {
  Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  accept: "application/json",
};

const HomePageReels = () => {
  const [movieReel, setMovieReel] = useState<MovieDetails[]>([]);
  const [tvReel, setTvReel] = useState<SeriesDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [movieIndex, setMovieIndex] = useState(0);
  const [prevMovieIndex, setPrevMovieIndex] = useState(0);

  const [tvIndex, setTvIndex] = useState(0);
  const [prevTvIndex, setPrevTvIndex] = useState(0);

  useEffect(() => {
    if (movieReel.length === 0) return;
    const randomDelay = () => Math.random() * (7000 - 3000) + 3000;
    let timeout: ReturnType<typeof setTimeout>;
    const cycle = () => {
      timeout = setTimeout(() => {
        setMovieIndex((prev) => {
          setPrevMovieIndex(prev);
          return (prev + 1) % movieReel.length;
        });
        cycle();
      }, randomDelay());
    };
    cycle();
    return () => clearTimeout(timeout);
  }, [movieReel]);

  useEffect(() => {
    if (tvReel.length === 0) return;
    const randomDelay = () => Math.random() * (7000 - 3000) + 3000;
    let timeout: ReturnType<typeof setTimeout>;
    const cycle = () => {
      timeout = setTimeout(() => {
        setTvIndex((prev) => {
          setPrevTvIndex(prev);
          return (prev + 1) % tvReel.length;
        });
        cycle();
      }, randomDelay());
    };
    cycle();
    return () => clearTimeout(timeout);
  }, [tvReel]);

  useEffect(() => {
    const controller = new AbortController();

    const fillReels = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [movieList, tvList] = await Promise.all([
          axios.get("https://api.themoviedb.org/3/discover/movie", {
            params: { sort_by: "revenue.desc" },
            headers: TMDB_HEADERS,
            signal: controller.signal,
          }),
          axios.get("https://api.themoviedb.org/3/discover/tv", {
            params: { sort_by: "revenue.desc" },
            headers: TMDB_HEADERS,
            signal: controller.signal,
          }),
        ]);

        setMovieReel(movieList.data.results);
        setTvReel(tvList.data.results);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError("Failed to load content.");
        }
      } finally {
        setIsLoading(false);
        console.log(movieReel);
      }
    };

    fillReels();

    return () => controller.abort();
  }, []);

  if (isLoading || error) return <div className="text-white"></div>;

  return (
    <div className="flex gap-10 self-center mt-[5rem]">
      {/* Movie Reel */}
      <Link to="/browse">
        <div className="group h-[45rem] min-w-[30rem] rounded-4xl bg-blue-200/1 shadow-[0px_1px_5px_1px_rgb(255,255,255,0.1)_inset,0px_-1px_5px_1px_rgb(255,255,255,0.1)_inset] flex justify-center p-2 hover:cursor-pointer hover:p-0 duration-300 ease-in-out">
          <div className="relative w-full h-full rounded-4xl overflow-hidden">
            {/* outgoing */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-4xl"
              style={{
                backgroundImage: `url('${BACKDROP_PATH}${movieReel[prevMovieIndex]?.poster_path}')`,
              }}
            />

            {/* incoming */}
            <div
              key={movieIndex}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-4xl animate-fadein"
              style={{
                backgroundImage: `url('${BACKDROP_PATH}${movieReel[movieIndex]?.poster_path}')`,
              }}
            />

            {/* hover overlay */}
            <div className="absolute inset-x-0 bottom-0 px-5 py-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <span className="block text-[clamp(1rem,10vw,3.5rem)] font-black uppercase text-white leading-none tracking-tight text-balance select-none">
                explore movies
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* TV Reel */}
      <Link to="/browse">
        <div className="group h-[45rem] min-w-[30rem] rounded-4xl bg-blue-200/1 shadow-[0px_1px_5px_1px_rgb(255,255,255,0.1)_inset,0px_-1px_5px_1px_rgb(255,255,255,0.1)_inset] flex justify-center p-2 hover:cursor-pointer hover:p-0 duration-300 ease-in-out">
          <div className="relative w-full h-full rounded-4xl overflow-hidden">
            {/* outgoing */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-4xl"
              style={{
                backgroundImage: `url('${BACKDROP_PATH}${tvReel[prevTvIndex]?.poster_path}')`,
              }}
            />

            {/* incoming */}
            <div
              key={tvIndex}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-4xl animate-fadein"
              style={{
                backgroundImage: `url('${BACKDROP_PATH}${tvReel[tvIndex]?.poster_path}')`,
              }}
            />

            {/* hover overlay */}
            <div className="absolute inset-x-0 bottom-0 px-5 py-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <span className="block text-[clamp(1rem,10vw,3.5rem)] font-black uppercase text-white leading-none tracking-tight text-balance select-none">
                explore tv shows
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomePageReels;
