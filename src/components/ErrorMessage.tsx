import { ErrorMessageProps } from "../Type";

export default function ErrorMessage({
  message,
}: ErrorMessageProps): JSX.Element {
  return (
    <p className="error">
      <span>🛑</span> {message}
    </p>
  );
}
