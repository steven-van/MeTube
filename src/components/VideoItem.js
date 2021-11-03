import React, { useContext, useState } from "react";
import ThemeContext from "contexts/ThemeContext";
import Modal from "components/UI/Modal";
import Youtube from "react-youtube";

const VideoItem = ({ video }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isShown, setShown] = useState(false);
  return (
    <>
      <div className="w-48 h-32 xl:w-64 xl:h-40 2xl:w-80 2xl:h-44">
        <img
          onClick={() => setShown(true)}
          className="cursor-pointer rounded-lg w-full h-full"
          src={video.videoThumbnail}
          alt={video.videoDesc}
        />
        <div>
          <p
            className={`overflow-ellipsis overflow-hidden whitespace-nowrap font-medium ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            {video.videoTitle}
          </p>
          <div className="flex justify-between">
            <p
              className={`font-medium overflow-ellipsis overflow-hidden whitespace-nowrap ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {video.channelTitle}
            </p>
            <p
              className={`font-medium overflow-ellipsis overflow-hidden whitespace-nowrap ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {video.viewCount} views
            </p>
          </div>
        </div>
      </div>
      {isShown && (
        <Modal setShown={setShown}>
          <Youtube videoId={video.videoId} />
        </Modal>
      )}
    </>
  );
};

export default VideoItem;
