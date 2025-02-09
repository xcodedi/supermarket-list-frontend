import axios from "axios";
import { SAVE_USERNAME_PATH } from "../constants";

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    username: localStorage.getItem(SAVE_USERNAME_PATH),
  },
});

export default api;
