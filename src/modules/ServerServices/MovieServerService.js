import Device from "../Services/Device";
import TvServerService from './TvServerService';
import axios from "axios";

const TvService = new TvServerService,
    TV_SERVER_URL = "http://tv-server.trinity-tv.net/server/",
    service = 'MovieServerService';

class MovieServerService {

    _url(method) {
        return TV_SERVER_URL + service + "/" + method + ".json";
    }

    request(method, data) {
        return axios.post(this._url(method), JSON.stringify(data) || "");
    };

    GetGenreMovies(itemID, authToken) {
        let data = {
            auth: authToken,
            genre_id: parseInt(itemID)
        };
        return this.request('GetGenreMovies', data)
    }

    GetMovieInfo(moviesID, authToken) {
        let data = {
            auth: authToken,
            movies: moviesID,
            limit: 40
        };
        return this.request('GetMovieInfo', data)
    }

    GetConfiguration(authToken) {
        let data = {
            auth: authToken
        };
        return this.request('GetConfiguration', data)
    }

    GetRecommendedMovies() {

    }

    GetLink() {

    }

    GetCollectionMovies() {

    }

    GetWatchList() {

    }

    SetWatchInfo() {

    }

    GetFavoriteMovies() {

    }

    AddFavoriteMovie() {

    }

    RemoveFavoriteMovie() {

    }
}

export default MovieServerService;