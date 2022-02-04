import { createStore } from "redux";
import reducers from './reducers';

const Store = () => {
    return createStore(
        reducers
    )
} ;

export default Store;