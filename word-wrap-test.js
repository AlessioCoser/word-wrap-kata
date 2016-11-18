var assert = require('assert')

function wrap(text, length) {
  return ''
}


describe('Word Wrap', () => {
  it('wrap null returns empty string', () => {
    assert.equal(wrap(null, 10), "")
  })
})
