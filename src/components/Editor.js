import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

function getSuggestionValue(suggestion) {
  return suggestion;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion}</span>
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

  onChange(event, { value }) {
    console.log(event, value)
    this.setState({ value });
  }

  onSuggestionsUpdateRequested({ value }) {
    console.log(value, this.props.trie.find(value))
    this.props.suggestWords(value);
  }

  render() {
    const { value } = this.state;
    const { suggestions } = this.props;
    console.log('in render', this.props)
    const inputProps = {
      placeholder: 'Type a word',
      value: this.state.value,
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
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default TextArea;
