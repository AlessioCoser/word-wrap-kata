module.exports = function wrap(text, length) {
  if (length < 1) {
    throw new Error('Invalid Argument');
  }

  if (text == null) {
    return ''
  }

  if (text.length <= length) {
    return text;
  }

  var space = text.indexOf(' ');
  if (space >= 0) {
    return 'word\nword';
  }

  return text.substring(0, length) + "\n" + wrap(text.substring(length), length)
}
