import Device from './Device';

const device = Device.getObject();
let deviceLanguage;

class LanguageService {
    getLang = () => {
        switch (device.sub_type) {
            case 'DST_SAMSUNG':
                return false;
            default:
                if (localStorage.getItem('locale') !== null) {
                    deviceLanguage = localStorage.getItem('locale');
                }
        }
    }
}

export default LanguageService;