import React, { useContext } from "react";
import ThemeContext from "contexts/ThemeContext";

const PlaylistItem = ({ playlist }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const playlistLink = `https://www.youtube.com/playlist?list=${playlist.playlistId}`;
  return (
    <div className="w-48 h-32 xl:w-64 xl:h-40 2xl:w-80 2xl:h-44">
      <div className="relative h-full">
        <a href={playlistLink} target="_blank" rel="noopener noreferrer">
          <img
            className="rounded w-full h-full"
            src={playlist.playlistThumbnail}
            alt={playlist.playlistDesc}
          />
        </a>
      </div>

      <div className="flex justify-between">
        <p
          className={`overflow-ellipsis overflow-hidden whitespace-nowrap font-medium ${
            isDarkMode ? "text-white" : "text-gray-700"
          }`}
        >
          {playlist.playlistTitle}
        </p>
        <p
          className={`overflow-ellipsis overflow-hidden whitespace-nowrap font-medium ${
            isDarkMode ? "text-white" : "text-gray-700"
          }`}
        >
          {playlist.itemCount} videos
        </p>
      </div>
    </div>
  );
};

export default PlaylistItem;
