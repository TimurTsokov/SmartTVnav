import axios from "axios";
import Device from '../Device';

const TV_SERVER_URL = "http://tv-server.trinity-tv.net/server/",
    service = 'TvServerService';

class TvServerService {

    _url(method) {
        return TV_SERVER_URL + service + "/" + method + ".json";
    }

    request(method, data) {
        return axios.post(this._url(method), JSON.stringify(data) || "");
    };

    // Ping(sequence = 1) {
    //     let data = {
    //         sequence: sequence
    //     };
    //     this.request('Ping', data);
    // }

     Auth() {
        let data = {
            device: Device.getObject()
        };
        return this.request('Auth', data)
    };

    AuthCheck() {

    }

    GetMyAuth() {

    }

    GetTime() {

    }

    GetChannels() {
        let data = {};

        this.request('GetChannels', data);
    }

    GetChannelsRating() {

    }

    GetEpgSearchIndex() {

    }

    OpenStream() {

    }

    UpdateStream() {

    }

    CloseStream() {

    }

    GetUserInfo() {

    }

    SearchEpg() {

    }

    SearchTimeOffset() {

    }

    GetTimeOffsetStepAlgo() {

    }

    UseVoucher() {

    }

    GetMyVouchers() {

    }

    GetRecommendedChannels() {

    }

    SuperSearch() {

    }

    SetPushToken() {

    }


}

export default TvServerService;