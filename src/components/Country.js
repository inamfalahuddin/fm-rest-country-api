import React from "react";

function Country({ name, flags, population, region, capital, delay }) {
  return (
    <div
      className="bg-white dark:bg-dark-blue duration-200 rounded-md shadow-md overflow-hidden cursor-pointer animate-fade-in opacity-0"
      style={{ animationDelay: delay / 8.5 + "s" }}
    >
      <div className={`w-full lg:h-36 h-auto overflow-hidden object-cover`}>
        <img
          className="object-cover w-full h-full"
          src={flags.png}
          alt="flag"
        />
      </div>
      <div className="p-4 dark:text-white">
        <h4 className="font-bold text-lg">{name}</h4>

        <div className="text-sm mt-4 leading-6">
          <p>
            <b>Population:</b> {population.toLocaleString("en")}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Country;
