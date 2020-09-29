import { RootState } from "../../reducers";

export const getMovies = () => (state: RootState) => state.movies;