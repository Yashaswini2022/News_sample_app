// src/App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllNews from "./pages/AllNews";
import TopHeadlines from "./pages/TopHeadlines";
import CountryNews from "./pages/CountryNews";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<AllNews />} />
            <Route path="/top-headlines" element={<TopHeadlines />} />
            <Route path="/country-news" element={<CountryNews />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
