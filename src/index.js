import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';
import './index.css';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, compose(middleware));

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
