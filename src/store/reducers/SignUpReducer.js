const initialState = {
    countries: [],
    countryId: undefined,
    partnerId: undefined,
    setPhoneErrorMessage: null
};

const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_INFO':
            if (action.payload.status === 'OK') {
                return {
                    ...state,
                    countryId: action.payload.country_id
                }
            }
            break;
        case 'GET_COUNTRIES':
            if (action.payload.status === 'OK') {
                return {
                    ...state,
                    countries: action.payload.countries
                }
            }
            break;
        case 'HIDE_ERROR_MESSAGE':
                return {
                    ...state,
                    setPhoneErrorMessage: null
                };

    }
    return state;
};

export default SignUpReducer;
