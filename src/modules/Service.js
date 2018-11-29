import axios from 'axios';

export const TV_SERVER_URL = "http://tv-server.trinity-tv.net/server/";

class Service {
    constructor(name) {
        this.name = name;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
    }

    _url(method) {
        return TV_SERVER_URL + this.name + "/" + method + ".json";
    }

    request(method, data) {
        return axios.post(this._url(method), JSON.stringify(data) || "");
    }
}

export default Service;