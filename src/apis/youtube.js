import axios from "axios";
const KEY = "AIzaSyDs6jsXRY1yiv6YUsgUot7OjwmYQMHgpso";

const youtube = (part = "snippet") => {
  return axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
      part: part,
      maxResults: 50,
      key: KEY,
    },
    timeout: 1000,
    headers: {},
  });
};

export default youtube;
