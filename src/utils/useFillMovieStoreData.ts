// import { useEffect } from "react";
// import { TMDB_GET_OPTIONS } from "../assets/constants";
// import { useAppDispatch } from "./storeHooks";
// import { setMovies, clearMovies } from "./movieSlice";

// const useFillMovieStoreData = () => {
//   const dispact = useAppDispatch();

//   const fetchData = async () => {
//     dispact(clearMovies());

//     const data1 = await fetch(
//       "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
//       TMDB_GET_OPTIONS
//     );
//     const json_data1 = await data1.json();

//     const data2 = await fetch(
//       "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
//       TMDB_GET_OPTIONS
//     );
//     const json_data2 = await data2.json();

//     const data3 = await fetch(
//       "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
//       TMDB_GET_OPTIONS
//     );
//     const json_data3 = await data3.json();

//     const combinedResults = [
//       ...json_data1.results,
//       ...json_data2.results,
//       ...json_data3.results,
//     ];

//     dispact(setMovies(json_data1.results));
//   };

//   useEffect(() => {
//     // fetchData();
//   }, []);
// };

// export default useFillMovieStoreData;
