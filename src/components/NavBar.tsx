import { NavBarProps } from "../Type";

export default function NavBar({ children }: NavBarProps): JSX.Element {
  return <nav className="nav-bar">{children}</nav>;
}
