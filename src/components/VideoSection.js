import React, { useContext } from "react";
import VideoItem from "components/VideoItem";
import VideoContext from "contexts/VideoContext";

const VideoSection = () => {
  const { state } = useContext(VideoContext);
  const renderedVideos = state.videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} />;
  });

  return (
    <div className="flex-1 flex flex-wrap justify-start ml-10 flex-row space-x-10 space-y-12 overflow-y-auto">
      <div />
      {renderedVideos}
    </div>
  );
};

export default VideoSection;
