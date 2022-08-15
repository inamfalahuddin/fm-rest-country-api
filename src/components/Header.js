import React, { useEffect, useState } from "react";
import DarkModeIcon from "../img/moon-outline.svg";
import LightModeIcon from "../img/moon-sharp.svg";

import SearchIconLight from "../img/search-white.svg";
import SearchIconDark from "../img/search-dark.svg";

function Header() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);

    if (theme) {
      localStorage.setItem("theme", JSON.stringify("dark"));
      document.getElementById("search-icon").src = SearchIconLight;
    } else {
      localStorage.setItem("theme", JSON.stringify("light"));
      document.getElementById("search-icon").src = SearchIconDark;
    }
  };

  useEffect(() => {
    if (isDarkMode()) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const isDarkMode = () => {
    return JSON.parse(localStorage.getItem("theme")) === "dark";
  };

  return (
    <div className="header shadow bg-white px-5 dark:bg-dark-blue dark:text-white duration-200">
      <div className="container mx-auto flex justify-between items-center py-3">
        <h3 className="text-xl font-bold">Where in the word ?</h3>
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-40 transition-all"
          onClick={toggleTheme}
        >
          <img
            className="w-4 h-4"
            src={isDarkMode() ? LightModeIcon : DarkModeIcon}
            alt="dark-mode"
          />
          <h4 className="font-bold text-sm">Dark Mode</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
