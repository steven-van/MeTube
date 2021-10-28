import React from "react";

const Searchbar = () => {
  return (
    <input
      className={
        "bg-gray-800 text-white appearance-none rounded-xl focus:outline-none w-full py-2 px-3 font-medium"
      }
      placeholder={"Search"}
    />
  );
};

export default Searchbar;
