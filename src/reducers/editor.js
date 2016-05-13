import { repeat, take, splitAt, sortBy, prop } from 'ramda';
import { handleActions } from 'redux-actions';

import { buildTrie, tokenizer } from '../parser/parser';
import dubliners from '../texts/dubliners';

const source = take(2000, tokenizer(dubliners));
const filter = repeat(true, source.length);
const sourceTrie = buildTrie(source);
const trieSort = sortBy(prop('i'));

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

  const alteredHead = unchanged.concat(repeat(false, alter.length));
  return [alteredHead.length + 1, alteredHead.concat(tail)];
};

export const editor = handleActions({
  SELECT_WORD: (state, action) => {
    const [cursor, newFilter] = selectFromFilter(action.index, state);
    return {
      ...state,
      filter: newFilter,
      cursor,
    };
  },

  SUGGEST_WORDS: (state, action) => ({
    ...state,
    suggestions: trieSort(state.sourceTrie.find(action.payload.prefix) || []),
  }),
}, initialState);
