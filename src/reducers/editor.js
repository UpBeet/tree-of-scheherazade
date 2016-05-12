import { repeat, take } from 'ramda';
import { handleActions } from 'redux-actions';

import { buildTrie, tokenizer } from '../parser/parser';
import dubliners from '../texts/dubliners';

const source = take(500, tokenizer(dubliners));
const filter = repeat(true, source.length);
const sourceTrie = buildTrie(source);

const initialState = {
  source,
  filter,
  sourceTrie,
  highlighted: [],
  cursor: 0,
};

export const editor = handleActions({
  SELECT_WORD: (state, action) => ({
    ...state,
  }),

  HIGHLIGHT_WORDS: (state, action) => ({
    ...state,
  }),
}, initialState);
