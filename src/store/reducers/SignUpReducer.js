const initialState = {
    countries: [],
    countryId: undefined,
    partnerId: undefined,
    showCode: false
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
        case 'SET_PHONE':
            if (action.payload.status === 'OK') {
                return {
                    ...state,
                    showCode: true
                }
            }
    }
    return state;
};

export default SignUpReducer;
