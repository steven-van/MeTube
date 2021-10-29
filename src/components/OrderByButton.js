import React, { useContext } from "react";
import OrderByIcon from "components/UI/OrderByIcon";
import ThemeContext from "contexts/ThemeContext";

const OrderByButton = React.forwardRef(({}, ref) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <button
      ref={ref}
      className={`flex w-full justify-center items-center ${
        isDarkMode ? "bg-gray-800" : "bg-gray-300"
      } px-2 py-2 rounded-xl space-x-2`}
    >
      <div className="w-5">
        <OrderByIcon />
      </div>
      <p
        className={`${isDarkMode ? "text-white" : "text-gray-500"} font-medium`}
      >
        Order by
      </p>
    </button>
  );
});

export default OrderByButton;
