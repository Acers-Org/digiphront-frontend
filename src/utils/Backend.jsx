import axios from "axios";

const API = axios.create({
  baseURL: "https://educlan.herokuapp.com/api",
  headers: {
    "Accept":"/",
    "Content-type": "application/json"
  },
});

export default API;