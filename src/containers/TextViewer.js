// External
import React, { PropTypes } from 'react';
import R from 'ramda';

// Internal
import { Word } from '../components';

// Dummy data
const TextViewer = ({ source, filter, highlighted }) =>
  (<div>
    {
      R.zip(source, filter)
      .map((item, i) =>
        <Word
          highlight={R.contains(i, highlighted)}
          content={item[0]}
          selected={item[1]}
          key={i}/>)
    }
  </div>);

TextViewer.propTypes = {
  source: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.arrayOf(PropTypes.bool).isRequired,
  highlighted: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TextViewer;
