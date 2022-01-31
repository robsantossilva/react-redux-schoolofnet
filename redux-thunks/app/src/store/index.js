import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk";
import rootReducer from './reducers';

const initStore = () => {
    const enhancers = applyMiddleware(thunk);

    return createStore(
        rootReducer,
        enhancers
    );
}

export default initStore