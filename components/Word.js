import React, { PropTypes }  from 'react';

const propTypes = {
  selected: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
};

const Word = ({ selected, content }) => (
  <span className={`word ${selected ? 'selected' : 'unselected'}`}>
    {content}
  </span>);


Word.propTypes = propTypes;
export default Word;
