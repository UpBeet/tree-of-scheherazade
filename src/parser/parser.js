/**
 * Keep words and punctuation separate
 */
export const tokenizer = (rawText) =>
  rawText.match(
    /([A-Za-zА-Яа-я0-9_\$%#@]+|[,\?\.'";&\(\)!\-\+=])/g);
