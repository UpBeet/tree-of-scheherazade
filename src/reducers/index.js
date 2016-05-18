import { combineReducers } from 'redux';
import undoable, { excludeAction } from 'redux-undo';

import { editor } from './editor';

const rootReducer = combineReducers({
  editor: undoable(editor, { filter: excludeAction('SUGGEST_WORDS') }),
});

export default rootReducer;
