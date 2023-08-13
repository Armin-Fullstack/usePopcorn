import { NumResultsProps } from "../Type";

export default function NumResults({ movies }: NumResultsProps): JSX.Element {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
