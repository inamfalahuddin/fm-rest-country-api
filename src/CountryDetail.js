import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./components/Loading";
import Tag from "./components/Tag";

function CountryDetail() {
  const { code } = useParams();
  const [country, setCountry] = useState();

  const fetchCountry = async () => {
    const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);
    const data = await response.json();

    setCountry(data);
  };

  useEffect(() => {
    try {
      fetchCountry();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      {country === undefined ? (
        <Loading />
      ) : (
        <main className="container mx-auto py-10 px-5 mt-5">
          <Link to={"/"}>
            <button className="bg-white dark:bg-dark-blue dark:text-white duration-200 shadow-md rounded py-1.5 px-5 w-40 cursor-pointer hover:shadow-none transition-all">
              <span>Back</span>
            </button>
          </Link>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-7 gap-14 lg:gap-24 items-center">
            <div className="lg:col-span-3">
              <div className="w-full h-80 rounded-sm overflow-hidden flex animate-fade-in">
                <img
                  className="h-auto lg:h-full w-full"
                  src={country.flags.png}
                  alt={country.name}
                />
              </div>
            </div>
            <div className="lg:col-span-4 place-content-center">
              <div>
                <h2 className="font-bold text-2xl mb-5 lg:mb-10 animate-fade-in dark:text-white duration-200">
                  {country.name}
                </h2>
                <div className="grid lg:grid-cols-2 mb-10 leading-8 animate-fade-in delay-700">
                  <span className="dark:text-white duration-200">
                    <p>
                      <b>Native Name: </b> {country.nativeName}
                    </p>
                    <p>
                      <b>Population: </b>{" "}
                      {country.population.toLocaleString("in")}
                    </p>

                    <p>
                      <b>Region: </b> {country.region}
                    </p>

                    <p>
                      <b>Sub Region: </b> {country.subregion}
                    </p>
                    <p>
                      <b>Capital: </b> {country.capital}
                    </p>
                  </span>
                  <span className="dark:text-white duration-200">
                    <p>
                      <b>Top Level Domain: </b> {country.topLevelDomain}
                    </p>
                    <p>
                      <b>Currencies: </b> {country.region}
                    </p>
                    <p>
                      <b>Language: </b>{" "}
                      {country.languages.map(
                        (language) => language.name + ", "
                      )}
                    </p>
                  </span>
                </div>
                <div className="lg:flex items-center gap-2 dark:text-white duration-200">
                  <b>Border Countries: </b>
                  <div className="flex flex-wrap items-center gap-2 mt-5 lg:mt-0">
                    {country.borders === undefined
                      ? "None"
                      : country.borders.map((border, index) => {
                          return <Tag tag={border} key={index} />;
                        })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
export default CountryDetail;
