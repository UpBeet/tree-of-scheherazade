// External
import React from 'react';
import R from 'ramda';

// Internal
import { Word } from '../components';

// Dummy data

const defaultProps = {
  words: ['peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter'],
  filter: [true, false, true, true, false, false, false, true, false, false, false, false, false],
};


const App = ({ words, filter }) =>
  (<div>
    {
      R.zip(words, filter)
      .map((item, i) => <Word content={item[0]} selected={item[1]} key={i}/>)
    }
  </div>);

App.defaultProps = defaultProps;
export default App;
