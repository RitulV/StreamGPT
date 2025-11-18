import { type MovieDetails } from "../utils/movieSlice";
import MovieBanner from "./MovieBanner";
import { MovieList } from "../assets/Enums";

type Props = {
  movies: MovieDetails[];
  movieListType: MovieList;
};

const MoiveBand = ({ movies, movieListType }: Props) => {
  console.log(movieListType);
  console.log(movies);

  return movieListType == MovieList.Hero ? (
    <div>
      <div>
        {movies.map((movie) => (
          <MovieBanner movie={movie} />
        ))}
      </div>
    </div>
  ) : (
    <div>
      <div>
        {movies.map((movie) => (
          <MovieBanner movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoiveBand;
