import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import rootReducer from './reducers/index';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import Router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/app-styles.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('app-root')
);
