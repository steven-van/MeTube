import React from "react";
import CentralPayLogo from "components/UI/CentralPayLogo/CentralPayLogo";
import Searchbar from "components/Searchbar/Searchbar";

const Sidebar = () => {
  return (
    <div className="h-full w-2/5 lg:w-1/5 bg-gray-900 flex flex-col items-center pt-5">
      <div className="w-32 lg:w-40 2xl:w-48">
        <CentralPayLogo />
      </div>
      <div className="mt-12 w-4/5">
        <Searchbar />
      </div>
    </div>
  );
};

export default Sidebar;
