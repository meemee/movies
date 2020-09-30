import { RootState } from "../../reducers";

export const selectMovieDetails = () => (state: RootState) => state.movieDetails.data
export const selectMovieLoading = () => (state: RootState) => state.movieDetails.loading