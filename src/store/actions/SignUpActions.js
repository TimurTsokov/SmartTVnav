import fetch from 'isomorphic-fetch';

const server = 'http://tv-server.trinity-tv.net/server/';

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

export function GetInfo() {
    return dispatch => {
        return MakeRequest('GeoServerService', 'GetInfo').then(response => {
            dispatch({type: 'GET_INFO', payload: response});
        })
    };
}

export function GetCountries() {
    return dispatch => {
        return MakeRequest('GeoServerService', 'GetCountries').then(response => {
            dispatch({type: 'GET_COUNTRIES', payload: response});
        })
    };
}

export function SetPhone(phone) {
    return dispatch => {
        const data = {
            device: {
                type: 'DT_SmartTV',
                mac: 'A1:AB:AC:AF:11:2F'
            },
            phone: phone
        };

        return MakeRequest('SignupServerService', 'SetPhone', data).then(response => {
            dispatch({type: 'SET_PHONE', payload: response});
        })
    };
}