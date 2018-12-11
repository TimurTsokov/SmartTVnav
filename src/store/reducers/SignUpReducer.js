const initialState = {
    countries: [],
    isAuthorized: false,
    countryId: undefined,
    partnerId: undefined,
    signUpStep: null,
    errorMessage: ''
};

const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_SIGN_UP':
            return {
                ...state,
                signUpStep: 'phone'
            };
        case 'SHOW_MAIN_PAGE':
            return {
                ...state,
                isAuthorized: true
            };
        case 'GET_INFO':
            return {
                ...state,
                countryId: action.payload
            };
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload
            };
        case 'HIDE_ERROR_MESSAGE':
            return {
                ...state,
                errorMessage: ''
            };
        case 'SHOW_ERROR_MESSAGE':
            console.log('showError');
            return {
                ...state,
                errorMessage: action.payload
            };
        case 'GO_BACK':
            return {
                ...state,
                signUpStep: 'phone'
            };
        case 'SET_PHONE':
            return {
                ...state,
                signUpStep: 'code'
            }
    }
    return state;
};

export default SignUpReducer;
