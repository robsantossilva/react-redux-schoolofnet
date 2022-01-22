import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { clickHelloAction } from './store';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.props.msg}
          </p>
          <input type='text' onChange={this.handleInputChange} />
          <button type='button'
            onClick={() => this.props.clickHelloAction(this.state.text)}
          >
            Click to Dispatch Action
          </button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    msg: store.clickReducer.msg
  }
}

const mapDispatchToProps = (dispatch) => {
  //console.log(dispatch);
  const actionCreators = bindActionCreators({ clickHelloAction }, dispatch);
  //console.log(actionCreators);
  return actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
