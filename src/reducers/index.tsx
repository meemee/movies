import { combineReducers } from "redux";
import movieDetails from "../features/movieDetails/slice";
import { MovieDetailsState } from "../features/movieDetails/types";
import movies from "../features/movies/slice";
import { MovieState } from "../features/movies/types";

export interface RootState {
  movies: MovieState;
  movieDetails: MovieDetailsState;
}

const rootReducer = combineReducers<RootState>({
  movies,
  movieDetails,
});

export default rootReducer;
