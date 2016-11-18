var assert = require('assert')

function wrap(text, length) {
  if (length < 1) {
    throw new Error('Invalid Argument');
  }

  if (text == null) {
    return ''
  }

  if (text.length <= length) {
    return text;
  }

  return text.substring(0, length) + "\n" + text.substring(length);
}


describe('Word Wrap', () => {
  it('wrap null returns empty string', () => {
    assert.equal(wrap(null, 10), '')
  })

  it('wrap empty string returns empty string', () => {
    assert.equal(wrap('', 10), '')
  })

  it('one short word does not wrap', () => {
    assert.equal(wrap('word', 10), 'word')
  })

  it('length less than one should throw invalid argument', () => {
    assert.throws(() => { wrap('word', 0) }, Error, 'Invalid Argument')
  })

  it('word longer than length should break at length', () => {
    assert.equal(wrap('longword', 4), 'long\nword')
    assert.equal(wrap('longerword', 6), 'longer\nword')
  })

})
