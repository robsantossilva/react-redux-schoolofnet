import { combineReducers } from "redux";
import simpleReducer from './simpleReducer';
import { fetched, fetchedError, isFetching } from './appReducer';


export default combineReducers({
    simpleReducer,
    fetched,
    fetchedError,
    isFetching
})