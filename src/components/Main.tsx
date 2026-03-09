import { HOST_URL } from "@/assets/constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { type SeriesDetails } from "../utils/seriesSlice";
import { type MovieDetails } from "../utils/movieSlice";

const Main = () => {
  const [movieReel, setMovieReel] = useState<MovieDetails[]>([]);
  const [tvReel, setTvReel] = useState<SeriesDetails[]>([]);

  const fillReels = async () => {
    const movieList = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          sort_by: "revenue.desc",
        },
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          accept: `application/json`,
        },
      },
    );
    setMovieReel(movieList.data.results);

    const tvList = await axios.get(`https://api.themoviedb.org/3/discover/tv`, {
      params: {
        sort_by: "revenue.desc",
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        accept: `application/json`,
      },
    });

    setTvReel(tvList.data.results);
  };

  useEffect(() => {
    let isMounted = true;

    fillReels();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center pt-[5rem] w-full">
      {/* Background pattern layer */}
      <div
        className="absolute inset-0 opacity-1"
        style={{
          backgroundImage: `url(${HOST_URL}/star-of-life.svg)`,
          backgroundSize: "28px 28px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-fit flex flex-col items-center gap-10">
        <div className="max-w-3/4">
          <span className="block text-[clamp(3rem,10vw,9rem)] font-black uppercase text-white leading-none tracking-tight text-balance select-none">
            all the entertainment you need
          </span>
        </div>
        <div className="max-w-9/10 mt-5">
          <span className="block text-[clamp(3rem,10vw,9rem)] font-black uppercase text-white leading-none tracking-tight text-balance select-none">
            under one hood
          </span>
        </div>
        <div className="flex gap-10">
          <div className="h-[40rem] min-w-[35rem] rounded-4xl bg-blue-200/1 shadow-[0px_1px_5px_1px_rgb(255,255,255,0.1)_inset,0px_-1px_5px_1px_rgb(255,255,255,0.1)_inset] flex justify-center pt-5">
            <div className="h- w-max border border-white">movies</div>
          </div>
          <div className="h-[40rem] min-w-[35rem] rounded-4xl bg-blue-200/1 shadow-[0px_1px_5px_1px_rgb(255,255,255,0.1)_inset,0px_-1px_5px_1px_rgb(255,255,255,0.1)_inset] flex justify-around items-center">
            <div className="h-50 w-50">series</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
