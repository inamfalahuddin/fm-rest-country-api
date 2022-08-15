import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import CountryDetail from "./CountryDetail";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-light-gray");
    document.body.classList.add("dark:bg-very-dark-blue-100");
    document.body.classList.add("duration-200");
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-country/:code" element={<CountryDetail />} />
      </Routes>
    </>
  );
}

export default App;
