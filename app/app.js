import 'whatwg-fetch';
import ReactDOM from 'react-dom';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import combineReducers from './store/reducers';
import App from './containers/App';

const middlewares = [thunk];

const store = createStore(
  combineReducers,
  applyMiddleware(...middlewares)
);

const Root = ({store}) => (
  <Provider store={store}>
    <App />
  </Provider>
);


ReactDOM.render(<Root store={store}/>, document.getElementById('app-root'));
