import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand" to="/">NewsApp</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">All News</Link>
        <Link className="nav-link" to="/top-headlines">Top Headlines</Link>
        <Link className="nav-link" to="/country-news">Country</Link>
      </div>
      <DarkModeToggle />
    </nav>
  );
}