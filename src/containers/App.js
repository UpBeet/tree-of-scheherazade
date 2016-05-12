// External
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Internal
import Editor from './Editor';
import TextViewer from './TextViewer';
import * as Actions from '../actions';

const App = React.createClass({

  render() {
    const { editor, actions } = this.props;

    return (
      <div
        className='container'
      >
        <h1>Tree of Sheherazade</h1>
        <Editor
          trie={editor.sourceTrie}
          cursor={editor.cursor}
        />
        <TextViewer
          source={editor.source}
          filter={editor.filter}
          highlighted={editor.highlighted}
          cursor={editor.cursor}
        />
      </div>);
  },
});

App.propTypes = {
  editor: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  editor: state.editor,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
