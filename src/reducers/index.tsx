import { combineReducers } from 'redux';
import movies from '../features/movies/slice'
import { MovieState } from '../features/movies/types';

export interface RootState {
    movies: MovieState;
}

const rootReducer = combineReducers<RootState>({
    movies
})

export default rootReducer;