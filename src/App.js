import React, { useState } from "react";
import Sidebar from "components/Sidebar";
import ThemeContext from "contexts/ThemeContext";
import ContentContext from "contexts/ContentContext";
import ContentSection from "components/ContentSection";
import youtube from "apis/youtube";
import SearchContext from "contexts/SearchContext";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const [state, setState] = useState({ contents: [], contentStats: [] });
  const [contentType, setContentType] = useState("video");
  const [searchTerm, setSearchTerm] = useState("");

  const getContents = async (searchTerm, type = "video") => {
    const responseSnippet = await youtube().get("/search", {
      params: {
        q: searchTerm,
        type: type,
      },
    });

    console.log(responseSnippet.data.items);

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

      console.log(responseStats.data.items);

      setState((prevState) => ({
        ...prevState,
        contentStats: responseStats.data.items,
      }));
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

      console.log(responseStats.data.items);

      setState((prevState) => ({
        ...prevState,
        contentStats: responseStats.data.items,
      }));
    }

    setState((prevState) => ({
      ...prevState,
      contents: responseSnippet.data.items,
    }));
  };

  // const orderByViews = (videos) => {
  //   const sortedVideos = videos.sort((a, b) =>
  //     a.snippet.publishedTime > b.snippet.publishedTime ? 1 : -1
  //   );
  // };

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div
        className={`flex flex-row h-screen ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <ContentContext.Provider
          value={{ state, getContents, contentType, setContentType }}
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
