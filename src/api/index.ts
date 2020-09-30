import axios from "axios";

const apikey = "157f34ed";
const omdbApiLink = "http://www.omdbapi.com";

const movieAPI = {
    fetchMovies: (s: string) => axios
    .get(omdbApiLink, {
        params: {apikey, s}
    }),
    fetchMoreMovies: (s: string, page: number) => axios
    .get(omdbApiLink, {
        params: {apikey, s, page}
    }),
    fetchMovieDetails: (i: string) => axios
    .get(omdbApiLink, {
        params: {apikey, i, plot: "full"} 
    })
}

export default movieAPI;