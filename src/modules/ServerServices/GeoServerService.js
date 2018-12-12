import axios from "axios";

const TV_SERVER_URL = "http://tv-server.trinity-tv.net/server/",
    service = 'GeoServerService';

class GeoServerService {

    _url(method) {
        return TV_SERVER_URL + service + "/" + method + ".json";
    }

    request(method, data) {
        return axios.post(this._url(method), JSON.stringify(data) || "");
    };

    GetCountries() {
        return this.request('GetCountries');
    }

    GetInfo() {
        return this.request('GetInfo');
    }
}

export default GeoServerService;