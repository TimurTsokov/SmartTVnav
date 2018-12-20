import TvServerService from "../../modules/ServerServices/TvServerService";

const TvService = new TvServerService();

export function GetChannels(authToken) {
    return dispatch => {
        return TvService.GetChannels(authToken).then(response => {
            switch (response.data.status) {
                case 'OK':
                    dispatch({type: 'GET_CHANNELS', payload: response.data});
                    break;
            }
        });
    };
}

export function OpenStream(authToken, channelId, epgId) {
    return dispatch => {
        return TvService.OpenStream(authToken, channelId, epgId).then(response => {
            switch (response.data.result) {
                case 'OK':
                    dispatch({type: 'OPEN_STREAM', payload: response.data});
                    break;
            }
        });
    };
}
