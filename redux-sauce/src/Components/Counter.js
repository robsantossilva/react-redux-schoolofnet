import React from 'react';
import { connect } from 'react-redux';

import CounterCreators from '../store/CounterAction'

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

const mapStateToProps = (state) => {
    return {
        value: state.CounterReducer.value
    }
};

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(CounterCreators.CounterIncrement()),
    decrement: () => dispatch(CounterCreators.CounterDecrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);