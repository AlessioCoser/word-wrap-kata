var assert = require('assert')
var wrap = require('./word-wrap')

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

  it('word longer than twice length should break twice at length', () => {
    assert.equal(wrap('verylongword', 4), 'very\nlong\nword')
  })

  it('two words longer than limit should wrap', () => {
    assert.equal(wrap('word word', 6), 'word\nword');
    assert.equal(wrap('wrap here', 6), 'wrap\nhere');
  })

  it('three words each longer than limit should wrap', () => {
    assert.equal(wrap('word word word', 6), 'word\nword\nword');
  })

  it('three words just over the limit should wrap', () => {
    assert.equal(wrap('word word word', 11), 'word word\nword');
  })

  it('two words the first ending at the limit', () => {
    assert.equal(wrap('word word', 4), 'word\nword');
  })

})
