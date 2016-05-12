import Trie from 'triejs';
import { forEach, addIndex, toLower } from 'ramda';

const forEachIndex = addIndex(forEach);

/**
 * Remove trailing newlines
 */
export const normalize = (rawText) =>
  rawText.replace(/(.)(\r\n|\n|\r)/gm, '$1');

/**
 * Keep words and punctuation separate
 */
export const tokenizer = (rawText) =>
  normalize(rawText).match(
    /([A-Za-zА-Яа-я0-9_\$%#@]+|[,\?\.'";&\(\)!\-\+=\n\r])/g);

export const buildTrie = (tokenizedText) => {
  const auto = new Trie();
  forEachIndex((token, i) =>
               auto.add(toLower(token), { i, token }), tokenizedText);
  return auto;
};
