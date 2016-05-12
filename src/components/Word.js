import React, { PropTypes } from 'react';

const getClass = (highlight, selected) =>
  `word ${selected ? '' : 'unselected'} ${highlight ? 'highlight' : ''}`;

const Word = ({ highlight, selected, content }) =>
  (<span className={getClass(highlight, selected)}>
        {content}
      </span>);

Word.propTypes = {
  selected: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  highlight: PropTypes.bool.isRequired,
};

export default Word;
