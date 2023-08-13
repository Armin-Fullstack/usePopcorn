export interface MovieInterface {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  imdbRating: number;
  runtime: number;
  userRating: number;
  countRatingDecions: number;
  type?: string;
}

export interface NavBarProps {
  children: React.ReactNode;
}

export interface MainProps {
  children: React.ReactNode;
}

export interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface NumResultsProps {
  map?: any;
  movies: FetchMovie[];
}

export interface BoxProps {
  children: React.ReactNode;
}

export interface MoviesData {
  movies: FetchMovie[];
  isLoading: boolean;
  error: string;
}

export interface MovieListProps {
  movies: FetchMovie[];
  onSelectMovie: (id: string) => void;
}

export interface FetchMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MovieProps {
  movie: FetchMovie;
  onSelectMovie: (id: string) => void;
}

export interface WatchedMoviesListProps {
  watched: MovieInterface[];
  onDeleteWatched: (id: string) => void;
}

export interface WatchedMovieProps {
  movie: MovieInterface;
  onDeleteWatched: (id: string) => void;
}

export interface WatchedSummaryProps {
  watched: MovieInterface[];
}

export interface ErrorMessageProps {
  message: string;
}

export interface MovieDetailsProps {
  selectedId: string;
  onCloseDetails: () => void;
  onWatchedMovie: (arg0: MovieInterface) => void;
  watched: MovieInterface[];
}

export interface MovieDetailsInterface {
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbRating: string;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
}

export interface StarRatingProps {
  maxRating?: number;
  color?: string;
  size?: number;
  message?: string[];
  defaultRating?: number;
  onSetRating: React.Dispatch<React.SetStateAction<number>>;
}

export interface StarProps {
  onRate: () => void;
  full: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
  color: string;
  size: number;
}
