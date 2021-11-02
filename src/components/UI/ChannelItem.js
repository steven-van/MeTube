import React, { useContext } from "react";
import ThemeContext from "contexts/ThemeContext";

const ChannelItem = ({ channel }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="flex flex-col justify-center items-center space-y-2 w-32 h-32 xl:w-64 xl:h-64">
      <img
        className="rounded-full w-full h-full"
        src={channel.snippet.thumbnails.medium.url}
        alt={channel.snippet.description}
      />

      <p
        className={`font-medium ${
          isDarkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {channel.snippet.channelTitle}
      </p>
    </div>
  );
};

export default ChannelItem;
