import axios from 'axios';
import Device from '../../modules/Device';
import SignupServerService from "../../modules/services/SignupServerService";
import GeoServerService from "../../modules/services/GeoServerService";
import TvServerService from "../../modules/services/TvServerService";

const server = 'http://tv-server.trinity-tv.net/server/';
const SignupService = new SignupServerService(),
    GeoService = new GeoServerService(),
    TvService = new TvServerService();

const MakeRequest = (service, method, data) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    return axios.post(server + service + '/' + method + '.json', JSON.stringify(data || ''))
        .then(response => {
            return response
        })
};

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
            switch (response.statusText) {
                case 'OK':
                    dispatch({type: 'SET_PHONE'});
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
                    dispatch({type: 'SHOW_ERROR_MESSAGE', payload: 'Введен неверный код. Попробуйте еще раз'});
                    break;
            }
        });
    };
}