import React, { useContext } from "react";
import VideoItem from "components/VideoItem";
import ContentContext from "contexts/ContentContext";
import ChannelItem from "components/ChannelItem";
import PlaylistItem from "components/PlaylistItem";

const ContentSection = () => {
  const { contents, contentType } = useContext(ContentContext);

  const renderContents = (type = "video") => {
    let renderedContents = [];
    switch (type) {
      case "video":
        renderedContents = contents.map((content) => {
          return <VideoItem key={content.videoId} video={content} />;
        });
        return renderedContents;

      case "channel":
        renderedContents = contents.map((content) => {
          return <ChannelItem key={content.channelId} channel={content} />;
        });
        return renderedContents;

      case "playlist":
        renderedContents = contents.map((content) => {
          return <PlaylistItem key={content.playlistId} playlist={content} />;
        });
        return renderedContents;
      default:
    }
  };

  return (
    <div className="flex-1 flex flex-wrap justify-start flex-row space-x-10 space-y-4 overflow-y-auto">
      <div />
      {renderContents(contentType)}
    </div>
  );
};

export default ContentSection;
