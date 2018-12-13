import SignupServerService from "../../modules/ServerServices/SignupServerService";
import GeoServerService from "../../modules/ServerServices/GeoServerService";
import TvServerService from "../../modules/ServerServices/TvServerService";

const SignupService = new SignupServerService(),
    GeoService = new GeoServerService(),
    TvService = new TvServerService();

export function GetInfo() {
    return dispatch => {
        return GeoService.GetInfo().then(response => {
            switch (response.statusText) {
                case 'OK':
                dispatch({type: 'GET_INFO', payload: response.data.country_id});
            }
        });
    }
}

export function Auth() {
    return dispatch => {
        return TvService.Auth().then(response => {
            switch (response.data.status) {
                case 'OK':
                    dispatch({type: 'SHOW_MAIN_PAGE'});
                    break;
                case 'WrongUser':
                    dispatch({type: 'SHOW_SIGN_UP'})
            }
        })
    }
}

export function GetCountries() {
    return dispatch => {
        return GeoService.GetCountries().then(response => {
            switch (response.statusText) {
                case 'OK':
                    dispatch({type: 'GET_COUNTRIES', payload: response.data.countries});
            }
        });
    };
}

export function SetPhone(phone) {
    return dispatch => {
        return SignupService.SetPhone(phone).then(response => {
            console.log(response);
            switch (response.data.status) {
                case 'OK':
                    dispatch({type: 'SET_PHONE'});
                    break;
                case 'NoAttempts':
                    dispatch({type: 'SHOW_ERROR_ATTEMPTS_LIMIT', payload: 'Превышено количество попыток авторизации. Попробуйте еще раз'});
            }
        });
    };
}

export function SetCode(phone, code) {
    return dispatch => {
        return SignupService.SetCode(phone, code).then(response => {
            switch (response.data.status) {
                case 'OK':
                    dispatch({type: 'SHOW_MAIN_PAGE'});
                    break;
                case 'CodeInvalid':
                    dispatch({type: 'SHOW_ERROR_INVALID_CODE', payload: 'Введен неверный код. Попробуйте еще раз'});
                    break;
                case 'NoAttempts':
                    dispatch({type: 'SHOW_ERROR_ATTEMPTS_LIMIT', payload: 'Превышено количество попыток авторизации. Попробуйте еще раз'});;
                    break;
                default:
                    //Expired
                    dispatch({type: 'SHOW_ERROR_ATTEMPTS_LIMIT', payload: 'Срок действия кода истек. Поппробуйте еще раз'});
            }
        });
    };
}