
const simpleAction = () => {

    return (dispatch) => {
        dispatch({
            type: 'ACTION_1',
            payload: {
                msg: 'Hello Thunk'
            }
        });
    }
}

export default simpleAction;