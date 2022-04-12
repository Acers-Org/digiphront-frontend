import axios from 'axios';

const API = axios.create({
    baseURL: "https://educlan.herokuapp.com/api",
    headers: {
        "Content-type": "application/json"
    },
})

export default API;