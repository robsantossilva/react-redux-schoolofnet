import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import { CounterReducer } from './CounterAction';

const Store = () => {
    const rootReducer = combineReducers({
        CounterReducer
    });

    return configureStore(rootReducer);
}

export default Store;