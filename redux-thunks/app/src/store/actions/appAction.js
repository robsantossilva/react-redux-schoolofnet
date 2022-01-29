import axios from 'axios';

// Action Types
export const IS_FETCHING = 'IS_FETCHING';
export const FETCHED = 'FETCHED';
export const FETCHED_ERROR = 'FETCHED_ERROR';

export function isFetching(bool){
    return {
        type: IS_FETCHING,
        isLoading: bool
    }
}

// Action Creator
export function fetchedError(err){
    return {
        type: FETCHED_ERROR,
        error: err
    }
}

export function fetched(data){
    return {
        type: FETCHED,
        data: data
    }
}

// Thunk
export function thunkFetchData() {

    return async (dispatch) => {
        dispatch(isFetching(true));
        try {
            const {data} = await axios.get('https://api.icndb.com/jokes/');
            dispatch(fetched(data.value));
        } catch (error) {
            dispatch(fetchedError(error));
        } finally {
            dispatch(isFetching(false));
        }
    }
}