import React, { useEffect, useState } from "react";
import Country from "./components/Country";
import NotFound from "./components/NotFound";
import Loading from "./components/Loading";
import { Link } from "react-router-dom";
import SearchIconLight from "./img/search-white.svg";
import SearchIconDark from "./img/search-dark.svg";

function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetchCountries();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchCountries = async () => {
    setLoading(true);
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();

    setCountries(data);
    setLoading(false);
  };

  const searchCountries = (event) => {
    const searchValue = event.target.value;

    if (searchValue.trim()) {
      const fetchSearch = async () => {
        setLoading(true);
        const response = await fetch(
          `https://restcountries.com/v2/name/${searchValue}`
        );
        const data = await response.json();

        setCountries(data);
        setLoading(false);
      };

      try {
        fetchSearch();
      } catch (err) {
        console.log(err);
      }
    } else {
      fetchCountries();
    }
  };

  const selectRegion = (event) => {
    const selectValue = event.target.value;

    if (selectValue.trim()) {
      const fetchSelect = async () => {
        setLoading(true);
        const response = await fetch(
          `https://restcountries.com/v2/region/${selectValue}`
        );
        const data = await response.json();

        if (selectValue === "all") {
          try {
            fetchCountries();
          } catch (err) {
            console.log(err);
          }
          return;
        }

        setCountries(data);
        setLoading(false);
      };

      try {
        fetchSelect();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <main className="container mx-auto py-10 px-5">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
        {/* input search */}
        <div className="bg-white py-1.5 px-5 rounded-md shadow-sm w-full lg:w-1/3 flex items-center gap-3 hover:lg:w-1/2 transition-all dark:bg-dark-blue dark:text-white duration-200">
          <img
            id="search-icon"
            className="search-icon w-5 h-5 opacity-40"
            src={
              JSON.parse(localStorage.getItem("theme")) === "dark"
                ? SearchIconLight
                : SearchIconDark
            }
            alt={SearchIconLight}
          />
          <input
            className="text-sm w-full py-1 border-none focus:outline-none bg-transparent"
            type="text"
            placeholder="Search for a country ..."
            onChange={searchCountries}
          />
        </div>
        {/* input filter */}
        <div className="rounded-md py-1.5 bg-white dark:bg-dark-blue dark:text-white duration-200 pl-2 pr-4 shadow-sm">
          <select
            className="bg-transparent py-1 focus:outline-none border-0 px-4 dark:bg-dark-blue duration-300"
            onChange={selectRegion}
          >
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 mt-14">
        {loading ? (
          <Loading />
        ) : countries.status === 404 ? (
          <NotFound />
        ) : (
          countries.map((country, index) => {
            return (
              <Link to={`/detail-country/${country.alpha3Code}`} key={index}>
                <Country
                  // title={country.name.common}
                  // flag={country.flags.png}
                  // population={country.population.toLocaleString("en")}
                  key={index}
                  delay={index}
                  {...country}
                />
              </Link>
            );
          })
        )}
      </div>
    </main>
  );
}

export default Home;
