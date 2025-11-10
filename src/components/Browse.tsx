// import useFillMovieStoreData from "../utils/useFillMovieStoreData";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../utils/storeHooks";
import {
  fetchMovieDetails,
  type MovieState,
  initialState,
} from "../utils/movieSlice";
import BrowseShimmer from "./BrowseShimmer";

const Browse = () => {
  // useFillMovieStoreData();
  var dispatch = useAppDispatch();
  var movie_list: MovieState = initialState;

  useEffect(() => {
    dispatch(fetchMovieDetails());
  }, []);

  try {
    movie_list = useAppSelector((state) => state.movies);
    console.log(movie_list);
  } catch (error) {
    console.log("Error occured: ", movie_list.errorMessage);
  }

  return movie_list.state !== "completed" ? (
    <BrowseShimmer />
  ) : (
    <div>
      <div>Now Playing Movies</div>
      <div>2 Part section</div>
    </div>
  );
};

export default Browse;
