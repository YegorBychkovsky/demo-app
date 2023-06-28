import axios from "axios";

const instance = axios.create({
  baseURL: "https://expa.fly.dev",
});

export default instance;
