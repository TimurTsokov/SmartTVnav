import MovieServerService from "../../modules/ServerServices/MovieServerService";

const MovieService = new MovieServerService();


export function GetConfuguration(authToken) {
    return dispatch => {
        console.log('authToken ', authToken);
        return MovieService.GetConfiguration(authToken).then(response => {
            switch (response.statusText) {
                case 'OK':
                    dispatch({type: 'GET_CONFIGURATION', payload: response.data.genres});
            }
        });
    }
}

export function GetGenreMovies(itemID, authToken) {
    return dispatch => {
        console.log('itemID ', itemID);
        console.log('authToken ', authToken);
        return MovieService.GetGenreMovies(itemID, authToken).then(response => {
            switch (response.statusText) {
                case 'OK':
                    dispatch({type: 'GET_GENRE_MOVIES', payload: response.data.movies});
            }
        });
    }
}

export function GetMovieInfo(moviesID, authToken) {
    return dispatch => {
        return MovieService.GetMovieInfo(moviesID, authToken).then(response => {
            switch (response.statusText) {
                case 'OK':
                    dispatch({type: 'GET_MOVIE_INFO', payload: response.data.movies});
            }
        });
    }
}
