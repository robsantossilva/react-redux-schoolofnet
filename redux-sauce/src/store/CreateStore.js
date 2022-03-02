import { createStore, applyMiddleware, compose } from "redux";

const configureStore = (rootReducer) => {
    const middleware = [];
    const enchancers = [];

    enchancers.push(applyMiddleware(...middleware));

    const store = createStore(rootReducer, compose(...enchancers));

    return store;
}

export default configureStore;