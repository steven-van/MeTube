import React, { useContext } from "react";
import ThemeContext from "contexts/ThemeContext";

const PlaylistItem = ({ video }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const playlistLink = `https://www.youtube.com/playlist?list=${video.id.playlistId}`;
  return (
    <div className="w-48 h-32 xl:w-64 xl:h-40 2xl:w-80 2xl:h-44">
      <a href={playlistLink} target="_blank" rel="noopener noreferrer">
        <img
          className="rounded w-full h-full"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
      </a>

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

export default PlaylistItem;
