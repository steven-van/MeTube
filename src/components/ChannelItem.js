import React, { useContext } from "react";
import ThemeContext from "contexts/ThemeContext";

const ChannelItem = ({ channel, channelStats }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const channelLink = `https://www.youtube.com/channel/${channel.id.channelId}`;
  return (
    <div className="flex flex-col justify-center items-center space-y-2 w-24 h-24 xl:w-48 xl:h-48">
      <a href={channelLink} target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-full w-full h-full"
          src={channel.snippet.thumbnails.medium.url}
          alt={channel.snippet.description}
        />
      </a>
      <div className="text-center">
        <p
          className={`font-medium overflow-ellipsis overflow-hidden whitespace-nowrap ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {channel.snippet.channelTitle}
        </p>
        <p
          className={`font-medium overflow-ellipsis overflow-hidden whitespace-nowrap ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {channelStats.statistics.subscriberCount} subscribers
        </p>
      </div>
    </div>
  );
};

export default ChannelItem;
