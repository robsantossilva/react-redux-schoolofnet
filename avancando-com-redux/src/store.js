import {createStore, combineReducers} from 'redux';

// Actions ///////////////////////////////////////////////////////////////////////
export const clickHelloAction = (value) => (
    {
        type: 'CLICK_HELLO',
        msg: value
    }
);

// Reducers ///////////////////////////////////////////////////////////////////////
const clickReducer = (state = {msg: 'Redux'}, action) => {
    switch(action.type) {
        case 'CLICK_HELLO':
            return {...state, msg: action.msg}

        default:
            return state;
    }
}

const counterReducer = (initialState = { total: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {...initialState, total: initialState.total + 1};
        case 'DECREMENT':
            return {...initialState, total: initialState.total - 1};
        default:
            return initialState;
    }
}



const Reducers = combineReducers({
    clickReducer,
    counterReducer
})

// Store ///////////////////////////////////////////////////////////////////////
export default createStore(Reducers);