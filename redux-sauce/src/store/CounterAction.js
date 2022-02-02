import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";


const { Types, Creators } = createActions({
    CounterIncrement: null,
    CounterDecrement: null
});

export const CounterTypes = Types;


const INITIAL_STATE = Immutable({
    value: 0
});

const CounterIncrement = (state) => {
    return state.merge({value: state.value + 1});
    //return {...state, value: state.value + 1};
}

const CounterDecrement = (state) => {
    if (state.value === 0) {
        return state.merge({value: 0});
    }

    return state.merge({value: state.value - 1})
    //return {...state, value: state.value - 1};
}

export const CounterReducer = createReducer(INITIAL_STATE, {
    [Types.COUNTER_INCREMENT] : CounterIncrement,
    [Types.COUNTER_DECREMENT] : CounterDecrement,
});

const CounterCreators = Creators;
export default CounterCreators;