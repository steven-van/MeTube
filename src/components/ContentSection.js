import React, { useContext } from "react";
import VideoItem from "components/VideoItem";
import ContentContext from "contexts/ContentContext";
import ChannelItem from "components/ChannelItem";
import PlaylistItem from "components/PlaylistItem";

const ContentSection = () => {
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
              videoStats={state.contentStats[i]}
            />
          );
        }
        return contents;
      case "channel":
        contents = [];
        for (let i = 0; i < state.contents.length; i += 1) {
          contents.push(
            <ChannelItem
              key={state.contents[i].id.channelId}
              channel={state.contents[i]}
              channelStats={state.contentStats[i]}
            />
          );
        }
        return contents;
      case "playlist":
        contents = [];
        for (let i = 0; i < state.contents.length; i += 1) {
          contents.push(
            <PlaylistItem
              key={state.contents[i].id.playListId}
              video={state.contents[i]}
            />
          );
        }
        return contents;
      default:
        return contents;
    }
  };

  return (
    <div className="flex-1 flex flex-wrap justify-start items-center flex-row space-x-10 space-y-16 overflow-y-auto">
      <div />
      {renderContents(contentType)}
    </div>
  );
};

export default ContentSection;
