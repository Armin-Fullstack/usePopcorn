import { MainProps } from "../Type";

export default function Main({ children }: MainProps): JSX.Element {
  return <main className="main">{children}</main>;
}
