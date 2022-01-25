import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickCounterMoreAction, clickCounterLessAction } from '../store';

class Counter extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={{marginLeft: '30px'}}>
                <h3>
                    Dispatch
                </h3>
                <div>
                    <button type='button' onClick={() => this.props.dispatch({type: 'DECREMENT'})}>-</button>
                    <h5>{this.props.total}</h5>
                    <button type='button' onClick={() => this.props.dispatch({type: 'INCREMENT'})}>+</button>
                </div>
                <hr />
                <h3>
                    Action
                </h3>
                <div>
                    <button type='button' onClick={() => this.props.clickCounterLessAction()}>-</button>
                    <h5>{this.props.total}</h5>
                    <button type='button' onClick={() => this.props.clickCounterMoreAction()}>+</button>
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        clickCounterMoreAction,
        clickCounterLessAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);