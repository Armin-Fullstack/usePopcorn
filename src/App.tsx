import { useState } from "react";
import { useMovies } from "./custom hook/useMovies";
import { useLocalStorageState } from "./custom hook/useLocalStorageState";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Main from "./components/Main";
import Box from "./components/Box";
import Loader from "./components/Loader";
import MovieList from "./components/MovieList";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList";

import { MovieInterface } from "./Type";

function App(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const { movies, isLoading, error } = useMovies(query);
  // const [watched, setWatched] = useState(function () {
  //   const storedData = localStorage.getItem("watched");
  //   return JSON.parse(storedData);
  // });
  const [watched, setWatched] = useLocalStorageState<MovieInterface[], string>(
    [],
    "watched"
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // useEffect(() => {
  //   localStorage.setItem("watched", JSON.stringify(watched));
  // }, [watched]);

  function handleSelectMovie(id: string): void {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }
  function handleCloseDetails(): void {
    setSelectedId(null);
  }
  function handleWatchedMovie(movie: MovieInterface): void {
    setWatched((watched) => [...watched, movie]);
  }
  function handleDeleteWatched(id: string): void {
    setWatched((watched) => watched.filter((element) => element.imdbID !== id));
  }
  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseDetails={handleCloseDetails}
              onWatchedMovie={handleWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

// function WatchedBox(): JSX.Element {
//   const [watched, setWatched] = useState(tempWatchedData);
//   const [isOpen2, setIsOpen2] = useState(true);

//   return (
//     <div className="box">
//       <button
//         className="btn-toggle"
//         onClick={() => setIsOpen2((open) => !open)}
//       >
//         {isOpen2 ? "–" : "+"}
//       </button>
//       {isOpen2 && (
//         <>
//           <WatchedSummary watched={watched} />
//           <WatchedMoviesList watched={watched} />
//         </>
//       )}
//     </div>
//   );
// } // statefull component

export default App;
