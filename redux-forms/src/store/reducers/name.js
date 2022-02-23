import { INITIAL_FETCH, SEND_SERVER } from '../actions';
const INITIAL_STATE = { data: {} };

function reducerName(state = INITIAL_STATE, action) {
    switch (action.type) {
        case INITIAL_FETCH:
            console.log(INITIAL_FETCH, action.payload);
            return { ...state, data: action.payload };

        case SEND_SERVER:
            console.log(SEND_SERVER, action.payload);
            return {...state, data: action.payload};
    
        default:
            return state;
    }
}

export default reducerName;