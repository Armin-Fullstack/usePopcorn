import { MovieDetailsInterface, MovieDetailsProps } from "../Type";
import { useState, useRef, useEffect } from "react";
import { useKey } from "../custom hook/useKey";
import Loader from "./Loader";
import StarRating from "./StarRating";

const KEY = "a8501f65";

export default function MovieDetails({
  selectedId,
  onCloseDetails,
  onWatchedMovie,
  watched,
}: MovieDetailsProps) {
  const [movie, setMovie] = useState<MovieDetailsInterface>({
    Title: "",
    Year: "",
    Poster: "",
    Runtime: "",
    imdbRating: "",
    Plot: "",
    Released: "",
    Actors: "",
    Director: "",
    Genre: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userRating, setUserRating] = useState<number>(0);

  const countRef = useRef<number>(0);

  const isWatched = watched
    .map((element) => element.imdbID)
    .includes(selectedId);
  const watchedUserRating = watched.find(
    (element) => element.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  }: MovieDetailsInterface = movie;

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      // we recived some data(object) and we want to bring them and show them in UI(visible part in this component)
      // so we need a state
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;

    return function () {
      document.title = "usePopcorn";
    };
  }, [title]);

  useKey("Escape", onCloseDetails);
  // useEffect(() => {
  //   function callback(e) {
  //     if (e.code === "Escape") {
  //       onCloseDetails();
  //     }
  //   }
  //   document.addEventListener("keydown", callback);
  //   return function () {
  //     document.removeEventListener("keydown", callback);
  //   };
  // }, [onCloseDetails]);

  useEffect(() => {
    if (userRating) countRef.current = countRef.current + 1;
  }, [userRating]);
  function handleAddMovie() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split("")[0]),
      userRating,
      countRatingDecions: countRef.current,
    };
    onWatchedMovie(newWatchedMovie);
    onCloseDetails();
  }

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <img src={poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span> {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />

                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAddMovie}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated this movie {watchedUserRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Director by {director}</p>
          </section>
          <button className="btn-back" onClick={onCloseDetails}>
            &larr;
          </button>
        </>
      )}
    </div>
  );
}
