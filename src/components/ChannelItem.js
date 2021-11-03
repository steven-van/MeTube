import React, { useContext } from "react";
import ThemeContext from "contexts/ThemeContext";

const ChannelItem = ({ channel }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const channelLink = `https://www.youtube.com/channel/${channel.channelId}`;
  return (
    <div className="flex flex-col justify-center items-center space-y-2 w-44 h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52">
      <a
        className="flex-1 overflow-auto"
        href={channelLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="rounded-full w-full h-full"
          src={channel.channelThumbnail}
          alt={channel.channelDesc}
        />
      </a>
      <div className="flex flex-col items-center">
        <p
          className={`font-medium overflow-ellipsis overflow-hidden whitespace-nowrap ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {channel.channelTitle}
        </p>

        <p
          className={`font-medium overflow-ellipsis overflow-hidden whitespace-nowrap ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {channel.subscriberCount} subscribers
        </p>
        <p
          className={`font-medium overflow-ellipsis overflow-hidden whitespace-nowrap ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {channel.videoCount} videos
        </p>
      </div>
    </div>
  );
};

export default ChannelItem;
