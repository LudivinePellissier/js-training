'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */

 const keepFirst = (string) => {
     return string.slice(0, 2)
 }

 const keepLast = (string) => {
    return string.slice(string.length -2, string.length)
}

const keepFirstLast = (string) => {
    return string.slice(2, 4)
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(keepFirstLast.length, 1)
assert.deepStrictEqual(keepFirst('wildcode'), 'wi')
assert.deepStrictEqual(keepLast('wildcode'), 'de')
assert.deepStrictEqual(keepFirstLast('wildcode'), 'ld')
// End of tests */
