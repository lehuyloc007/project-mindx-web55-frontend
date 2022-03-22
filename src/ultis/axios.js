import axios from "axios";
const http = axios.create({
    baseURL: "https://cooking-holics-backend.herokuapp.com"
})
export default http;