import { useEffect, useState } from "react";
import { MovieInterface } from "../Type";
export function useLocalStorageState<
  T extends MovieInterface[],
  U extends string
>(initialState: T, key: U): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : initialState;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
