import Service from '../Service';

class GeoServerService extends Service {
    constructor() {
        super('GeoServerService');
    }

    GetCountries() {
        return this.request('GetCountries');
    }

    // GetInfo() {
    //     return this.request('GetInfo');
    // }
}

export default GeoServerService;