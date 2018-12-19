import deviceService from "../Services/DeviceService";
import axios from "axios";
const DeviceService = new deviceService,
    TV_SERVER_URL = "http://tv-server.trinity-tv.net/server/",
    service = 'SignupServerService';

class SignupServerService {

    _url(method) {
        return TV_SERVER_URL + service + "/" + method + ".json";
    }

    request(method, data) {
        return axios.post(this._url(method), JSON.stringify(data) || "");
    };

    SetPhone(phone) {
        let data = {
            phone: phone,
            device: DeviceService.device
        };

        return this.request('SetPhone', data);
    }

    SetCode(phone, code) {
        let data = {
            phone: phone,
            confirmation_code: code
        };

        return this.request('SetCode', data);
    }

    GetPartnerCode() {
        let data = {
            device: DeviceService.device
        };

        return this.request('GetPartnerCode', data);
    }
}

export default SignupServerService;