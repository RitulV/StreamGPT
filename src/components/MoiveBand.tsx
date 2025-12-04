import { type MovieDetails } from "../utils/movieSlice";
import MovieBanner from "./MovieBanner";
import { MovieList } from "../assets/Enums";
import HeroSection from "./HeroSection";

type Props = {
  movies: MovieDetails[];
  movieListType: MovieList;
};

const MoiveBand = ({ movies, movieListType }: Props) => {
  return movieListType == MovieList.Hero ? (
    <div className="flex p-10 overflow-x-scroll gap-10 min-w-0 justify-around max-w-full  overflow-hidden hide-scrollbar">
      {movies.map((movie) => (
        <HeroSection movie={movie} />
      ))}
    </div>
  ) : (
    <div className="flex p-10 overflow-x-scroll gap-10 min-w-0 justify-around max-w-full overflow-hidden hide-scrollbar">
      {movies.map((movie) => (
        <MovieBanner movie={movie} />
      ))}
    </div>
  );
};

export default MoiveBand;
