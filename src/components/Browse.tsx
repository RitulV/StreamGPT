// import useFillMovieStoreData from "../utils/useFillMovieStoreData";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../utils/storeHooks";
import {
  fetchMovieDetails,
  type MovieState,
  initialState,
} from "../utils/movieSlice";
import BrowseShimmer from "./BrowseShimmer";
import MovieBand from "./MoiveBand";
import { MovieList } from "../assets/Enums";

const Browse = () => {
  // useFillMovieStoreData();
  var dispatch = useAppDispatch();
  var movie_list: MovieState = initialState;

  useEffect(() => {
    dispatch(fetchMovieDetails());
  }, []);

  try {
    movie_list = useAppSelector((state) => state.movies);
  } catch (error) {
    console.log("Error occured: ", movie_list.errorMessage);
  }

  return movie_list.state !== "completed" ? (
    <BrowseShimmer />
  ) : (
    <div>
      <MovieBand
        movies={movie_list.data.slice(0,20)}
        movieListType={MovieList.Hero}
      />
      <MovieBand
        movies={movie_list.data.slice(20, 40)}
        movieListType={MovieList.Card}
      />
      <MovieBand
        movies={movie_list.data.slice(40)}
        movieListType={MovieList.Card}
      />
    </div>
  );
};

export default Browse;
