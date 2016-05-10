import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Editor from './src/containers/Editor';
import App from './src/containers/App';
import reducers from './src/reducers';

import dubliners from './src/texts/dubliners';
import { tokenizer } from './src/parser/parser';

const tokens = tokenizer(dubliners);

const store = createStore(reducers);

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
