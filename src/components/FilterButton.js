import React, { useContext } from "react";
import FilterIcon from "components/UI/FilterIcon";
import ThemeContext from "contexts/ThemeContext";

const FilterButton = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`flex justify-center items-center ${
        isDarkMode ? "bg-gray-800" : "bg-gray-300"
      } px-2 py-2 rounded-xl space-x-2`}
    >
      <div className="w-5">
        <FilterIcon />
      </div>
      <p
        className={`${isDarkMode ? "text-white" : "text-gray-500"} font-medium`}
      >
        Filter
      </p>
    </div>
  );
};

export default FilterButton;
