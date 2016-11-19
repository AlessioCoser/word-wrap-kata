class WordWrap {
  constructor(length) {
    this.length = length
  }

  static wrap(text, length) {
    return new WordWrap(length).wrap(text)
  }

  wrap(text) {
    if (this.length < 1) {
      throw new Error('Invalid Argument');
    }

    if (text == null) {
      return ''
    }

    if (text.length <= this.length) {
      return text;
    }

    var space = text.indexOf(' ')

    if (space >= 0) {
      return this.breakBetween(text, space, space+1)
    }

    return this.breakBetween(text, this.length, this.length)
  }

  breakBetween(text, start, end) {
    return text.substring(0, start)
    + "\n"
    + WordWrap.wrap(text.substring(end), this.length);
  }
}


module.exports = WordWrap.wrap
