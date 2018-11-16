const initialState = {
    countries: [],
    countryId: undefined,
    partnerId: undefined
};

const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_INFO':
            if (action.payload.status === 'OK') {
                console.log(action.payload.country_id);
                return {
                    ...state,
                    countryId: action.payload.country_id
                }
            }
            break;
        case 'GET_COUNTRIES':
            if (action.payload.status === 'OK') {
                console.log(action.payload.countries);
                return {
                    ...state,
                    countries: action.payload.countries
                }
            }
    }
    return state;
};

export default SignUpReducer;
