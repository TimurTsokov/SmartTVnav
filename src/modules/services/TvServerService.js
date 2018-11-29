import Service from 'src/modules/Service';
import Device from 'src/modules/Device';

class TvServerService extends Service {
    constructor() {
        super('TvServerService');
    }

    Ping(sequence = 1) {
        let data = {
            sequence: sequence
        };

        this.request('Ping', data);
    }

    Auth() {
        let data = {
            device: Device.getObject()
        };

        this.request('Auth', data)
    }

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