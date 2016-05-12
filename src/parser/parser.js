import Trie from 'triejs';
import { forEach, addIndex, toLower } from 'ramda';

const forEachIndex = addIndex(forEach);

/**
 * Keep words and punctuation separate
 */
export const tokenizer = (rawText) =>
  rawText.match(
    /([A-Za-zА-Яа-я0-9_\$%#@]+|[,\?\.'";&\(\)!\-\+=\n\r])/g);

export const buildTrie = (tokenizedText) => {
  const auto = new Trie();
  forEachIndex((token, i) =>
               auto.add(toLower(token), { i, token }), tokenizedText);
  return auto;
};
