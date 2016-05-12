// External
import React from 'react';

// Internal
import Editor from './Editor';
import TextViewer from './TextViewer';

const tempAltFilter = [true, false, true, true, false, false, false, true, false, false, false, false, false];
const tempWords = ['peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter'];
const tempFilter = [true, true, true, true, true, true, true, true, true, true, true, true, true];

const App = React.createClass({
  clickMe: function () {
    const that = this;
    this.setState({ filter: tempAltFilter }, () => console.log(that.state));
  },

  getInitialState: () =>
    ({
      words: tempWords,
      filter: tempFilter,
    }),

  render: function () {
    return (<div className="peter" onClick={this.clickMe}>
      <Editor />
      <TextViewer
        words={this.state.words}
        filter={this.state.filter} />
    </div>);
  },
});


export default App;
