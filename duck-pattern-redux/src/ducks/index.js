import { combineReducers, createStore } from "redux";
import CounterReducer from './counter';
const reducers = combineReducers({
    counter: CounterReducer
})

const store = createStore(reducers);

export default store;