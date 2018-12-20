const initialState = {
    genres: null,
    moviesID: null,
    movies: null
};

const GenresReducer = (state = initialState, action) => {
    let first, last, rest, genres;
    switch (action.type) {
        case 'GET_CONFIGURATION':
            return {
                ...state,
                genres: action.payload
            };
        case 'GET_GENRE_MOVIES':
            return {
                ...state,
                moviesID: action.payload

            };
        case 'GET_MOVIE_INFO':
            return {
                ...state,
                movies: action.payload
            };
        case 'GO_LEFT':
            last = state.genres.slice(-1);
            rest = state.genres.slice(0, -1);
            genres = [last[0], ...rest];
            return {
                ...state,
                genres: genres,
            };
        case 'GO_RIGHT':
            [first, ...rest] = state.genres;
            genres = [...rest, first];
            return {
                ...state,
                genres: genres,
            };
    }
    return state;
};

export default GenresReducer;
