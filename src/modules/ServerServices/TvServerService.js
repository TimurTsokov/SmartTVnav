import axios from "axios";
import deviceService from '../Services/DeviceService';
import LanguageService from '../Services/LanguageService';

const DeviceService = new deviceService,
    LangService = new LanguageService,
    TV_SERVER_URL = "http://tv-server.trinity-tv.net/server/",
    service = 'TvServerService';

class TvServerService {

    _url(method) {
        return TV_SERVER_URL + service + "/" + method + ".json";
    }

    request(method, data) {
        return axios.post(this._url(method), JSON.stringify(data) || "");
    };

    Auth() {
        const locale = LangService.getLang() || DeviceService.deviceSystemLang || 'uk';
        let data = {
            device: DeviceService.device,
            locale: locale
        };

        return this.request('Auth', data)
    };

    AuthCheck() {

    }

    GetMyAuth() {

    }

    GetTime() {

    }

    GetChannels(authToken) {
        let data = {
            auth: authToken,
            epg_limit_next: 100,
            epg_limit_prev: 80,
            need_categories: true,
            need_epg: true,
            need_icons: false,
            need_offsets: false
        };

        return this.request('GetChannels', data);
    }

    GetChannelsRating() {

    }

    GetEpgSearchIndex() {

    }

    OpenStream(authToken, channelId, epgId) {
        let accept_scheme = ['HTTP_HLS', 'HTTP_UDP'];
        let data = {
            auth: authToken,
            channel_id: parseInt(channelId),
            multistream: false,
            accept_scheme: accept_scheme,
            epg_id: epgId
        };

        return this.request('OpenStream', data).then(response => {
            switch (response.data.result) {
                case 'OK':
                    return response.data;
            }
        }).catch(error => {
            console.error(error);
            throw error;
        });
    }

    UpdateStream(authToken, streamId) {
        let data = {
            auth: authToken,
            stream_id: streamId
        };

        return this.request('UpdateStream', data)
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