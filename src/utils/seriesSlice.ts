import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./configureStore";
import { TMDB_GET_OPTIONS } from "../assets/constants";

export type SeriesDetails = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  original_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type SeriesState = {
  data: SeriesDetails[];
  state: "loading" | "idle" | "completed";
  errorMessage: string | undefined;
};

const initialState: SeriesState = {
  data: [],
  state: "idle",
  errorMessage: "",
} satisfies SeriesState as SeriesState;

export const fetchSeriesDetails = createAsyncThunk("fetchSeries", async () => {
  const [data1, data2] = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      TMDB_GET_OPTIONS
    ).then((res) => res.json()),
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      TMDB_GET_OPTIONS
    ).then((res) => res.json()),
  ]);

  return [...data1.results, ...data2.results];
});

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeriesDetails.pending, (state) => {
        state.state = "loading";
      })
      .addCase(fetchSeriesDetails.fulfilled, (state, action) => {
        state.state = "completed";
        state.data = action.payload;
      })
      .addCase(fetchSeriesDetails.rejected, (state, action) => {
        state.state = "idle";
        state.errorMessage = action.error.message;
      });
  },
});

export const selectSeries = (state: RootState) => state.movies.data;
export default seriesSlice.reducer;
export { initialState as initialStateSeries };