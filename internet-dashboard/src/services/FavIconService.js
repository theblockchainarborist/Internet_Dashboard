import axios from "axios";


const githubStorage = axios.create({
    baseURL: ""
});

export default {
    getFavIcon(URL) {
        return githubStorage.get(`${URL}`);
    }
}