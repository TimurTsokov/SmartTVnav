import fetch from 'isomorphic-fetch';
import SignupServerService from "../../modules/services/SignupServerService";
import GeoServerService from "../../modules/services/GeoServerService";

const server = 'http://tv-server.trinity-tv.net/server/';

const SignupService = new SignupServerService();
const GeoService = new GeoServerService();

const MakeRequest = (service, method, data) => {
    return fetch(server + service + '/' + method + '.json', {
        method: "post",
        body: JSON.stringify(data) || "",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(response => response.json())
        .then(json => {
            return json
        })
};

// export function GetInfo() {
//     return dispatch => {
//         return MakeRequest('GeoServerService', 'GetInfo').then(response => {
//             dispatch({type: 'GET_INFO', payload: response});
//         })
//     };
// }
//

// export function GetInfo() {
//     return dispatch => {
//         GeoService.GetInfo().then(response => {
//             return dispatch({type: 'GET_INFO', payload: response});
//         });
//     }
// }

export function GetCountries() {
    return dispatch => {
        return MakeRequest('GeoServerService', 'GetCountries').then(response => {
            dispatch({type: 'GET_COUNTRIES', payload: response});
        })
    };
}

export function SetPhone() {
    return dispatch => {
        const data = {
            device: {
                type: 'DT_SmartTV',
                mac: 'A1:AB:AC:AF:11:2F'
            },
            phone: '380985935158'
        };

        return MakeRequest('SignupServerService', 'SetPhone', data).then(response => {
            dispatch({type: 'SET_PHONE', payload: response});
        })
    };
}

const getInfo = (data) => {
    return {
        type: "GET_INFO",
        payload: data
    }
};