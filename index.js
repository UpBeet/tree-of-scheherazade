import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Editor from './containers/Editor';
import reducers from './reducers';

import dubliners from './texts/dubliners.js';
console.log(dubliners.length);

const store = createStore(reducers);

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <Editor />
  </Provider>,
  rootElement
);
