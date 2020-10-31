export interface MovieDetailsState {
  data: FetchMovieDetailsResponse;
  loading: boolean;
  error: any;
}

type Rating = {
  Source: string;
  Value: string;
};

export interface FetchMovieDetailsResponse {
  Title: string;
  Year: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  Type: string;
  Ratings: Rating[];
}
