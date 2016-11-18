var assert = require('assert')

function wrap(text, length) {
  if (text == null) {
    return ''
  }

  return text
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

})
