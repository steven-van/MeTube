import React, { useContext } from "react";
import LensIcon from "components/UI/LensIcon";
import ThemeContext from "contexts/ThemeContext";

const Searchbar = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex justify-between items-center ${
        isDarkMode ? "bg-gray-800" : "bg-gray-300"
      } rounded-xl py-2 px-3`}
    >
      <input
        className={`w-full ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-500"
        }  appearance-none focus:outline-none font-medium`}
        placeholder={"Search..."}
      />
      <div className="w-5">
        <LensIcon />
      </div>
    </div>
  );
};

export default Searchbar;
