// External
import React from 'react';
import R from 'ramda';

// Internal
import { Word } from '../components';

// Dummy data
const TextViewer = ({ words, filter }) =>
  (<div>
    {
      R.zip(words, filter)
      .map((item, i) => <Word content={item[0]} selected={item[1]} key={i}/>)
    }
  </div>);

export default TextViewer;
