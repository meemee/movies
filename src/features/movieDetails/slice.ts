import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import movieAPI from '../../api'
import { FetchMovieDetailsResponse, MovieDetailsState } from './types'

const initialState: MovieDetailsState = {
  data: {
      Title: "",
      Year: "",
      Type: "",
      Poster: "",
      Plot: "",
      Writer: "",
      Director: "",
      Actors: "",
      imdbRating: "",
      Metascore: "",
      imdbVotes: "",
      Ratings: []
  },
  loading: true,
  error: null
}

export const fetchMovieDetails: any = createAsyncThunk(
    'movieDetails/fetchMovie',
    async (id: string) => {
      const response: AxiosResponse<FetchMovieDetailsResponse> = await movieAPI.fetchMovieDetails(id)
      return response.data
    }
  )

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovieDetails.pending]: (state) => {
        state.loading = true;
    },
    [fetchMovieDetails.fulfilled]: (state, action) => {
        state.loading = false;
        state.data = action.payload;
    },
    [fetchMovieDetails.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error
    }
  }
})

// export const {} = movieDetailsSlice.actions

export default movieDetailsSlice.reducer