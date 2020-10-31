import axios from "axios";

const apikey = "cad7335b";
const omdbApiLink = "http://www.omdbapi.com";

const movieAPI = {
  fetchMovies: (s: string) =>
    axios.get(omdbApiLink, {
      params: { apikey, s },
    }),
  fetchMoreMovies: (s: string, page: number) =>
    axios.get(omdbApiLink, {
      params: { apikey, s, page },
    }),
  fetchMovieDetails: (i: string) =>
    axios.get(omdbApiLink, {
      params: { apikey, i, plot: "full" },
    }),
};

export default movieAPI;
