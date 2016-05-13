import { repeat, take, splitAt, map } from 'ramda';
import { handleActions } from 'redux-actions';

import { buildTrie, tokenizer } from '../parser/parser';
import dubliners from '../texts/dubliners';

const source = take(2000, tokenizer(dubliners));
const filter = repeat(true, source.length);
const sourceTrie = buildTrie(source);

const initialState = {
  source,
  filter,
  sourceTrie,
  suggestions: [],
  cursor: 0,
};

const selectFromFilter = (index, state) => {
  const [head, tail] = splitAt(index - 1, state.filter);
  const [unchanged, alter] = splitAt(state.cursor, head);
  const deselected = map(() => false, alter);
  return unchanged.concat(deselected).concat(tail);
};

export const editor = handleActions({
  SELECT_WORD: (state, action) => ({
    filter: selectFromFilter(action.payload.index, state),
    ...state,
  }),

  SUGGEST_WORDS: (state, action) => {
    console.log('suggestions: ', state.sourceTrie.find(action.payload.prefix) || [])
    return {
      suggestions: state.sourceTrie.find(action.payload.prefix) || [],
      ...state,
    }
  },
}, initialState);
