// import useFillMovieStoreData from "../utils/useFillMovieStoreData";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../utils/storeHooks";
import {
  fetchMovieDetails,
  type MovieState,
} from "../utils/movieSlice";
import BrowseShimmer from "./BrowseShimmer";
import MovieBand from "./MoiveBand";
import { MovieList } from "../assets/Enums";
import {
  type SeriesState,
  fetchSeriesDetails,
} from "../utils/seriesSlice";

const Browse = () => {
  var dispatch = useAppDispatch();
  var movie_list: MovieState = useAppSelector((state) => state.movies);
  var series_list: SeriesState = useAppSelector((state) => state.series);

  useEffect(() => {
    if (movie_list.state == "idle") dispatch(fetchMovieDetails());
    if (series_list.state == "idle") dispatch(fetchSeriesDetails());
  }, []);

  try {
    movie_list = useAppSelector((state) => state.movies);
    series_list = useAppSelector((state) => state.series);
  } catch (error) {
    console.log("Error occured: ", movie_list.errorMessage);
  }

  return movie_list.state !== "completed" ? (
    <BrowseShimmer />
  ) : (
    <div className="flex flex-col items-center">
      <MovieBand
        movies={movie_list.data.slice(0, 20)}
        movieListType={MovieList.Hero}
        title=""
      />

      <MovieBand
        movies={movie_list.data.slice(20, 40)}
        movieListType={MovieList.Card}
        title="Popular Movies"
      />

      <MovieBand
        movies={movie_list.data.slice(40)}
        movieListType={MovieList.Card}
        title="Top Rated Movies"
      />

      <MovieBand
        movies={series_list.data.slice(0, 20)}
        movieListType={MovieList.Card}
        title="Popular Series"
      />

      <MovieBand
        movies={series_list.data.slice(20, 40)}
        movieListType={MovieList.Card}
        title="Top Rated Series"
      />
    </div>
  );
};

export default Browse;
