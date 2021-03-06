import React, { useContext, useEffect, useState, useRef } from "react";
import OrderByIcon from "components/UI/OrderByIcon";
import ThemeContext from "contexts/ThemeContext";
import ContentContext from "contexts/ContentContext";

const OrderByButton = React.forwardRef(({}, ref) => {
  const { contents, setContents, contentType } = useContext(ContentContext);
  const { isDarkMode } = useContext(ThemeContext);
  const [isDropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!isDropdown);
  };
  const dropdownRef = useRef();

  const orderByDate = (videos) => {
    const sortedVideos = [...videos].sort((a, b) =>
      a.uploadDate < b.uploadDate ? 1 : -1
    );
    console.log(sortedVideos);
    setContents([...sortedVideos]);
  };

  const orderByViewCount = (videos) => {
    const sortedVideos = [...videos].sort((a, b) => b.viewCount - a.viewCount);
    console.log(sortedVideos);
    setContents([...sortedVideos]);
  };

  const orderByLikeCount = (videos) => {
    const sortedVideos = [...videos].sort((a, b) => b.likeCount - a.likeCount);
    console.log(sortedVideos);
    setContents([...sortedVideos]);
  };

  const orderBySubscriberCount = (videos) => {
    const sortedVideos = [...videos].sort(
      (a, b) => b.subscriberCount - a.subscriberCount
    );
    console.log(sortedVideos);
    setContents([...sortedVideos]);
  };

  const orderByItemCount = (videos) => {
    const sortedVideos = [...videos].sort((a, b) => b.itemCount - a.itemCount);
    console.log(sortedVideos);
    setContents([...sortedVideos]);
  };

  const orderByVideoCount = (videos) => {
    const sortedVideos = [...videos].sort(
      (a, b) => b.videoCount - a.videoCount
    );
    console.log(sortedVideos);
    setContents([...sortedVideos]);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdown]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={ref}
        onClick={handleClick}
        className={`flex w-full justify-center items-center ${
          isDarkMode ? "bg-gray-800" : "bg-gray-300"
        } px-2 py-2 rounded-xl space-x-2`}
      >
        <div className="w-5">
          <OrderByIcon />
        </div>
        <p
          className={`${
            isDarkMode ? "text-white" : "text-gray-500"
          } font-medium`}
        >
          Order by
        </p>
      </button>
      {isDropdown && (
        <div
          className={` w-full mt-1 rounded-md absolute z-20 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-300"
          }`}
        >
          <div className={`${isDarkMode ? "text-white" : "text-gray-500"}`}>
            {contentType === "video" && (
              <>
                <button
                  onClick={() => {
                    orderByViewCount(contents);
                    setDropdown(false);
                  }}
                  className={`block w-full text-left px-4 py-1 rounded-t-md ${
                    isDarkMode ? "hover:bg-gray-600" : "hover:bg-red-200"
                  }`}
                >
                  View count
                </button>
                <button
                  onClick={() => {
                    orderByDate(contents);
                    setDropdown(false);
                  }}
                  className={`block w-full text-left px-4 py-1 rounded-b-md ${
                    isDarkMode ? "hover:bg-gray-600" : "hover:bg-red-200"
                  }`}
                >
                  Upload date
                </button>
                <button
                  onClick={() => {
                    orderByLikeCount(contents);
                    setDropdown(false);
                  }}
                  className={`block w-full text-left px-4 py-1 rounded-b-md ${
                    isDarkMode ? "hover:bg-gray-600" : "hover:bg-red-200"
                  }`}
                >
                  Like count
                </button>
              </>
            )}
            {contentType === "channel" && (
              <>
                <button
                  onClick={() => {
                    orderBySubscriberCount(contents);
                    setDropdown(false);
                  }}
                  className={`block w-full text-left px-4 py-1 rounded-b-md ${
                    isDarkMode ? "hover:bg-gray-600" : "hover:bg-red-200"
                  }`}
                >
                  Subscriber count
                </button>
                <button
                  onClick={() => {
                    orderByVideoCount(contents);
                    setDropdown(false);
                  }}
                  className={`block w-full text-left px-4 py-1 rounded-b-md ${
                    isDarkMode ? "hover:bg-gray-600" : "hover:bg-red-200"
                  }`}
                >
                  Video count
                </button>
              </>
            )}
            {contentType === "playlist" && (
              <>
                <button
                  onClick={() => {
                    orderByItemCount(contents);
                    setDropdown(false);
                  }}
                  className={`block w-full text-left px-4 py-1 rounded-b-md ${
                    isDarkMode ? "hover:bg-gray-600" : "hover:bg-red-200"
                  }`}
                >
                  Video count
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

export default OrderByButton;
