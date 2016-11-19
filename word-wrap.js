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

  var space = text.indexOf(' ')

  if (space >= 0) {
    return text.substring(0, space) + "\n" + text.substring(space + 1)
  }

  return text.substring(0, length) + "\n" + wrap(text.substring(length), length)
}
