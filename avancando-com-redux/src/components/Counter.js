import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <button type='button' onClick={() => this.props.dispatch({type: 'DECREMENT'})}>-</button>
                    <h5>{this.props.total}</h5>
                    <button type='button' onClick={() => this.props.dispatch({type: 'INCREMENT'})}>+</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.counterReducer.total
    }
}

// const mapDispatchToProps = (dispatch) => {
//     console.log(dispatch);
//     return {

//     }
// }

export default connect(mapStateToProps)(Counter);