const initialState = {
    genres: null
};

const MovieGenresReducer = (state = initialState, action) => {
    let first, last, rest, genres;
    switch (action.type) {
        case 'GET_CONFIGURATION':
            return {
                ...state,
                genres: action.payload
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

export default MovieGenresReducer;
