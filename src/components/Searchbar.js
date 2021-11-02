import React, { useContext } from "react";
import LensIcon from "components/UI/LensIcon";
import ThemeContext from "contexts/ThemeContext";
import ContentContext from "contexts/ContentContext";
import SearchContext from "contexts/SearchContext";

const Searchbar = () => {
  const { getContents, setContentType } = useContext(ContentContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

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
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div
        onClick={() =>
          searchTerm.trim() !== "" &&
          (setContentType("video"), getContents(searchTerm))
        }
        className="w-5 cursor-pointer"
      >
        <LensIcon />
      </div>
    </div>
  );
};

export default Searchbar;
