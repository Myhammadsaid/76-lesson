import axios from "axios";

const Main_Url = axios.create({
  baseURL: "https://dummyjson.com",
});

export default Main_Url;
