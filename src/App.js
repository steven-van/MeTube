import React, { useState } from "react";
import Sidebar from "components/Sidebar";
import ThemeContext from "contexts/ThemeContext";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className={`h-screen ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}>
        <Sidebar />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
