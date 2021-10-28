import React, { useContext } from "react";
import CentralPayLogo from "components/UI/CentralPayLogo";
import Searchbar from "components/Searchbar";
import FilterButton from "components/FilterButton";
import OrderByButton from "components/OrderByButton";
import DarkModeToggle from "react-dark-mode-toggle";
import ThemeContext from "contexts/ThemeContext";

const Sidebar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`relative h-full w-2/5 lg:w-1/5 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      } flex flex-col items-center pt-5`}
    >
      <div className="w-32 lg:w-40 2xl:w-48">
        <CentralPayLogo />
      </div>
      <div className="mt-12 w-4/5">
        <Searchbar />
      </div>
      <div className="mt-12 space-y-4 w-3/5 2xl:w-2/5 ">
        <FilterButton />
        <OrderByButton />
      </div>
      <div className="flex absolute bottom-0 pb-4">
        <DarkModeToggle
          onChange={() => {
            setIsDarkMode(!isDarkMode);
          }}
          checked={isDarkMode}
          className=" focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Sidebar;
