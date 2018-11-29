import Service from '../Service';
import Device from "../Device";

class SignupServerService extends Service {
    constructor() {
        super('SignupServerService');
    }

    SetPhone(phone) {
        let data = {
            phone: phone,
            device: Device.getObject()
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
            device: Device.getObject()
        };

        return this.request('GetPartnerCode', data);
    }
}

export default SignupServerService;