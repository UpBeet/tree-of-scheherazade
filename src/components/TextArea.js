import React, { Component } from 'react';

class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };

    this._onChange = ({ target: { value } }) => this.setState({ text: value });
  }

  render() {
    return (
      <input
        onChange={this._onChange}
        value={this.state.text}
        type='text'
      />
    );
  }
}

export default TextArea;
