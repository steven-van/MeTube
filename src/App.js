import React, { useState } from "react";
import Sidebar from "components/Sidebar";
import ThemeContext from "contexts/ThemeContext";
import ContentContext from "contexts/ContentContext";
import ContentSection from "components/ContentSection";
import youtube from "apis/youtube";
import SearchContext from "contexts/SearchContext";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const [state, setState] = useState({ contents: [], videosStats: [] });
  const [contentType, setContentType] = useState("video");

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

      console.log("hello");

      setState((prevState) => ({
        ...prevState,
        videosStats: responseStats.data.items,
      }));
    }

    setState((prevState) => ({
      ...prevState,
      contents: responseSnippet.data.items,
    }));
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div
        className={`flex flex-row h-screen ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <ContentContext.Provider
          value={{ state, setState, getContents, contentType, setContentType }}
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
