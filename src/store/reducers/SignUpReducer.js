const initialState = {
    countries: [],
    countryId: undefined,
    partnerId: undefined,
    signUpStep: 'phone'
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
            break;
        case 'GO_BACK':
            return {
                ...state,
                signUpStep: 'phone'
            }
    }
    return state;
};

export default SignUpReducer;
