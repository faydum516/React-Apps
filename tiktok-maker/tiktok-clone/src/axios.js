import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok96-mern-backend.herokuapp.com/",
});

export default instance;