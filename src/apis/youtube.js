import axios from "axios";
const KEY = "AIzaSyDEaKyLsxJSKzxDd4t1jR43D35JpZXt-wE";

const youtube = (part = "snippet") => {
  return axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
      part: part,
      maxResults: 10,
      key: KEY,
    },
    timeout: 1000,
    headers: {},
  });
};

export default youtube;
