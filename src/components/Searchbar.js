import React, { useContext, useState } from "react";
import LensIcon from "components/UI/LensIcon";
import ThemeContext from "contexts/ThemeContext";
import youtube from "apis/youtube";
import VideoContext from "contexts/VideoContext";

const Searchbar = () => {
  const { setState } = useContext(VideoContext);
  const [inputText, setInputText] = useState(null);

  const handleSubmit = async () => {
    const response = await youtube.get("/search", {
      params: {
        q: inputText,
      },
    });

    setState({ videos: response.data.items });
    console.log(response.data.items);
  };

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
        onChange={(e) => setInputText(e.target.value)}
      />
      <div onClick={handleSubmit} className="w-5 cursor-pointer">
        <LensIcon />
      </div>
    </div>
  );
};

export default Searchbar;
