// External
import React from 'react';

// Internal
import Editor from './Editor';
import TextViewer from './TextViewer';

const tempAltFilter = [true, false, true, true, false, false, false, true, false, false, false, false, false];
const tempWords = ['peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter', 'peter'];
const tempFilter = [true, true, true, true, true, true, true, true, true, true, true, true, true];

const App = React.createClass({
  getInitialState: () =>
    ({
      words: tempWords,
      filter: tempFilter,
    }),

  render() {
    return (
      <div>
        <Editor />
        <TextViewer
          words={this.state.words}
          filter={this.state.filter} />
      </div>);
  },
});


export default App;
