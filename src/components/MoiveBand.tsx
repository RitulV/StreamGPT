import { addHero, type MovieDetails } from "../utils/movieSlice";
import MovieBanner from "./MovieBanner";
import { MovieList } from "../assets/Enums";
import { BASE_IMG_URL } from "../assets/constants";
import useHeroMovieGetDetails from "../utils/useHeroMovieGetDetails";
import { useAppDispatch } from "../utils/storeHooks";
import { useEffect } from "react";

type Props = {
  movies: MovieDetails[];
  movieListType: MovieList;
};

export type State = "empty" | "filled";

export type HeroEl = {
  movies: MovieDetails[];
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

const MoiveBand = ({ movies, movieListType }: Props) => {
  empHeroMovieList = useHeroMovieGetDetails(
    movieListType == MovieList.Hero ? movies : []
  );

  var dispatch = useAppDispatch();

  useEffect(() => {
    if (movieListType === MovieList.Hero && empHeroMovieList.state === "filled")
      dispatch(addHero(empHeroMovieList));
  }, [empHeroMovieList.state]);

  return movieListType == MovieList.Hero ? (
    <div className="py-2.5 relative w-[98vw] flex justify-center items-center">
      <div className="absolute inset-y-0 left-0 self-center ml-5">
        <img
          src={BASE_IMG_URL + "pull-up.png"}
          className="w-15 h-15 rotate-270 hover:cursor-pointer"
        />
      </div>
      <div className="relative p-5 w-[85vw] h-[80vh] rounded-md border border-gray-600"></div>
      <div className="absolute inset-y-0 right-0 self-center pr-5">
        <img
          src={BASE_IMG_URL + "pull-up.png"}
          className="w-15 h-15 rotate-90 hover:cursor-pointer"
        />
      </div>
    </div>
  ) : (
    <div className="flex py-10 px-5 overflow-x-scroll gap-10 min-w-0 justify-around max-w-full overflow-hidden hide-scrollbar w-[98vw]">
      {movies.map((movie) => (
        <MovieBanner movie={movie} />
      ))}
    </div>
  );
};

export default MoiveBand;
