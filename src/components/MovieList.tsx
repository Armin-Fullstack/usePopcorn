import { FetchMovie, MovieListProps } from "../Type";
import Movie from "./Movie";

export default function MovieList({
  movies,
  onSelectMovie,
}: MovieListProps): JSX.Element {
  return (
    <ul className="list list-movies">
      {movies.map((movie: FetchMovie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
