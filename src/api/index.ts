import axios from "axios";

const apikey = "157f34ed";
const omdbapiLink = "http://www.omdbapi.com";

const movieAPI = {
    fetchMovies: (s: string) => axios
    .get(omdbapiLink, {
        params: {apikey, s}
    }),
    fetchMoreMovies: (s: string, page: number) => axios
    .get(omdbapiLink, {
        params: {apikey, s, page}
    })
}

export default movieAPI;