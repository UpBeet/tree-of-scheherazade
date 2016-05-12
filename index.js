import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './src/containers/App';
import reducers from './src/reducers';

const store = createStore(reducers);

const rootElement = document.getElementById('root');
require('./src/scss/main.scss');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
