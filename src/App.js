import React, { useState } from "react";
import Sidebar from "components/Sidebar";
import ThemeContext from "contexts/ThemeContext";
import VideoContext from "contexts/VideoContext";
import VideoSection from "components/VideoSection";
import youtube from "apis/youtube";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const [state, setState] = useState({ videos: [] });

  const getVideos = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });

    setState({ videos: response.data.items });
    console.log(response.data.items);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div
        className={`flex flex-row h-screen ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <VideoContext.Provider value={{ state, setState, getVideos }}>
          <Sidebar />
          <VideoSection />
        </VideoContext.Provider>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
