import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Editor from './src/containers/Editor';
import reducers from './src/reducers';

import dubliners from './src/texts/dubliners';
import parser from './src/parser/parser';

console.log('this works');
console.log(parser.tokenize(dubliners));

const store = createStore(reducers);

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <Editor />
  </Provider>,
  rootElement
);
