import { RootState } from "../../reducers";

export const selectMovies = () => (state: RootState) => state.movies;
