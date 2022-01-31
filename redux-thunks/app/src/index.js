import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import initStore from './store';
import simpleAction from './store/actions/simpleAction';

const store = initStore();

// console.log(store.getState());
// console.log(store.dispatch(simpleAction()));
// console.log(store.getState());

render(
  <Provider store={ store }>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>
  ,document.getElementById('root')
);
