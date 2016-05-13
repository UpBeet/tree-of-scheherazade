import { createAction } from 'redux-actions';

export const selectWord = index => ({ type: 'SELECT_WORD',
                                    payload: { index } });

export const suggestWords = prefix => ({ type: 'SUGGEST_WORDS',
                                      payload: { prefix } });
