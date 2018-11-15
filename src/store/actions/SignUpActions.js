import fetch from 'isomorphic-fetch';

const server = 'http://tv-server.trinity-tv.net/server/GeoServerService/';

const MakeRequest = (method) => {
    return fetch(server + method + '.json', {
        method: "POST",
        body: "",
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
        return MakeRequest('GetInfo').then(response => {
            dispatch({type: 'GET_INFO', payload: response});
        })
    };
}

export function GetCountries() {
    return dispatch => {
        return MakeRequest('GetCountries').then(response => {
            dispatch({type: 'GET_COUNTRIES', payload: response});
        })
    };
}