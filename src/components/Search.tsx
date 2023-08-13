import { useRef } from "react";
import { SearchProps } from "../Type";
import { useKey } from "../custom hook/useKey";

export default function Search({ query, setQuery }: SearchProps): JSX.Element {
  // useEffect(() => {
  //   const inputElement = document.querySelector(".search");
  //   console.log(inputElement);
  //   inputElement.focus();
  // }, []);
  const inputElement = useRef<HTMLInputElement>(null); // when we work with DOM Element it should be null

  useKey("Enter", () => {
    if (document.activeElement === inputElement.current) return;
    inputElement.current?.focus();
    setQuery("");
  });

  // useEffect(() => {
  //   function callback(e) {
  //     if (document.activeElement === inputElement.current) return;
  //     if (e.code === "Enter") {
  //       inputElement.current.focus();
  //       setQuery("");
  //     }
  //   }
  //   document.addEventListener("keydown", callback);
  //   return () => document.addEventListener("keydown", callback);
  // }, [setQuery]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
