// External
import React, { PropTypes } from 'react';
import R from 'ramda';

// Internal
import { Word } from '../components';

// Dummy data
const TextViewer = ({ source, filter, suggestions, cursor }) =>
  (<div className="words">
    {
      R.zip(source, filter)
      .map((item, i) =>
        <Word
          highlight={(R.filter(R.propEq('i', i), suggestions).length > 0)}
          content={item[0]}
          selected={item[1]}
          isCursor={(i === cursor)}
          key={i}/>)
    }
  </div>);

TextViewer.propTypes = {
  source: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.arrayOf(PropTypes.bool).isRequired,
  suggestions: PropTypes.array.isRequired,
};

export default TextViewer;
