import axios from "axios";
const KEY = "AIzaSyBSKB46I-Wrtaam8ZhlMIxik-GH64Yz4UM";

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
