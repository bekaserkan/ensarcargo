import axios from "axios";

export const api = axios.create({
  baseURL: "https://ensarcargo.com/api/",
});
