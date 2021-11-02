import React, { useContext } from "react";
import VideoItem from "components/UI/VideoItem";
import ContentContext from "contexts/ContentContext";
import ChannelItem from "components/UI/ChannelItem";
import PlaylistItem from "components/UI/PlaylistItem";

const VideoSection = () => {
  const { state, contentType } = useContext(ContentContext);

  const renderContents = (type = "video") => {
    let contents = [];

    switch (type) {
      case "video":
        contents = [];
        for (let i = 0; i < state.contents.length; i += 1) {
          contents.push(
            <VideoItem
              key={state.contents[i].id.videoId}
              video={state.contents[i]}
              videoStats={state.videosStats[i]}
            />
          );
        }
        return contents;
      case "channel":
        contents = [];
        for (let i = 0; i < state.contents.length; i += 1) {
          contents.push(
            <ChannelItem
              key={state.contents[i].snippet.channelId}
              channel={state.contents[i]}
            />
          );
        }
        return contents;
      case "playlist":
        contents = [];
        for (let i = 0; i < state.contents.length; i += 1) {
          contents.push(
            <PlaylistItem
              key={state.contents[i].id.videoId}
              video={state.contents[i]}
              videoStats={state.videosStats[i]}
            />
          );
        }
        return contents;
      default:
    }
  };

  return (
    <div className="flex-1 flex flex-wrap justify-start items-center flex-row space-x-10 space-y-16 overflow-y-auto">
      <div />
      {renderContents(contentType)}
    </div>
  );
};

export default VideoSection;
