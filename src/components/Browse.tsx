// import useFillMovieStoreData from "../utils/useFillMovieStoreData";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../utils/storeHooks";
import {
  fetchMovieDetails,
  type MovieState,
  initialState,
} from "../utils/movieSlice";

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

  return <div>Browse</div>;
};

export default Browse;
