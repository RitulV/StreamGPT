// ...existing code...
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./configureStore";
import { TMDB_GET_OPTIONS } from "../assets/constants";

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieState = {
  data: MovieDetails[];
  state: "loading" | "idle" | "completed";
  errorMessage: string | undefined;
};

export const initialState: MovieState = {
  data: [],
  state: "idle",
  errorMessage: "",
} satisfies MovieState as MovieState;

export const fetchMovieDetails = createAsyncThunk("fetchMovies", async () => {
  const [data1, data2, data3] = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      TMDB_GET_OPTIONS
    ).then((res) => res.json()),
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
      TMDB_GET_OPTIONS
    ).then((res) => res.json()),
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      TMDB_GET_OPTIONS
    ).then((res) => res.json()),
  ]);

  return [...data1.results, ...data2.results, ...data3.results];
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.state = "loading";
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.state = "completed";
        state.data = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.state = "idle";
        state.errorMessage = action.error.message;
      });
  },
});

// export const { setMovies, addMovie, clearMovies } = movieSlice.actions;
export const selectMovie = (state: RootState) => state.movies.data;
export default movieSlice.reducer;
