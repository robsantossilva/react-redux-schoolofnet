import {createStore, combineReducers} from 'redux';

export const clickHelloAction = (value) => (
    {
        type: 'CLICK_HELLO',
        msg: value
    }
);

// Reducers
const clickReducer = (state = {msg: 'Redux'}, action) => {
    switch(action.type) {
        case 'CLICK_HELLO':
            return {...state, msg: action.msg}

        default:
            return state;
    }
}

const Reducers = combineReducers({
    clickReducer
})

// Store
export default createStore(Reducers);