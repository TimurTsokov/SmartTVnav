const initialState = {
    channels: [],
    categories: [],
    channelUrl: null
};

const ChannelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CHANNELS':
                return {
                    ...state,
                    channels: action.payload.list,
                    categories: action.payload.categories
                };
        case 'OPEN_STREAM':
            return {
                ...state,
                channelUrl: action.payload
            }
    }
    return state;
};

export default ChannelsReducer;
