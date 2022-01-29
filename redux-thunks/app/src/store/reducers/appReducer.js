import { FETCHED, FETCHED_ERROR, IS_FETCHING } from "../actions/appAction";

export function isFetching(state = false, action){
    switch (action.type) {
        case IS_FETCHING:
            return action.isLoading;
    
        default:
            return state;
    }
}

// Action Creator
export function fetchedError(state = {}, action){
    switch (action.type) {
        case FETCHED_ERROR:
            return action.error;
    
        default:
            return state;
    }
}

export function fetched(state = [], action){
    switch (action.type) {
        case FETCHED:
            return action.data;
    
        default:
            return state;
    }
}