export interface MovieState {
  data: any;
  loading: boolean;
  error: null;
  page: number;
  currentSearch: string;
  totalResults: number;
}

export interface MoviePoster {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series" | "episode";
  Poster: string;
}

export interface FetchMoviesResponse {
  Response: string;
  Search: MoviePoster[];
  totalResults: string;
}
