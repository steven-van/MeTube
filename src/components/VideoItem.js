import React, { useContext, useState } from "react";
import ThemeContext from "contexts/ThemeContext";
import Modal from "components/UI/Modal";
import Youtube from "react-youtube";

const VideoItem = ({ video, videoStats }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isShown, setShown] = useState(false);
  return (
    <>
      <div className="w-80 h-44 xl:w-96 xl:h-56">
        <img
          onClick={() => setShown(true)}
          className="cursor-pointer rounded-lg w-full h-full"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
        <div>
          <p
            className={`overflow-ellipsis overflow-hidden whitespace-nowrap font-medium ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            {video.snippet.title}
          </p>
          <div className="flex justify-between">
            <p
              className={`font-medium ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {video.snippet.channelTitle}
            </p>
            <p
              className={`font-medium ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {videoStats.statistics.viewCount} views
            </p>
          </div>
        </div>
      </div>
      {isShown && (
        <Modal setShown={setShown}>
          <Youtube videoId={video.id.videoId} />
        </Modal>
      )}
    </>
  );
};

export default VideoItem;
