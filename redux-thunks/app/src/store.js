import { applyMiddleware, createStore } from "redux"
import rootReducer from './reducers';

export default () => {
    const enhancers = applyMiddleware();

    return createStore(
        rootReducer,
        enhancers
    );
}