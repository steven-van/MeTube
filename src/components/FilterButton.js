import React, { useContext, useState, useEffect, useRef } from "react";
import FilterIcon from "components/UI/FilterIcon";
import ThemeContext from "contexts/ThemeContext";
import ContentContext from "contexts/ContentContext";
import SearchContext from "contexts/SearchContext";

const FilterButton = React.forwardRef(({}, ref) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { getContents, contentType, setContentType } =
    useContext(ContentContext);
  const { searchTerm } = useContext(SearchContext);
  const [isDropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!isDropdown);
  };

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdown]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={ref}
        onClick={handleClick}
        className={`flex w-full justify-center items-center ${
          isDarkMode ? "bg-gray-800" : "bg-gray-300"
        } px-2 py-2 rounded-xl space-x-2`}
      >
        <div className="w-5">
          <FilterIcon />
        </div>
        <p
          className={`${
            isDarkMode ? "text-white" : "text-gray-500"
          } font-medium`}
        >
          Filter
        </p>
      </button>
      {isDropdown && (
        <div
          className={`w-full mt-1 rounded-md absolute z-30 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-300"
          }`}
        >
          <div
            className={`${
              isDarkMode ? "text-white" : "text-gray-500"
            } font-medium`}
          >
            <button
              onClick={() =>
                contentType !== "video"
                  ? (setContentType("video"),
                    getContents(searchTerm, "video", setDropdown(false)))
                  : ""
              }
              className={`block w-full text-left px-4 py-1 rounded-t-md hover:bg-gray-600 ${
                isDarkMode ? "hover:bg-gray-600" : "hover:bg-red-200"
              }`}
            >
              Videos
            </button>
            <button
              onClick={() =>
                contentType !== "channel" &&
                (setContentType("channel"),
                getContents(searchTerm, "channel"),
                setDropdown(false))
              }
              className={`block w-full text-left px-4 py-1 hover:bg-gray-600 ${
                isDarkMode ? "hover:bg-gray-600" : "hover:bg-red-200"
              }`}
            >
              Channels
            </button>
            <button
              onClick={() =>
                contentType !== "playlist" &&
                (setContentType("playlist"),
                getContents(searchTerm, "playlist"),
                setDropdown(false))
              }
              className={`block w-full text-left px-4 py-1 pb-1 hover:bg-gray-600 ${
                isDarkMode ? "hover:bg-gray-600" : "hover:bg-red-200"
              }`}
            >
              Playlists
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default FilterButton;
