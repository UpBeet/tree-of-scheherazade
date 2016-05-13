import React, { PropTypes } from 'react';

const getClass = (highlight, selected, isCursor) =>
  `word ${selected ? '' : 'unselected'}
  ${highlight ? 'highlight' : ''} ${isCursor ? 'is-cursor' : ''}`;

const isNewline = string => string === '\n';

const newLineStyles = () => ({
  display: 'block',
  marginBottom: '1em',
});

const Word = ({ isCursor, highlight, selected, content }) =>
  (<span
    className={getClass(highlight, selected, isCursor)}
    style={isNewline(content) ? newLineStyles(content) : {}}>
        {content}
      </span>);

Word.propTypes = {
  selected: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  highlight: PropTypes.bool.isRequired,
};

export default Word;
