const initialState = {
    countries: [],
    isAuthorized: false,
    countryId: undefined,
    signUpStep: null,
    invalidCodeErrorMessage: '',
    codeLimitErrorMessage: '',
    buttonBackVisible: false,
    codeInputVal: ''
};

const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_SIGN_UP':
            if (!state.signUpStep) {
                return {
                    ...state,
                    signUpStep: 'phone'
                };
            }
            break;
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
                invalidCodeErrorMessage: '',
                codeLimitErrorMessage: ''
            };
        case 'SHOW_ERROR_INVALID_CODE':
            return {
                ...state,
                invalidCodeErrorMessage: action.payload,
                buttonBackVisible: true,
                codeInputVal: ''
            };
        case 'SHOW_ERROR_ATTEMPTS_LIMIT':
            return {
                ...state,
                signUpStep: 'phone',
                codeLimitErrorMessage: action.payload,
                codeInputVal: ''
            };
        case 'GO_BACK':
            return {
                ...state,
                signUpStep: 'phone'
            };
        case 'SET_PHONE':
            return {
                ...state,
                signUpStep: 'code',
                invalidCodeErrorMessage: '',
                codeLimitErrorMessage: '',
                buttonBackVisible: false
            };
        case 'INPUT_CODE':
            return {
                ...state,
                codeInputVal: action.payload
            }
    }
    return state;
};

export default SignUpReducer;
