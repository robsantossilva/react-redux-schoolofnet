import React from 'react';
import { connect } from 'react-redux';
import { onDecrement, onIncrement } from '../ducks/counter';

function Counter(props)
{
    const {value, onIncrement, onDecrement} = props;
    return (
        <div>
            <h2>Clicked: {value} times</h2>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    );
}

const mapStateToProps = (state) => {
	return {
		value: state.counter
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: (value) => dispatch(onIncrement(value)),
		onDecrement: (value) => dispatch(onDecrement(value))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);