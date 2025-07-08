import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <button onClick={() => setDarkMode(!darkMode)} className="btn btn-secondary">
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}