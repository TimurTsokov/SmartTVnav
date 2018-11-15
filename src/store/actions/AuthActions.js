import fetch from 'isomorphic-fetch';

const server = 'http://tv-server.trinity-tv.net/server/TvServerService/';

const MakeRequest = (method) => {
    return fetch(server + method + '.json', {
        method: "POST",
        body: JSON.stringify({
            device: {
                type: 'DT_SmartTV',
                mac: 'A1:AB:AC:AF:11:2F'
            }
        }),
        headers: {
            "Content-Type": "application/json"
        },
    }).then(response => response.json())
        .then(json => {
            return json
        })
};

export function Auth() {
    return dispatch => {
        return MakeRequest('Auth').then(response => {
            dispatch({type: 'AUTH_CHECK', payload: response});
        })
    };
}
