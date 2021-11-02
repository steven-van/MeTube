import React, { useContext } from "react";
import ThemeContext from "contexts/ThemeContext";

const VideoItem = ({ video, videoStats }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="w-80 h-44 xl:w-96 xl:h-56">
      <img
        className="rounded w-full h-full"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />

      <p
        className={`overflow-ellipsis overflow-hidden whitespace-nowrap font-medium ${
          isDarkMode ? "text-white" : "text-gray-700"
        }`}
      >
        {video.snippet.title}
      </p>
    </div>
  );
};

export default VideoItem;
