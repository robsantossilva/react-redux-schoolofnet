const simpleReducer = (state = {msg:''}, action) => {
    switch (action.type) {
        case 'ACTION_1':
            return {...state, msg: action.payload.msg};
    
        default:
            return state;
    }
}

export default simpleReducer;