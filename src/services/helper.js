import axios from "axios";

const baseURL = "https://localhost:8090/api/v1";

export const customAxios = axios.create({
  baseURL: baseURL,
});
