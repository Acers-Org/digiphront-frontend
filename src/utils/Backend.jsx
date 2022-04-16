import axios from "axios";

const API = axios.create({
  baseURL: " https://digiphront.herokuapp.com",
  headers: {
    "Accept":"/",
    "Content-type": "application/json"
  },
});

export default API;