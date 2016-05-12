import React, { PropTypes } from 'react';

const getClass = (highlight, selected) =>
  `word ${selected ? '' : 'unselected'} ${highlight ? 'highlight' : ''}`;

const isNewline = string => string === '\n';

const newLineStyles = content => ({
  display: 'block',
  marginBottom: '1em',
});

const Word = ({ highlight, selected, content }) =>
  (<span
    className={getClass(highlight, selected)}
    style={isNewline(content) ? newLineStyles(content) : {}}>
        {content}
      </span>);

Word.propTypes = {
  selected: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  highlight: PropTypes.bool.isRequired,
};

export default Word;
