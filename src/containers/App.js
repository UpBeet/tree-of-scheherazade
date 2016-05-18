// External
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators as UndoRedoActions } from 'redux-undo';

// Internal
import Editor from '../components/Editor';
import TextViewer from '../components/TextViewer';
import * as Actions from '../actions';

const App = React.createClass({

  render() {
    const { editor: { present }, actions, undoRedo } = this.props;

    return (
      <div
        className="container"
      >
        <h1>Tree of Scheherazade</h1>
        <Editor
          trie={present.sourceTrie}
          cursor={present.cursor}
          suggestions={present.suggestions}
          suggestWords={actions.suggestWords}
          selectWord={actions.selectWord}
        />
        <TextViewer
          source={present.source}
          filter={present.filter}
          suggestions={present.suggestions}
          cursor={present.cursor}
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
  undoRedo: bindActionCreators(UndoRedoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
