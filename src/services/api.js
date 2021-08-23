import axios from "axios";

const api = axios.create({
  baseURL: "https://wsmacedoebezerra.herokuapp.com",
});

export default api;
