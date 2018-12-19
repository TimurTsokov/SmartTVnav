import LanguageService from './LanguageService';
import deviceService from './DeviceService';

const LangService = new LanguageService,
    DeviceService = new deviceService,

    russian = {
        buttons: {
            activate: 'Активировать'
        },
        navBar: {
            main: 'Главная',
            newMovies: 'Новинки',
            cinema: 'Кинозал',
            tv: 'Телевидение'
        }
    },

    ukrainian = {
        buttons: {
            activate: 'Активувати'
        },
        navBar: {
            main: 'Головна',
            newMovies: 'Новинки',
            cinema: 'Кінозал',
            tv: 'Телебачення'
        }
    };

class Dictionary {
      getLang() {
        const lang = LangService.getLang() || DeviceService.deviceSystemLang;

        if (lang === 'ru') {
            return russian
        } else {
            return ukrainian
        }
    }
}

export default Dictionary;