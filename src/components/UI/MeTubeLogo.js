import React, { useContext } from "react";
import meTubeLogoWhite from "assets/metube-logo-white.png";
import meTubeLogo from "assets/metube-logo.png";
import ThemeContext from "contexts/ThemeContext";

const CentralPayLogo = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <img
      alt="CentralPay Logo White"
      src={isDarkMode ? meTubeLogoWhite : meTubeLogo}
    />
  );
};

export default CentralPayLogo;
