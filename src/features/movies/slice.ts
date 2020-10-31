import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import movieAPI from "../../api";
import { FetchMoviesResponse, MovieState } from "./types";

const initialState: MovieState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  currentSearch: "",
  totalResults: 0,
};

export const fetchMovies: any = createAsyncThunk(
  "movie/fetchByTitle",
  async (search: string) => {
    const response: AxiosResponse<FetchMoviesResponse> = await movieAPI.fetchMovies(
      search
    );
    return response.data;
  }
);

export const fetchMoreMovies: any = createAsyncThunk(
  "movie/fetchMoreMovies",
  async (undefined, thunkApi) => {
    const state: any = thunkApi.getState();
    const response: AxiosResponse<FetchMoviesResponse> = await movieAPI.fetchMoreMovies(
      state.movies.currentSearch,
      state.movies.page + 1
    );
    return response.data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.loading = true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.Search;
      state.page = 1;
      state.currentSearch = action.meta.arg;
      state.totalResults = action.payload.totalResults;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [fetchMoreMovies.pending]: (state) => {
      state.loading = true;
    },
    [fetchMoreMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.page = state.page + 1;
      state.data = [...state.data, ...action.payload.Search];
    },
    [fetchMoreMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

// export const {} = movieSlice.actions

export default moviesSlice.reducer;
