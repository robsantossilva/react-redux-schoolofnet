import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {

    const {value, increment, decrement} = props;

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>{value}</p>
        </div>
    );
}

const mapStateToProps = (state) => ({
    value: state.Counter
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'})
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);