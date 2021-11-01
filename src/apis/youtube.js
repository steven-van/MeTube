import axios from "axios";
const KEY = "AIzaSyC75Ra_MsHgHl0Ab_qompiB4CPpHf0KcFs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
  timeout: 1000,
  headers: {},
});
