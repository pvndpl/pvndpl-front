import axios from "axios";
export default axios.create({
    baseURL: "http://192.168.31.222:8080/api",
});