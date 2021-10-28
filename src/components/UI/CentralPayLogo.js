import React, { useContext } from "react";
import centralPayLogoWhite from "assets/centralpay-logo-white.png";
import centralPayLogo from "assets/centralpay-logo.png";
import ThemeContext from "contexts/ThemeContext";

const CentralPayLogo = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <img
      alt="CentralPay Logo White"
      src={isDarkMode ? centralPayLogoWhite : centralPayLogo}
    />
  );
};

export default CentralPayLogo;
