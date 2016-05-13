// External
import React, { PropTypes } from 'react';
import R from 'ramda';

// Internal
import { Word } from '../components';

// Dummy data
const TextViewer = ({ source, filter, suggestions }) =>
  (<div className='words'>
    {
      R.zip(source, filter)
      .map((item, i) =>
        <Word
          highlight={R.contains(i, suggestions)}
          content={item[0]}
          selected={item[1]}
          key={i}/>)
    }
  </div>);

TextViewer.propTypes = {
  source: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.arrayOf(PropTypes.bool).isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TextViewer;
