import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

function getSuggestionValue(suggestion) {
  return suggestion.token;
}

function shouldRenderSuggestions() {
  return true;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.token}</span>
  );
}

class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsUpdateRequested =
      this.onSuggestionsUpdateRequested.bind(this);
  }

  onChange(event, { newValue }) {
    this.setState({ value: newValue });
  }

  onSuggestionsUpdateRequested({ value }) {
    this.props.suggestWords(value);
  }

  render() {
    const { value } = this.state;
    const { suggestions } = this.props;
    const inputProps = {
      placeholder: 'Type a word',
      value,
      onChange: this.onChange,
    };

    return (
      <div
        className='autocompleter'
      >
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          shouldRenderSuggestions={shouldRenderSuggestions}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default TextArea;
