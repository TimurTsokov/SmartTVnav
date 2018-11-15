const initialState = {
    needSignUp: undefined
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_CHECK':
            if (action.payload.status === 'OK') {
                return {
                    ...state,
                    needSignUp: false
                }
            } else if (action.payload.status === 'WrongUser') {
                return {
                    ...state,
                    needSignUp: true
                }
            }
    }
    return state;
};

export default AuthReducer;
