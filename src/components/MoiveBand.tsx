import { addHero, type MovieDetails } from "../utils/movieSlice";
import { type SeriesDetails } from "../utils/seriesSlice";
import MovieBanner from "./MovieBanner";
import { MovieList } from "../assets/Enums";
import { BASE_IMG_URL } from "../assets/constants";
import useHeroMovieGetDetails from "../utils/useHeroMovieGetDetails";
import { useAppDispatch } from "../utils/storeHooks";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";

type Props = {
  movies: MovieDetails[] | SeriesDetails[];
  movieListType: MovieList;
  title: string
};

export type State = "empty" | "filled";

export type HeroEl = {
  movies: MovieDetails[] | SeriesDetails[];
  videoUrls: Array<string>;
  backdropUrls: Array<string>;
  logoUrls: Array<string>;
  state: State;
};

export var empHeroMovieList: HeroEl = {
  movies: [],
  videoUrls: [],
  backdropUrls: [],
  logoUrls: [],
  state: "empty",
};

const MoiveBand = ({ movies, movieListType, title }: Props) => {
  const playTrailer = () => {
    setPlayVid(true);
    setTimeout(() => setPlayVid(false), 25000);
  };

  empHeroMovieList = useHeroMovieGetDetails(
    movieListType == MovieList.Hero ? movies : []
  );

  const [active, setActive] = useState(0);
  const [playVid, setPlayVid] = useState(false);

  var dispatch = useAppDispatch();

  useEffect(() => {
    if (movieListType === MovieList.Hero && empHeroMovieList.state === "filled")
      dispatch(addHero(empHeroMovieList));
  }, [empHeroMovieList.state]);

  useEffect(() => {
    setPlayVid(false);
  }, [active]);

  const goPrev = () => {
    setActive((curr) =>
      curr === 0 ? empHeroMovieList.movies.length - 1 : curr - 1
    );
  };
  const goNext = () => {
    setActive((curr) =>
      curr === empHeroMovieList.movies.length - 1 ? 0 : curr + 1
    );
  };

  return movieListType == MovieList.Hero ? (
    <div className="py-2.5 relative w-[98vw] flex justify-center items-center">
      <div
        className="absolute inset-y-0 left-0 self-center ml-5"
        onClick={() => goPrev()}
      >
        <img
          src={BASE_IMG_URL + "pull-up.png"}
          className="w-15 h-15 rotate-270 hover:cursor-pointer"
        />
      </div>
      <div className="relative w-[85vw] h-[80vh] rounded-md border border-gray-600 overflow-clip">
        <HeroSection currAct={active} plyV={playVid} plyT={playTrailer} />
      </div>
      <div
        className="absolute inset-y-0 right-0 self-center pr-5"
        onClick={() => goNext()}
      >
        <img
          src={BASE_IMG_URL + "pull-up.png"}
          className="w-15 h-15 rotate-90 hover:cursor-pointer"
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col">
      <span className="pt-2 pl-5 font-[Space_Grotesk] font-[400px] text-2xl/loose">
        {title}
      </span>
      <div className="flex py-5 px-5 overflow-x-scroll gap-10 min-w-0 justify-around max-w-full overflow-hidden hide-scrollbar w-[98vw]">
        {movies.map((movie) => (
          <MovieBanner movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoiveBand;
