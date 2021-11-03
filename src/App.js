import React, { useState, useEffect } from "react";
import Sidebar from "components/Sidebar";
import ThemeContext from "contexts/ThemeContext";
import ContentContext from "contexts/ContentContext";
import ContentSection from "components/ContentSection";
import youtube from "apis/youtube";
import SearchContext from "contexts/SearchContext";

var timeOutDebounce = undefined;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const [contents, setContents] = useState([]);
  const [contentType, setContentType] = useState("video");
  const [searchTerm, setSearchTerm] = useState("");
  const getContents = async (searchTerm, type = "video") => {
    const responseSnippet = await youtube().get("/search", {
      params: {
        q: searchTerm,
        type: type,
      },
    });

    let contents = [];

    if (type === "video") {
      const videoIds = responseSnippet.data.items
        .map((item) => {
          return item.id.videoId;
        })
        .join(",");

      const responseStats = await youtube("statistics").get("videos", {
        params: {
          id: videoIds,
        },
      });

      for (let i = 0; i < responseSnippet.data.items.length; i++) {
        for (let j = 0; j < responseStats.data.items.length; j++) {
          if (
            responseSnippet.data.items[i].id.videoId ===
            responseStats.data.items[j].id
          ) {
            contents.push({
              videoId: responseSnippet.data.items[i].id.videoId,
              videoTitle: responseSnippet.data.items[i].snippet.title,
              videoThumbnail:
                responseSnippet.data.items[i].snippet.thumbnails.medium.url,
              publicationDate:
                responseSnippet.data.items[i].snippet.publishTime,
              videoDesc: responseSnippet.data.items[i].snippet.description,
              channelTitle: responseSnippet.data.items[i].snippet.channelTitle,
              viewCount: responseStats.data.items[j].statistics.viewCount,
              likeCount: responseStats.data.items[j].statistics.likeCount,
            });
          }
        }
      }
    }

    if (type === "channel") {
      const channelIds = responseSnippet.data.items
        .map((item) => {
          return item.id.channelId;
        })
        .join(",");

      const responseStats = await youtube("statistics").get("channels", {
        params: {
          id: channelIds,
        },
      });

      for (let i = 0; i < responseSnippet.data.items.length; i++) {
        for (let j = 0; j < responseStats.data.items.length; j++) {
          if (
            responseSnippet.data.items[i].id.channelId ===
            responseStats.data.items[j].id
          ) {
            contents.push({
              channelId: responseSnippet.data.items[i].id.channelId,
              channelTitle: responseSnippet.data.items[i].snippet.title,
              channelDesc: responseSnippet.data.items[i].snippet.description,
              channelThumbnail:
                responseSnippet.data.items[i].snippet.thumbnails.medium.url,
              subscriberCount:
                responseStats.data.items[j].statistics.subscriberCount,
              videoCount: responseStats.data.items[j].statistics.videoCount,
            });
          }
        }
      }
    }

    if (type === "playlist") {
      const playlistIds = responseSnippet.data.items
        .map((item) => {
          return item.id.playlistId;
        })
        .join(",");

      const responseContentDetails = await youtube("contentDetails").get(
        "playlists",
        {
          params: {
            id: playlistIds,
          },
        }
      );

      for (let i = 0; i < responseSnippet.data.items.length; i++) {
        for (let j = 0; j < responseContentDetails.data.items.length; j++) {
          if (
            responseSnippet.data.items[i].id.playlistId ===
            responseContentDetails.data.items[j].id
          ) {
            contents.push({
              playlistId: responseSnippet.data.items[i].id.playlistId,
              playlistTitle: responseSnippet.data.items[i].snippet.title,
              playlistDesc: responseSnippet.data.items[i].snippet.description,
              playlistThumbnail:
                responseSnippet.data.items[i].snippet.thumbnails.medium.url,
              itemCount:
                responseContentDetails.data.items[j].contentDetails.itemCount,
            });
          }
        }
      }
    }
    console.log(contents);
    setContents([...contents]);
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      if (timeOutDebounce !== undefined) {
        clearTimeout(timeOutDebounce);
      }

      timeOutDebounce = setTimeout(() => {
        getContents(searchTerm, contentType);
      }, 700);
    }
  }, [searchTerm, contentType]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div
        className={`flex flex-row h-screen ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <ContentContext.Provider
          value={{
            contents,
            setContents,

            contentType,
            setContentType,
          }}
        >
          <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            <Sidebar />
          </SearchContext.Provider>
          <ContentSection />
        </ContentContext.Provider>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
