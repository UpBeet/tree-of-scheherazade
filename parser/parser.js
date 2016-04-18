/**
 * Keep words and punctuation separate
 */
const tokenizer = (rawText) =>
  rawText.match(
    /([A-Za-zА-Яа-я0-9_\$\%\#\@]+|[\,\?\.\'\"\;\&\(\)\!\-\+\=])/g);

export default { tokenizer };
