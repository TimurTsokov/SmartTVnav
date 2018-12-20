import MovieServerService from "../../modules/ServerServices/MovieServerService";

const MovieService = new MovieServerService();


export function GetConfuguration() {
    return dispatch => {
        return MovieService.GetConfiguration().then(response => {
            console.log('GetConfiguration response', response)
            switch (response.statusText) {
                case 'OK':
                    dispatch({type: 'GET_CONFIGURATION', payload: response.data.genres});
            }
        });
    }
}
